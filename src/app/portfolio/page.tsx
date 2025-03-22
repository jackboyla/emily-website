// src/app/portfolio/page.tsx
export default function PortfolioPage() {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>My Music</h1>
  
        {/* Track #1 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>"Future Dreams"</h3>
          <p>An electronic-inspired piece with lush synths and layered percussion.</p>
          <audio controls style={{ marginTop: '0.5rem' }}>
            <source src="/audio/future-dreams.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
  
        {/* Track #2 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>"Urban Flow"</h3>
          <p>Hip-hop meets chill jazz, perfect for studying or relaxing.</p>
          <audio controls style={{ marginTop: '0.5rem' }}>
            <source src="/audio/urban-flow.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
  
        <h2 style={{ marginTop: '2rem' }}>Video Portfolio</h2>
        <div style={{ marginTop: '1rem' }}>
          <h3>Behind the Scenes: Recording Strings</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    )
  }
  