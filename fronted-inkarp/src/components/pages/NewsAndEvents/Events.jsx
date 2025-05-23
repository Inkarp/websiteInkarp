import React, { useState } from 'react';
import styled from 'styled-components';
import EventButton from '../UI/EventButton';


const cardData = [
    {
        id: 1,
        title: "Pharmaceutical & Lab ",
        date: "2025-05-08",
        location: "Verna, Goa",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
    {
        id: 2,
        title: "Green Chemistry Expo",
        date: "2025-05-15",
        location: "Nehru Centre, Mumbai",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
    {
        id: 3,
        title: "Nanotech Conference",
        date: "2025-05-20",
        location: "IIT Delhi",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
    {
        id: 4,
        title: "Biotech Summit",
        date: "2025-04-25",
        location: "Bangalore",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
    {
        id: 5,
        title: "Lab Automation Show",
        date: "2025-03-28",
        location: "Chennai",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
    {
        id: 6,
        title: "R&D Strategy Session",
        date: "2025-05-30",
        location: "Hyderabad",
        image: "https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg",
    },
];

const Events = () => {
    const today = new Date();
    const [filterMonth, setFilterMonth] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [upcomingOnly, setUpcomingOnly] = useState(false);

    const filteredCards = cardData.filter((card) => {
        const eventDate = new Date(card.date);
        const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
        const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
        const isUpcoming = upcomingOnly ? eventDate >= today : true;
        return matchesMonth && matchesYear && isUpcoming;
    });

    return (
        <StyledWrapper>
            <div className="filters">
                <select onChange={(e) => setFilterMonth(e.target.value)} value={filterMonth}>
                    <option value="">All Months</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option value={i + 1} key={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                </select>
                <select onChange={(e) => setFilterYear(e.target.value)} value={filterYear}>
                    <option value="">All Years</option>
                    {[2025, 2026].map((year) => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
                <label>
                    <input
                        type="checkbox"
                        checked={upcomingOnly}
                        onChange={() => setUpcomingOnly(!upcomingOnly)}
                    />
                    Upcoming Only
                </label>
            </div>

            <div className="grid">
                {filteredCards.length === 0 ? (
                    <p className="no-events">No events match your filters.</p>
                ) : (
                    filteredCards.map((card) => (
                        <div className="card" key={card.id}>
                            <div className="card-info">
                                <img src={card.image} alt={card.title} className="card-image" />
                                <div className="text-content">
                                    <p className="title">{card.title}</p>
                                    <p className="date">Date: {new Date(card.date).toDateString()}</p>
                                    <p className="location">Location: {card.location}</p>
                                </div>
                                <EventButton />
                                {/* <button className='w-30 h-5 bg-red-100 p-5 rounded-xl text-black 
                                text-bold hover:bg-red-300 flex items-center justify-center'>Join Us</button> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  padding: 40px;

  .filters {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    align-items: center;

    select, label {
      font-size: 14px;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }

  .no-events {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 16px;
    color: #666;
  }

  .card {
    --background: linear-gradient(to right,rgb(137, 15, 52) 0%,rgb(182, 229, 172) 100%);
    width: 380px;
    height: 600px;
    padding: 10px;
    border-radius: 1rem;
    background: var(--background);
    position: relative;
    z-index: 1;
    overflow: visible;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card::before,
  .card::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-radius: 1rem;
    z-index: -1;
    transition: opacity 0.5s ease;
  }

  .card::before {
    background: linear-gradient(to bottom right,rgb(225, 210, 203), #f8fafc);
    transform: rotate(2deg);
  }

  .card::after {
    background: linear-gradient(to top right,rgb(250, 209, 210),rgb(185, 195, 201));
    transform: rotate(-2deg);
  }

  .card:hover::before,
  .card:hover::after {
    opacity: 0;
  }

  .card-info {
    background: #1e293b;
    color: #fff;
    border-radius: 0.7rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .card:hover .card-info {
    color:rgb(248, 56, 101); /* Tailwind sky-400 */
  }

  .card-image {
    width: 100%;
    aspect-ratio: 4 / 4;
    object-fit: contain;
  }

  .text-content {
    padding: 15px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  .date,
  .location {
    font-size: 14px;
    margin: 3px 0;
  }
`;

export default Events;
