import {Box, Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {buttonStyleTutorial, explanationBoxStyle, textStyleTutorial} from "./Tutorial";

export const AlgorithmSelectorExplanation = ({display, close, padding, height, marginTop}) => {
    return (
        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack direction="row" style={explanationBoxStyle}
                   sx={{
                       marginTop: marginTop / 4.5,
                   }}>
                <Typography sx={textStyleTutorial}> Here one selects the algorithm that will be used to sort the bars (sorting done in
                    ascending order)
                </Typography>
                <Button sx={buttonStyleTutorial}  onClick={close}> NEXT </Button>
            </Stack>
        </Modal>
    )
}