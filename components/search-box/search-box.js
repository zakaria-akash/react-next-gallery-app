import React from "react";
import classes from "./search-box.module.css";


export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={classes.search}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}