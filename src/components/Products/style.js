import styled from "styled-components";

export const ProductsStyled = styled.div`
  margin-top: -33px;
  .content {
    display: flex;
    flex-flow: row wrap;
    color: #383838;
    .tab-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      .tab {
        padding: 0 20px;
        background-color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        a {
          background-color: rgb(255, 255, 255);
          padding: 11px 15px;
          font-size: 16px;
          color: #202020;
          text-transform: capitalize;
          padding: 10px 15px;
          font-weight: 500;
          &.active {
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            border-bottom: none;
            background-color: #fff;
            margin-bottom: -1px;
            padding-bottom: 12px;
            color: #ddbb00;
          }
        }
      }
      .search {
        border-radius: 40px;
        border: 2px solid #afa2a28a;
        padding: 2px 12px;
        width: 50%;
        @media screen and (max-width: 540px) {
          width: 100%;
        }
        input {
          outline: none;
          border: none;
          margin-right: 15px;
          padding: 3px 0px;
          font-size: 14px;
        }
      }
    }
    .products-wrapper {
      margin-top: 15px;
      width: 100%;
      border: 1px solid #d8d8d8;
      background-color: #fff;
      text-align: left;
      .list-products {
        display: flex;
        flex-flow: row wrap;
        padding: 10px;
        .product {
          padding: 10px;
          width: 100%;
          flex-basis: 270px;
          text-align: center;
          position: relative;
          cursor: pointer;

          .image {
            position: relative;
            overflow: hidden;
            display: inline-block;
            width: 100%;

            img {
              width: 100%;
              transition: 0.5s;
              display: inline-block;
              max-width: 200px;
              max-height: 200px;
            }
          }

          .name-product {
            margin-bottom: 10px;
            font-size: 15px;
            color: #3a3a3a;
            font-weight: bold;
          }
          .old-price {
            color: gray;
            font-size: 14px;
            opacity: 0.6;
            font-weight: normal;
            white-space: nowrap;
            text-decoration: line-through;
          }
          .new-price {
            color: red;
            font-size: 17px;
            white-space: nowrap;
            font-weight: bold;
            span {
              font-size: 14px;
            }
          }
          &:hover {
            img {
              transform: scale(1.1);
              /* transition: all 1s; */
              transition: filter 0.6s, opacity 0.6s, transform 0.6s,
                box-shadow 0.3s;
            }
          }
        }
      }
      .load-more {
        color: #21428a;
        margin: 10px 0;
        font-weight: 500;
        cursor: pointer;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      .tab-wrapper {
        flex-direction: column-reverse;
        .tab {
          flex-direction: column;
          padding: 0;
        }
        .search {
          margin-bottom: 20px;
        }
      }
      .products-wrapper {
        .list-products {
          justify-content: center;
        }
      }
    }
  }
`;
