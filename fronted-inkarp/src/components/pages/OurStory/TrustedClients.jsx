import React from 'react';

const logos = [
  { src: 'inkarp old.svg', alt: 'Facebook' },
  { src: 'inkarp old.svg', alt: 'Tesla' },
  { src: 'https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg', alt: 'Coca-Cola' },
  { src: 'https://cdn.worldvectorlogo.com/logos/porsche-2.svg', alt: 'Porsche' },
  { src: 'https://cdn.worldvectorlogo.com/logos/nike-6.svg', alt: 'Nike' },
  { src: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg', alt: 'Burger King' },
  { src: 'https://cdn.worldvectorlogo.com/logos/ford-8.svg', alt: 'Ford' },
  { src: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg', alt: 'McDonald’s' },
  { src: 'https://cdn.worldvectorlogo.com/logos/puma-logo.svg', alt: 'Puma' },
  { src: 'https://cdn.worldvectorlogo.com/logos/skoda-6.svg', alt: 'Skoda' },
  { src: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-wink.svg', alt: 'Mailchimp' },
  { src: 'https://cdn.worldvectorlogo.com/logos/starbucks-coffee.svg', alt: 'Starbucks' },
];

function TrustedClients() {
  return (
    <section className="mx-auto px-4 sm:px-8  max-w-screen-xl">
      <h2 className="text-3xl font-semibold text-center mb-16 uppercase text-gray-800">Trusted by Global Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-neutral-100 p-6 flex justify-center items-center rounded-lg grayscale hover:grayscale-0 transition duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              className="w-4/5 h-auto object-contain aspect-square"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedClients;
