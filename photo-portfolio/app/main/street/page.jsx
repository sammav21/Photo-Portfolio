import {Bebas_Neue} from 'next/font/google';
import STREET from '@public/assets/Street';
import PhotoDisplay from '@components/PhotoDisplay';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function Street() {
  const images = Object.values(STREET);
  return (
    <div className="content" >
      <h1 className='photoPageTitle'  style={bebas_neue.style}>STREET</h1>
      <PhotoDisplay images={images}/>
    </div>
  )
}
