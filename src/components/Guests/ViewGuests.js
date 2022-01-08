import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {BsCheckCircle, BsFillPersonLinesFill, FcCancel, MdClose} from "react-icons/all";
import GuestService from "../services/GuestService";
import {ListGroup} from "react-bootstrap";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import '../styling/ViewGuests.css';
import DialogTitle from "@material-ui/core/DialogTitle";
import AddGuest from "./AddGuest";
import EditGuest from './EditGuests';

export default function ViewGuests(id) {
    const [open, setOpen] = React.useState(false);
    const [guests, setGuests] = React.useState([]);
    const [noOfGuests, setNoOfGuests] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
        GuestService.getAllGuestsByReservationID(id.children).then(
            res => {
                console.log(id.children);
                console.log("JOHN")
                console.log(res.data);
                setGuests(res.data);
            }
        );
        GuestService.getNoOfGuests(id.children).then(
            res => {
                setNoOfGuests(res.data);
            }
        )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
               <BsFillPersonLinesFill/>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}>
                <Toolbar style={{
                    backgroundColor: "#476072",
                    border: "none",
                }}>
                    <AddGuest>{id.children}</AddGuest>
                    <IconButton onClick={handleClose}
                                style={{
                                    color: "white",
                                    marginLeft: "90%"
                                }}>
                        <MdClose/>
                    </IconButton>
                </Toolbar>
                <DialogTitle
                    style = {{
                        textAlign: 'center',
                        fontFamily: "Hervetica",
                        color: "#476072"
                    }}
                    id="alert-dialog-title">
                    {"Guests"}
                </DialogTitle>
                <div className={"info"}>
                   <p>
                     The number of guests is: {noOfGuests}
                   </p>
                </div>
                <div className={"guests-list"}>
                        {
                            guests?.map((obj) => {
                                return <ListGroup.Item className={"item-guests"}  key={obj.id} value={obj.id}>
                                    <div className={"covid"}>
                                        {
                                            obj.covid_certification ? <BsCheckCircle/>: <FcCancel/>
                                        }
                                    </div>
                                    <div className={"guest-details"}>
                                        {obj.firstName} {obj.lastName} {obj.phone_number}
                                    </div>
                                    <div className={"btn"}>
                                        <ConfirmDeleteDialog>{obj.id}</ConfirmDeleteDialog>
                                        <EditGuest>{obj.id}</EditGuest>
                                    </div>
                                </ListGroup.Item>
                            })
                        }
                   </div>
            </Dialog>
        </div>
    );
}