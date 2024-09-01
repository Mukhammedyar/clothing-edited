import { useNavigate } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import { useContext, useState } from "react"
import { SavedContext } from "../Context/savedContext"
import Card from "../components/Card"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Icons } from "../helpers/icons"
import Notification from "../components/Notification"

export const Cart = () => {
    const navigate = useNavigate()
    const [showNotification, setShowNotification] = useState(false);
    const savedContext = useContext(SavedContext)

    if (!savedContext) {
        throw new Error('useSaved must be used within a SavedProvider');
    }

    const { saved, removeFromSaved } = savedContext;
    
    const deleteCard = (item: string) => {
        setShowNotification(true)
        removeFromSaved(item)
    }
    

  return (
    <section className="bg-black min-h-[100vh] text-zinc-100">
        <header className="header-page contain py-5 border-b-[1px] flex items-center gap-5 border-zinc-900 sticky_navbar">
            <BackButton onClick={()=> navigate(-1)}/>
            <h1>Saved products</h1>
        </header>
        <Notification
            messages="Successfully saved!"
            visible={showNotification}
            description="Anyone with a link can now view this file."
            onClose={() => setShowNotification(false)} 
        />
        {saved.length === 0 
        ? <div className="text-center w-full py-10 text-zinc-400">
            <p className="header-page">Saved prododucts not found</p>
            <div 
                onClick={()=> navigate('/')}
                className="w-auto px-5 gap-3 text-xl text-blue-500 underline cursor-pointer h-12 rounded-full border-zinc-900 flex items-center justify-center">
                    <p className="text-md">Go to Home</p>
            </div>
        </div>
        : <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 px-5 md:px-10 py-10">
            {saved.map((item, index) => (
            <Card index={index} key={index}>
                <div className="w-full h-full">
                    <LazyLoadImage 
                        src={item.image}
                        alt={item.name}
                        style={{ height: '100%', width: 'auto',margin: '0 auto', objectFit: 'contain' }}
                        wrapperClassName="w-full p-5 mx-auto h-[90%] object-cover"
                        className="rounded-xl"
                        effect="blur"
                        loading="lazy"
                    />

                    <div className="card-gradient-item">
                        <div className="flex flex-col w-full">
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
                            <div className="w-full px-5 flex-between mb-2">
                                <p className="card-title hidden lg:flex text-sm lg:text-md">Queue</p>
                                <div className="flex">
                                    <button className="rounded-s-full w-14 md:w-18 h-8 md:10 text-sm md:text-lg lg:text-xl border-card">+</button>
                                    <p className="border-card flex-center w-10 md:w-16 h-8 md:10">0</p>
                                    <button className="rounded-r-full border_card_last border-card w-14 md:w-18 h-8 md:10 text-sm md:text-lg lg:text-xl">-</button>
                                </div>
                                {/* desktop */}
                                <button 
                                    onClick={() => deleteCard(item.name)}
                                    className="border_card_last hidden lg:flex remove-btn rounded-full">
                                    <span className="px-3">Remove from Saved</span>
                                    <Icons.Trash width={27} height={27} color="" className="trash_icon"/>
                                </button>
                                {/* mobile */}
                                <button 
                                    onClick={() => deleteCard(item.name)}
                                    className="border_card_last lg:hidden flex-between py-1 px-2 rounded-full">
                                    <span className="px-3 text-sm">Remove</span>
                                    <Icons.Trash width={20} height={20} color="" className="trash_icon_mobile fill-red-500"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            )
            )}
        </div>
        }

        
    </section>
  )
}
