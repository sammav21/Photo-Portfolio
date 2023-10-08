import {Bebas_Neue} from 'next/font/google';
import Image from 'next/image';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function PhotoDisplay({images}) {
  return (
    <div className='flex-col-center'>
        {images.map((image, i) => (
          <Image  className={i%2 == 0 ? 'photo left' : 'photo right'} key={i} src={image.default} alt={`image ${i+1}`} style={{boxShadow: `${i%2 == 0 ? '-1rem 0.5rem 1rem #28282b25' : '1rem 0.5rem 1rem #28282b25'}`}}/>
        ))}
    </div>
  )
}
