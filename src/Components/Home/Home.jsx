import React from 'react'
import { NavBar } from '../NavBar'
import phone from '../../Assets/Image/Png/hero_section/phone_div.png'

export const Home = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center min-vh-100 bg_voilat">
        <NavBar />
        <div className="container flex-grow-1 row mt-5">
          <div className="col-7">
            <div>
              <h1 className=" ff_inter fs_72 fw_700 text_purple m-0">
                PLAY BIG <br /> WIN BIGGER !
              </h1>
              <p className=" ff_inter fw_700 fs_34 text_purple mt-3">
                250+ INDIAN CASINO CAMES AVAILABLE
              </p>
              <div className="d-flex mt-5 gap-5">
                <button className=" btn ff_inter fw_600 fs_20 text_purple sports_Betting_btn px-4 py-2 text-nowrap">
                  Sports Betting
                </button>
                <button className=" btn ff_inter fw_600 fs_20 text_purple sports_Betting_btn px-4 py-2 text-nowrap">
                  Casino Game
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div>
              <img src={phone} alt="</div>" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
