import {SortButton} from "./SortButton";
import {ShuffleButton} from "./ShuffleButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import {Box, Modal, Slide} from "@mui/material";

export const FunctionsButtons = ({isBusy, sortButtonClicked, shuffleButtonClicked, height}) => {

    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained" sx={{height: height}}>
            <SortButton height={height / 2} isBusy={isBusy} sortButtonClicked={sortButtonClicked}/>
            <ShuffleButton height={height / 2} isBusy={isBusy} shuffleButtonClicked={shuffleButtonClicked}/>
        </ButtonGroup>
    );
}