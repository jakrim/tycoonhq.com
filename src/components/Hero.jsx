import { useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { Input } from '@material-tailwind/react'
import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { TextField } from '@/components/Fields'
const { Client, LogLevel } = require('@notionhq/client');
// import logoBbc from '@/images/logos/bbc.svg'
// import logoCbs from '@/images/logos/cbs.svg'
// import logoCnn from '@/images/logos/cnn.svg'
// import logoFastCompany from '@/images/logos/fast-company.svg'
// import logoForbes from '@/images/logos/forbes.svg'
// import logoHuffpost from '@/images/logos/huffpost.svg'
// import logoTechcrunch from '@/images/logos/techcrunch.svg'
// import logoWired from '@/images/logos/wired.svg'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#000"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF900" />
            <stop offset="1" stopColor="#FFF900" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#000"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// function PlayIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//       <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
//       <path
//         d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
//         fill="#A3A3A3"
//         stroke="#A3A3A3"
//       />
//     </svg>
//   )
// }

// const gifAppPreview = require('/TycoondesignGIF.gif')

function AppDemo() {
  return (
    <div className="top-[100%)] absolute">
      <Image
        src={'/TycoondesignGIF.gif'}
        alt="homescreen"
        unoptimized
        quality={100}
        width={318}
        height={100}
      />
    </div>
  )
}

// const { NOTION_API_TOKEN, NOTION_DATABASE_ID } = process.env;

export function Hero() {
  const [emailValue, setEmailValue] = useState('')


  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": e.target.getAttribute("emailInput"),
      ...emailValue,
    }),
  })
    .then(() => console.log('successfully sent:', emailValue))
    .catch((error) => alert(error));

};
// document
//   .querySelector("form")
//   .addEventListener("submit", handleSubmit);

// const notion = new Client({
    //   auth: process.env.NOTION_API_TOKEN,
    //   logLevel: LogLevel.DEBUG,
    // });
    // e.preventDefault()

    // const response = await notion.pages.create({
    //   parent: {
    //     database_id: process.env.NOTION_DATABASE_ID,
    //   },
    //   properties: {
    //     Email: {
    //       title: [
    //         {
    //           text: {
    //             content: e.target.value,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  // }


    // function to call email api
  // }

  return (
    <div className="sm:py-15 overflow-hidden py-20 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              A curated social platform delivering the world’s best people and
              ideas.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              The most successful, influential, and knowledgeable people in one
              place sharing the stories, habits, and ideas that made them
              successful.
            </p>
            <div className="flex-center flex">
              <div className="mt-8 max-w-sm">
                <p className="text-gray-1000 text-xl mb-2">
                  Get first access to our beta!
                </p>
                {/* For bots */}
                <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                  <input type="email" name="email" />
                  <textarea name="message"></textarea>
                </form>
                <form
                  data-netlify="true"
                  name="newsletter-hero"
                  method="POST"
                  className="flex w-full justify-center md:w-auto">
                  <TextField
                    input-name="email"
                    type="email"
                    aria-label="Email address"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="w-60 min-w-0 shrink"
                    value={emailValue}
                    name="email"
                    onChange={((e) => setEmailValue(e.target.value))}
                  />
                  <input type="hidden" name="form-name" value="newsletter-hero" />
                  {/* <input
                    input-name="email"
                    type="email"
                    aria-label="Email address"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="w-60 min-w-0 shrink"
                    value={emailValue}
                    type='text'
                    name="emailInput"
                    onChange={((e) => setEmailValue(e.target.value))}
                  /> */}
                  {/* <input type="submit" className="ml-4 flex-none"/> */}
                  <Button type="submit" color="blue" className="ml-4 flex-none">
                    <span className="hidden lg:inline">Join our newsletter</span>
                    <span className="lg:hidden">Join newsletter</span>
                  </Button>
                </form>
              </div>
            </div>
            <div className=" flex flex-wrap gap-x-6 gap-y-4">
              {/* <AppStoreLink /> */}
              {/* <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch the video</span>
              </Button> */}
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-4 lg:mt-2 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[700px] px-9 [mask-image:linear-gradient(to_bottom,white_90%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          {/* <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"> */}
          {/* <div className="mx-auto mt-70 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"/> */}
          {/* <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p> */}
          {/* <ul
              role="list"
            >
              {[
                ['Forbes', logoForbes],
                ['TechCrunch', logoTechcrunch],
                ['Wired', logoWired],
                ['CNN', logoCnn, 'hidden xl:block'],
                ['BBC', logoBbc],
                ['CBS', logoCbs],
                ['Fast Company', logoFastCompany],
                ['HuffPost', logoHuffpost, 'hidden xl:block'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-8" unoptimized />
                </li>
              ))}
            </ul> */}
          {/* </div> */}
        </div>
      </Container>
    </div>
  )
}
