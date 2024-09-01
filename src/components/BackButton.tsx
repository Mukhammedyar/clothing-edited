import { MouseEvent } from "react";
import { Icons } from "../helpers/icons"

interface BackButtonProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export const BackButton:React.FC<BackButtonProps> = ({onClick}) => {
    
  return (
    <div className="w-10 md:w-12 h-10 md:h-12 flex-center border_card_last hover:bg-zinc-900 rounded-full" onClick={onClick}>
        <Icons.Back width={20} height={20} />
    </div>
  )
}
