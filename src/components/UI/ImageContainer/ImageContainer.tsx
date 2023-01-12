import React from "react";
import styles from "./ImageContainer.module.css";
import { IImageContainerProps } from "./types";

const ImageContainer = (props: IImageContainerProps) => {
  return (
    <div className={`${styles.imageContainer} ${props.cssClass}`}>
      <img
        src={`https://image.tmdb.org/t/p/w200/${props.src}`}
        alt={props.alt}
        sizes=""
      />
    </div>
  );
};

export default ImageContainer;
