import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { ProductDetailStyled } from "./style";
import { Container, Wrapper } from "../layout";
import TitleSection from "../Sections/TitleSection";
import products_bg from "../../images/products_bg.jpg";
// import { NavLink, Link } from "react-router-dom";
import { products } from "../Products/data";

function Products() {
  const { slug, id } = useParams();

  const [productOfCategory, setProductOfCategory] = useState();

  useEffect(() => {
    if (slug && id) {
      const _productOfCategory = products.filter(
        (product) => product.slug === slug
      );

      setProductOfCategory(_productOfCategory);
    }
  }, [slug, id]);

  console.log(productOfCategory);
  return (
    <ProductDetailStyled>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
        style={{ backgroundImage: "url(" + products_bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <TitleSection title="Chi tiết sản phẩm" className="p-0" colorWhite />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper pt="50px">Deatail</Wrapper>
      </Container>
    </ProductDetailStyled>
  );
}

export default Products;
