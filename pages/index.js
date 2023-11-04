import React, { Fragment } from "react";
import Head from "next/head";

import ImageContext from "@/store/image-context";
import { useContext } from "react";

import { CardListItems } from "@/components/item_card_list/item-card-list";

const ShowAllPhotos = () => {
  const ImageCtx = useContext(ImageContext);
  const allItems = ImageCtx.imageItems;

  let headTagForThisPage = (
    <Head>
      <title>Ollyo</title>
      <meta name="description" content="OLLYO || Photo Gallery" />
    </Head>
  );

  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container my-5 mx-auto h-100">
        <div className="row">
          <div className="col-sm-12 text-center border border-3 border-info mb-3">
            <h1>Ollyo Photo Gallery</h1>
          </div>
        </div>
      </div>

      <CardListItems items={allItems} />
    </Fragment>
  );
};


export default ShowAllPhotos;
