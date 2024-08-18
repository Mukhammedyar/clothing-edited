import { CardProps } from "../helpers/types"
  
const Card:React.FC<CardProps> = ({children, index}) => {
  return (
    <div key={index} className="relative bg-zinc-950 p-1 h-[50vh] lg:h-[80vh] rounded-md md:rounded-xl lg:rounded-3xl">
        {children}
    </div>
  )
}

export default Card
