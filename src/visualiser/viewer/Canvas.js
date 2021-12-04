import React, {Component} from "react";
import {Box} from "@mui/material";

// This is the main color of the array bars.
const PRIMARY_COLOR = '#21e892';



export default class Canvas extends Component {

    render() {
        return (
            <Box sx={{
                position: 'relative',
                right: 10,
                width: 1300,
                height: 700,
                backgroundColor: 'wheat',
            }}>
                {this.props.array.map((value, idx) => (
                    <div key={idx} className="arrayBar" style={{
                        width: `${value}px`,
                        height: 20,
                        backgroundColor: PRIMARY_COLOR
                    }}> </div>
                ))}
            </Box>

        );
    }
}
