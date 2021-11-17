import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const Item = () => {
  return (
    <div className="item">
      <div className="item-content">
        <p className="title">Monthly maintenance</p>
        <p className="description">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis sem
          nibh id elit. Duis sed odio sit.
        </p>
      </div>
      <div className="item-icon">
        <FaRegHandPointRight className="icon" />
      </div>
    </div>
  );
};

const BlockRight = () => {
  return (
    <div className="wrapper-right">
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default BlockRight;
