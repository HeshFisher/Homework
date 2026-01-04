import React from 'react'
import './sell.css'


export default function SellHome() {
  return (
    <main className="sell">
      {/* Hero */}
      <section className="sell-hero">
        <h2>Sell Your Home With Confidence</h2>
        <p>
          Get expert pricing, professional marketing, and a smooth selling
          experience from start to finish.
        </p>
      </section>

      {/* Steps */}
      <section className="sell-steps">
        <div className="step">
          <h3>Free Home Evaluation</h3>
          <p>
            We analyze market data and comparable homes to price your property
            accurately from day one.
          </p>
        </div>

        <div className="step">

          <h3>Professional Marketing</h3>
          <p>
            High-quality photos, online exposure, and targeted advertising to
            attract serious buyers.
          </p>
        </div>

        <div className="step">

          <h3>Close With Confidence</h3>
          <p>
            We handle negotiations, inspections, and paperwork so you can sell
            smoothly and stress-free.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sell-cta">
        <h3>Ready to Get Started?</h3>
        <p>Find out what your home is worth in today’s market.</p>
        <button>Request a Free Evaluation</button>
      </section>
    </main>
  )
}
