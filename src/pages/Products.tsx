import { useNavigate} from 'react-router-dom'
import { ClothingCategores, defaultColors } from '../helpers'
import { BackButton } from '../components/BackButton'
import ProductsCard from '../components/ProductsCard'
import { color } from '../helpers/images'
import ModalColors from '../components/ModalColors'
import { useState } from 'react'
import { colorsType } from '../helpers/types'
import { Icons } from '../helpers/icons'
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Products = () => {
  const [open, setOpen] = useState(false)
  const [lastFourColors, setLastFourColors] = useState<colorsType[]>(defaultColors);
  const navigate = useNavigate()

  const handleColorClick = (color : colorsType) => {
    setLastFourColors((prevColors:colorsType[]) => {
      const newColors = [...prevColors, color];
      if (newColors.length > 4) {
        newColors.shift(); // Remove the oldest color to keep only the last four
      }
      return newColors;
    });
  };
      
    return (
    <div className="bg-black min-h-screen text-white contain montserrat-normal">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 md:gap-5 py-5 justify-between">
          <div className="flex items-center gap-5">
            <BackButton onClick={()=> navigate(-1)}/>
            <h1 className="header-page montserrat-medium">
              {/* Select your {id.split(" ").pop()}look! */}
              Select your look!
            </h1>
          </div>
        </div>
        {/* colors */}
        <div className='colors_display w-full mb-10 gap-3 sticky_navbar py-2'>
          <div className="flex flex-col justify-end">
            <p className='card-subtitle ml-2 text-zinc-500 min-w-[150px] sm:min-w-[160px] md:min-w-[180px]'>Search by color:</p>
            <div className='relative w-[200px] md:w-[240px] justify-between flex items-center gap-2 border_full_rounded'>
              <img src={color} alt="color" className='w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 mr-5' onClick={()=> setOpen(!open)}/>
              <ModalColors handleColorClick={handleColorClick} className={`${open ? "flex" : "hidden"} absolute top-20 -left-10 z-10`} />
              <div className="flex items-center">
                {lastFourColors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${color.color.from}, ${color.color.to})`
                      }}
                    className="-ml-4 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-800"></div>  
                ))}
              </div>
            </div>
          </div>
          {/* types */}
          <div className='flex lg:flex-center gap-2 sm:gap-2 md:gap-3 text-zinc-500'>
              {ClothingCategores.map((type, index) => (
                <div key={index} className="size-container text-sm sm:text-md md:text-lg px-3 lg:px-5 py-2 ">{type}</div>
            ))}
          </div>
          <div 
            onClick={()=> navigate('/saved')}
            className="favourites_box">
            <p className="text-sm">Favourites</p>
            <Icons.Cart width={23} height={23} onClick={()=> navigate('/')}/>
          </div>
        </div>
        <ProductsCard/>
      </div>
    </div>
    );    
}
