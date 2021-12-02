
import React, {Component} from "react";
import Button from '@mui/material/Button';

export default class SortButton extends Component {
    constructor(props) {
        super(props);
    }

    clicked = () => {
        this.props.sortButtonClicked()
    }

    render(){
        return <Button sx={{
            bgcolor: '#a275ff',
            color: 'white',
            fontWeight: 'bold',
            paddingLeft: 2,
            paddingTop: 1,
        }} onClick={this.clicked}> SORT </Button>
    }
}
