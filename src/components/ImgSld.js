import React from 'react';
import Dest from './assests/1723802229632.jpg'
import Rank from './assests/1723802229652.jpg'
import Rslt from './assests/1723802229670.jpg'
import Nord from './assests/1723802229690.png'
import Naac from './assests/1723802229711.png'
import Acrd from './assests/1723802229732.png'
import './styles.css';

const ImgSld = () => {
  return (
    <div className='w-[100vw] max-h-[55vh] relative bg-gradient-to-r from-amber-500 to-amber-700'>
      <div className='xl:h-[8vmax] lg:h-[10vmax] md:h-[6vmax] h-[5.5vmax] '></div>
      <div className="flex justify-items-stretch bg-none bg-transparent bg-[left_7.5vmax_top_0vmax] bg-no-repeat bg-[length:50%_auto] bg-[position:45px_auto] 
        lg:bg-[url('https://res.cloudinary.com/meme-topia/image/upload/v1723874118/30__yearold_man_acting_like_college_gldva8.png')] w-[100vw]">
        <div className="w-[100vw]">
          <h2 className="quote md:block hidden left-[5rem] lg:max-w-[25vmax] max-w-[30vmax] text-[1.9vmax] lg:text-[1.55vmax] font-rome absolute">
            <span className='block font-bold pb-1 text-[2vmax] lg:text-[1.65vmax]'>Our Vission:</span>
            “To educate the student community both by theory and practice to fit in with the society and to conquer tomorrow’s technology at global level with human values through our dedicated team.”</h2>
         </div>
        <div
          id="carousel"
          className="carousel slide col-md-6 absolute mr-[1.5vmax] w-[1750vmax] md:w-[50%]"
          data-bs-wrap="true"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner p-[1vmax]">
            <div className="carousel-item active">
              <img src={Dest} className="w-100 rounded-lg" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Rank} className="w-100 rounded-lg" />
            </div>
            <div className="carousel-item">
              <img src={Rslt} className="w-100 rounded-lg" />
            </div>
          </div>
          <button
            className="carousel-control-prev buttons"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next buttons"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgSld;