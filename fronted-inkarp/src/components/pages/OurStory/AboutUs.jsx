import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="grid-container">
        <div speech-bubble="true" pbottom="true" aright="true" style={{ "--bbColor": "#af2d58" }}>
          <div className="title">Bottom Right</div>
          <code>[pbottom]</code><code>[aright]</code>
        </div>

        <div speech-bubble="true" pbottom="true" acenter="true" style={{ "--bbColor": "#a9528d" }}>
          <div className="title">Bottom Center</div>
          <code>[pbottom]</code><code>[acenter]</code>
        </div>

        <div speech-bubble="true" pbottom="true" aleft="true" style={{ "--bbColor": "#744b9f" }}>
          <div className="title">Bottom Left</div>
          <code>[pbottom]</code><code>[aleft]</code>
        </div>

        <div speech-bubble="true" pleft="true" abottom="true" style={{ "--bbColor": "#484a9b" }}>
          <div className="title">Left Bottom</div>
          <code>[pleft]</code><code>[abottom]</code>
        </div>

        <div speech-bubble="true" pleft="true" acenter="true" style={{ "--bbColor": "#086899" }}>
          <div className="title">Left Center</div>
          <code>[pleft]</code><code>[acenter]</code>
        </div>

        <div speech-bubble="true" pleft="true" atop="true" style={{ "--bbColor": "#45c5e0" }}>
          <div className="title">Left Top</div>
          <code>[pleft]</code><code>[atop]</code>
        </div>

        <div speech-bubble="true" ptop="true" aleft="true" flip="true" style={{ "--bbColor": "#51bfae" }}>
          <div className="title">Top Left</div>
          <code>[ptop]</code><code>[aleft]</code><code>[flip]</code>
        </div>

        <div speech-bubble="true" ptop="true" acenter="true" style={{ "--bbColor": "#63c08c" }}>
          <div className="title">Top Center</div>
          <code>[ptop]</code><code>[acenter]</code>
        </div>

        <div speech-bubble="true" ptop="true" aright="true" flip="true" style={{ "--bbColor": "#c5d863" }}>
          <div className="title">Top Right</div>
          <code>[ptop]</code><code>[aright]</code><code>[flip]</code>
        </div>

        <div speech-bubble="true" pright="true" atop="true" style={{ "--bbColor": "#fdbb3c" }}>
          <div className="title">Right Top</div>
          <code>[pright]</code><code>[atop]</code>
        </div>

        <div speech-bubble="true" pright="true" acenter="true" style={{ "--bbColor": "#f5882f" }}>
          <div className="title">Right Center</div>
          <code>[pright]</code><code>[acenter]</code>
        </div>

        <div speech-bubble="true" pright="true" abottom="true" style={{ "--bbColor": "#f05142" }}>
          <div className="title">Right Bottom</div>
          <code>[pright]</code><code>[abottom]</code>
        </div>

        <div className="middle">
          <h1>Speech<br />Bubbles</h1>
          <code>&lt;div speech-bubble&gt;</code>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
       

        .grid-container {
          max-width: 60rem;
          margin: auto;
          font-family: sans-serif;
          display: grid;
          grid-template-areas:
            'br bc bl'
            'rb cc lb'
            'rc cc lc'
            'rt cc lt'
            'tr tc tl';
          padding: 2rem;
          gap: 2rem;
          background: #141518;
        }

        [speech-bubble], [speech-bubble] * {
          box-sizing: border-box;
        }

        [speech-bubble] {
          --bbColor: grey;
          --bbArrowSize: 1.5rem;
          --bbBorderRadius: 0.25rem;
          --bbPadding: 1rem;
          background: var(--bbColor);
          border-radius: var(--bbBorderRadius);
          padding: var(--bbPadding);
          position: relative;
          color: white;
          filter: drop-shadow(0px 0px 0.2rem black);
          transition: transform 0.25s ease;
        }

        [speech-bubble]:hover {
          transform: scale(1.05);
          filter: drop-shadow(0px 0px 0.2rem black) drop-shadow(0px 0px 1rem var(--bbColor));
        }

        [speech-bubble]::before {
          content: '';
          position: absolute;
          background: var(--bbColor);
        }

        [speech-bubble] .title {
          font-weight: 600;
          text-shadow: 1px 1px 2px black;
          margin-bottom: 0.5rem;
        }

        [speech-bubble] code {
          background: white;
          margin: 0.125rem;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          white-space: nowrap;
          font-size: 0.9rem;
          padding: 0.1rem 0.4rem;
          color: black;
        }

        .middle {
          grid-area: cc;
          align-self: center;
          justify-self: center;
          text-align: center;
          color: white;
        }

        .middle code {
          font-size: 1rem;
        }

        [speech-bubble][pbottom] { margin-bottom: var(--bbArrowSize); }
        [speech-bubble][ptop]    { margin-top: var(--bbArrowSize); }
        [speech-bubble][pleft]   { margin-left: var(--bbArrowSize); }
        [speech-bubble][pright]  { margin-right: var(--bbArrowSize); }

        [speech-bubble][pbottom]::before,
        [speech-bubble][ptop]::before {
          --width: calc(var(--bbArrowSize) / 2 * 3);
          height: var(--bbArrowSize);
          width: var(--width);
        }

        [speech-bubble][pbottom]::before { top: calc(100% - 2px); }
        [speech-bubble][ptop]::before    { bottom: calc(100% - 2px); }

        [speech-bubble][pbottom][aleft]::before   {
          left: 1rem;
          clip-path: polygon(25% 0, 100% 0, 0% 100%);
        }
        [speech-bubble][pbottom][acenter]::before {
          left: calc(50% - var(--width) / 2);
          clip-path: polygon(12.5% 0, 87.5% 0, 50% 100%);
        }
        [speech-bubble][pbottom][aright]::before  {
          right: 1rem;
          clip-path: polygon(0 0, 75% 0, 100% 100%);
        }

        [speech-bubble][ptop][aleft]::before {
          left: var(--bbPadding);
          clip-path: polygon(0 0, 100% 100%, 25% 100%);
        }
        [speech-bubble][ptop][acenter]::before {
          left: calc(50% - var(--width) / 2);
          clip-path: polygon(12.5% 100%, 50% 0, 87.5% 100%);
        }
        [speech-bubble][ptop][aright]::before {
          right: var(--bbPadding);
          clip-path: polygon(0 100%, 100% 0, 75% 100%);
        }

        [speech-bubble][pleft]::before,
        [speech-bubble][pright]::before {
          --height: calc(var(--bbArrowSize) / 2 * 3);
          width: var(--bbArrowSize);
          height: var(--height);
        }

        [speech-bubble][pleft]::before  { right: calc(100% - 2px); }
        [speech-bubble][pright]::before { left: calc(100% - 2px); }

        [speech-bubble][pleft][atop]::before {
          top: var(--bbPadding);
          clip-path: polygon(0 0, 100% 25%, 100% 100%);
        }
        [speech-bubble][pleft][acenter]::before {
          top: calc(50% - var(--height) / 2);
          clip-path: polygon(0 50%, 100% 12.5%, 100% 87.5%);
        }
        [speech-bubble][pleft][abottom]::before {
          bottom: var(--bbPadding);
          clip-path: polygon(0 100%, 100% 0, 100% 75%);
        }

        [speech-bubble][pright][atop]::before {
          top: var(--bbPadding);
          clip-path: polygon(100% 0, 0 100%, 0 25%);
        }
        [speech-bubble][pright][acenter]::before {
          top: calc(50% - var(--height) / 2);
          clip-path: polygon(0 12.5%, 100% 50%, 0 87.5%);
        }
        [speech-bubble][pright][abottom]::before {
          bottom: var(--bbPadding);
          clip-path: polygon(0 0, 100% 100%, 0 75%);
        }

        [speech-bubble][ptop][flip]::before,
        [speech-bubble][pbottom][flip]::before {
          transform: scaleX(-1);
        }

        [speech-bubble][pleft][flip]::before,
        [speech-bubble][pright][flip]::before {
          transform: scaleY(-1);
        }

        /* Grid Area Assignments */
        [speech-bubble][pbottom][aleft]   { grid-area: bl; }
        [speech-bubble][pbottom][acenter] { grid-area: bc; }
        [speech-bubble][pbottom][aright]  { grid-area: br; }

        [speech-bubble][pright][atop]     { grid-area: rt; }
        [speech-bubble][pright][acenter]  { grid-area: rc; }
        [speech-bubble][pright][abottom]  { grid-area: rb; }

        [speech-bubble][pleft][atop]      { grid-area: lt; }
        [speech-bubble][pleft][acenter]   { grid-area: lc; }
        [speech-bubble][pleft][abottom]   { grid-area: lb; }

        [speech-bubble][ptop][aleft]      { grid-area: tl; }
        [speech-bubble][ptop][acenter]    { grid-area: tc; }
        [speech-bubble][ptop][aright]     { grid-area: tr; }
      `}</style>
    </>
  );
}
