'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
  '/placeholder.svg?height=600&width=800',
];

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section
      ref={targetRef}
      style={{ position: 'relative', height: '300vh' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '16px',
            x,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '800px',
                height: '600px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
