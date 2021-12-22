import {SortButton} from "./SortButton";
import {ShuffleButton} from "./ShuffleButton";
import {ResetButton} from "./ResetButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";

export const FunctionsButtons = ({isBusy, sortButtonClicked, shuffleButtonClicked, stopAnimation}) => {
    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained">
            <SortButton isBusy={isBusy} sortButtonClicked={sortButtonClicked} />
            <ShuffleButton isBusy={isBusy} shuffleButtonClicked={shuffleButtonClicked} />
        </ButtonGroup>
    );
}