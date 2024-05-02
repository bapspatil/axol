import { motion, useTransform, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"

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
    description: "Earn yield on your bitcoin with non-custodial delegation.",
    id: 3,
  },
  {
    image: "/images/feature-4.webp",
    title: "Staking-as-a-Service",
    description: "Delegate to our low commission high performant nodes.",
    id: 4,
  },
]

function Dots({
  dot1ScaleProgress,
  dot2ScaleProgress,
  dot3ScaleProgress,
  dot4ScaleProgress,
  dot1BackgroundProgress,
  dot2BackgroundProgress,
  dot3BackgroundProgress,
  dot4BackgroundProgress,
  scrollYProgress,
}: {
  dot1ScaleProgress: MotionValue<number>
  dot2ScaleProgress: MotionValue<number>
  dot3ScaleProgress: MotionValue<number>
  dot4ScaleProgress: MotionValue<number>
  dot1BackgroundProgress: MotionValue<string>
  dot2BackgroundProgress: MotionValue<string>
  dot3BackgroundProgress: MotionValue<string>
  dot4BackgroundProgress: MotionValue<string>
  scrollYProgress: MotionValue<number>
}) {
  return (
    <div className="absolute bottom-[10%] hidden w-full flex-row items-center justify-center overflow-hidden md:flex">
      <div className="flex h-auto w-fit flex-row items-center justify-center gap-4 rounded-full bg-crypto-frost bg-opacity-50 px-4 py-2">
        <motion.button
          aria-label="Dot 1"
          onClick={() => {
            scrollYProgress.set(0)
          }}>
          <motion.div
            style={{
              scale: dot1ScaleProgress,
              background: dot1BackgroundProgress,
            }}
            className={`h-4 w-4 rounded-full `}></motion.div>
        </motion.button>
        <motion.button
          aria-label="Dot 2"
          onClick={() => {
            scrollYProgress.set(0.3)
          }}>
          <motion.div
            style={{
              scale: dot2ScaleProgress,
              background: dot2BackgroundProgress,
            }}
            className={`h-4 w-4 rounded-full `}></motion.div>
        </motion.button>
        <motion.button
          aria-label="Dot 3"
          onClick={() => {
            scrollYProgress.set(0.6)
          }}>
          <motion.div
            style={{
              scale: dot3ScaleProgress,
              background: dot3BackgroundProgress,
            }}
            className={`h-4 w-4 rounded-full `}></motion.div>
        </motion.button>
        <motion.button
          aria-label="Dot 4"
          onClick={() => {
            scrollYProgress.set(0.9)
          }}>
          <motion.div
            style={{
              scale: dot4ScaleProgress,
              background: dot4BackgroundProgress,
            }}
            className={`h-4 w-4 rounded-full`}></motion.div>
        </motion.button>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"])
  const dot1ScaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    [1.5, 1, 1, 1]
  )
  const dot2ScaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    [1, 1.5, 1, 1]
  )
  const dot3ScaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    [1, 1, 1.5, 1]
  )
  const dot4ScaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    [1, 1, 1, 1.5]
  )

  const dot1BackgroundProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    ["#28338B", "#58A1C6", "#58A1C6", "#58A1C6"]
  )
  const dot2BackgroundProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    ["#58A1C6", "#28338B", "#58A1C6", "#58A1C6"]
  )
  const dot3BackgroundProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    ["#58A1C6", "#58A1C6", "#28338B", "#58A1C6"]
  )
  const dot4BackgroundProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    ["#58A1C6", "#58A1C6", "#58A1C6", "#28338B"]
  )

  return (
    <section
      ref={targetRef}
      className="relative h-auto w-full gap-4 bg-cryptowave-sky px-4 py-8 md:h-[300vh] md:w-auto md:py-16"
      id="featuresSection">
      <h2 id="featuresSectionTitle" className="relative w-full text-center font-title text-mobile-h2 text-crypto-frost md:text-h2">
        What we offer
      </h2>
      <img
        className="absolute bottom-0 left-0 right-0 mx-auto h-auto w-screen mix-blend-screen"
        alt="Mesh background for the Features Section"
        src="/images/features-mesh.webp"
      />
      <div className="sticky top-0 flex h-auto w-full items-center overflow-hidden md:h-screen">
        <motion.div
          style={{ x }}
          className="mt-16 hidden flex-row gap-8 md:flex ">
          {cards.map((card) => {
            return <FeatureCardUI card={card} />
          })}
        </motion.div>
        <Dots
          dot1ScaleProgress={dot1ScaleProgress}
          dot2ScaleProgress={dot2ScaleProgress}
          dot3ScaleProgress={dot3ScaleProgress}
          dot4ScaleProgress={dot4ScaleProgress}
          dot1BackgroundProgress={dot1BackgroundProgress}
          dot2BackgroundProgress={dot2BackgroundProgress}
          dot3BackgroundProgress={dot3BackgroundProgress}
          dot4BackgroundProgress={dot4BackgroundProgress}
          scrollYProgress={scrollYProgress}
        />
        <div className="mt-8 flex w-full flex-col gap-8 md:hidden">
          {cards.map((card) => {
            return <FeatureCardUI card={card} />
          })}
        </div>
      </div>
    </section>
  )
}

type FeatureCard = {
  image: string
  title: string
  description: string
  id: number
}

const FeatureCardUI = ({ card }: { card: FeatureCard }) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-start gap-10 text-crypto-frost md:w-[600px] md:gap-12 lg:w-[900px] "
      id={card.id.toString()}>
      <div className="relative flex w-full flex-row items-start justify-center rounded-xl bg-node-indigo">
        <img
          className="relative aspect-[3/4] w-full flex-1 overflow-hidden rounded-lg object-cover sm:aspect-video md:h-[500px]"
          loading="lazy"
          alt={card.title}
          src={card.image}
        />

        <div className="absolute -bottom-8 box-border flex w-auto flex-row items-start justify-start rounded-full border-b-[8px] border-solid border-node-indigo bg-axol-coral px-8 py-4">
          <h3 className="text-17xl relative inline-block w-auto text-center font-title text-mobile-h3 leading-[100%] text-node-indigo md:text-h4">
            {card.title}
          </h3>
        </div>
      </div>
      <div className="px-5 box-border flex w-[720px] max-w-full flex-row items-center justify-center py-0">
        <p className="relative inline-block w-full max-w-full shrink-0 text-center font-body text-body-md">
          {card.description}
        </p>
      </div>
    </div>
  )
}
