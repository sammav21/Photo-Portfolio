import {Bebas_Neue} from 'next/font/google';
import PLACES from '@public/assets/Places'
import Image from 'next/image';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});


export default function Places() {
  const images = Object.values(PLACES);
  
  return (
    <div className="content">
        <h1 id="placesTitle"  style={bebas_neue.style}>PLACES</h1>
        <div className='photos-Wrapper flex-col-center'>
          {images.map((image, i) => (
            <Image  key={i} src={image.default} alt={`image ${i+1}`} style={{width: '65%', height: 'auto', alignSelf: `${i%2 == 0 ? 'flex-start' : 'flex-end'}`, margin: '0rem 1.5rem 1rem', boxShadow: `${i%2 == 0 ? '-1rem 0.5rem 1rem #28282b25' : '1rem 0.5rem 1rem #28282b25'}`}}/>
          ))}
        </div>
    </div>
  )
}
