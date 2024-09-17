import { DigiHeaderNavigation, DigiHeaderNavigationItem } from "@digi/arbetsformedlingen-react"
import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { AdContext } from "../context/AdContext"

export const Navbar = () => {
  const [isCurrentPage, setIsCurrentPage] = useState({
    home: true,
    saved: false
  })

  const savedAds = useContext(AdContext);
  const handleClick = (currentPage: string) => {
    if (currentPage === "home") {
      setIsCurrentPage({
        home: true,
        saved: false
      })
    } else {
      setIsCurrentPage({
        home: false,
        saved: true
      })
    }
  }

  return (
    <section className="header-content">
      <div className="logoContainer">
        <a href="/">
          <div className="logo">
            <img className="logo" src="logo\logo.png" alt="logo" />
          </div>
        </a>

        <h1 className="logo-title">| KarriärJakten</h1>
      </div>
      <div className="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <NavLink to={"/"}><DigiHeaderNavigationItem afCurrentPage={isCurrentPage.home} onClick={() => handleClick("home")}>
            <a href="/">Hem</a>
          </DigiHeaderNavigationItem></NavLink>

          <NavLink to={"/saved"}><DigiHeaderNavigationItem afCurrentPage={isCurrentPage.saved} onClick={() => handleClick("saved")}>
            <a href="/">Sparade <span className="accent-color">({savedAds.savedAds.length})</span></a>
          </DigiHeaderNavigationItem></NavLink>

        </DigiHeaderNavigation>
      </div>
    </section>


  )
}
