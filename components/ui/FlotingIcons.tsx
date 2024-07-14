import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from 'react';
// import { throttle } from 'lodash'

interface propTypes {
    marginTop?: number;
    marginRight?: number;
    children: ReactNode;
}

const FloatingIcons: React.FC<propTypes> = ({ marginTop = 80, marginRight = 80, children }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [initialPosition, setInitialPosition] = useState({
        x: 0,
        y: 0
    });
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const [isHovering, setIsHovering] = useState(false);
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        if (divRef.current && !isHovering) {
            const containerWidth = divRef.current?.getBoundingClientRect().width;
            const rightPosition = containerWidth - marginRight;
            setPosition({
                x: rightPosition,
                y: marginTop
            });
            setInitialPosition({
                x: rightPosition,
                y: marginTop
            });
            setRendered(true);
        }
    }, [divRef, isHovering, marginTop, marginRight]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (divRef.current && isHovering) {
                const rect = divRef.current.getBoundingClientRect();
                const x = event.clientX - rect.left - 20;
                const y = event.clientY - rect.top - 20;
                setPosition({ x, y });
                console.log(x, y)
            }
        }; // Throttling the event handler to run at most once every 16ms (roughly 60fps)

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovering]);

    return (
        <div
            ref={divRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className='absolute z-50 w-full h-full top-0 left-0'
        >
            <div className='relative w-full h-full'>
                {rendered &&
                    <motion.div
                        initial={initialPosition}
                        animate={position}
                        transition={{ type: "spring", damping: 20, duration: 0.4, stiffness: 300 }}
                        className={`w-fit h-fit absolute flexitems-start justify-start `}
                    // style={{
                    //     transform: 'translate(-50%, -50%)',
                    // }}
                    >
                        {children}
                    </motion.div>}
            </div>
        </div>
    );
};

export default FloatingIcons;