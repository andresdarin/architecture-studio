import TrueFocus from "./bits/TrueFocus";
const Brand = () => {
    return (

        <div className="flex flex-col items-center  justify-center space-y-2">
            <TrueFocus
                sentence="ARCA .lab"
                manualMode={false}
                blurAmount={5}
                borderColor="blue"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />
            <h3 className="text-center text-[var(--color1)]">• Architecture Studio • {new Date().getFullYear()} •</h3>
        </div>
    );
};
export default Brand;