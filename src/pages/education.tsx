'use-client'

import { Breadcrumb, Button, Carousel, Sidebar, Timeline } from 'flowbite-react'
import {
  CaretLeftIcon,
  CaretRightIcon,
  ChevronLeftIcon,
} from '@radix-ui/react-icons'
import { FunctionComponent, SVGProps, useEffect, useState } from 'react'
import { RxClipboard, RxSpeakerOff } from 'react-icons/rx'

import { EducationEvent } from 'types/types'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { NextPage } from 'next'
import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

const data: EducationEvent[] = [
  {
    id: 1,
    img: '/education/isep.png',
    time: 'September 2021',
    title: "Graduation ISEP (Institut supérieur d'électronique de Paris)",
    content:
      'Ingeneer certified by the french government (Bac +5).\n Since this is a french specific diploma, it also qualifies as a master degree.',
  },
  {
    id: 2,
    img: '/education/keyrus.jpg',
    time: 'March 2021 - September 2021',
    title: 'Internship at Keyrus',
    content:
      'End of study internship, worked as a full stack Javascript developper. For more informations check out the work experience section.',
  },
  {
    id: 3,
    img: '/education/inha.png',
    time: 'August 2020 - January 2021',
    title: 'Exchange semester at Inha University',
    content:
      'As part of my master degree, I did an exchange semester in the university of Inha, in Incheon, South Korea. \n Altough our courses were online, I was still able to get to South Korea and experience the culture.',
  },
  {
    id: 3,
    img: '/education/trilogy.png',
    time: 'January 2020 - August 2020',
    title: 'Internship at Trilogy Technologies',
    content:
      '6 months internship during the 4th year of my master degree. \n The company was located in Singapore. \n I worked as in the R&D department of the company on RFID subjects and Mobile sofware development.',
  },
  {
    id: 4,
    img: '/education/glyndwr.png',
    time: 'January 2018 - June 2018',
    title: 'Exchange semester at Wrexham Glyndŵr',
    content:
      'Exchange semester in Wrexham Glyndŵr, Wales, UK. \n Studied software development & computer ethics.',
  },
  {
    id: 5,
    img: '/education/isep.png',
    time: 'September 2016 - September 2021',
    title: 'ISEP ( Undergraduate & Master Degree )',
    content:
      'My whole student experience after my French baccalaureat. \n Lasted for 5 years, see the above sections for more details about the specific events.',
  },
  {
    id: 5,
    img: '/education/saint-charles.png',
    time: 'June 2016',
    title: 'High School graduation & Baccalaureat',
    content:
      'My high school was located in Vienne, Isère, France. \n Lasted for 3 years in which at the end I obtained the french baccalaureat with honors.',
  },
]

const Home: NextPage = () => {
  const [themeColor, setThemeColor] = useState('dark')
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setThemeColor('dark')
    } else {
      setThemeColor('')
    }
  }, [themeColor])

  return (
    <div className={clsx(themeColor)}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main
        className={clsx(
          'flex min-h-screen flex-col items-center justify-center bg-rosePineDawn-base dark:bg-rosePineMoon-base',
        )}
      >
        <section
          className={clsx(
            'prose prose-zinc flex flex-col  dark:prose-invert',
            'lg:col-span-1 lg:h-full lg:w-full lg:prose-xl',
          )}
        >
          <h1 className="flex items-center justify-center pt-5 !text-rosePineDawn-text dark:!text-rosePineMoon-text">
            Goyo Hub
          </h1>
          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="!flex !items-start !justify-start  [&>ol>li>svg]:!text-rosePineDawn-subtle [&>ol>li>svg]:dark:!text-rosePineMoon-subtle"
          >
            <Breadcrumb.Item>
              <Link
                href="/"
                className="!text-rosePineDawn-text dark:!text-rosePineMoon-text"
              >
                Hub
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                href="/education"
                className="!text-rosePineDawn-text dark:!text-rosePineMoon-text"
              >
                Education
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Separator />
          <Timeline className="m-10 flex flex-col items-center">
            {data.map(event => {
              return (
                <Timeline.Item>
                  <Timeline.Point className="[&>*]:!bg-rosePineDawn-subtle dark:[&>*]:!bg-rosePineMoon-subtle " />
                  <Timeline.Content>
                    <Timeline.Time className="!text-rosePineDawn-subtle dark:!text-rosePineMoon-subtle">
                      {event.time}
                    </Timeline.Time>
                    <img
                      src={event.img}
                      className="h-24 bg-white p-2"
                    />
                    <Timeline.Title className="!text-rosePineDawn-text dark:!text-rosePineMoon-text">
                      {event.title}
                    </Timeline.Title>
                    <Timeline.Body className="whitespace-pre-line !text-rosePineDawn-foam dark:!text-rosePineMoon-foam">
                      {event.content}
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              )
            })}
          </Timeline>
          <div>
            <Separator />
            Footer to be declared here
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
