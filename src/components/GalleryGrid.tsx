"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dips3yafu/image/upload/v1757316288/cleo_viludk.webp",
  "https://res.cloudinary.com/dips3yafu/image/upload/v1761158636/graduatedMe_1_uxv5np_h5sjes.webp",
  "https://res.cloudinary.com/dips3yafu/image/upload/v1761158591/chilapata_qnzr1u_e4pc6a.webp",
];

const positions = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

export default function GalleryGrid() {
  const [cards, setCards] = useState([0, 1, 2]);
  const [nextId, setNextId] = useState(3);

  const handleAnimate = () => {
    const nextImage = (cards[2] + 1) % 3;
    setCards([...cards.slice(1), nextImage]);
    setNextId((prev) => prev + 1);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-[260px] w-full max-w-[90vw] overflow-hidden sm:h-[360px] sm:max-w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((imageIndex, index) => {
            const { scale, y } = positions[index] ?? positions[2];
            const zIndex = 3 - index;

            return (
              <motion.div
                key={`${imageIndex}-${nextId + index}`}
                initial={index === 2 ? { y: -16, scale: 0.9 } : undefined}
                animate={{ y, scale }}
                exit={
                  index === 0 ? { y: 340, scale: 1, zIndex: 10 } : undefined
                }
                transition={{ type: "spring", duration: 1, bounce: 0 }}
                style={{ zIndex, left: "50%", x: "-50%", bottom: 0 }}
                className="absolute h-[200px] w-full overflow-hidden rounded-t-xl border-x border-t border-border bg-card will-change-transform sm:h-[280px] sm:w-[512px] p-1 pb-8 outline outline-black/10 dark:outline-white/10"
              >
                <img
                  src={images[imageIndex]}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full select-none object-cover rounded-md shadow-xl"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 rounded-lg border border-border bg-background px-3 font-medium text-secondary-foreground transition-all hover:bg-secondary/80 active:scale-[0.98]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
