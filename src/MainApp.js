import { useWindowSize} from "react-use";
import {useState} from "react";
import {WelcomeGuide} from "./visualiser/components/modals/Welcome";
import {App} from "./App";

export const MainApp = () => {
    const {height, width} = useWindowSize();
    const [welcomeShow, closeWelcome] = useState(true);

    return(
        <>
            <WelcomeGuide display={welcomeShow} close={() => closeWelcome( () => false)} width={width} height={height}/>
            <App width={width} height={height} canvasHeight={height * 0.8} canvasWidth={width * 0.8}
                 stackWidth={width * 0.15} stackHeight={height * 0.8}/>
        </>
    )

}