import React from "react";
import classes from "./item-card.module.css";
import Image from "next/legacy/image";


export const CardItemFeatured = (props) => {
  const { item } = props;
  return (
    <div
      className={`card border-0 col-sm-6 col-md-3 ms-1 mt-1 text-info bg-transparent ${classes.cardContainer}`}
    >
      <Image
        alt={item.Name}
        src={item.image}
        width={300}
        height={300}
        layout="fixed"
        style={{ width: "300px", height: "300px" }}
      />
      <p className="fw-bold text-center fs-6 m-0">
        Featured Image: {item.Name}
      </p>
      <hr className="mt-0" />
    </div>
  );
};
