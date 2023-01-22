import React, { FC } from 'react'

import { NavigationMenu } from '@/components/NavigationMenu'

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      <main className="prose prose-zinc mx-auto dark:prose-invert lg:prose-xl">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
