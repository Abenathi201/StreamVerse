import React from 'react';

import TextComp from '../TextComp';
import "./LatestSeries.css";

const LatestSeries = () => {
  return (
    <div className=" flex flex-col justify-center m-auto w-4/5 h-96 mt-24">
        <TextComp text="Latest Series" />

        <div className="card-container flex justify-center space-x-12">
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                    <button className="w-10 h-8 bg-red-600 text-white rounded text-base"> EP 6 </button>
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> Season 1 </p>
                    </div>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                    <button className="w-10 h-8 bg-red-600 text-white rounded text-base"> EP 6 </button>
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> Season 2 </p>
                    </div>
                </div>
            </div>

            {/* CARD 3 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                    <button className="w-10 h-8 bg-red-600 text-white rounded text-base"> EP 6 </button>
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> Season 1 </p>
                    </div>
                </div>
            </div>

            {/* CARD 4 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                    <button className="w-10 h-8 bg-red-600 text-white rounded text-base"> EP 6 </button>
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> Season 1 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestSeries;