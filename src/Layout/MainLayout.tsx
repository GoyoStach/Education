import React, { FC } from 'react'

import { NavigationMenu } from '@/components/NavigationMenu'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

const MainLayout: FC<Props> = ({ children, className }) => {
  return (
    <div>
      <NavigationMenu />
      <main
        className={clsx(
          'prose prose-zinc mx-auto dark:prose-invert lg:prose-xl',
          className,
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default MainLayout
