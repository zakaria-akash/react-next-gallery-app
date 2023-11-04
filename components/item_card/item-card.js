import { Button, Modal, Form, Input } from "antd";
import { DeleteTwoTone, StarTwoTone, WarningFilled, StarFilled } from "@ant-design/icons";
import React, { useState } from "react";
import classes from "./item-card.module.css";
import Image from "next/legacy/image";

import ImageContext from "@/store/image-context";
import { useContext } from "react";

export const CardItem = (props) => {
  const ImageCtx = useContext(ImageContext);
  const { item } = props;
  const [addFeatureItemModalStatus, setAddFeatureItemModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const AddFeatureItemHandler = () => {
    ImageCtx.currentFeaturedItem(item);

    setAddFeatureItemModalStatus(false);
  };


  const DeleteSingleItemHandler = () => {
    ImageCtx.removeSingleImage(item);
    setDeleteModalStatus(false);
  };

  const CheckedStatusHandler = (e) => {
    if (e.target.checked) {
      console.log("Item is checked: " + item.Name);
      ImageCtx.addSelectedItem(item)
    } else {
      console.log("Item is unchecked: " + item.Name);
      ImageCtx.removeSelectedItem(item);
    }
  }

  return (
    <div
      className={`card border-0 col-sm-6 col-md-3 bg-dark text-info m-2 ${classes.cardContainer}`}
    >
      <Image
        alt={item.Name}
        src={item.image}
        width={200}
        height={200}
        layout="fixed"
        style={{ width: "200px", height: "200px" }}
      />
      <p className="fw-bold fs-6 mb-0">
        {item.Name}
      </p>
      <hr className="mt-0" />
      <span className="d-flex justify-content-around align-items-center">
        <Button
          onClick={() => {
            setAddFeatureItemModalStatus(true);
          }}
          className="d-flex justify-content-center align-items-center"
          style={{ margin: 1, padding: 1, width: "20%" }}
        >
          {item.featured ? (
            <StarFilled style={{ fontSize: "150%", color: "#3B71CA" }} />
          ) : (
            <StarTwoTone style={{ fontSize: "150%" }} />
          )}

        </Button>
        <Button
          onClick={() => {
            setDeleteModalStatus(true);
          }}
          className="d-flex justify-content-center align-items-center"
          style={{ margin: 1, padding: 1, width: "20%" }}
        >
          <DeleteTwoTone style={{ fontSize: "150%" }} />
        </Button>
        <Button
          className="d-flex justify-content-center align-items-center"
          style={{ margin: 1, padding: 1, width: "20%" }}
        >
          <input style={{ transform: "scale(1.5)", margin: "auto" }} type="checkbox" id="selectToDelete" name="selectToDelete" value="check" onChange={CheckedStatusHandler} />
        </Button>
      </span>
      <Modal
        open={addFeatureItemModalStatus}
        onOk={AddFeatureItemHandler}
        onCancel={() => {
          setAddFeatureItemModalStatus(false);
        }}
      >
        <span className="w-100 d-flex justify-content-center align-items-center" style={{ height: "5rem" }}>
          <StarTwoTone className="WarningTwoTone mx-2" />
          <h5 className="mt-2">Make this image as the featured image!</h5>
          <StarTwoTone className="WarningTwoTone mx-2" />
        </span>
      </Modal>
      <Modal
        open={deleteModalStatus}
        onOk={DeleteSingleItemHandler}
        onCancel={() => {
          setDeleteModalStatus(false);
        }}
      >
        <div className="container">
          <div className="row m-2">
            <div
              className="alert alert-warning alert-dismissible fade show col-sm-12"
              role="alert"
            >
              <strong>
                WARNING!{" "}
                <WarningFilled style={{ fontSize: "200%", color: "orrange" }} />{" "}
              </strong>{" "}
              This following user info will be removed (Item ID: {item.id}):
            </div>
            <div className="card col-sm-12 border border-warning">
              <Image
                alt={item.Name}
                src={item.image}
                width={250}
                height={300}
                layout="responsive"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.Name}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
