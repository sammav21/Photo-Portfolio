'use client'
import { useEffect, useState } from "react";
import {BsArrowUpShort} from 'react-icons/bs';

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleVisibility = () => {
            window.scrollY > 1000 ? setShowButton(true) : setShowButton(false);
        }

        window.addEventListener('scroll', handleVisibility)

        return() => {
            window.removeEventListener('scroll', handleVisibility)
        }
    }, []);

    const handleScroll = () => {
        window.scrollTo({top: 0, behavior: "smooth" });
    };
  return (
    <button onClick={handleScroll} className='toTop-Btn' id={showButton ? 'toTop-Visible' : undefined}>
        <span className="mobile-dropdown-secondary"><BsArrowUpShort/></span>
    </button>
  )
}
