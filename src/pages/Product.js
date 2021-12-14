import Header2 from "../components/Header/Header2";
import styled from "styled-components";

const Product = (props) => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div id="grids" className="grid grid-cols-2">
          <div className="h-96"></div>
          <div className="h-96"></div>
        </div>
      </div>
      <style jsx>{`
        .h-96 {
          background-color: red;
        }
        #grids {
          grid-template-columns: 1.2fr 1fr;
        }
      `}</style>
    </>
  );
};

export default Product;
