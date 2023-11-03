import React, { useEffect, useState } from "react";
import { createContext } from "react";

import { getAllItems } from "@/backend_helpers/data-api-utils";

const ImageContext = createContext({
  imageItems: null,
  itemsToDelete: null,
  addSelectedItem: (selectedItems) => { },
  removeSelectedItem: (itemToDeselect) => { },
  removeSingleImage: (imageToRemove) => { },
  removeMultipleImages: (itemsToRemove) => { },
});

export const ImageContextProvider = (props) => {
  const [activeImageItems, setActiveImageItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getAllItems();
        setActiveImageItems(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addSelectedItemHandler = (selectedItems) => {
    setSelectedItems((prevData) => [...prevData, dataToAdd]);
  };

  const removeSelectedItemHandler = (itemToDeselect) => {
    setSelectedItems(
      selectedItems.filter((item) => item.id !== itemToDeselect.id)
    );
  };

  const removeSingleImageHandler = (imageToRemove) => {
    setActiveImageItems(
      activeImageItems.filter((item) => item.id !== imageToRemove.id)
    );
  };

  const removeMultipleImagesHandler = (itemsToRemove) => {
    setActiveImageItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => !itemsToRemove.some((itemToRemove) => item.id === itemToRemove.id)
      );
      return updatedCartItems;
    });
  };

  const context = {
    imageItems: activeImageItems,
    itemsToDelete: selectedItems,
    addSelectedItem: addSelectedItemHandler,
    removeSelectedItem: removeSelectedItemHandler,
    removeSingleImage: removeSingleImageHandler,
    removeMultipleImages: removeMultipleImagesHandler,
  };
  return (
    <ImageContext.Provider value={context}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContext;