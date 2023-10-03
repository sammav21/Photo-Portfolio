import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div class="h-background">
        <div class="h-content">
            <h3 id="h-name">Samuel Avilés</h3>
        </div>
        <div class="h-menu">
            <div class="h-dropmenu">
            <button class="h-click" id="h-navbtn"><a class="h-btn">Work</a></button>
                <ul id="h-ul">
                    <li class="h-links"><Link id="h-dropbtn"  href='/street'>Street</Link></li>
                    <li class="h-links"><Link id="h-dropbtn"  href="/portraits">Portraits</Link></li>
                    <li class="h-links"><Link id="h-dropbtn" href="/places">Places</Link></li>
                </ul>
            </div>
            <button id="h-navbtn" class="h-about"><Link class="h-btn" href="/about">About</Link></button>
        </div>
    </div>
  )
}
