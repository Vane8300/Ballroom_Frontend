import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {BsFillPersonLinesFill, FcCancel, MdClose} from "react-icons/all";
import '../styling/ViewGuests.css';
import DialogTitle from "@material-ui/core/DialogTitle";
import WorkerService from "../services/WorkerService";
import {ListGroup} from "react-bootstrap";


export default function ViewWorkers(id) {
    const [open, setOpen] = React.useState(false);
    const [noOfWorkers, setNoOfWorkers] = React.useState(0);
    const [workers, setWorkers] = React.useState([]);


    const handleClickOpen = () => {
        setOpen(true);
        WorkerService.getNoWorkersByHallId(id.children).then(
            res => {
                setNoOfWorkers(res.data);
            }
        )
        WorkerService.getWorkersByHallId(id.children).then(
            res => {
                console.log(res.data);
                setWorkers(res.data);
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
                        The number of guests is: {noOfWorkers}
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers?.map((w) => {
                            return <ListGroup.Item className={"item-guests"}  key={w.id} value={w.id}>
                                <div className={"guest-details"}>
                                    {w.firstname} {w.lastname} {w.email} {w.phone}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
            </Dialog>
        </div>
    );
}