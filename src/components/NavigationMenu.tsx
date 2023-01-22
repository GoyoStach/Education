import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import {
  BackpackIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  KeyboardIcon,
  LaptopIcon,
  PlusCircledIcon,
  PlusIcon,
} from '@radix-ui/react-icons'

import React from 'react'
import { clsx } from 'clsx'

const NavigationMenu = () => {
  return (
    <NavigationMenuPrimitive.Root className="relative flex justify-center">
      <NavigationMenuPrimitive.List
        className={clsx(
          ' flex flex-row space-x-2 rounded-lg p-2',
          'bg-rosePineDawn-surface',
          'dark:bg-rosePineMoon-surface',
        )}
      >
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={clsx(
              'flex items-center rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            <LaptopIcon className="h-8 w-8 object-cover pr-1" />
            Main Projects
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={clsx(
              'absolute top-0 left-0 w-auto rounded-lg',
              'radix-motion-from-start:animate-enter-from-left',
              'radix-motion-from-end:animate-enter-from-right',
              'radix-motion-to-start:animate-exit-to-left',
              'radix-motion-to-end:animate-exit-to-right',
            )}
          >
            <div className="w-[21rem] bg-rosePineDawn-surface p-3 dark:bg-rosePineMoon-surface lg:w-[23rem]">
              <div className="flex w-full flex-col space-y-3 rounded-md bg-rosePineDawn-base p-4 dark:bg-rosePineMoon-base">
                <div className="grid w-full grid-cols-6 justify-start rounded-md bg-rosePineDawn-overlay p-1 dark:bg-rosePineMoon-overlay">
                  <div className="col-span-2 flex items-center justify-center rounded-md">
                    <img
                      className="h-[100%] w-[100%] object-cover p-2"
                      src="/astro.svg"
                      alt="astro"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col justify-center gap-y-1">
                    <span className="text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                      Obsidian to Astro
                    </span>
                    <div className="text-justify text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                      Exposing my Obsidian notes to a hosted Astro blog.
                    </div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-6 justify-start rounded-md bg-rosePineDawn-overlay p-1 dark:bg-rosePineMoon-overlay">
                  <div className="col-span-2 flex items-center justify-center rounded-md">
                    <img
                      className="h-[100%] w-[100%] object-cover p-2"
                      src="/astro.svg"
                      alt="astro"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col justify-center gap-y-1">
                    <span className="text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                      Obsidian to Astro
                    </span>
                    <div className="text-justify text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                      Exposing my Obsidian notes to a hosted Astro blog.
                    </div>
                  </div>
                </div>
                <div className=" w-full justify-center rounded-md bg-rosePineDawn-overlay p-1 dark:bg-rosePineMoon-overlay">
                  <div className="flex flex-col items-center justify-center p-2">
                    <span className="text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                      See More ...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={clsx(
              'flex items-center rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            <BackpackIcon className="h-8 w-8 object-cover pr-1" />
            Career
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={clsx(
              'absolute top-0 left-0 w-auto rounded-lg',
              'radix-motion-from-start:animate-enter-from-left',
              'radix-motion-from-end:animate-enter-from-right',
              'radix-motion-to-start:animate-exit-to-left',
              'radix-motion-to-end:animate-exit-to-right',
            )}
          >
            <div className="w-[16rem] bg-rosePineDawn-surface p-3 dark:bg-rosePineMoon-surface lg:w-[18rem] ">
              <div className="flex w-full flex-col space-y-2">
                <NavigationMenuPrimitive.Link
                  className={clsx(
                    'w-full rounded-md px-4 py-3 hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
                    'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
                  )}
                  href="https://portfolio-guillaume-omega.vercel.app/"
                >
                  <span className="flex items-center gap-x-1 text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                    Work Experiences
                    <ExternalLinkIcon />
                  </span>

                  <div className="mt-1 text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                    Summary of all my past and current work experiences.
                    Includes technical stack used for each project.
                  </div>
                </NavigationMenuPrimitive.Link>

                <NavigationMenuPrimitive.Link
                  className={clsx(
                    'w-full rounded-md px-4 py-3 hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
                    'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
                  )}
                  href="https://portfolio-guillaume-omega.vercel.app/"
                >
                  <span className="flex items-center gap-x-1 text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                    Education
                    <ExternalLinkIcon />
                  </span>

                  <div className="mt-1 text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                    Everything related to my education !
                  </div>
                </NavigationMenuPrimitive.Link>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/GoyoStach/"
            className={clsx(
              'flex items-center rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            <GitHubLogoIcon className="h-8 w-8 object-cover pr-1" />
            GitHub
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator
          className={clsx(
            'z-10',
            'top-[100%] flex h-2 items-end justify-center overflow-hidden',
            'radix-state-visible:animate-fade-in',
            'radix-state-hidden:animate-fade-out',
            'transition-[width_transform] duration-[250ms] ease-[ease]',
          )}
        >
          <div className="relative top-1 h-2 w-2 rotate-45 bg-white dark:bg-gray-800" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div
        className={clsx('absolute flex justify-center', 'top-[100%]')}
        style={{
          perspective: '2000px',
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={clsx(
            'relative mt-2 overflow-hidden rounded-md bg-rosePineDawn-surface shadow-lg dark:bg-rosePineMoon-surface',
            'w-radix-navigation-menu-viewport',
            'h-radix-navigation-menu-viewport',
            'radix-state-open:animate-scale-in-content',
            'radix-state-closed:animate-scale-out-content',
            'duration-600 origin-[top_center] transition-[width_height] ease-[ease]',
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  )
}

export { NavigationMenu }
