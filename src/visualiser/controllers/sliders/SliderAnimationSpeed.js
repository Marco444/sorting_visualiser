import {Slider, Stack, Typography} from "@mui/material";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import React from "react";

export const SliderAnimationSpeed = ({sliderSpeedValue, sliderWidth, handleSpeedSlider, isBusy}) => {
    return (
        <Stack sx={{
            backgroundColor: 'rgba(57,92,183,0.98)',
            marginTop: 1,
            color: "white"
        }}>
            <Stack>
                <Typography id="animation-slider" sx={{
                    paddingTop: 2,
                    paddingLeft: 2,
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}> Animation Speed
                    <SpeedRoundedIcon sx={{paddingLeft: 1}}/>
                </Typography>
            </Stack>
            <Slider max={sliderSpeedValue} min={sliderSpeedValue * 0.9 }
                    defaultValue={sliderSpeedValue * 0.9} key={1} sx={{
                marginLeft: 2,
                marginBottom: 2,
                width: sliderWidth
            }} onChange={handleSpeedSlider} disabled={isBusy}/>
        </Stack>
    );
}