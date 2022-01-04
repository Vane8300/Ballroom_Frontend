import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {FaRegTrashAlt} from 'react-icons/fa';

import HallService from "./services/HallService";
import ReservationService from "./services/ReservationService";
export default function ConfirmDeleteDialog(id) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        handleClose()
    };


    return (
        <div>
            <Button variant="outlined"  onClick={handleClickOpen}>
                <FaRegTrashAlt/>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    style = {{
                        textAlign: 'center',
                        borderBottom: '1px solid #424874',
                        color: '#476072',
                    }}
                    id="alert-dialog-title">
                    {"Vrei sa stergi?"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText
                        style={{
                            marginTop: "10px",
                            color: "silver",
                        }}
                        id="alert-dialog-description">
                        Esti sigur? Datele sterse nu vor mai putea fi recuperate.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#476072',
                            }}>
                        Da
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#476072',
                            }}
                            autoFocus>
                        Nu
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}