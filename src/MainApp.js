import {useMeasure, useSize, useWindowSize} from "react-use";
import App from "./visualiser/App";

export const MainApp = () => {
    const {height, width} = useWindowSize();

    return(<App width={width} height={height} />)

}