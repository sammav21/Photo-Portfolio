'use client'
import Link from "next/link";
import {Bebas_Neue, Roboto_Condensed} from 'next/font/google';
import { useState } from "react";

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '300'
});
export default function Nav() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="flex-row-between" style={bebas_neue.style}>
        <Link  className='link navBtn' href='/'><h3 className='primary-Heading'>Samuel Avilés</h3></Link>
        <div className="rightheader flex-row-center">
          <div className="dropMenu-Wrapper flex-col-center btn-Margin-Horizontal">
            <button className="navBtn" style={bebas_neue.style} onClick={() => setMenuVisible(!menuVisible)}>
              <p className='secondary-Heading'>Work</p>
            </button>
            <div className={menuVisible ? "w100 flex-col-center dropMenuVisible": "dropMenuHidden"} style={roboto_condensed.style}>
                <Link className="dropBtn btn-Margin-Vertical" href='/main/street'><p className="smallText">Street</p></Link>
                <Link className="dropBtn btn-Margin-Vertical" href='/main/portraits'><p className="smallText">People</p></Link>
                <Link className="dropBtn btn-Margin-Vertical" href='/main/places'><p className="smallText">Places</p></Link>
            </div>
          </div>
          <Link href='/main/about' className="navBtn"><p className='secondary-Heading'>About</p></Link>
        </div>
    </nav>
  )
}
