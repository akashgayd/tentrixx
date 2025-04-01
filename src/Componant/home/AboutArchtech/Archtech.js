import React, { useState } from "react";
import largest from "../../../imeges/Largest.jpg";
import miliun from "../../../imeges/925-Million.jpg";
import common from "../../../imeges/11500.jpg";
import preperd from "../../../imeges/Preferred.jpg";


const CARDS_PER_SLIDE = 4; // Define the number of cards per slide as a constant

const ArchtechLast = () => {
  
    
  
        const data = [
          {
            image: largest,
            title: "Largest Women-Owned IT Staffing Firm in the US",
          },
          {
            image: miliun,
            title: "$925+ Million Global Revenue Run Rate",
          },
          {
            image: common,
            title: "11,500+ Global Workforce",
          },
          {
            image: preperd,
            title: "Preferred Supplier to 100+ Fortune 500 Clients",
          },
        ];
      
        return (
          <div>
            <section className="bg-[#dd3333] text-white py-6 md:py-10">
              <h2 className="text-center text-2xl md:text-2xl font-semibold px-4">Why Artech?</h2>
            </section>
            <section className="bg-white text-[#253e91] py-6 md:py-8 px-4 md:px-6">
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
                {data.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center w-full sm:w-5/12 md:w-4/12 lg:w-1/4 p-4 mb-4"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-[50px] h-[50px] object-contain" 
                    />
                    <p className="mt-3 md:mt-4 font-semibold text-sm md:text-base">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      }
    
    

export default ArchtechLast;
