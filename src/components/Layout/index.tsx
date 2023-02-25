import React, { PropsWithChildren, useEffect, useState } from "react"
import { NextRouter, useRouter } from "next/router"
import Image from "next/image"
import { NavItem } from "./types"
import { BurgerIcon } from "./BurgerIcon"
import { NavItems } from "./NavItems"
import { BurgerMenu } from "./BurgerMenu"
import pdpsi from "public/img/pdpsi.png"

const NavLinks: NavItem[] = [
  { name: "HOME", to: "/" },
  { name: "ABOUT", to: "/about" },
  { name: "BROTHERS", to: "/brothers" },
  { name: "RUSH", to: "/rush" },
]

const Layout = ({ children }: PropsWithChildren) => {
  const router: NextRouter = useRouter()
  const burgerMenuRef = React.useRef<HTMLInputElement>(null)
  const burgerIconRef = React.useRef<HTMLInputElement>(null)
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  const clickedBurger: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if (showBurgerMenu) {
      burgerMenuRef.current!.style.width = "0%"
      setShowBurgerMenu(false)
    } else {
      setShowBurgerMenu(true)
      burgerMenuRef.current!.style.width = "calc(100vw - 4.5rem)"
    }
  }

  const clickedBurgerItem = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (showBurgerMenu) {
      burgerMenuRef.current!.style.width = "0%"
      setShowBurgerMenu(false)
      router.push(to + "#top")
    }
  }

  function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          showBurgerMenu &&
          ref.current &&
          !ref.current.contains(e.target as HTMLElement) &&
          !burgerIconRef.current?.contains(e.target as HTMLElement)
        ) {
          ref.current!.style.width = "0%"
          setShowBurgerMenu(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    })
  }
  useOutsideAlerter(burgerMenuRef)

  return (
    <>
      <div id="main">
        <div id="top" />
        <header>
          <Image src={pdpsi} onClick={() => router.push("/")} alt={"PDPsi"} />
          <nav>
            <NavItems navItems={NavLinks} />
            <BurgerIcon ref={burgerIconRef} handleClick={clickedBurger} />
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <a href="https://www.instagram.com/cornellpdpsi/" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/Cornellpideltapsi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FACEBOOK
          </a>
          <div className="footerRight">
            <div>© 2023 Cornell Pi Delta Psi Fraternity, Inc.</div>
            <div>Website by Joshua Guo</div>
          </div>
        </footer>
      </div>
      <BurgerMenu ref={burgerMenuRef} navItems={NavLinks} handleClick={clickedBurgerItem} />
    </>
  )
}
Layout.displayName = "Layout"

export default Layout
