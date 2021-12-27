import {Box, Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

const buttonStyle = {
    color: '#fff',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
    },
}

export const WelcomeGuide = ({display, close, width, height, startTutorial}) => {
    const a = 1
    const widthBox = width / 4
    const heightBox = height / 4

    return (
        <Modal
            open={display}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={{
                backgroundColor: 'rgba(0,43,162,0.98)',
                width: widthBox,
                height: heightBox,
                marginLeft: width / 20 - widthBox / 50,
                marginTop: height / 20 - heightBox / 50,
                padding: 3,
            }}>
                <Typography sx={{
                    fontSize: 40,
                    color: 'white',
                    fontWeight: 'bold',
                }}>
                    Welcome,
                </Typography>
                <Typography sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    paddingTop: 2
                }}>
                    This is a small app made in React designed to visualise sorting algorithms
                </Typography>

                <Stack direction='row' sx={{paddingTop: 7}}>
                    <Button onClick={close} sx={buttonStyle}> CLOSE </Button>
                    <Button onClick={startTutorial}
                            sx={buttonStyle} style={{marginLeft: widthBox / 1.7}}> TUTORIAL</Button>
                </Stack>

            </Box>
        </Modal>
    );
};