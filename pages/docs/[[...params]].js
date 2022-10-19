import { userRouter } from 'next/router'
import React from 'react'
export default function Doc() {
  const router = userRouter()
  const { params = [] } = router.query
  console.log(params)
  return (
    <div>
      <h1> /pages/doc/... </h1>
    </div>
  )
}
