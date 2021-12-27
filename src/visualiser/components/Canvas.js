import React, {Component} from "react";
import {Box} from "@mui/material";

// This is the main color of the array bars.
const PRIMARY_COLOR = '#47118f';
const CANVAS_COLOR = '#ffc5b6'


export default class Canvas extends Component {

    render() {
        return (
            <Box sx={{
                position: 'relative',
                height: this.props.height / 1.1,
                width: this.props.canvasWidth, //canvasWidth has to do with max length bars
                backgroundColor: CANVAS_COLOR,
                marginLeft: 2,
                marginRight: 2
            }}>
                {this.props.array.map((value, idx) => (
                    <div key={idx} className="arrayBar" style={{
                        width: `${value}px`,
                        height: `${this.props.barsHeight}px`,
                        backgroundColor: PRIMARY_COLOR
                    }}> </div>
                ))}
            </Box>
        );
    }
}
