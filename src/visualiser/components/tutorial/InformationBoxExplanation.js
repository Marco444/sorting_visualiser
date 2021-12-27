import {Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {buttonStyleTutorial, explanationBoxStyle, textStyleTutorial} from "./Tutorial";

export const InformationBoxExplanation = ({display, close, padding, height, marginTop}) => {
    return (

        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack direction="row" style={explanationBoxStyle}
                   sx={{
                       marginTop: marginTop / 1.9
                   }}>
                <Typography sx={textStyleTutorial}>
                    Here we have a small explanation of how the algorithm works, as well
                    its average time complexity
                </Typography>
                <Button sx={buttonStyleTutorial}  onClick={close}> LET'S PLAY </Button>
            </Stack>
        </Modal>
    )
}
