import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Williamson",
    role: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!",
  },
  {
    name: "Kristina",
    role: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!",
  },
  {
    name: "Steve Thomas",
    role: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!",
  },
  {
    name: "Amanda Lee",
    role: "Project Manager",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    name: "John Doe",
    role: "Marketing Head",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    name: "Sarah Paul",
    role: "UX Designer",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    name: "Michael Scott",
    role: "Sales Manager",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    name: "Dwight Schrute",
    role: "Assistant to the Regional Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci. Integer varius nibh eu mattis porta.",
  },
  {
    name: "Jim Halpert",
    role: "Account Executive",
    description:
      "Mauris vel magna at dui ultrices tincidunt. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  {
    name: "Pam Beesly",
    role: "Receptionist",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    name: "Stanley Hudson",
    role: "Salesman",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
  },
  {
    name: "Kevin Malone",
    role: "Accountant",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.",
  },
];

const Comments = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <div className="testimonial-container" style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        What people say about us
      </h2>
      <style>{`
        .testimonial-slider {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          transition: all 0.5s ease-in-out;
        }
        .testimonial {
          border: 10px solid #662a66;
          padding: 40px 0 25px;
          margin: 30px;
          text-align: center;
          position: relative;
          max-width: 400px;
          background: #fff;
        }
        .testimonial::before {
          content: "\f10d";
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
      `}</style>
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
    </div>
  );
};

export default Comments;