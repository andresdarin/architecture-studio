import TrueFocus from "./bits/TrueFocus";

interface BrandProps {
    size?: 'small' | 'medium' | 'large' | number;
    className?: string;
}

const Brand: React.FC<BrandProps> = ({
    size = 'medium',
    className = ''
}) => {
    // Definir tamaños predefinidos o usar valor numérico personalizado
    const getSizeClasses = () => {
        if (typeof size === 'number') {
            return {
                fontSize: `${size}px`,
                blurAmount: size / 10,
                animationDuration: Math.max(1, size / 20)
            };
        }

        switch (size) {
            case 'small':
                return {
                    fontSize: '1rem',
                    blurAmount: 3,
                    animationDuration: 1.5
                };
            case 'large':
                return {
                    fontSize: '2rem',
                    blurAmount: 8,
                    animationDuration: 3
                };
            default: // medium
                return {
                    fontSize: '1.5rem',
                    blurAmount: 5,
                    animationDuration: 2
                };
        }
    };

    const sizeConfig = getSizeClasses();

    return (
        <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
            <TrueFocus
                sentence="ARC .lab"
                manualMode={false}
                blurAmount={sizeConfig.blurAmount}
                borderColor="blue"
                animationDuration={sizeConfig.animationDuration}
                pauseBetweenAnimations={1}
            />
            <h3
                className="text-center text-[var(--color1)]"
                style={{ fontSize: sizeConfig.fontSize }}
            >
                • Architecture Studio • {new Date().getFullYear()} •
            </h3>
        </div>
    );
};

export default Brand;