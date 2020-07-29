import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
  const { pageName } = useParams()

  return (
    <div>Page works : {pageName}</div>
  )
}

export default Page
