import {Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {buttonStyleTutorial, explanationBoxStyle, textStyleTutorial} from "./Tutorial";

export const SlidersExplanation = ({display, close, padding, height, marginTop}) => {
    return (
        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack direction="row" style={explanationBoxStyle}
                   sx={{
                       marginTop: marginTop / 4.5
                   }}>
                <Typography sx={textStyleTutorial}>
                    These are the sliders to either control the animation speed or the number
                    of bars (bubble sort recommended fewest bars greatest speed)
                </Typography>
                <Button sx={buttonStyleTutorial}  onClick={close}> NEXT </Button>
            </Stack>
        </Modal>
    )
}
