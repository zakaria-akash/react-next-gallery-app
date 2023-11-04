import React from "react";
import { CardItem } from "../item_card/item-card";
import { CardItemFeatured } from "../item_card/featured-item-card";

export const CardListItems = (props) => {
  const { items } = props;
  if (items == null) {
    return <h3>No Images To Show</h3>;
  }
  return (
    <div className="container my-5 mx-auto">
      <div className="row d-flex justify-content-start align-items-start">
        {items.filter(item => item.featured).map((item) => (
          <CardItemFeatured key={item.id} item={item} />
        ))}
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
