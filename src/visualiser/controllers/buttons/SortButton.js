import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Button from "@mui/material/Button";
import React from "react";

export const SortButton = ({isBusy, sortButtonClicked}) => {
   return (
       <Button key="one" disabled={isBusy}
               sx={{
                   bgcolor: '#8222f8',
                   color: 'white',
                   fontWeight: 'bold',
                   paddingLeft: 2,
                   paddingTop: 1,
               }} onClick={sortButtonClicked}> SORT
           <PlayCircleOutlineRoundedIcon sx={{paddingLeft: 1}}/>
       </Button>
   );
}