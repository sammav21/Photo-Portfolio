import {Bebas_Neue} from 'next/font/google';
import STREET from '@public/assets/Street';
import PhotoDisplay from '@components/PhotoDisplay';
import Image from 'next/image';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function Street() {
  const images = Object.values(STREET);
  let displayedImage = '';
  const highlightImage = (url) => {
    if(displayedImage == url){
      return displayedImage = '';
    } else{
      return displayedImage = url;
    }
  }
  return (
    <div className="photos-Wrapper flex-col-center" >
      <h1 className='page-Title  background-display-text'  style={bebas_neue.style}>STREET</h1>
      {displayedImage != '' && <Image src={displayedImage}/>}
      <PhotoDisplay images={images}/>
    </div>
  )
}
