import React from "react";

import { SupText } from "../../layout";
import { BlockItemStyle } from "./style";

const BlockItem = ({ title, description, children, bg, slug }) => {
  return (
    <BlockItemStyle
      className="block-item"
      to={`dich-vu/${slug}`}
      style={
        bg
          ? {
              backgroundImage: "url(" + bg + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <div className="icon-wrapper">{children}</div>
      <h4 className="font-semibold">{title}</h4>
      <SupText className="py-3">{description}</SupText>
    </BlockItemStyle>
  );
};

export default BlockItem;
