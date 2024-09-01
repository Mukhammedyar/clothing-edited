import { useNavigate } from "react-router-dom"
import Card from "./Card"
import { productData } from "../helpers"
import { apiProductType } from "../helpers/types"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AddToSavedButton from "./AddToSaveBtn"
import { Icons } from "../helpers/icons";

const ProductsCard = () => {
  const navigate = useNavigate()

  const onClickHandler=(item:apiProductType)=> {
    navigate('/products/'+ item.name)
    window.scrollTo({top: 0, behavior: "instant"})
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10 lg:px-32">
    {productData.map((item, index) => (
      <Card index={index} key={index}>
          <div className="w-full h-full" onClick={()=> onClickHandler(item)}>
              <LazyLoadImage 
                src={item.image}
                alt={item.name}
                style={{ height: '100%', width: 'auto',margin: '0 auto', objectFit: 'contain' }}
                wrapperClassName="w-full p-5 mx-auto h-[90%] object-cover"
                className="rounded-xl"
                effect="blur"
                loading="lazy"
              />

            <div className="card-gradient-item ">
            <div className="flex justify-between items-end w-full card_text_container">
              <div className="">
                <h2 className="card-title md:text-md text-md ">{item.name}</h2>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
              <div className='flex items-end gap-5'>
                <div className="flex flex-col">
                  <del className="text-md line -mb-2 text-red-500">{item.price}</del>
                  <p className="text-lg line text-green-400">{item.priceOff}$</p>
                </div>
                <div className="flex gap-1">
                  {item.sizes.map((size, i) => (
                    <div key={i}>
                      <p className="sm:text-md card_subtitle">{size}
                        {i < item.sizes.length - 1 && (
                          <span className="">,</span>
                        )}
                      </p>
                    </div>  
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddToSavedButton 
          item={item} 
          fullFilledIcon={<Icons.CartFullFilled width={20} height={20}/>} 
          outlinedIcon={<Icons.Cart height={20} width={20}/>} 
          className="absolute top-3 right-3">
            <p></p>
          </AddToSavedButton>
      </Card>
      )
    )}
</div>
  )
}

export default ProductsCard