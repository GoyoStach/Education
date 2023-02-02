import { useEffect, useState } from 'react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import MainLayout from '@/Layout/MainLayout'
import { NavigationMenu } from '@/components/NavigationMenu'
import { NextPage } from 'next'
import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

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
          'flex h-screen w-screen flex-col items-center justify-center bg-rosePineDawn-base dark:bg-rosePineMoon-base',
          'lg:grid lg:grid-cols-3 lg:items-start lg:justify-start',
        )}
      >
        <section
          className={clsx(
            'prose prose-zinc flex flex-col items-center justify-center dark:prose-invert',
            'lg:col-span-1 lg:h-full lg:w-full lg:items-start lg:justify-start lg:prose-xl',
          )}
        >
          <h1 className="px-10 pt-10 text-rosePineDawn-text dark:text-rosePineMoon-text">
            Goyo Hub
          </h1>
          <div className={clsx('hidden', 'px-5 lg:flex lg:w-full')}>
            <Separator />
          </div>
        </section>
        <section
          className={clsx('visible flex flex-col gap-y-10', 'lg:hidden')}
        >
          <AspectRatio
            ratio={3 / 4}
            className="overflow-hidden rounded-md"
          >
            <Image
              src="/obsidianToAstro.png"
              alt="obsidian to astro"
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </AspectRatio>
          <NavigationMenu />
        </section>
        <section
          className={clsx(
            'hidden lg:col-span-2 lg:flex',
            'h-full w-full flex-grow-0 flex-col items-center justify-center',
          )}
        >
          <div className="relative h-2/3 w-1/2">
            <Image
              src="/obsidianToAstro.png"
              alt="obsidian to astro"
              fill
              className="object-contain transition-all hover:scale-105"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
