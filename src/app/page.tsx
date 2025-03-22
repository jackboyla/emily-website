// src/app/page.tsx
'use client' // if you plan on using any client-side interactivity

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'url("/images/hero-bg.jpg") center/cover no-repeat',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Hello, I'm Emily Boylan
          </h1>
          <p style={{ marginBottom: '1.5rem' }}>
            Music Producer &amp; Audio Engineer
          </p>
          <Link href="/portfolio">
            <button
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '0.8rem 1.2rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Check My Work
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section (on the homepage for convenience) */}
      <section
        id="contact"
        style={{
          padding: '2rem',
          backgroundColor: '#fafafa',
          textAlign: 'center',
        }}
      >
        <h2>Contact Me</h2>
        <p>Want to collaborate or just say hi? Drop a message!</p>

        <form
          style={{
            display: 'inline-block',
            textAlign: 'left',
            maxWidth: '400px',
            width: '100%',
            marginTop: '1rem',
          }}
          onSubmit={(e) => {
            e.preventDefault()
            alert('Form submitted! (Replace with real handler)')
          }}
        >
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
          />

          <label htmlFor="email" style={{ fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
          />

          <label htmlFor="message" style={{ fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '0.7rem 1.2rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </form>
      </section>
    </>
  )
}
