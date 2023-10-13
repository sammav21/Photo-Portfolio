import {Bebas_Neue} from 'next/font/google';
import SERIES from '@public/assets/Series';
import PhotoDisplay from '@components/PhotoDisplay';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function Series() {
  const images = Object.values(SERIES);
  return (
    <div className="photos-Wrapper flex-col-center">
      <h1 className='page-Title background-display-text' style={bebas_neue.style}>SERIES</h1>
      <PhotoDisplay images={images}/>
    </div>
  )
}