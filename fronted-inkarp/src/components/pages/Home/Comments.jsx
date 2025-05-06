import React, { useState } from "react";

const testimonials = [
  { name: "Williamson", role: "Web Developer", description: "Lorem ipsum dolor sit amet..." },
  { name: "Kristina", role: "Web Designer", description: "Lorem ipsum dolor sit amet..." },
  { name: "Steve Thomas", role: "Web Developer", description: "Lorem ipsum dolor sit amet..." },
  { name: "Amanda Lee", role: "Project Manager", description: "Sed ut perspiciatis unde omnis..." },
  { name: "John Doe", role: "Marketing Head", description: "Ut enim ad minima veniam..." },
  { name: "Sarah Paul", role: "UX Designer", description: "Neque porro quisquam est..." },
  { name: "Michael Scott", role: "Sales Manager", description: "Quis autem vel eum iure..." },
  { name: "Dwight Schrute", role: "Assistant to the Regional Manager", description: "Lorem ipsum dolor sit amet..." },
  { name: "Jim Halpert", role: "Account Executive", description: "Mauris vel magna at dui..." },
  { name: "Pam Beesly", role: "Receptionist", description: "Nulla vitae elit libero..." },
  { name: "Stanley Hudson", role: "Salesman", description: "Aenean lacinia bibendum..." },
  { name: "Kevin Malone", role: "Accountant", description: "Cras justo odio, dapibus ac..." },
];

const Comments = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsToShow) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - itemsToShow + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">What people say about us</h2>

      <div className="testimonial-carousel">
        <div className="blur-left" />
        <div className="blur-right" />

        <button className="nav-button left" onClick={handlePrev}>
          ‹
        </button>
        <div className="testimonial-slider">
          {visibleTestimonials.map((t, index) => (
            <div className="testimonial" key={index}>
              <h3 className="title">
                {t.name}
                <span className="post"> - {t.role}</span>
              </h3>
              <p className="description">{t.description}</p>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext}>
          ›
        </button>
      </div>

      <style>{`
        .testimonial-wrapper {
          position: relative;
          padding: 2rem;
          background: #f9f9f9;
          overflow: hidden;
        }
        .testimonial-heading {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        .testimonial-carousel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          margin: auto;
        }
        .testimonial-slider {
          display: flex;
          gap: 30px;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          z-index: 10;
        }
        .testimonial {
          flex: 0 0 300px;
          border: 10px solid #662a66;
          padding: 40px 0 25px;
          text-align: center;
          background: #fff;
          position: relative;
        }
        .testimonial::before {
          content: "\\f10d";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          width: 100px;
          height: 100px;
          line-height: 100px;
          background: #fff;
          margin: 0 auto;
          font-size: 70px;
          color: #f1971f;
          position: absolute;
          top: -60px;
          left: 0;
          right: 0;
        }
        .title {
          padding: 7px 0;
          margin: 0 -30px 20px;
          border: 7px solid #fff;
          background: #e8326f;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
        }
        .title::before {
          content: "";
          border-top: 15px solid #662a66;
          border-left: 15px solid transparent;
          border-bottom: 15px solid transparent;
          position: absolute;
          bottom: -37px;
          left: 0;
        }
        .title::after {
          content: "";
          border-top: 15px solid #662a66;
          border-right: 15px solid transparent;
          border-bottom: 15px solid transparent;
          position: absolute;
          bottom: -37px;
          right: 0;
        }
        .post {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-transform: capitalize;
        }
        .description {
          padding: 0 20px;
          margin: 0;
          font-size: 15px;
          color: #6f6f6f;
          letter-spacing: 1px;
          line-height: 30px;
        }
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #e8326f;
          color: white;
          font-size: 2rem;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          z-index: 20;
        }
        .nav-button.left {
          left: 0;
        }
        .nav-button.right {
          right: 0;
        }

        .blur-left,
        .blur-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 60px;
          z-index: 15;
          pointer-events: none;
        }

        .blur-left {
          left: 0;
          background: linear-gradient(to right, #f9f9f9 0%, transparent 100%);
        }
        .blur-right {
          right: 0;
          background: linear-gradient(to left, #f9f9f9 0%, transparent 100%);
        }

        @media (max-width: 1000px) {
          .testimonial {
            flex: 0 0 90%;
          }
          .testimonial-slider {
            flex-direction: column;
            align-items: center;
          }
          .nav-button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Comments;
