import React from 'react';

import TextComp from '../TextComp';
import "./Recommended.css";

const Recommended = () => {
  return (
    <div className=" flex flex-col justify-center m-auto w-4/5 h-96 mt-24">
        <div className="rec-btn flex gap-5 mb-2">
            <TextComp text="Recommended" />
            
            <div className="flex gap-2">
                <button className="bg-red-500"> Movies </button>
                <button> Series </button>
                <button> Animation </button>
                <button> Stand-Up </button>
            </div>
        </div>

        <div className="card-container flex justify-center space-x-12">
            <div className="card">
                <div className="img">
                    <img src="https://i.pinimg.com/236x/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> 3:12:00 </p>
                    </div>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="card">
                <div className="img">
                    <img src="https://i.pinimg.com/236x/64/39/7c/64397cd89f722a74eefb6180f1596372.jpg" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> 3:12:00 </p>
                    </div>
                </div>
            </div>

            {/* CARD 3 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> 3:12:00 </p>
                    </div>
                </div>
            </div>

            {/* CARD 4 */}
            <div className="card">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ln-yQ2diZWsBwD20DRo1yMkCIPbK2xGmuQ&s" alt="movie" />
                </div>

                <div className="mov-details flex justify-between my-2">
                    <h5 className="text-base text-white font-semibold">Movie Name</h5>

                    <div className="flex justify-between gap-3">
                        <button className="w-9 h-8 bg-red-600 text-white rounded text-base px-1"> HD </button>
                        <p className="w-20 h-8 border rounded text-white text-center py-1 text-base"> 3:12:00 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommended;