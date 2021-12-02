import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import ShuffleButton from './ShuffleButton'
import SortButton from "./SortButton";
import AlgorithmButtons from "./AlgorithmButtons"
import {Stack} from "@mui/material";
import {Component} from "react";

const STACK_WIDTH = 300;


export default class Buttons extends Component {
    constructor(props){
        super(props);
    }

    sortClicked = () => (this.props.sortClicked());

    render() {
        return (
            <Stack
                width={STACK_WIDTH}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <SortButton sortButtonClicked={this.sortClicked()} key="two">SHUFFLE</SortButton>,
                    <ShuffleButton key="one"/>,
                </ButtonGroup>
                <AlgorithmButtons
                    width={STACK_WIDTH}/>
            </Stack>
        );
    }
}
