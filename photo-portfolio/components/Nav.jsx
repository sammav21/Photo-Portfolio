'use client'
import Link from "next/link";
import {Bebas_Neue} from 'next/font/google';
import { useState } from "react";
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
})
export default function Nav() {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="flex-row-between" style={bebas_neue.style}>
        <Link  className='logo' href='/'>Samuel Avilés</Link>
        <div className="rightheader flex-row-center">
            <div className="dropMenu-Wrapper flex-col">
            <button className="navBtn" style={bebas_neue.style} onClick={() => setMenuVisible(!menuVisible)}>Work</button>
                <div className={menuVisible ? "w100 flex-col dropMenuVisible": "dropMenuHidden"}>
                    <Link className="dropBtn" id="btn" href='/main/street'>Street</Link>
                    <Link className="dropBtn" href='/main/portraits'>People</Link>
                    <Link className="dropBtn" href='/main/places'>Places</Link>
                </div>
            </div>
            <Link  className="navBtn" href='/main/about'>About</Link>
        </div>
    </nav>
  )
}
