import {Bebas_Neue} from 'next/font/google';
import PLACES from '@public/assets/Places'
import PhotoDisplay from '@components/PhotoDisplay';


const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});


export default function Places() {
  const images = Object.values(PLACES);
  
  return (
    <div className="content">
        <h1 className="photoPageTitle"  style={bebas_neue.style}>PLACES</h1>
        <PhotoDisplay images={images}/>
    </div>
  )
}
