import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ImageDetail from "src/components/ImageDetail";
import { useData } from "src/Context/DataContext";
import ReactHtmlParser from "react-html-parser";

function Details() {
  const { expDetail, recCash, expen } = useData();
  const [isImg, setIsImg] = useState(false);
  const [img, setImg] = useState(null);

  function handleImageSelect(image) {
    setImg(image);
    setIsImg(true);
  }
  return (
    <>
      <CCard>
        <CCardHeader className="text-center">
          <h1>Expenditure Details</h1>
        </CCardHeader>
        <CCardBody className="">
          <div className="mx-auto account__div">
            <div className="d-flex justify-content-between">
              <h5>Date:</h5>
              <h6 className="mt-2">
                {expDetail.createdAt.toDate().toDateString()}
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <h5>Amount Spend:</h5>
              <h6 className="mt-2">{expDetail.amount}</h6>
            </div>

            <div className="">
              <h5>Details:</h5>
              <p className="text-justify">
                {ReactHtmlParser(expDetail.details)}
              </p>
            </div>
            {expDetail.post && (
              <div className="d-flex">
                <h5>Post Link:</h5>
                <a
                  href={expDetail.post}
                  className="pt-1 ml-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Click Here
                </a>
              </div>
            )}

            <div className="flex flex-wrap">
              {expDetail.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="bill__detail__img"
                  onClick={() => handleImageSelect(image)}
                />
              ))}
            </div>
            <div className="text-center">
              <Link to="/expenditures" className="btn btn-ghost-primary">
                Back
              </Link>
            </div>
          </div>
        </CCardBody>
      </CCard>
      {isImg && <ImageDetail src={img && img} setImg={setIsImg} />}
    </>
  );
}

export default Details;
