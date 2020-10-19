import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as initiativeApi from "../../../../api/initiativeApi";
import { toast } from "react-toastify";

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const InitiativeEditModal = ({ isInitiativeAddModalOpen, setIsInitiativeAddModalOpen, currentYear }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [initiativeName, setInitiativeName] = useState();


    const handleClose = () => {
        setIsInitiativeAddModalOpen(false);
    };

    const handleNameChange = (e) => {
        setInitiativeName(e.target.value);

    }

    const saveInitiative = () => {
        initiativeApi.postInitiative({
            "name": initiativeName,
            "initiativeYear": currentYear
        }).then(() => {
            setIsInitiativeAddModalOpen(false)
            toast.success("Initiative added successfully!");
        }
        ).catch(() => {
            toast.error("Error!")
        }
        )
    }

    const initiativeAddBody = (
        <div style={modalStyle} className={classes.paper}>
            <form noValidate autoComplete="off">
                <Input defaultValue={} onChange={handleNameChange} />
                <br />
                <Button onClick={saveInitiative}>Save</Button>
            </form>
            <InitiativeEditModal />
        </div>
    );

    return (
        <div>
            <Modal
                open={isInitiativeAddModalOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {initiativeAddBody}
            </Modal>
        </div>
    );
}

InitiativeEditModal.propTypes = {
    isInitiativeAddModalOpen: PropTypes.bool,
    setIsInitiativeAddModalOpen: PropTypes.func,
    currentYear: PropTypes.string
}

export default InitiativeEditModal;