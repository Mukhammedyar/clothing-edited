import { useNavigate } from 'react-router-dom'
import { Icons } from '../helpers/icons'
import { apiProductType } from '../helpers/types'
import { useState } from 'react'

interface complectsType {
    i: number, 
    item: apiProductType,
}

const ComplectsCard:React.FC<complectsType> = ({ item }) => {
    const navigate = useNavigate()
    const [liked, setLiked] = useState(false)

  return (
    <div className='md:h-[40vh] h-[50vh] bg-zinc-950 rounded-3xl lg:h-[70vh] '>
        <div className='flex items-center w-full h-full' onClick={()=> navigate(`/products/${item.name}`)}>
            <img
                src={item.image}
                alt={item.name}
                className="h-[90%] mx-auto object-cover rounded-xl"
            />
            <div className="card-gradient-item">
                <div className="flex justify-between w-full px-3 mb-3 items-end gap-5">
                    <div className='flex justify-between items-end w-full'>
                        <div>
                            <h2 className="text-sm lg:text-lg py-1">{item.name}</h2>
                            <p className="text-xs lg:text-sm text-zinc-400">{item.description}</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <del className='text-red-500 text-xs lg:text-sm'>{item.price}$</del>
                            <p className="text-md lg:text-lg">{item.priceOff}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2 flex-center bg-zinc-900 absolute top-3 right-3 rounded-full" onClick={()=> setLiked(!liked)}>
            {liked ? <Icons.CartFullFilled width={20} height={20}/> : <Icons.Cart width={20} height={20}/>}
        </div>
    </div>
  )
}

export default ComplectsCard