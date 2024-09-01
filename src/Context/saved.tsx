import { ReactNode, useState } from "react";
import { SavedContext } from "./savedContext";
import { apiProductType } from "../helpers/types";

interface SavedProviderProps {
  children: ReactNode;
}

export const SavedProvider: React.FC<SavedProviderProps> = ({ children }) => {
    const [saved, setSaved] = useState<apiProductType[]>([]);
    const [isSavedState, setIsSavedState] = useState(false)
  
    // Function to add an item to the Saved array
    const addToSaved = (item: apiProductType) => {
      setSaved((prev) => [...prev, item]);
      setIsSavedState(true)
    };
  
    // Function to remove an item from the Saved array by id
    const removeFromSaved = (name: string) => {
      setSaved((prev) => prev.filter((item) => item.name !== name));
      setIsSavedState(saved.length > 1)
    };
  
    return (
      <SavedContext.Provider value={{ saved, isSaved: isSavedState, addToSaved, removeFromSaved }}>
        {children}
      </SavedContext.Provider>
    );
  };