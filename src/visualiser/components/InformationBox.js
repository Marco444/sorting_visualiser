import {Box, Modal, Slide, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {SortingAlgorithm} from "../model/algorithms/SortingAlgorithm";


export const InformationBox = ({algorithm, width}) => {

    const [slide, setSlide] = useState(false)

    useEffect(() => {
        setSlide(algorithm !== SortingAlgorithm.none)
    }, [algorithm])



    return (
        <Modal
            open={slide}
            onClose={() => setSlide(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack sx={{
                width: width * 1.1,
                backgroundColor:  "#ff8181",
                marginTop: 3,
                marginRight: 5,
                color: "white",
                float: "right"
            }}>
                <Box id="infog" sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: 2,
                    paddingBottom: 0
                }} gutterBottom> Information
                    <HelpOutlineIcon sx={{paddingLeft: 1}} />

                </Box>

                <Typography sx={{padding: 2}}> {algorithm.text}  </Typography>
                <Typography sx={{padding: 2, fontWeight: 'bold'}}> {algorithm.complexity}</Typography>
            </Stack>
        </Modal>
    );
}