import {useWindowSize} from "react-use";
import {useState} from "react";
import {WelcomeGuide} from "./visualiser/components/tutorial/Welcome";
import {App} from "./App";
import {Tutorial} from "./visualiser/components/tutorial/Tutorial";

/**
 * This component is centered mainly on managing the UI dimensions positions of the elements
 * (it separates this functionality so that App, which actually provides functionality
 * is not cluttered with all this information)
 **/

export const MainApp = () => {
    const {height, width} = useWindowSize();

    /////Tutorial
    const [welcome, showWelcome] = useState(true);
    const [startTutorial, setStartTutorial] = useState(false)

    ///Responsive constant
    const mobileWidth = 1000
    const isMobileDevice = mobileWidth > width

    /////Dimensions
    const stackWidth = width < mobileWidth ? width * 0.8 : width * 0.15
    const functionButtonsHeight = 65

    return (
        <>
            <WelcomeGuide startTutorial={() => {
                setStartTutorial(isMobileDevice);
                showWelcome(false)
            }}
                          close={() => showWelcome(() => false)}
                          display={welcome} width={width} height={height}/>

            <Tutorial start={startTutorial}
                      stackWidth={stackWidth} functionButtonsHeight={functionButtonsHeight}/>

            <App width={width} height={height} canvasHeight={height * 0.8} canvasWidth={width * 0.8}
                 stackWidth={stackWidth} stackHeight={height * 0.8}
                 functionButtonsHeight={functionButtonsHeight} isMobileDevice={isMobileDevice}/>
        </>
    )

}