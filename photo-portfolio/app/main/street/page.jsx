import {Bebas_Neue} from 'next/font/google';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function Street() {
  return (
    <div class="content" >
        <div class="title"><h1 id="street" style={bebas_neue.style}>STREET</h1></div>
    </div>
  )
}
