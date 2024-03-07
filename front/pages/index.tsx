import React from 'react';

const Home = () => {
  return (
    <div
        style={{
            // Center align the content
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        }}
    >
      <header>
        <img src="/calwc-logo.png" alt="CALWC Logo" />
        <h1>Canadian Army Land Warfare Centre</h1>
        <p>Experimentation Services Centre</p>
      </header>

      <section>
        <h2>ESC</h2>
        <p>Explore our services and find support for your experimental projects within the Canadian Army.</p>
      </section>

      <section>
        <h2>Support</h2>
        <p>If you need help or have any questions, check out our FAQ or request support through the form.</p>
        <button>Request Support</button>
      </section>

      <section>
        <h2>FAQ</h2>
        {/* Dynamic FAQ content should be here */}
      </section>

      <section>
        <h2>Discover, Test, Demonstrate, Explore</h2>
        <p>We provide tools and services for the Canadian Armed Forces to discover and implement new strategies.</p>
      </section>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
};

export default Home;
