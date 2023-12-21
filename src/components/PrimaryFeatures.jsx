import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'
import Image from 'next/future/image'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
// import {
//   DiageoLogo,
//   LaravelLogo,
//   MirageLogo,
//   ReversableLogo,
//   StatamicLogo,
//   StaticKitLogo,
//   TransistorLogo,
//   TupleLogo,
// } from '@/components/StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Curated Paths to Success',
    description:
      'Discover curated content paths from industry experts, specifically designed to navigate you towards achieving your goals.',
    icon: ExploreIcon,
    screen: ExploreScreen,
  },
  {
    name: 'Mentorship That Matters',
    description:
      'Forge meaningful connections with mentors who can offer custom advice, motivation, and real-world insights.',
    icon: DeviceTouchIcon,
    screen: HomeScreen,
  },
  {
    name: 'Tailored Content Discovery',
    description:
      "Fresh daily tailored content that quickly guides you to be your best, every day.",
    icon: FilterIcon,
    screen: ExploreModal,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function ExploreIcon(props) {
  return (
    <svg height="32" width="32">
      <svg fill="#a3a2a2" height="32" viewBox="0 0 640 512" width="32">
        <path d="m638.8 216.8-85.7-206.1c-3.381-8.162-12.77-12.03-20.94-8.647l-117.3 48.61c-8.162 3.381-12.06 12.73-8.68 20.89.002.002 0-.002 0 0l85.73 206.9c3.383 8.164 12.73 12.07 20.9 8.689l117.3-48.61c8.19-4.132 12.09-13.532 8.69-21.732zm-216.2 262.3-46.42-131.5c9.734-12.28 15.79-27.6 15.79-44.49 0-39.77-32.24-72-72.01-72-39.76 0-71.99 32.24-71.99 72.01 0 16.89 6.06 32.18 15.79 44.46l-46.36 131.52c-4.406 12.5 2.126 26.22 14.63 30.63 2.57 1.87 5.27 2.27 7.07 2.27 9.875 0 19.16-6.157 22.63-16l42.9-121.6c4.686.959 9.507 1.551 14.48 1.551s9.822-.5039 14.51-1.463l42.87 121.5c4.31 9.812 13.61 16.012 22.61 16.012 2.656 0 5.344-.4375 8.001-1.375 13.399-4.425 19.899-18.125 15.499-31.525zm-127.5-176c0-13.23 10.77-24 24-24s24 10.77 24 24-10.77 24-24 24c-12.3 0-24-9.9-24-24z"/>
        <path d="m488.6 269.9-96.7 33.73c-.1914-39.75-32.58-71.82-72.33-71.63-40.47.2-72.47 32.4-72.47 72 .0801 15.91 5.387 31.29 15.27 43.76l-127 43.69c-8.754 3.008-18.05-.7051-21.27-8.479l-7.9-21.071-64.02 26.5c-8.162 3.381-17.52-.4935-20.9-8.658l-20.06-48.42c-3.377-8.166.4967-17.52 8.659-20.91l64.08-26.55-8.749-21.062c-3.22-8.7.72-17 9.04-21.1l335.1-163.2z" opacity=".4"/>
      </svg>
    </svg>
  )
}

function FilterIcon(props) {
  return (
    <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
      <svg fill="#a2a3a3" height="32" viewBox="0 0 512 512" width="32">
      <path d="m512 160c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-320 128c53 0 96 42.1 96 96 0 53-43 96-96 96-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96zm-32 96c0 17.7 14.33 32 32 32 17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32z"/>
    <path d="m325.5 192h-293.5c-17.67 0-32-14.3-32-32s14.33-32 32-32h293.5c-3.6 10-5.5 20.8-5.5 32s1.9 21.1 5.5 32zm-133.5 160c0-11.2-1.9-22-5.5-32h293.5c17.7 0 32 14.3 32 32s-14.3 32-32 32h-293.5c3.6-10.9 5.5-20.8 5.5-32z" opacity=".4"/>
    </svg>
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function ExploreScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Expert Guidance</AppScreen.Title>
        <AppScreen.Subtitle>
        A curated list of <span className="text-white">the most sought after experts </span> delivering advice.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div>
          <Image src={'/ExplorePage.png'} alt='explore page' quality={100} width={320} height={100}/>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ExploreModal({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Answers for Questions</AppScreen.Title>
        <AppScreen.Subtitle><span className="text-white">Solve</span> your problems</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
          <>
        <div>
        <Image src={'/ExplorePage.png'} alt='filter content modal' quality={100} width={340} height={140}/>

        <div className='absolute left-0 bottom-0'>
          <Image src={'/ExploreModal.png'} alt='filter content modal' quality={100} width={340} height={140}/>
          </div>
        </div>
        </>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function HomeScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Learn How To Live</AppScreen.Title>
        <AppScreen.Subtitle>
          Life feels harder today for young people like you. <span className="text-white">We’re here to help.</span>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div>
          <Image src={'/HomeScreen.png'} alt='filter content modal' quality={100} width={340} height={140}/>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#FFD700" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            {/* <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            > */}
              {features.map((feature, featureIndex) => {
               return selectedIndex === featureIndex && featureIndex === 1 ? (
                <>
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated={featureIndex === 1 ? false : true}
                      custom={{ isForwards, changeCount }}
                    />

                  </Tab.Panel>
                  </>
                ) : selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              })}
            {/* </AnimatePresence> */}
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#FFD700"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-4 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            A social platform for real personal growth.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
          Direct Access to Experts: Morals connects you efficiently with the
          world’s leading minds for personal and professional development.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
