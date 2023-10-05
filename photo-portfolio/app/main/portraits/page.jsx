import {Bebas_Neue} from 'next/font/google';
import PORTRAITS from '@public/assets/Portrait';
import PhotoDisplay from '@components/PhotoDisplay';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function People() {
  const images = Object.values(PORTRAITS);
  return (
    <div className="photos-Wrapper flex-col-center">
      <h1 className='page-Title background-display-text' style={bebas_neue.style}>PEOPLE</h1>
      <PhotoDisplay images={images}/>
    </div>
  )
}
