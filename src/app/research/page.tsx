'use client';
import { useState } from 'react';

type ResearchPaperProps = {
  title: string;
  summary: string;
  pdfPath: string;
  institution: string;
  date?: string;
};

function ResearchPaper({ title, summary, pdfPath, institution, date }: ResearchPaperProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      style={{
        marginBottom: '2rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
      }}
    >
      <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
      <p style={{ marginBottom: '0.5rem' }}>{summary}</p>
      <p style={{ marginBottom: '0.5rem' }}>
        <strong>Institution:</strong> {institution}
      </p>
      {date && (
        <p style={{ marginBottom: '1rem' }}>
          <strong>Date:</strong> {date}
        </p>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {expanded ? 'Hide Paper' : 'Show Paper'}
      </button>
      {expanded && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#333',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              Download PDF
            </a>
          </div>
          <div style={{ border: '1px solid #ddd', height: '600px' }}>
            <iframe
              src={pdfPath}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title={title}
            ></iframe>
          </div>
        </div>
      )}
    </article>
  );
}

export default function ResearchPage() {
  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Research</h1>
      <ResearchPaper
        title={`Nick Drake's "Pink Moon" - Research Paper`}
        summary={`This paper examines the cultural context, musical characteristics, and production techniques behind Nick Drake’s influential album “Pink Moon.” The research explores topics ranging from folk influences and Baroque elements to unique guitar techniques and vocal delivery. It was submitted in April 2023 at Pulse College, Dublin.`}
        pdfPath="/research/Nick_Drake_Pink_Moon_Paper.pdf"
        institution="Pulse College, Dublin"
        date="April 2023"
      />
      {/* Add additional ResearchPaper components here if needed */}
    </section>
  );
}
