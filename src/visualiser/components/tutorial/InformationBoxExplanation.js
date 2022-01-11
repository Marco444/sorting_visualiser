import {Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {buttonStyleTutorial, explanationBoxStyle, textStyleTutorial} from "./Tutorial";

export const InformationBoxExplanation = ({display, close, width}) => {
    return (

        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Stack direction="column" style={{
                marginTop: 20,
                backgroundColor: "#ff8181",
                width: width,
                float: "right",
                marginRight: 40,
                color: "white",
                padding: 17,
            }}>
                <Typography sx={{fontWeight: 'bold'}}>
                    Here we have a small explanation of how the algorithm works, as well
                    its complexity
                </Typography>
                <Button sx={buttonStyleTutorial} onClick={close}> LET'S PLAY </Button>
            </Stack>
        </Modal>
    )
}
