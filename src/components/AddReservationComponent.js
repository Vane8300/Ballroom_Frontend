import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {MdAdd} from "react-icons/md";
import ReservationService from "./services/ReservationService";
import HallService from "./services/HallService";

export default function AddReservationComponent(id) {
    const [open, setOpen] = React.useState(false);
    const [hall, setHalls] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getHalls();
    }, []);

    const getHalls = () => {
        HallService.getAllHalls()
            .then(res =>{
                setHalls(res.data);
            })
    }


    const handleCloseConfirm = () => {
        let confirmed = document.getElementById('confirmed').value;
        let description = document.getElementById("description").value;
        // let number_of_people = document.getElementById("number_of_people").value;
        let time = document.getElementById('time').value;
        let reservationDate = document.getElementById('reservationDate').value;
        // let location = document.getElementById("location").value;
        let hall = document.getElementById("hall").value;
        ReservationService.addReservation(confirmed, description, reservationDate, time, hall, sessionStorage.getItem("user_id"));

        handleClose()
    };


    return (
        <div>
            <Button className={"addButton"} variant="outlined" onClick={handleClickOpen}>
                <MdAdd/>
            </Button>
            <Dialog
                className={"dialog-add-pa"}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    style = {{
                        textAlign: 'center',
                        borderBottom: '1px solid #424874',
                        color: '#424874',
                        fontFamily: "Helvetica",
                    }}
                    id="alert-dialog-title">{"Adauga locatie"}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        className={"txt-field-add-pa"}
                        id="confirmed"
                        label="confirmed:"
                        text="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="description"
                        label="Description:"
                        type="text"
                        fullWidth
                    />

                    {/*<TextField*/}
                    {/*    className={"txt-field-add-pa"}*/}
                    {/*    id="location"*/}
                    {/*    label="Location:"*/}
                    {/*    text="text"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}

                    {/*<TextField*/}
                    {/*    className={"txt-field-add-pa"}*/}
                    {/*    id="number_of_people"*/}
                    {/*    label="NoOfPeople:"*/}
                    {/*    type="text"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}

                    <TextField
                        className={"txt-field-add-pa"}
                        id="reservationDate"
                        label="Reservation Date:"
                        text="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="time"
                        label="Time:"
                        text="text"
                        fullWidth
                    />
                    <select id={"hall"}>
                        {
                            hall?.map((obj) => {
                                return <option hall={obj.id} value={obj.id}>{obj.name}</option>
                            })
                        }

                    </select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}>
                        Confirm
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}
                            autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}