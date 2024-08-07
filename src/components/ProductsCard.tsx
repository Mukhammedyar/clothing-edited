import { useNavigate } from "react-router-dom"
import Card from "./Card"
import { apiProductType } from "../helpers/types"
import { productData } from "../helpers"

const ProductsCard = () => {
  const navigate = useNavigate()


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10">
    {productData.map((item, index) => (
      <Card index={index} key={index} onClick={()=> navigate('/products/'+ item.name)}>
        <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover mb-4"
          />
          <div className="card-gradient-item ">
          <div className="flex justify-between w-full card_text_container">
            <h2 className="card-title md:text-md text-md ">{item.name}</h2>
            <div className='flex'>
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
      </Card>
  ))}
</div>
  )
}

export default ProductsCard