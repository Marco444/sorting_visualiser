import {Box, Slider, Stack} from "@mui/material";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import React from "react";

/**
 * Designed to allow the user to modify the number of the bars to be ordered
 * **/


export const SliderNumberBars = ({maxNumberBars, minNumberBars, defaultNumberBars,
                                 sliderWidth, isBusy, handlerBarsNumberSlider}) => {
   return (
       <Stack sx={{
           backgroundColor: 'rgba(57,92,183,0.98)',
           marginTop: 1,
           color: "white"
       }}>
           <Box id="bars-slider" sx={{
               paddingTop: 2,
               paddingLeft: 2,
               display: 'flex',
               alignItems: 'center',
               flexWrap: 'wrap',
               fontWeight: 'bold',
           }} gutterBottom> Number of bars
               <FormatLineSpacingIcon sx={{paddingLeft: 1}} />
           </Box>
           <Slider max={maxNumberBars} min={minNumberBars}
                   defaultValue={defaultNumberBars} id="sliderBars" sx={{
               marginLeft: 2,
               marginBottom: 2,
               width: sliderWidth * 0.825
           }} onChange={handlerBarsNumberSlider} disabled={isBusy}/>
       </Stack>
   );
}