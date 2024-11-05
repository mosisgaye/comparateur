import React from 'react';
import Image from 'next/image'; // You can use this for the images/icons if needed

const reviews = [
  {
    name: "Elisabeth",
    date: "il y a 2 jours",
    rating: 5,
    text: "Merci Noemie pour ce mail précis et sympathique qui humanise les liens avec vos clients.",
    icon: "/images/1.png", // example icon path
  },
  {
    name: "Axelle",
    date: "il y a 2 jours",
    rating: 5,
    text: "Expérience toujours super! Que ce soit au niveau des services que de la qualité des échanges..",
    icon: "/images/2.png", // example icon path
  },
  {
    name: "Hugo",
    date: "il y a 2 jours",
    rating: 5,
    text: "Service client très pro et agréable et surtout pas délocalisé ...",
    icon: "/images/3.png", // example icon path
  },
];

const Rating = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0f2433] py-20 px-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-slate-50 mb-4">
          Ce que nos clients disent
        </h2>
        <p className="text-sm md:text-lg text-black dark:text-white max-w-3xl mx-auto">
          Vos <span className="underline text-blue-400">avis clients</span> nous permettent chaque jour de nous améliorer afin qu’en tant que fournisseur d’énergie verte on puisse vous proposer des offres d’énergie renouvelable toujours plus proches de vos attentes et de votre budget.
        </p>
      </div>

      {/* Rating Summary */}
      <div className="flex justify-center items-center text-white mb-8">
        <span className="text-yellow-400 text-2xl mr-2">★ ★ ★ ★ ★</span>
        <span className="text-lg text-black dark:text-white">4.9 évaluation de 3491 avis</span>
      </div>

      {/* Review Cards */}
      <div className="flex flex-wrap justify-center gap-6 ">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#fff] dark:bg-[#012737] w-full sm:w-80 p-6 rounded-xl shadow-lg text-black dark:text-white relative">
            {/* User Icon */}
            <div className="absolute top-[-30px] left-[10px] w-[50px] h-[50px] bg-[#2d3b47] rounded-full flex items-center justify-center text-white">
              <Image src={review.icon} alt={review.name} width={50} height={50} />
            </div>

            {/* Review Info */}
            <div className="ml-14 text-black dark:text-white">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-sm text-gray-400">{review.date}</p>

              {/* Rating */}
              <div className="mt-2 text-yellow-400">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-sm text-black dark:text-white">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
