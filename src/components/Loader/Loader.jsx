import { RotatingLines } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

export const Loader = () => {
    return (
        <Wrap>
            <RotatingLines
                strokeColor="#2196F3"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </Wrap>
    )
};

