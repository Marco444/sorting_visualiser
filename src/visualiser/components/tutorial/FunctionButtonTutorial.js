import {Box, Modal, Slide, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {buttonStyleTutorial, explanationBoxStyle, textStyleTutorial} from "./Tutorial";


export const FunctionButtonTutorial = ({display, close}) => {
    return (
        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack direction="row" style={explanationBoxStyle}
                   sx={{marginTop: 2}}>
                <Typography sx={textStyleTutorial}>These are the controllers to either shuffle all the bars or sort them
                    given an algorithm
                </Typography>
                <Button sx={buttonStyleTutorial}  onClick={close}> NEXT </Button>
            </Stack>
        </Modal>
    )
}