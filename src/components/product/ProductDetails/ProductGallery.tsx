"use client";
import { useState } from "react";
import styles from "./ProductGallery.module.css";
import { Product } from "@/types/product.type";

interface ProductGalleryProps {
  images: Product["images"];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      {images.length > 1 && (
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.thumbnail}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.url}
                alt={image.altText}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      )}
      <div className={styles.mainImage}>
        <img
          src={images[selectedImageIndex].url}
          alt={images[selectedImageIndex].altText}
          className={styles.image}
        />
      </div>
    </div>
  );
}
