'use client';
import Link from 'next/link';

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
            Hello, I&apos;m Emily Boylan
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

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '2rem',
          backgroundColor: '#fafafa',
          textAlign: 'center',
        }}
      >
        <h2>Contact Me</h2>
        <p>
          Want to collaborate or just say hi? Connect with me on LinkedIn or Instagram.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <a
            href="https://www.linkedin.com/in/emily-boylan-244272257"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: '1.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#0e76a8',
              fontSize: '1.2rem',
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/emily__boylan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#E4405F',
              fontSize: '1.2rem',
            }}
          >
            Instagram
          </a>
        </div>
      </section>
    </>
  );
}
