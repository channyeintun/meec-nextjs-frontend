'use client';

import { useWindowScroll } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import Top from './icons/Top';

function ScrollToTopButton() {
    const [{ y }, scrollTo] = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(y > 300);
    }, [y]);

    const scrollToTop = () => scrollTo({ y: 0 });

    return (
        <button
            onClick={scrollToTop}
            className={`cursor-pointer fixed bottom-8 end-8 w-12 h-12 rounded-full bg-[var(--button-secondary)] text-white flex items-center justify-center shadow-lg z-[1000] transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <Top />
        </button>
    );
}

export default ScrollToTopButton;