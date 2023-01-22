import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

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
              'rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            Overview
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
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 w-full rounded-md bg-rosePineDawn-overlay p-4 dark:bg-rosePineMoon-overlay"></div>

                <div className="col-span-4 flex w-full flex-col space-y-3 rounded-md bg-rosePineDawn-base p-4 dark:bg-rosePineMoon-base">
                  <div className="h-12 w-full rounded-md bg-rosePineDawn-overlay dark:bg-rosePineMoon-overlay"></div>
                  <div className="h-12 w-full rounded-md bg-rosePineDawn-overlay dark:bg-rosePineMoon-overlay"></div>
                  <div className="h-12 w-full rounded-md bg-rosePineDawn-overlay dark:bg-rosePineMoon-overlay"></div>
                  <div className="h-12 w-full rounded-md bg-rosePineDawn-overlay dark:bg-rosePineMoon-overlay"></div>
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={clsx(
              'rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
            Resources
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
                  href="https://tailwindcss.com"
                >
                  <span className="text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                    Tailwind CSS
                  </span>

                  <div className="mt-1 text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                    A utility-first CSS framework for rapidly building custom
                    user interfaces.
                  </div>
                </NavigationMenuPrimitive.Link>

                <NavigationMenuPrimitive.Link
                  className={clsx(
                    'w-full rounded-md px-4 py-3 hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
                    'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
                  )}
                  href="https://www.radix-ui.com"
                >
                  <span className="text-sm font-medium text-rosePineDawn-text dark:text-rosePineMoon-text">
                    Radix UI
                  </span>

                  <div className="mt-1 text-sm text-rosePineDawn-muted dark:text-rosePineMoon-subtle">
                    An open-source UI component library for building
                    high-quality, accessible design systems and web apps.
                  </div>
                </NavigationMenuPrimitive.Link>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={clsx(
              'rounded-md px-3 py-2 text-sm hover:bg-rosePineDawn-overlay dark:hover:bg-rosePineMoon-overlay',
              'text-sm font-medium',
              'text-rosePineDawn-text dark:text-rosePineMoon-text',
              'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
            )}
          >
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
