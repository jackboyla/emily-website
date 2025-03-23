export default function ResearchPage() {
    return (
      <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {/* Page Title */}
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Research</h1>
  
        {/* Research Paper Introduction */}
        <article style={{ marginBottom: '2rem' }}>
          <h2>Nick Drake's "Pink Moon" - Research Paper</h2>
          <p>
            This paper examines the cultural context, musical characteristics, and production techniques behind Nick Drake’s
            influential album “Pink Moon.” The research explores topics ranging from folk influences and Baroque elements to unique
            guitar techniques and vocal delivery. The paper was submitted in April 2023 at Pulse College, Dublin.
          </p>
          <p>
            <strong>Institution:</strong> Pulse College, Dublin
          </p>
        </article>
  
        {/* Download Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a
            href="/research/Nick_Drake_Pink_Moon_Paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.8rem 1.2rem',
              backgroundColor: '#333',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Download PDF
          </a>
        </div>
  
        {/* Embedded PDF Viewer */}
        <div style={{ border: '1px solid #ddd', height: '800px' }}>
          <iframe
            src="/research/Nick_Drake_Pink_Moon_Paper.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Nick Drake's Pink Moon Research Paper"
          ></iframe>
        </div>
      </section>
    );
  }
  