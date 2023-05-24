import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

const TopScroll = () => {

    const [scrollVisibility, setScrollVisibility] = useState(false);

    useEffect(() => {
        const handleScroll = event => {
          if(window.pageYOffset > 50) {
            setScrollVisibility(true);
          } else {
            setScrollVisibility(false);
          }
  
        };
        window.addEventListener('scroll', handleScroll);
    })

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    if(scrollVisibility === true) {
        return (
            <div className='Top-Scroll-Container w3-animate-zoom' onClick={scrollToTop}>
                <ArrowUpwardIcon />
            </div>
        )
    }
}

export default TopScroll;