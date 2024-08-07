import { useNavigate, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import SelectedProduct from "../components/SelectedProduct"
import Complects from "../components/Complects"
import { useEffect, useState } from "react"
import { apiProductType } from "../helpers/types"
import { productFetching } from "../API/helpers"
import { productData } from "../helpers"

const ProductItem = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const { id } = useParams<{ id: string }>()
    
  const filteredProduct:apiProductType[] = productData.filter(p => p.name === id)

  return (
    <div className="bg-black min-h-screen text-white montserrat-normal">
      <div className="flex items-center gap-5 py-10 contain">
        <BackButton onClick={()=> navigate(-1)}/>
        <h1 className="header-page montserrat-medium">
          {id}
        </h1>
      </div>
      <SelectedProduct id={id || ''} setIndex={setIndex} index={index} product={filteredProduct[0]} />
      <Complects id={id || ''} index={index} setIndex={setIndex} product={filteredProduct[0]}/>
      {/* <Related/> */}
    </div>
  )
}

export default ProductItem





