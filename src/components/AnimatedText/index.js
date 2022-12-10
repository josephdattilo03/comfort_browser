import './index.scss';

const AnimatedText = ({letterClass,strArray,idx}) => {
    return(
        <span>
        {
            strArray.map((char,i) => (
                <span key={char+i} className = {`${letterClass} id-${i+idx}`}>
                    {char}
                </span>

            ))
        }
    </span>
    );
};

export default AnimatedText;