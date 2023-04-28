import React from "react";
import calculater from "../assests/assests/calculater.png";
import ecommerce from "../assests/assests/ecommerce.png";
import food from "../assests/assests/food.png";
import game from "../assests/assests/game.png";
import players from "../assests/assests/players.png";
import review from "../assests/assests/review.png";



const Portfolio = () => {

const portfolio = [
   {
    id: 1,
    src: calculater,
    code: "https://github.com/nandhakumar888/react-calculater",
    demo: "https://nandhakumar888.github.io/react-calculater/",
   },
   {
    id: 2,
    src: ecommerce,
    code: "https://github.com/nandhakumar888/e-commerce",
    demo: "https://magenta-buttercream-060f60.netlify.app",
   },
   {
    id: 3,
    src: food,
    code: "https://github.com/nandhakumar888/react-food-app",
    demo: "https://gleaming-brioche-30c62a.netlify.app",
   },
   {
    id: 4,
    src: game,
    code: "https://github.com/nandhakumar888/tic-tac-game-react",
    demo: "https://cozy-daffodil-12f811.netlify.app",
   },
   {
    id: 5,
    src: players,
    code: "https://github.com/nandhakumar888/react-palyer-website",
    demo: "https://snazzy-naiad-50defc.netlify.app",
   },
   {
    id: 6,
    src: review,
    code: "https://github.com/nandhakumar888/react-review",
    demo: "https://ubiquitous-crepe-331295.netlify.app",
   },
]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl fond-bold inline-block border-b-4 border-white">Portfolio</p>
            <p className="py-6">Check out some of my work right here</p>
        </div>

         
      <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


    {
    portfolio.map(({id,src,code,demo}) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
        <img src={src}
         alt="" 
         className="rounded-md duration-200 hover:scale-105"
         />
        <div className="flex items-center justify-center ">
            <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                <a href={demo} target="_blank">demo</a>
            </button>
            <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
            <a href={code} target="_blank">code</a>
            </button>
        </div>
    </div>
    ))}
  </div>  
    </div>
    </div>
  )
};

export default Portfolio;