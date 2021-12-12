import {Box, Slider, Stack} from "@mui/material";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import React from "react";

export const SliderNumberBars = ({maxNumberBars, sliderWidth, isBusy, handlerBarsNumberSlider}) => {
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
           <Slider max={maxNumberBars} min={maxNumberBars / 2}
                   defaultValue={maxNumberBars / 2} id="sliderBars" sx={{
               marginLeft: 2,
               marginBottom: 2,
               width: sliderWidth
           }} onChange={handlerBarsNumberSlider} disabled={isBusy}/>
       </Stack>
   );
}