import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiSearchAlt2 } from "react-icons/bi";

import { ProductsStyled } from "./style";
import { Container, Wrapper } from "../layout";
import TitleSection from "../Sections/TitleSection";
import products_bg from "../../images/products_bg.jpg";
import { NavLink, Link } from "react-router-dom";
import { products } from "./data";

function Products() {
  const { slug } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (slug) {
      const _product = products.find((product) => product.slug === slug);
      setProduct(_product.products);
    }
  }, [slug]);

  return (
    <ProductsStyled>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
        style={{ backgroundImage: "url(" + products_bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <TitleSection title="Sản phẩm" className="p-0" colorWhite />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper pt="50px">
          <div className="content">
            <div className="tab-wrapper">
              <div className="tab">
                {products.length &&
                  products.map((product, idx) => (
                    <NavLink
                      to={`/san-pham/${product.slug}`}
                      activeClassName="active"
                      key={idx}
                    >
                      {product.category}
                    </NavLink>
                  ))}
              </div>
              <div className="flex items-center justify-between search">
                <input className="input-search w-full" />
                <BiSearchAlt2 size={20} className="cursor-pointer" />
              </div>
            </div>
            <div className="products-wrapper">
              {!!product.length ? (
                <>
                  <div className="list-products">
                    {product.map((item, idx) => (
                      <div className="product" key={idx}>
                        <Link to={`/san-pham/${slug}/${item.id}`}>
                          <div className="image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="name-product">{item.name}</div>
                          <div className="old-price">{item.oldPrice}</div>
                          <div className="new-price">
                            {item.newPrice}
                            <span>₫</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="load-more">Xem thêm...</div>
                </>
              ) : (
                <div className="load-more">Không có sản phẩm nào !</div>
              )}
            </div>
          </div>
        </Wrapper>
      </Container>
    </ProductsStyled>
  );
}

export default Products;
