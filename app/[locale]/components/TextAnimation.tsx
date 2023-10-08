import Typewriter from 'typewriter-effect';

const TextAnimation = ({text, classes}: { text: string[], classes: string }) => {
    return (
        <Typewriter
            options={{
                strings: text,
                autoStart: true,
                wrapperClassName: classes,
                loop: true,
            }}
        />
    );
};

export default TextAnimation;
