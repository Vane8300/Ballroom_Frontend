import * as React from "react";
import Button from "@material-ui/core/Button";
import {FaInfoCircle, MdClose} from "react-icons/all";
import {Dialog, DialogTitle} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ListGroup} from "react-bootstrap";
import '../styling/MoreInfo.css';
import WorkerService from "../services/WorkerService";
import {useState} from "react";
import {keys} from "@material-ui/core/styles/createBreakpoints";
import {forEach} from "react-bootstrap/ElementChildren";

export default function MoreInfoWorkers() {
    const [open, setOpen] = React.useState(false);
    const [list, setList] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
        WorkerService.getNoHallsPerWorker()
            .then(res => {
                console.log("AAAAAAAAAAAAAAAAAAAAAAS")
                // console.log(Object.keys(res.data)[0], Object.values(res.data)[0]);
                setList(res.data);
            })

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{
                color: "#476072",
                fontSize: "24px",
                marginBottom: "10px"
            }}>
                <FaInfoCircle/>
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
                    {"More Info"}
                </DialogTitle>
                <div className={"guests-list"}>
                    <p className={"text-1"}>
                        Numarul de sali la care lucreaza fiecare responsabil:
                    </p>
                    {
                       Object.keys(list).map((obj, nr) => {
                        return <ListGroup.Item className={"item-guests"} >
                               <div className={"list-elem"}>
                                   {obj} works at {nr} halls
                               </div>
                           </ListGroup.Item>
                       })
                    }
                </div>
            </Dialog>
        </div>
    );
}