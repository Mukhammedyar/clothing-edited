import { createContext } from "react";
import { SavedContextType } from "../helpers/types";

export const SavedContext = createContext<SavedContextType | undefined>(undefined);
