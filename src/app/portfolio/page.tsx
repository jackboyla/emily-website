export default function PortfolioPage() {
  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Title */}
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Audio Portfolio</h1>
      
      {/* Info Bar */}
      <div
        style={{
          backgroundColor: '#fffae6',
          border: '1px solid #ffe58f',
          padding: '1rem',
          borderRadius: '4px',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <strong>Hello!👋</strong> Press play on any of the pieces below to experience my work.
        After pressing play, the media may take a few seconds to load! 🤗
        <br /><br />
        Thanks for listening/viewing!
      </div>

      {/* 1. Haydn String Quartet Recording */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Haydn String Quartet Recording</h2>
        <p style={{ marginBottom: '1rem' }}>
          For this project, I took on the role of recording, mixing and mastering engineer to produce a professional‑standard recording of Joseph Haydn’s String Quartet in D Major, Op.76 No. 5, I. Allegretto. Working with a string quartet from the Royal Irish Academy of Music, I managed all aspects of production—from coordinating with the musicians to researching, selecting and implementing advanced microphone techniques. This included spot microphones, Blumlein, M/S, ORTF and a stereo spaced pair. I oversaw the session setup, from microphone placement in the live room to configuring the SSL desk and Pro Tools session. During mixing, I refined the selection of microphone pairs, ultimately blending the Blumlein pair, spaced pair and spot microphones to achieve a balanced and natural sound. I later mastered the track for professional digital distribution. This project strengthened my technical skill in classical recording, deepened my appreciation for the intricacies of orchestral music and recording, and reinforced my ambition to gain more experience in orchestral engineering.
        </p>
        {/* String Quartet Media (Audio Preview) */}
        <iframe
          src="https://drive.google.com/file/d/1cyWEX9YmodVSkWMGugQIzfP0LqhBYvBF/preview"
          width="100%"
          height="80"
          allow="autoplay"
          style={{ border: 'none', marginBottom: '1rem' }}
        ></iframe>
        {/* Image Gallery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2987.jpg"
            alt="Haydn String Quartet Recording Image 1"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2988.jpg"
            alt="Haydn String Quartet Recording Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_2998.jpg"
            alt="Haydn String Quartet Recording Image 3"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src="/images/Haydn_String_Quartet_Mix_IMG_3004.jpg"
            alt="Haydn String Quartet Recording Image 4"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      
      {/* 2. “To Build A Fire” (2016) Re-Score */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>“To Build A Fire” (2016) Re-Score</h2>
        <p style={{ marginBottom: '1rem' }}>
          For this project, I composed and produced an original score for the short film To Build A Fire (2016). I developed thematic material to represent the protagonist, his dog and the vast and unforgiving landscape. Taking inspiration from Ryuichi Sakamoto’s score for The Revenant—which was listed in the assignment brief—and True Detective: Night Country which had similar landscapes and soundscapes, I incorporated atmospheric textures using Spitfire Audio’s LABS and BBC Symphony Orchestra sample libraries. The scoring process also involved detailed spotting notes and thematic development throughout the film. Balancing thematic repetition and development between scenes proved challenging, but the experience improved my ability to compose narrative‑driven music for visual media.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1AYq7xjBJFuh_7qPtrAC_9KknSovl-MsD/preview"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: 'none', marginBottom: '1rem' }}
        ></iframe>
      </div>
      
      {/* 3. Mastering */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Mastering</h2>
        <p style={{ marginBottom: '1rem' }}>
          The goal of this project was to master a four‑track EP, producing a cohesive, polished and professional product ready for digital distribution. Using Logic Pro, I applied both subtractive and additive EQ, compression and limiting to enhance clarity, balance dynamics and meet loudness target levels. I maintained consistency throughout the tracks by processing all of them collectively rather than individually. While some difficulties arose such as identifying specific problem frequencies and achieving consistent target loudness levels, the final masters were an improvement to the EP’s overall coherence and sound.
        </p>
        {/* Mastering Tracks */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>“Warning Bells” EP Mastering</h3>
          <iframe
            src="https://drive.google.com/file/d/18yPHdRotFyrvl6xSMrAQtfglfjnogxsY/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>“Big Mouth” Master</h3>
          <iframe
            src="https://drive.google.com/file/d/1MSM7nkyRolCazKkUgX7qoDelyvWKCGeo/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>“Bittersweet” Master</h3>
          <iframe
            src="https://drive.google.com/file/d/10A3dolnr6-5xlqJD8afhRQ5WiJc5tu4H/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>“Like Edwyn Says” Master</h3>
          <iframe
            src="https://drive.google.com/file/d/1LEriZ0NGJo2ZhoB7eqblboTbMrS_FZHO/preview"
            width="100%"
            height="80"
            allow="autoplay"
            style={{ border: 'none', marginBottom: '1rem' }}
          ></iframe>
        </div>
      </div>
      
      {/* 4. “The Blair Witch Project” (1999) Soundscape Composition */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>“The Blair Witch Project” (1999) Soundscape Composition</h2>
        <p style={{ marginBottom: '1rem' }}>
          In this project, I composed an original soundscape inspired by The Blair Witch Project (1999), aiming to create an unsettling atmosphere to immerse the listener. Instead of composing a specific scene from the film, I aimed to evoke the film’s broader sense of claustrophobia and paranoia through experimental sound design. Using Spitfire Audio’s LABS, Arturia’s Analog Lab and various synthesis techniques, I manipulated both traditional and non‑traditional sound sources, including processed foley and spectral synthesis. The composition wasn’t made with traditional music theory in mind and instead was built around dissonant drones, distorted elements and unpredictable rhythmic textures to create a psychologically unsettling effect for the audience. The project challenged my usual compositional approach, relying more on experimentation than predefined structures. While balancing cohesion and unpredictability was difficult, the process overall deepened my understanding of sound layering in cinematic soundscapes.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1F9TTjF_ZUYSUINF8RlGS-A5R3rY_RsXx/preview"
          width="100%"
          height="80"
          allow="autoplay"
          style={{ border: 'none', marginBottom: '1rem' }}
        ></iframe>
      </div>
      
      {/* 5. “The Nightmare Before Christmas” (1993) Scene Full Sound Replacement (Sound Design) */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>“The Nightmare Before Christmas” (1993) Scene Full Sound Replacement</h2>
        <p style={{ marginBottom: '1rem' }}>
          For this project, the aim was to replace all sound in the given scene, except for the score. Original foley recording was the main focus, with most sounds used in the scene recorded using various microphones and Pro Tools. Additional sounds were recorded outside of the studio and others were sourced from Freesound. Mixing involved EQ, automation, reverb and pitch shifting in order to improve realism and depth. While the final product successfully syncs with the visuals of the scene, limited mixing time left room for more creativity and refinement.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1Oecja6nnP5bnvTCQsAx-1XC_qNRipLV5/preview"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: 'none', marginBottom: '1rem' }}
        ></iframe>
      </div>
    </section>
  );
}
