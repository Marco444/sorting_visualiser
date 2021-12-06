import {Box, Typography} from "@mui/material";
import React, {Component} from "react";
import {AlgorithmInfo} from "./AlgorithmInfo";

export default class infoBox extends Component{
    render() {
        return <Box sx={{
            marginTop: 5,
            marginLeft: 2,
            width: this.props.width / 7,
            height: this.props.height / 1.1,
            backgroundColor: '#ffb4a1'
        }}>
            <Typography id="animation-slider" sx={{
                paddingLeft: 2,
                fontWeight: 'bold',
            }} gutterBottom>
            <AlgorithmInfo title="Bubble Sort" body="Bla bla bla bla"/>

            </Typography>
        </Box>
    }
}