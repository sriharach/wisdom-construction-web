'use client';

import useMarqueeLoop from './useMarqueeLoop';

const MarqueeLoop = () => {
  useMarqueeLoop();
  return (
    <section aria-label="marquee" className="marquee-wrapper py-[4rem] md:py-[6rem] md:h-[220px]" id="marquee-container">
      <ul className="marquee md:gap-[2rem]" id="marquee">
        <li className="marquee-item">
          <img src="/construction/realtys/ap_logo.webp" className="w-full h-full bg-cover" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/construction/realtys/assetwise_logo.webp" className="w-full h-full bg-cover" alt=""/>
        </li>
        <li className="marquee-item">
          <img src="/construction/realtys/origin_logo.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/construction/realtys/supalai_logo.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/construction/realtys/pruksa_logo.webp" className="w-full h-full" alt="" />
        </li>
        <li className="marquee-item">
          <img src="/construction/realtys/sansiri_logo.webp" className="w-full h-full" alt="" />
        </li>
      </ul>
    </section>
  );
};

export default MarqueeLoop;
