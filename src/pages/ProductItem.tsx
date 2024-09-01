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
            className="w-auto h-10 md:h-12 px-2 md:px-5 gap-3 cursor-pointer rounded-full border_card_last flex-center responsive_text">
            <p className="text-md">Go to Home</p>
            <Icons.Home width={20} height={20}/>
          </div>
        </div>
        <h1 className="header-page montserrat-medium">
          {id}
        </h1>
        <div 
          onClick={()=> navigate('/saved')}
          className="favourites_box flex-center">
          <p className="text-sm hidden md:flex">Favourites</p>
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





