import React, { Fragment, useState } from "react";
import Head from "next/head";

import ImageContext from "@/store/image-context";
import { useContext } from "react";

import { CardListItems } from "@/components/item_card_list/item-card-list";
import { SearchBox } from "@/components/search-box/search-box";

const ShowAllPhotos = () => {
  const ImageCtx = useContext(ImageContext);
  const allItems = ImageCtx.imageItems;
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
    e.preventDefault();
  };

  const filteredItems = allItems.filter((item) => {
    return (
      item.Name.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  let headTagForThisPage = (
    <Head>
      <title>Ollyo</title>
      <meta name="description" content="OLLYO || Photo Gallery" />
    </Head>
  );

  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container-fluid d-flex flex-column justify-content-start align-items-center mt-2 mb-0 py-0 mx-auto">
        <div className="w-100 text-center border border-3 border-info m-0">
          <h1>Ollyo Photo Gallery</h1>
        </div>
        <div className="text-center border-0 m-0 p-0 searchBoxContainer">
          <SearchBox
            placeholder="search images by name"
            handleChange={handleChange}
          />
        </div>
      </div>

      <CardListItems items={filteredItems} />
    </Fragment>
  );
};


export default ShowAllPhotos;
