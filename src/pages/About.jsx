import './About.css'

export default function About() {
  return (
    <div className="about">
      <h1>About MarketWave</h1>
      <p>
        MarketWave is your one-stop destination for the latest technology.
        We offer a wide range of products including computers, laptops, iPads,
        tablets, and more — all at competitive prices.
      </p>
      <h2>What We Offer</h2>
      <div className="about__products">
        <div className="about__product">
          <img src="/images/desktop.svg" alt="Desktops" />
          <span>Desktops & PCs</span>
        </div>
        <div className="about__product">
          <img src="/images/laptop.svg" alt="Laptops" />
          <span>Laptops</span>
        </div>
        <div className="about__product">
          <img src="/images/tablet.svg" alt="Tablets" />
          <span>iPads & Tablets</span>
        </div>
        <div className="about__product">
          <img src="/images/accessories.svg" alt="Accessories" />
          <span>Accessories</span>
        </div>
      </div>
      <p>
        Our mission is to make technology accessible to everyone.
        Whether you're a student, professional, or tech enthusiast,
        we have the right device for you.
      </p>
    </div>
  )
}
