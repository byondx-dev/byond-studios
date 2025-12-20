import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    style?: React.CSSProperties;
    shineColor?: string; // Expects "r, g, b" format, e.g. "255, 255, 255"
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', style = {}, shineColor = '255, 255, 255' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage:
                    `linear-gradient(120deg, rgba(${shineColor}, 0) 40%, rgba(${shineColor}, 0.8) 50%, rgba(${shineColor}, 0) 60%), var(--shiny-base, none)`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
                ...style
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;
