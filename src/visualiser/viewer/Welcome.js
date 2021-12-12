import {Box, Modal, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';

export const WelcomeGuide = ({display, close, width, height}) => {
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
            }}>
                This is a small app made in React that can animate sorting of
                corresponding rows with different with different sorting algorithms
                you can select in the left
            </Typography>

        </Box>
    </Modal>
   );
};