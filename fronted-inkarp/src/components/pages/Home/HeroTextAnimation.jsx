import React, { useEffect } from 'react';

const SplitTextAnimation = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.split-word span');
    const mid = Math.floor(spans.length / 2);

    spans.forEach((span, index) => {
      const distanceFromCenter = Math.abs(index - mid);
      span.style.animationDelay = `${distanceFromCenter * 0.2}s`;
    });
  }, []);

  const text = 'Best Solutions For Laboratory';
  const words = text.split(' ');

  return (
    <div style={styles.container}>
      <h1 className="split-word" style={styles.text}>
        {words.map((word, i) => (
          <span key={i} style={styles.word}>
            {word}
          </span>
        ))}
      </h1>

      <style>{`
        @keyframes splitOut {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          100% {
            opacity: 1;
            transform: translateX(var(--move-x));
          }
        }
        .split-word span {
          --move-x: 0;
          opacity: 0;
          display: inline-block;
          animation: splitOut 0.6s ease-out forwards;
        }
        .split-word span:nth-child(1) { --move-x: -80px; }
        .split-word span:nth-child(2) { --move-x: -40px; }
        .split-word span:nth-child(3) { --move-x: 40px; }
        .split-word span:nth-child(4) { --move-x: 80px; }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: '#111',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  text: {
    fontSize: '3rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  word: {
    margin: '0 12px',
  },
};

export default SplitTextAnimation;
