import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as initiativeYearApi from "../../../../api/initiativeYearApi";
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

const InitiativeYearAddModal = ({ isInitiativeYearAddModalOpen, setIsInitiativeYearAddModalOpen }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [initiativeYear, setInitiativeYear] = useState();


    const handleClose = () => {
        setIsInitiativeYearAddModalOpen(false);
    };

    const handleYearChange = (e) => {
        setInitiativeYear(e.target.value);

    }

    const saveInitiativeYear = () => {
        initiativeYearApi.postInitiativeYear({
            "year": initiativeYear
        }).then(() => {
            setIsInitiativeYearAddModalOpen(false)
            toast.success("Initiative added successfully!");
        }
        ).catch(() => {
            toast.error("Error!")
        }

        )
    }

    const initiativeYearAddBody = (
        <div style={modalStyle} className={classes.paper}>
            <form noValidate autoComplete="off">
                <Input placeholder="Initiative Year" onChange={handleYearChange} />
                <br />
                <Button onClick={saveInitiativeYear}>Save</Button>
            </form>
            <InitiativeYearAddModal />
        </div>
    );

    return (
        <div>
            <Modal
                open={isInitiativeYearAddModalOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {initiativeYearAddBody}
            </Modal>
        </div>
    );
}

InitiativeYearAddModal.propTypes = {
    isInitiativeYearAddModalOpen: PropTypes.bool,
    setIsInitiativeYearAddModalOpen: PropTypes.func,
}

export default InitiativeYearAddModal;