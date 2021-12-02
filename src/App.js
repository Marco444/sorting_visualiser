import Controllers from "./SortingVisualiserApp/controllers/Controllers"
import SortingVisualiser from "./SortingVisualiserApp/viewer/SortingVisualiser";
import {Stack} from "@mui/material";
import {Component} from "react";

export default class App extends Component{
    constructor(props) {
        super(props);
    }

    sortButtonClicked() {
        console.log('sort button pressed!');
    }

    render(){
        return (
            <Stack direction="row"
                   sx={{
                       display: 'flex',
                       '& > *': {
                           m: 5,
                       }}}>
                <Controllers sortButtonClicked={() => this.sortButtonClicked}/>
                <SortingVisualiser/>
            </Stack>
        );
    }
}


