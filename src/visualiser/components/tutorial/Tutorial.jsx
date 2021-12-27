import React, {useEffect, useState} from "react";
import {FunctionButtonTutorial} from "./FunctionButtonTutorial";
import {AlgorithmSelectorExplanation} from "./AlgorithmSelectorExplanation";
import {SlidersExplanation} from "./SlidersExplanation";
import {InformationBoxExplanation} from "./InformationBoxExplanation";


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

            <InformationBoxExplanation height={functionButtonsHeight}
                                       display={tutorialSteps[current] === "informationBox"} close={next}
                                       padding={stackWidth} marginTop={functionButtonsHeight * 2}/>
        </>
    );
}