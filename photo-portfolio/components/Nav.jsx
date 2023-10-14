'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {Bebas_Neue, Roboto_Condensed} from 'next/font/google';
import { useState, useEffect } from "react";
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
  const pathname = usePathname();
 

  const closeMenus = () => {
    if(dropDownVisible){
      setDropDownVisible(false)
    }
    if(mobileMenuOpen){
      setMobileMenuOpen(false)
    }
  }
  
  useEffect(() => {
    closeMenus();
  }, [pathname]);

  return (
    <nav className="flex-row-between" style={bebas_neue.style}>
        <Link  className='link navBtn' href='/'><h3 className='primary-Heading'>Samuel Avilés</h3></Link>
        <div className="rightheader">
        <span className="mobileMenu-Icon" id={mobileMenuOpen ? 'mobileMenu-X' : undefined}>
            <Hamburger toggled={mobileMenuOpen} toggle={setMobileMenuOpen}/>
        </span>
        
          <div className="webMenu-Container flex-center flex-responsive-direction">
            <div className="web-Work-Container flex-col-center btn-Margin-Horizontal">
              <button className="navBtn" style={bebas_neue.style} onClick={() => setDropDownVisible(!dropDownVisible)}>
                <p className='secondary-Heading'>Work</p>
              </button>
              <div className='web-LinkDropDown-Container w100 flex' id={dropDownVisible ? 'web-LinkDropDown-Open' : undefined} style={roboto_condensed.style}>
                  <Link className="dropBtn dropBtn-Margin-Rectangle" href='/main/street'><p className="small-text">Street</p></Link>
                  <Link className="dropBtn dropBtn-Margin-Rectangle" href='/main/people'><p className="small-text">People</p></Link>
                  <Link className="dropBtn dropBtn-Margin-Rectangle" href='/main/places'><p className="small-text">Places</p></Link>
                  <Link className="dropBtn dropBtn-Margin-Rectangle" href='/main/series'><p className="small-text">Series</p></Link>
              </div>
            </div>
            <Link href='/main/about' className="navBtn"><p className='secondary-Heading'>About</p></Link>
          </div>
          
          <div className="mobileMenu-Container flex flex-responsive-direction w100" id={mobileMenuOpen ? 'mobileMenu-Open' : undefined}>
            <div className="mobileMenu-Content flex-col-center">
            <div className="mobile-Work-Container flex-col-center">
              <button className="navBtn" style={bebas_neue.style} onClick={() => setDropDownVisible(!dropDownVisible)}>
                <p className='mobile-dropdown-primary'>Work</p>
              </button>
              <div className="w100 flex-col-center mobile-LinkDropDown-Container" id={dropDownVisible ? 'mobile-LinkDropDown-Open' : undefined} style={roboto_condensed.style}>
                  <Link className="mobile-dropBtn btn-Margin-Vertical" href='/main/street'><p className="mobile-dropdown-secondary">Street</p></Link>
                  <Link className="mobile-dropBtn btn-Margin-Vertical" href='/main/people'><p className="mobile-dropdown-secondary">People</p></Link>
                  <Link className="mobile-dropBtn btn-Margin-Vertical" href='/main/places'><p className="mobile-dropdown-secondary">Places</p></Link>
                  <Link className="mobile-dropBtn btn-Margin-Vertical" href='/main/series'><p className="mobile-dropdown-secondary">Series</p></Link>
              </div>
            </div>
            <Link href='/main/about' className="navBtn"><p className='mobile-dropdown-primary'>About</p></Link>
            </div>
          </div>
        </div>
    </nav>
  )
}
