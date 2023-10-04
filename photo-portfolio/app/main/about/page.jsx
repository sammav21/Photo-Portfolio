import aboutPic from '@public/assets/ABOUT.jpg';
import {Roboto_Condensed, Bebas_Neue} from 'next/font/google';
import Image from 'next/image';

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '300'
});
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});
export default function About() {
  return (
    <>
     <h1 className='photoPageTitle'  style={bebas_neue.style}>ABOUT</h1>
    <div className="aboutContent-Wrapper flex">
        <Image id="pic" src={aboutPic} style={{width: '35%', height: 'auto', boxShadow: '0rem 0.5rem 1rem #28282b5e'}}/>
        <div className="aboutText-Wrapper flex-col" style={roboto_condensed.style}>
          <div className='bio'>
            <p><span>Samuel Avilés is a photographer born, raised, and based in the Bronx.</span> <span>Shooting since 2012, he documents life as he experiences it with a focus on people and journalism.</span><br/><span>And that's about it really.</span><br/><br/></p>
          </div>
          <div className='actionCall'>
            <p><span>for business inquiries please email S.Aviles0621@gmail.com</span></p><p><span>or message me on <a href="https://www.instagram.com/saviles621/">instagram</a></span></p>
          </div>
        </div>
    </div>
    </>
  )
}
