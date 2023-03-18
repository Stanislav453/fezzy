/* eslint-disable react/jsx-key */
import "./Fotogallery.scss";
import React, { useState } from "react";
import { imageUrl } from "./FotogalleryData";
import {
  BsFillArrowRightSquareFill,
  BsArrowLeftSquareFill,
} from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { Fade } from "react-reveal";

export const Fotogallery = () => {
  // GENERAL
  const [viewerImage, setViewerImage] = useState({ img: "", i: 0 });

  //MODAL VIEVER
  const viewImage = (img, i) => {
    setViewerImage({ img, i });
  };

  const imgAction = (action) => {
    let i = viewerImage.i;
    if (action === "next-img") {
      setViewerImage({ img: data[i + 1].image, i: i + 1 });
    }

    if (action === "prev-img") {
      setViewerImage({ img: data[i - 1].image, i: i - 1 });
    }

    if (!action) {
      setViewerImage({ img: "", i: null });
    }
  };

  return (
    <section className="container fotogallery-bg">
      {viewerImage.img && (
        <div className="modal-box">
          <div className="modal-box-content">
            <button onClick={() => imgAction()} className="modal-box-close">
              <AiFillCloseSquare />{" "}
            </button>
            <button
              onClick={() => imgAction("prev-img")}
              className="modal-box-next-left"
            >
              <BsArrowLeftSquareFill />
            </button>
            <img
              className="image-modal-box"
              src={viewerImage.img}
              alt="photo"
            />
            <button
              onClick={() => imgAction("next-img")}
              className="modal-box-next-right"
            >
              <BsFillArrowRightSquareFill />{" "}
            </button>
          </div>
        </div>
      )}
      <header id="gallery" className="fotogallery-header-container">
        <h2 className="fotogallery-header-text">fotogalerie</h2>
      </header>
      <div className="center-container">
        <div className="fotogallery-body">
          {imageUrl.map((item, key) => {
            return (
              <Fade>
                <div className="img-box">
                  <img
                    className="img-fotogallery"
                    src={item.image}
                    alt={item.alt}
                    onClick={() => viewImage(item.image, key)}
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};
