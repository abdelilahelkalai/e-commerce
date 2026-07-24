const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { firstName, email, password } = req.body

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ error: 'Email already in use' })
    }

    const user = await User.create({ firstName, email, password })
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.status(201).json({
      user: { id: user._id, firstName: user.firstName, email: user.email },
      token,
    })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({
      user: { id: user._id, firstName: user.firstName, email: user.email },
      token,
    })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password')
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json({ user })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
