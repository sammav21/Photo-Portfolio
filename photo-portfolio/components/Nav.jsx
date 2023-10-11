'use client'
import Link from "next/link";
import {Bebas_Neue, Roboto_Condensed} from 'next/font/google';
import { useState } from "react";
import Hamburger from "hamburger-react";
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '300'
});
export default function Nav() {

  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex-row-between" style={bebas_neue.style}>
        <Link  className='link navBtn' href='/'><h3 className='primary-Heading'>Samuel Avilés</h3></Link>
        <div className="rightheader">
        <span className="mobileMenu-Icon" id={mobileMenuOpen ? 'mobileMenu-X' : undefined}>
            <Hamburger toggled={mobileMenuOpen} toggle={setMobileMenuOpen}/>
        </span>
          <div className="webMenu-Container flex-center flex-responsive-direction">
            <div className="dropMenu-Wrapper flex-col-center btn-Margin-Horizontal">
              <button className="navBtn" style={bebas_neue.style} onClick={() => setDropDownVisible(!dropDownVisible)}>
                <p className='secondary-Heading'>Work</p>
              </button>
              <div className={dropDownVisible ? "w100 flex-col-center dropMenuVisible": "dropMenuHidden"} style={roboto_condensed.style}>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/street'><p className="smallText">Street</p></Link>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/portraits'><p className="smallText">People</p></Link>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/places'><p className="smallText">Places</p></Link>
              </div>
            </div>
            <Link href='/main/about' className="navBtn"><p className='secondary-Heading'>About</p></Link>
          </div>
          
          <div className="mobileMenu-Container flex flex-responsive-direction w100" id={mobileMenuOpen ? 'mobileMenu-Open' : 'mobileMenu-Closed'}>
            <div className="mobileMenu-Content flex-col-center">
            <div className="dropMenu-Wrapper flex-col-center btn-Margin-Horizontal">
              <button className="navBtn" style={bebas_neue.style} onClick={() => setDropDownVisible(!dropDownVisible)}>
                <p className='mobile-dropdown-primary'>Work</p>
              </button>
              <div className="w100 flex-col-center linkDropDown-Container" id={dropDownVisible ? 'linkDropDown-Open' :'linkDropDown-Closed'} style={roboto_condensed.style}>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/street'><p className="mobile-dropdown-secondary">Street</p></Link>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/portraits'><p className="mobile-dropdown-secondary">People</p></Link>
                  <Link className="dropBtn btn-Margin-Vertical" href='/main/places'><p className="mobile-dropdown-secondary">Places</p></Link>
              </div>
            </div>
            <Link href='/main/about' className="navBtn"><p className='mobile-dropdown-primary'>About</p></Link>
            </div>
          </div>
        </div>
    </nav>
  )
}
