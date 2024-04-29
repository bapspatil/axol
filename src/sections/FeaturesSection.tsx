import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards: FeatureCard[] = [
  {
    image: "/images/feature-1.webp",
    title: "White Label Nodes",
    description:
      "Outsource your node infrastructure to seasoned experts while promoting your personally branded nodes. We run institutional grade node infrastructure as a service.",
    id: 1,
  },
  {
    image: "/images/feature-2.webp",
    title: "Protocol & Node Consulting",
    description:
      "Gain deep insight on protocol and market dynamics. Manage node infrastructure like the pros with 1:1 consultation.",
    id: 2,
  },
  {
    image: "/images/feature-3.webp",
    title: "Bitcoin DeFi",
    description:
      "Earn yield on your bitcoin with non-custodial delegation.",
    id: 3,
  },
  {
    image: "/images/feature-4.webp",
    title: "Staking-as-a-Service",
    description:
      "Delegate to our low commission high performant nodes.",
    id: 4,
  },
];

export default function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);

  return (
    <section
      ref={targetRef}
      className="relative w-full md:w-auto h-auto md:h-[300vh] bg-cryptowave-sky px-4 py-8 md:py-16 gap-4"
      id="featuresSection"
    >
      <h2 className="relative text-center w-full font-title text-mobile-h2 md:text-h2 text-crypto-frost">
        What we offer
      </h2>
      <img
        className="absolute w-screen h-auto left-0 right-0 mx-auto bottom-0 mix-blend-screen"
        alt="Mesh background for the Features Section"
        src="/images/features-mesh.webp"
      />
      <div className="sticky top-0 flex w-full h-auto md:h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="hidden md:flex flex-row gap-8 mt-16 ">
          {cards.map((card) => {
            return <FeatureCardUI card={card} />;
          })}
        </motion.div>
        <div className="w-full flex md:hidden flex-col gap-8 mt-8">
          {cards.map((card) => {
            return <FeatureCardUI card={card} />;
          })}
        </div>
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

const FeatureCardUI = ({ card }: { card: FeatureCard }) => {
  return (
    <div className="w-full md:w-[600px] lg:w-[900px] flex flex-col items-center justify-start gap-10 md:gap-12 text-crypto-frost " id={card.id.toString()}>
      <div
        className="w-full flex flex-row items-start justify-center relative bg-node-indigo rounded-xl"
      >
        <img
          className="w-full md:h-[500px] flex-1 relative rounded-lg overflow-hidden object-cover aspect-[3/4] sm:aspect-video"
          loading="lazy"
          alt={card.title}
          src={card.image}
        />

        <div className="w-auto absolute -bottom-8 rounded-full bg-axol-coral box-border flex flex-row items-start justify-start py-4 px-8 border-b-[8px] border-solid border-node-indigo">
          <h4 className="w-auto relative font-title text-mobile-h3 md:text-h4 text-17xl leading-[100%] inline-block text-node-indigo text-center">
            {card.title}
          </h4>
        </div>
      </div>
      <div className="w-[720px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <p className="w-full relative font-body text-body-md text-center inline-block shrink-0 max-w-full">
          {card.description}
        </p>
      </div>
    </div>
  );
};