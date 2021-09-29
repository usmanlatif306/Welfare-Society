import React from "react";

function ImageDetail({ src, setImg }) {
  return (
    <div className="image__overrelay">
      <i
        className="fas fa-times text-danger fa-2x pointer"
        onClick={() => setImg(false)}
      ></i>
      <div className="img__container">
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default ImageDetail;
