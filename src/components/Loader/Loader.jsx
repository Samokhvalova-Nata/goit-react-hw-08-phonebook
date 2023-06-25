import { RotatingLines } from 'react-loader-spinner';
import { ThreeDots } from "react-loader-spinner";
import { Wrap } from './Loader.styled';

export const MainLoader = () => {
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

export const AddLoader = () => {
    return (
        <>
            <ThreeDots 
                height="30" 
                width="30" 
                radius="5"
                color="#ffffff" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}/>
        </>
    )
};

export const RemoveLoader = () => {
    return (
        <>
            <ThreeDots 
                height="20" 
                width="20" 
                radius="3"
                color="#1976d2" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}/>
        </>
    )
};
