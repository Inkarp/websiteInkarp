import React from "react";

export default function Timeline() {
  const timeline = [
    { year: "2002", title: "Title 1", descr: "Lorem ipsum dolor sit amet.", color: "#41516C" },
    { year: "2007", title: "Title 2", descr: "Lorem ipsum dolor sit amet.", color: "#FBCA3E" },
    { year: "2012", title: "Title 3", descr: "Lorem ipsum dolor sit amet.", color: "#E24A68" },
    { year: "2017", title: "Title 4", descr: "Lorem ipsum dolor sit amet.", color: "#1B5F8C" },
    { year: "2022", title: "Title 5", descr: "Lorem ipsum dolor sit amet.", color: "#4CADAD" },
  ];

  return (
    <div className="timeline-wrapper">
      <h1>UL Timeline Cards</h1>
      <ul>
        {timeline.map((item, index) => (
          <li key={index} style={{ "--accent-color": item.color }}>
            <div className="date">{item.year}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.descr}</div>
          </li>
        ))}
      </ul>
      <div className="credits">
        <a href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm" target="_blank" rel="noreferrer">
          inspired by
        </a>
      </div>

      <style>{`
        .timeline-wrapper {
          --color: #1e1e1e;
          --bgColor: #f5f5f5;
          padding: 2rem;
          font-family: 'Poppins', sans-serif;
          color: var(--color);
          background: var(--bgColor);
        }

        .timeline-wrapper h1 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .timeline-wrapper ul {
          --col-gap: 2rem;
          --row-gap: 2rem;
          --line-w: 0.25rem;
          display: grid;
          grid-template-columns: var(--line-w) 1fr;
          column-gap: var(--col-gap);
          list-style: none;
          width: min(60rem, 90%);
          margin-inline: auto;
          position: relative;
        }

        .timeline-wrapper ul::before {
          content: "";
          grid-column: 1;
          grid-row: 1 / span 20;
          background: #e1e1e1;
          border-radius: calc(var(--line-w) / 2);
        }

        .timeline-wrapper ul li:not(:last-child) {
          margin-bottom: var(--row-gap);
        }

        .timeline-wrapper ul li {
          grid-column: 2;
          --inlineP: 1.5rem;
          margin-inline: var(--inlineP);
          grid-row: span 2;
          display: grid;
          grid-template-rows: min-content min-content min-content;
        }

        .timeline-wrapper .date {
          --dateH: 3rem;
          height: var(--dateH);
          margin-inline: calc(var(--inlineP) * -1);
          text-align: center;
          background-color: var(--accent-color);
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          display: grid;
          place-content: center;
          position: relative;
          border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
        }

        .timeline-wrapper .date::before {
          content: "";
          width: var(--inlineP);
          aspect-ratio: 1;
          background: var(--accent-color);
          background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
          position: absolute;
          top: 100%;
          clip-path: polygon(0 0, 100% 0, 0 100%);
          right: 0;
        }

        .timeline-wrapper .date::after {
          content: "";
          position: absolute;
          width: 2rem;
          aspect-ratio: 1;
          background: var(--bgColor);
          border: 0.3rem solid var(--accent-color);
          border-radius: 50%;
          top: 50%;
          transform: translate(50%, -50%);
          right: calc(100% + var(--col-gap) + var(--line-w) / 2);
        }

        .timeline-wrapper .title,
        .timeline-wrapper .descr {
          background: var(--bgColor);
          position: relative;
          padding-inline: 1.5rem;
        }

        .timeline-wrapper .title {
          overflow: hidden;
          padding-block-start: 1.5rem;
          padding-block-end: 1rem;
          font-weight: 500;
        }

        .timeline-wrapper .descr {
          padding-block-end: 1.5rem;
          font-weight: 300;
        }

        .timeline-wrapper .title::before,
        .timeline-wrapper .descr::before {
          content: "";
          position: absolute;
          width: 90%;
          height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          left: 50%;
          border-radius: 50%;
          filter: blur(4px);
          transform: translate(-50%, 50%);
        }

        .timeline-wrapper .title::before {
          bottom: calc(100% + 0.125rem);
        }

        .timeline-wrapper .descr::before {
          z-index: -1;
          bottom: 0.25rem;
        }

        .timeline-wrapper .credits {
          margin-top: 1rem;
          text-align: right;
          font-size: 0.9rem;
        }

        .timeline-wrapper .credits a {
          color: var(--color);
        }

        @media (min-width: 40rem) {
          .timeline-wrapper ul {
            grid-template-columns: 1fr var(--line-w) 1fr;
          }

          .timeline-wrapper ul::before {
            grid-column: 2;
          }

          .timeline-wrapper ul li:nth-child(odd) {
            grid-column: 1;
          }

          .timeline-wrapper ul li:nth-child(even) {
            grid-column: 3;
          }

          .timeline-wrapper ul li:nth-child(2) {
            grid-row: 2/4;
          }

          .timeline-wrapper ul li:nth-child(odd) .date::before {
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            left: 0;
          }

          .timeline-wrapper ul li:nth-child(odd) .date::after {
            transform: translate(-50%, -50%);
            left: calc(100% + var(--col-gap) + var(--line-w) / 2);
          }

          .timeline-wrapper ul li:nth-child(odd) .date {
            border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
          }
        }
      `}</style>
    </div>
  );
}
