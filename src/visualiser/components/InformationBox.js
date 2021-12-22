import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const InformationBox = ({algorithm, width, selected}) => {

    return (

    <Stack sx={{
        width: width,
        backgroundColor: '#ffbdb1',
        marginTop: 1,
        color: "white"
    }}>
        <Box id="infog" sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: 1,
            paddingLeft: 1,
            paddingBottom: 0
        }} gutterBottom> Information
            <HelpOutlineIcon sx={{paddingLeft: 1}}/>
        </Box>

        <Typography sx={{ padding: 1}}> {algorithm.text}  </Typography>
    </Stack>


    );
}