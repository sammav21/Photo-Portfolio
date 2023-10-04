import {Bebas_Neue} from 'next/font/google';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400'
});

export default function Portraits() {
  return (
    <div className="content">
        <div className="P-title">
          <h1 id="portraits"  style={bebas_neue.style}>PORTRAITS</h1>
        </div>
    </div>
  )
}
