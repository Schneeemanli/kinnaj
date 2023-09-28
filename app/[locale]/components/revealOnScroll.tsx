import {ReactNode, useEffect, useRef, useState} from 'react';

const RevealOnScroll = ({children, time, axis = 'y', direction = ''}: {
    children: ReactNode,
    time?: string,
    axis?: string,
    direction?: string
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        if (ref.current) {
            scrollObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, [ref.current]);

    const delay = time ? "custom-transition-delay-" + time : '';

    const classes = `transition custom-transition-time ${delay}
        ${isVisible ? `${direction}translate-${axis}-0` : `${direction}translate-${axis}-36`}
        ${isVisible ? 'opacity-100' : 'opacity-0'}`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
