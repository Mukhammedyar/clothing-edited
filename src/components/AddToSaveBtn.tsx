import React, { useState } from 'react';
import { useContext } from 'react';
import { SavedContext } from '../Context/savedContext';
import { apiProductType} from '../helpers/types';

interface addToSaveButtonType {
  item: apiProductType,
  fullFilledIcon: React.ReactElement
  outlinedIcon: React.ReactElement,
  className: string
  children: React.ReactNode | React.ReactElement | React.ReactNode[] | React.ReactElement[]
}

// Component that adds an item to Saved
const AddToSavedButton: React.FC<addToSaveButtonType> = (props) => {
  const savedContext = useContext(SavedContext);
  const [liked, setLiked] =useState(false)

  if (!savedContext) {
    throw new Error('useSaved must be used within a SavedProvider');
  }

  const { addToSaved } = savedContext;

  const onClickHandler = ()=> {
    setLiked(!liked)
    addToSaved(props.item)
  } 
props
  return (
    <button className={`p-2 flex-center bg-zinc-900 absolute rounded-full ${props.className}`} onClick={onClickHandler}>
      {props.children}
      {liked ? props.fullFilledIcon : props.outlinedIcon}
    </button>
  );
};

export default AddToSavedButton;