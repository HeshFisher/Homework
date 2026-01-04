import React from 'react'
import './buy.css'

export default function BuyHome() {
  return (
    <main className="buy">
      {/* Hero */}
      <section className="buy-hero">
        <h2>Buy Your Next Home With Confidence</h2>
        <p>
          From first showing to final closing, we guide you every step of the
          way to find the right home at the right price.
        </p>
      </section>

      {/* Benefits */}
      <section className="buy-benefits">
        <div className="benefit">
          <h3>Access to the Best Listings</h3>
          <p>
            Get early access to new listings and off-market opportunities you
            won’t find everywhere else.
          </p>
        </div>

        <div className="benefit">
          <h3>Expert Negotiation</h3>
          <p>
            We negotiate on your behalf to secure the best possible price and
            terms.
          </p>
        </div>

        <div className="benefit">
          <h3>Guidance From Start to Finish</h3>
          <p>
            From tours and inspections to financing and closing, we simplify
            every step of the process.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="buy-cta">
        <h3>Let’s Find Your Perfect Home</h3>
        <p>
          Tell us what you’re looking for, and we’ll help you find it.
        </p>
        <button>Start Your Home Search</button>
      </section>
    </main>
  )
}
