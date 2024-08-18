import { useNavigate } from "react-router-dom"
import Card from "./Card"
import { productData } from "../helpers"
import { Icons } from "../helpers/icons"
import { useState } from "react"
import { apiProductType } from "../helpers/types"

const ProductsCard = () => {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  const onClickHandler=(item:apiProductType)=> {
    navigate('/products/'+ item.name)
    window.scrollTo({top: 0, behavior: "instant"})
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10">
    {productData.map((item, index) => (
      <Card index={index} key={index}>
          <div className="w-full h-full" onClick={()=> onClickHandler(item)}>
            <img
              src={item.image}
              alt={item.name}
              className="w-auto mx-auto h-[90%] object-cover mb-4"
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
        <div className="p-2 flex-center bg-zinc-900 absolute top-3 right-3 rounded-full" onClick={()=> setLiked(!liked)}>
          {liked ? <Icons.LikeFullFilled width={20} height={20}/> : <Icons.LikeOutlined width={20} height={20}/>}
        </div>
      </Card>
      )
    )}
</div>
  )
}

export default ProductsCard