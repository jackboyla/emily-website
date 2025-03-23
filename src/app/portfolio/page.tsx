export default function PortfolioPage() {
  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Title */}
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Music Portfolio</h1>
      
      {/* Info Bar */}
      <div
        style={{
          backgroundColor: '#fffae6',      // A light yellow background
          border: '1px solid #ffe58f',     // Slightly darker border
          padding: '1rem',
          borderRadius: '4px',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <strong>Hello!👋</strong> Press play on any of the tracks below to hear some of my work.
        After pressing play, the audio may take a few seconds to load! 🤗
        <br />
        <br />
        Thanks for listening!
      </div>

      {/* Haydn String Quartet Mix Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Haydn String Quartet Mix</h2>
        <p style={{ marginBottom: '1rem' }}>
          A fusion of classical elegance and modern production. Enjoy the rich textures 
          and intricate harmonies of this mix.
        </p>

        {/* Google Drive Iframe for Haydn String Quartet Mix */}
        <iframe
          src="https://drive.google.com/file/d/1cyWEX9YmodVSkWMGugQIzfP0LqhBYvBF/preview"
          width="100%"
          height="80"
          allow="autoplay"
          style={{ border: 'none', marginBottom: '1rem' }}
        ></iframe>

        {/* Image Gallery for Haydn String Quartet Mix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2987.jpg"
            alt="Haydn String Quartet Mix Image 1"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2988.jpg"
            alt="Haydn String Quartet Mix Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2998.jpg"
            alt="Haydn String Quartet Mix Image 3"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_3004.jpg"
            alt="Haydn String Quartet Mix Image 4"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      
      {/* Boylan Emily Masters Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Boylan Emily Masters</h2>
        <p style={{ marginBottom: '1rem' }}>
          Dive into a series of master tracks that showcase a range of moods and sonic textures. 
          Each track has been meticulously mixed to highlight every nuance.
        </p>
        
        {/* Track 01: Warning Bells Master */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>01 - Warning Bells Master</h3>
          <iframe
            src="https://drive.google.com/file/d/18yPHdRotFyrvl6xSMrAQtfglfjnogxsY/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        
        {/* Track 02: Big Mouth Master */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>02 - Big Mouth Master</h3>
          <iframe
            src="https://drive.google.com/file/d/1MSM7nkyRolCazKkUgX7qoDelyvWKCGeo/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        
        {/* Track 03: Bittersweet Master */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>03 - Bittersweet Master</h3>
          <iframe
            src="https://drive.google.com/file/d/10A3dolnr6-5xlqJD8afhRQ5WiJc5tu4H/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        
        {/* Track 04: Like Edwyn Says Master */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>04 - Like Edwyn Says Master</h3>
          <iframe
            src="https://drive.google.com/file/d/1LEriZ0NGJo2ZhoB7eqblboTbMrS_FZHO/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
      </div>

      <div>
        <h2 style={{ marginBottom: '1rem' }}>Scoring</h2>
        <p style={{ marginBottom: '1rem' }}>
          Explore my other creative works including video projects and compositions.
        </p>

        {/* Blair_Witch_Project_Composition - a WAV audio file */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Blair Witch Project Composition</h3>
          <iframe
            src="https://drive.google.com/file/d/1F9TTjF_ZUYSUINF8RlGS-A5R3rY_RsXx/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        
        {/* SD_2_Boylan_Emily_QT - a MOV video */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>SD 2 - Boylan Emily QT</h3>
          <iframe
            src="https://drive.google.com/file/d/1Oecja6nnP5bnvTCQsAx-1XC_qNRipLV5/preview"
            width="100%"
            height="480"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        
        {/* MI_2_Boylan_Emily_Movie - a MOV video */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>MI 2 - Boylan Emily Movie</h3>
          <iframe
            src="https://drive.google.com/file/d/1AYq7xjBJFuh_7qPtrAC_9KknSovl-MsD/preview"
            width="100%"
            height="480"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>

      </div>
    </section>
  );
}
