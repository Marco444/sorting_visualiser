import Button from "@mui/material/Button";
import ShuffleOnRoundedIcon from "@mui/icons-material/ShuffleOnRounded";
import React from "react";

export const ShuffleButton = ({isBusy, shuffleButtonClicked}) => {
    return (
        <Button key="two" disabled={isBusy}
                sx={{
                    bgcolor: '#ff518a',
                    color: 'white',
                    fontWeight: 'bold',
                    paddingLeft: 2,
                    paddingTop: 1,
                }} onClick={shuffleButtonClicked}> SHUFFLE
            <ShuffleOnRoundedIcon sx={{paddingLeft: 1}} />
        </Button>
    );
}