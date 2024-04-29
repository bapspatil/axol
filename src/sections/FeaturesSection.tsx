import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-brand-colors-cryptowave-sky py-16 gap-1"
      id="featuresSection"
    >
      <h2 className="relative text-center w-full m-0 font-bold font-title text-h2 text-brand-colors-crypto-frost">
        What we offer
      </h2>
      <img
        className="absolute w-screen h-auto left-0 right-0 mx-auto bottom-0 mix-blend-screen"
        alt=""
        src="/detailstechgrid.svg"
      />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 mt-16">
          {cards.map((card) => {
            return <FeatureCardUI card={card} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

type FeatureCard = {
  image: string;
  title: string;
  description: string;
  id: number;
}

const cards: FeatureCard[] = [
  {
    image: "/feature-1@2x.png",
    title: "White Label Nodes",
    description:
      "Outsource your node infrastructure to seasoned experts while promoting your personally branded nodes. We run institutional grade node infrastructure as a service.",
    id: 1,
  },
  {
    image: "/feature-carusel@2x.png",
    title: "Protocol & Node Consulting",
    description:
      "Gain deep insight on protocol and market dynamics. Manage node infrastructure like the pros with 1:1 consultation.",
    id: 2,
  },
  {
    image: "/institutionalblockchainnodeswithadesertfern-1-11@2x.png",
    title: "Bitcoin DeFi",
    description:
      "Earn yield on your bitcoin with non-custodial delegation.",
    id: 3,
  },
  {
    image: "/institutionalblockchainnodeswithadesertfern-1-12@2x.png",
    title: "Staking-as-a-Service",
    description:
      "Delegate to our low commission high performant nodes.",
    id: 4,
  },
];

const FeatureCardUI = ({ card }: { card: FeatureCard }) => {
  return (
    <div className="w-[900px] shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[0px] box-border gap-[68px] max-w-full text-xl text-brand-colors-crypto-frost" id={`feature-${card.id}`}>
      <div
        id="feature-carousel"
        className="self-stretch flex flex-row items-start justify-start relative max-w-full"
      >
        <img
          className="h-[500px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={card.image}
        />

        <div className="w-[553px] !m-[0] absolute bottom-[-60px] left-[calc(50%_-_276.5px)] rounded-full bg-brand-colors-axol-coral box-border flex flex-row items-start justify-start py-4 px-8 min-h-[76px] max-w-full z-[1] border-b-[8px] border-solid border-brand-colors-node-indigo">
          <h4 className="w-[545px] relative font-title text-h4 text-17xl leading-[100%] inline-block text-brand-colors-node-indigo text-center">
            {card.title}
          </h4>
        </div>
      </div>
      <div className="w-[1120px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <p className="w-[720px] relative font-body text-body-md text-center inline-block shrink-0 max-w-full">
          {card.description}
        </p>
      </div>
    </div>
  );
};