import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Button from "@mui/material/Button";
import React from "react";

export const SortButton = ({isBusy, sortButtonClicked, height}) => {
   return (
       <Button key="one" disabled={isBusy}
               sx={{
                   bgcolor: '#234ebe',
                   color: 'white',
                   fontWeight: 'bold',
                   paddingLeft: 2,
                   paddingTop: 1,
                   height: height
               }} onClick={sortButtonClicked}> SORT
           <PlayCircleOutlineRoundedIcon sx={{paddingLeft: 1}}/>
       </Button>
   );
}