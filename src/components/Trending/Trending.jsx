import React from 'react';

import TextComp from '../TextComp';
import "./Trending.css";

const Trending = () => {
  return (
    <div className=" flex flex-col justify-center m-auto w-4/5 h-96">
        <TextComp text="Trending" />

        <div className="card-container flex justify-center space-x-12">
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                    
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-2xl text-white font-semibold">Movie Name</h5>
                    <div className="genre flex justify-between gap-2">
                        <button> Action </button>
                        <button> Comedy </button>
                        <button> Sci-Fi </button>
                    </div>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_73p-loNKyUjhdGAtoVD8ImU-Gx4xfpEAw&s" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-2xl text-white font-semibold">Movie Name</h5>
                    <div className="genre flex justify-between gap-2">
                        <button> Action </button>
                        <button> Comedy </button>
                        <button> Sci-Fi </button>
                    </div>
                </div>
            </div>

            {/* CARD 3 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_73p-loNKyUjhdGAtoVD8ImU-Gx4xfpEAw&s" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-2xl text-white font-semibold">Movie Name</h5>
                    <div className="genre flex justify-between gap-2">
                        <button> Action </button>
                        <button> Comedy </button>
                        <button> Sci-Fi </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending;