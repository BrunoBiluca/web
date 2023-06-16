import React, { useRef, useEffect } from 'react';
import style from './SmoothScroll.module.css'

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    const interpolateAmount = 0.05;
    let startY = 0;
    let endY = 0;
    let raf;

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    function stopCondition(start, target) {
      return Math.abs(Math.abs(start.toFixed(1)) - Math.abs(target.toFixed(1))) < 1;
    }

    function update() {
      startY = lerp(startY, endY, interpolateAmount);
      track.style.transform = `translateY(-${startY}px)`;
      raf = requestAnimationFrame(update);
      if (stopCondition(startY, container.scrollTop)) {
        startY = container.scrollTop
        cancelAnimationFrame(raf);
      }
    }

    function move() {
      endY = container.scrollTop;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    container.addEventListener('scroll', move);

    return () => {
      container.removeEventListener('scroll', move);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={style.slider}
    >
      <div ref={trackRef} className={style.sliderTrack}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
