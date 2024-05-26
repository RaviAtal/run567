import React from 'react'
import { NavBar } from '../NavBar'

export const Aviator = () => {
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 ">
        <NavBar />
        <div className="container-lg flex-grow-1 d-flex align-items-center">
          <p>Aviator</p>
        </div>
      </section>
    </>
  )
}
