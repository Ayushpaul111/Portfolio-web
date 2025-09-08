"use client";
import React from "react";
import { motion } from "framer-motion";

const GalleryGrid = () => {
  const galleryItems = [
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/v1757316288/chilapata_qnzr1u.jpg",
      alt: "Chilapata forest",
      className: "",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/v1757316288/cleo_viludk.webp",
      alt: "Cleo the cat",
      className: "",
    },
    {
      type: "card",
      content: (
        <div className="bg-green-700 p-2 sm:p-4 rounded-xl font-bold text-sm sm:text-xl md:text-lg text-gray-100 hover:scale-105 focus:scale-105 transition-transform duration-500 ease-in-out hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M4.185 15.852c-1.241 0-2.207-.275-2.9-.825-.691-.55-1.097-1.303-1.216-2.26a9.675 9.675 0 0 1 .107-2.976C.367 8.763.677 7.7 1.106 6.6c.43-1.148 1.098-2.773 2.005-4.877l.501.573c1.289.335 1.945 1.028 1.969 2.08.023 1.053-.263 2.38-.86 3.982-.596 1.602-.894 2.785-.894 3.55 0 .335.024.753.071 1.255.048.503.108 1.029.18 1.579.071.55.107.92.107 1.111ZM13.848 17c-1.527-.717-2.47-1.96-2.827-3.73-.358-1.77-.239-3.55.358-5.344a23.032 23.032 0 0 1 2.362-5.02C14.719 1.35 15.686.382 16.64 0c.095.143.239.323.43.538.19.215.345.418.465.61.119.191.226.406.322.645.095.24.143.49.143.753s-.072.538-.215.825c0 .192-.155.586-.465 1.184-.31.598-.668 1.255-1.074 1.972-.405.718-.656 1.196-.751 1.435-.191.574-.62 2.893-1.289 6.958L13.848 17Z"
            />
          </svg>
          <p className="mt-2">I&apos;m a developer</p>
        </div>
      ),
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/v1757268160/graduatedMe_1_uxv5np.jpg",
      alt: "Me in my graduation day outfit",
      className: "",
    },
    {
      type: "video",
      src: "https://r2.vidzflow.com/source/0ec8b2ae-0296-42d9-a040-2ada83890a8d.mp4",
      className: "",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/v1757317301/dogo2_bpm7bu.jpg",
      alt: "Portrait photo",
      className: "block md:hidden",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/c_crop,ar_9:16/v1757316289/dogo2_i59ytz.jpg",
      alt: "Scene photo",
      className: "hidden md:block",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dips3yafu/image/upload/v1757316808/zed2_ejllfl.jpg",
      className: "h-full w-full object-cover",
    },
  ];

  const renderItem = (item: any, index: number) => {
    const baseClasses = "w-full rounded-xl shadow hover:cursor-pointer";

    // Animation variants for the upward motion
    const itemVariants = {
      initial: {
        y: 50,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        },
      },
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };

    switch (item.type) {
      case "image":
        return (
          <motion.div
            key={index}
            className={`${item.className}`}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <img
              alt={item.alt}
              loading="lazy"
              className={baseClasses}
              src={item.src}
              style={{ color: "transparent" }}
            />
          </motion.div>
        );

      case "video":
        return (
          <motion.div
            key={index}
            className={item.className}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <video
              className={baseClasses}
              autoPlay
              loop
              playsInline
              muted
              src={item.src}
            />
          </motion.div>
        );

      case "card":
        return (
          <motion.div
            key={index}
            className={item.className}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {item.content}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 [&_img]:hover:cursor-pointer">
      {/* First column */}
      <div className="grid gap-4">
        {renderItem(galleryItems[0], 0)}
        {renderItem(galleryItems[1], 1)}
        {renderItem(galleryItems[2], 2)}
      </div>

      {/* Second column */}
      <div className="grid gap-4">
        {renderItem(galleryItems[3], 3)}
        {renderItem(galleryItems[4], 4)}
      </div>

      {/* Third column - responsive layout */}
      <div className="grid grid-cols-2 md:grid-cols-none col-span-2 md:col-auto gap-4">
        {renderItem(galleryItems[5], 5)}
        {renderItem(galleryItems[6], 6)}
        {renderItem(galleryItems[7], 7)}
      </div>
    </div>
  );
};

export default GalleryGrid;
