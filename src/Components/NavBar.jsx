import React from 'react'
import { Link } from 'react-router-dom'
import nav_logo from '../Assets/Image/Png/NavBar/Nav_logo.png'
import search_icone from '../Assets/Image/Svg/search_icone.svg'

export const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-terti ary bg_purple_common fixed-top py-3">
        <div class="container-fluid">
          <div className=" d-flex">
            <Link to="/">
              <img class="navbar-brand" src={nav_logo} alt="nav_logo" />
            </Link>
            <div className="d-flex bg_light_purple w_44 ps-2 rounded-3">
              <img
                className="w_50 me-3 "
                src={search_icone}
                alt="search_icone"
              />
              <input
                className=" bg_light_purple border-0 fs_16 fw_600 rounded-3 ff_inter text-light ps-2"
                type="search"
                placeholder="Events, Markets, and more"
              />
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 gap-5 pe-3 align-iten-center">
                <li class="nav-item ">
                  <Link
                    class="text-nowrap nav-link active ff_inter fw_400 fs_16 text-light nav_text"
                    aria-current="page"
                    to="/Sports"
                  >
                    Sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="text-nowrap nav-link active ff_inter fw_400 fs_16 text-light nav_text"
                    aria-current="page"
                    to="/Casino"
                  >
                    Casino
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="text-nowrap nav-link active ff_inter fw_400 fs_16 text-light nav_text"
                    aria-current="page"
                    to="/Promotions"
                  >
                    Promotions
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="text-nowrap nav-link active ff_inter fw_400 fs_16 text-light nav_text"
                    aria-current="page"
                    to="/Aviator"
                  >
                    Aviator
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav justify-content-end flex-grow-1 gap-5 pe-3">
                <li class="nav-item">
                  <button className="text-nowrap btn sign_btn ff_inter fs_16 fw_600 text-light px-3 py-2">
                    SIGN IN
                  </button>
                </li>
                <li class="nav-item">
                  <button className="text-nowrap btn sign_btn ff_inter fs_16 fw_600 text-light px-3 py-2">
                    REGISTER
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
