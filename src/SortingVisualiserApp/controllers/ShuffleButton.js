import React, {Component} from "react";
import Button from '@mui/material/Button';


export default class ShuffleButton extends Component {
    render(){
        return <Button sx={{
            bgcolor: '#ff8eb2',
            color: 'white',
            fontWeight: 'bold',
            paddingLeft: 2,
            paddingTop: 1,
        }}> SHUFFLE </Button>
    }
}
