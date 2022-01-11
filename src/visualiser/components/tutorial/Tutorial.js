import React, {useEffect, useState} from "react";
import {FunctionButtonTutorial} from "./FunctionButtonTutorial";
import {AlgorithmSelectorExplanation} from "./AlgorithmSelectorExplanation";
import {SlidersExplanation} from "./SlidersExplanation";
import {InformationBoxExplanation} from "./InformationBoxExplanation";


/**
 * We define the style of each composing element of the tutorial
 * **/
export const buttonStyleTutorial = {
    color: '#fff',
    margin: 2,
    '&:hover': {
        backgroundColor: '#fff',
        color: '#f38d8d',
    },
}

export const textStyleTutorial = {
    padding: 2,
    color: "white",
    fontWeight: "bold"
}

export const explanationBoxStyle = {
    backgroundColor: "#ff8181",
    width: 470,
    "margin-left": 280
}


/**
 * Designed to encapsulate the functionality of the tutorial, it maintains an array with the order the
 * tutorial explains all the UI components, and each corresponding tutorial component diplays itself
 * when the current counter points to him. On close each tutorial component calls the next which updates
 * the current step of the tutorial.
 * **/

export const Tutorial = ({start, stackWidth, functionButtonsHeight, stackTopLeftMargin}) => {

    const [current, setCurrent] = useState(0);
    const tutorialSteps = ['none', 'functionButtons', 'algorithmButtons', 'slidersButtons', 'informationBox']

    useEffect(() => {
        setCurrent(start ? 1 : 0)
    }, [start])

    const next = () => {
        setCurrent(prev => prev + 1)
    }

    return (
        <>
            <FunctionButtonTutorial close={next} display={tutorialSteps[current] === 'functionButtons'}
                                    padding={stackWidth}
                                    height={functionButtonsHeight} controllersLeftTopMargin={stackTopLeftMargin}/>

            <AlgorithmSelectorExplanation height={functionButtonsHeight * 3} marginTop={functionButtonsHeight}
                                          display={tutorialSteps[current] === 'algorithmButtons'}
                                          padding={stackWidth} close={next}/>

            <SlidersExplanation close={next} display={tutorialSteps[current] === 'slidersButtons'}
                                paddingLeft={stackWidth}
                                height={functionButtonsHeight} marginTop={functionButtonsHeight * 5}/>

            <InformationBoxExplanation width={stackWidth}
                                       display={tutorialSteps[current] === "informationBox"} close={next}/>
        </>
    );
}