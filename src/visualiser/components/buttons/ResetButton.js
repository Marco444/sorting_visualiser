import Button from "@mui/material/Button";
import React from "react";

export const ResetButton = ({stopAnimation}) => {
   return(
       <Button key="three"
                  sx={{
                      bgcolor: '#ff8181',
                      color: 'white',
                      fontWeight: 'bold',
                      paddingLeft: 2,
                      paddingTop: 1,
                  }} onClick={stopAnimation}> RESET </Button>
   );
}