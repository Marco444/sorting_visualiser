import { useWindowSize} from "react-use";
import App from "./visualiser/App";
import {useState} from "react";
import {WelcomeGuide} from "./visualiser/viewer/Welcome";

export const MainApp = () => {
    const {height, width} = useWindowSize();
    const [welcomeShow, closeWelcome] = useState(true);

    return(
        <>
            <WelcomeGuide display={welcomeShow} close={() => closeWelcome( () => false)} width={width} height={height}/>
            <App width={width} height={height} />
        </>
    )

}