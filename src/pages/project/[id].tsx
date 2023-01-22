import MainLayout from '@/Layout/MainLayout'
import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

type Props = {}

const Project: NextPage = (props: Props) => {
  const router = useRouter()
  const id = router.query.id! as string

  return (
    <MainLayout>
      <h1>ProjectPage</h1>
      <p>{id}</p>
    </MainLayout>
  )
}

export default Project
