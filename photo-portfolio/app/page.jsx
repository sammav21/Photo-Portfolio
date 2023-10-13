'use client'
import Image from 'next/image';
import Link from 'next/link';
import {Bebas_Neue, Roboto_Condensed} from 'next/font/google';
import HOMEPIC from '@public/assets/Street/street19.jpg';
import { useState } from 'react';

const bebas_neue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
});
const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '300'
});
export default function Home() {
    const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="home-Wrapper flex-col-center" >
        <Image src={HOMEPIC} alt="pink sky with clouds" priority={true} style={{width:'100%', height: '100%', objectFit: 'cover', objectPosition: '40% 100%',zIndex: '-1', position: 'absolute'}}/>
        <h1 className='home-display-text' style={bebas_neue.style}>Samuel Avilés</h1>
        <div className="homeButtons-Wrapper flex-center">
            <button className="link-Home btn-Margin-Horizontal" onClick={() => setMenuVisible(!menuVisible)}>
              <p className='primary-Heading' style={bebas_neue.style}>Work</p>
            </button>
            <Link className="link-Home link btn-Margin-Horizontal"  href="/main/about">
              <p className='primary-Heading' style={bebas_neue.style}>About</p>
            </Link>
        </div>
        <div className={menuVisible ? 'menuVisible': 'menuHidden'} style={roboto_condensed.style}>
            <Link className='link btn-Padding-Rectangle btn-Home'  href='/main/street'><p className='secondary-Heading'>Street</p></Link>
            <Link className='link btn-Padding-Rectangle btn-Home'  href="/main/people"><p className='secondary-Heading'>People</p></Link>
            <Link className='link btn-Padding-Rectangle btn-Home' href="/main/places"><p className='secondary-Heading'>Places</p></Link>
            <Link className='link btn-Padding-Rectangle btn-Home' href="/main/series"><p className='secondary-Heading'>Series</p></Link>
        </div>
    </div>
  )
}
