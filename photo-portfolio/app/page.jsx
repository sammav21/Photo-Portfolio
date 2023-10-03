'use client'
import Image from 'next/image';
import Link from 'next/link';
import {Bebas_Neue} from 'next/font/google';
import HOMEPIC from '@public/assets/HOMEPIC.jpg'
import { useState } from 'react';

const bebas_neue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
});

export default function Home() {
    const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="home-Wrapper flex-col-center" style={bebas_neue.style}>
        <Image src={HOMEPIC} alt="pink sky with clouds" style={{width:'100%', height: '100%', objectFit: 'cover', 
      zIndex: '-1', position: 'absolute'}}/>
        <h1 id="home-Title">Samuel Avilés</h1>
        <div className="homeButtons-Wrapper flex-row-center">
            <button className="home-Btn" onClick={() => setMenuVisible(!menuVisible)}>Work</button>
            <button className="home-Btn"><Link className="h-btn" href="/main/about">About</Link></button>
        </div>
        <ul className={menuVisible ? 'menuVisible': 'menuHidden'}>
            <li><Link className='link'  href='/main/street'>Street</Link></li>
            <li><Link className='link'  href="/main/portraits">Portraits</Link></li>
            <li><Link className='link' href="/main/places">Places</Link></li>
        </ul>
    </div>
  )
}
