import { useNavigate, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import SelectedProduct from "../components/SelectedProduct"
import Complects from "../components/Complects"
import { useState } from "react"
import { apiProductType } from "../helpers/types"
import { productData } from "../helpers"
import { Icons } from "../helpers/icons"

const ProductItem = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const { id } = useParams<{ id: string }>()
  
  const filteredProduct:apiProductType[] = productData.filter(p => p.name === id)  

  return (
    <div className="bg-black min-h-screen text-white montserrat-normal">
      <div className="flex items-center justify-between gap-5 py-5 mb-10 sticky_navbar contain border-b-[1px] border-b-zinc-900">
        <div className="flex gap-3 items-center">
          <BackButton onClick={()=> navigate(-1)}/>
          <div 
            onClick={()=> navigate('/')}
            className="w-auto px-5 gap-3 cursor-pointer h-12 rounded-full border-zinc-900 border-[1px] flex items-center justify-center">
            <p className="text-md">Go to Home</p>
            <Icons.Home width={23} height={23}/>
          </div>
        </div>
        <h1 className="header-page montserrat-medium">
          {id}
        </h1>
        <div 
          onClick={()=> navigate('/saved')}
          className="favourites_box">
          <p className="text-sm">Favourites</p>
          <Icons.Cart width={23} height={23} onClick={()=> navigate('/')}/>
        </div>
      </div>
      <SelectedProduct id={id || ''} setIndex={setIndex} index={index} product={filteredProduct[0]} />
      <Complects product={filteredProduct[0]}/>
      {/* <Related/> */}
    </div>
  )
}

export default ProductItem





