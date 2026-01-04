import React from 'react'
import './home.css'
import { NavLink } from 'react-router'


export default function Home() {
  return (
      <main className="home">
      {/* Hero */}
      <section className="hero">
        <h2>Find Your Perfect Home</h2>
        <p>
          Buy, sell, or invest with confidence. We help you make the right move
          in today’s real estate market.
        </p>
        <div className="hero-actions">
         <NavLink to={'/buyHome'}> <button className="primary">Buy a Home</button></NavLink>
          <NavLink to={'/sellHome'}> <button className="secondary">Sell Your Home</button></NavLink>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="card">
          <h3>Buy with Confidence</h3>
          <p>
            Access the latest listings, expert advice, and transparent pricing
            every step of the way.
          </p>
        </div>

        <div className="card">
          <h3>Sell for Top Value</h3>
          <p>
            Professional marketing, accurate pricing, and experienced agents
            working for you.
          </p>
        </div>

        <div className="card">
          <h3>Local Experts</h3>
          <p>
            Our agents know the neighborhoods, trends, and opportunities that
            matter most.
          </p>
        </div>
      </section>
    </main>
  )
}
