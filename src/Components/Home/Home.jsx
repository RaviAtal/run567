import React from 'react'
import { NavBar } from '../NavBar'

export const Home = () => {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 ">
        <NavBar />
        <div className="container flex-grow-1 d-flex align-items-center">
          <h1>PLAY BIG WIN BIGGER !</h1>
        </div>
      </section>
    </>
  )
}
