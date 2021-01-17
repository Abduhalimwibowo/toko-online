import React from "react";
import BajuPria from "./../../assets/BajuPria.jpg";
import BajuWanita from "./../../assets/BajuWanita.jpg";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${BajuPria})`,
          }}
        >
          <a>Baju Pria</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${BajuWanita})`,
          }}
        >
          <a>Baju Wanita</a>
        </div>
      </div>
    </div>
  );
};
export default Directory;
