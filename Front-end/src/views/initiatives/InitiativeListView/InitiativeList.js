import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CachedIcon from '@material-ui/icons/Cached';
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Tooltip
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import Can from 'src/authorize/Can';
import { authProvider } from "src/authProvider.js";
import AzureAD from 'react-aad-msal';
// import InitiativeEditModal from './modals/InitiativeEditModal';
// import * as initiativeApi from "../../../../api/initiativeApi";

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const InitativeList = ({ className, initiatives, selectedYear, ...rest }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [selectedUserIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);


    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleNavigation = (initiative) => {
        navigate(`/initiative/${initiative.id}`, { state: initiative })
    }


    return (
        <AzureAD provider={authProvider}>
            {
                ({ accountInfo }) => {
                    const role = accountInfo.account.idToken.roles
                    return (

                        <Card
                            className={clsx(classes.root, className)}
                            {...rest}
                        >
                            <PerfectScrollbar>
                                <Box minWidth={1050}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    Name
                                                </TableCell>
                                                <TableCell>
                                                    {}
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {initiatives.map((initiative) => (
                                                <TableRow
                                                    hover
                                                    key={initiative.id}
                                                    selected={selectedUserIds.indexOf(initiative.id) !== -1}
                                                >
                                                    <TableCell >
                                                        <Can
                                                            role={role}
                                                            perform="action:view"
                                                            yes={() => (
                                                                <Box
                                                                    alignItems="center"
                                                                    display="flex"
                                                                    onClick={() => handleNavigation(initiative)}
                                                                    style={{ cursor: "pointer" }}
                                                                >
                                                                    <Avatar
                                                                        className={classes.avatar}
                                                                        src={initiative.avatarUrl}
                                                                    >
                                                                        {getInitials(initiative.name)}
                                                                    </Avatar>
                                                                    <Typography
                                                                        color="textPrimary"
                                                                        variant="body1"
                                                                    >
                                                                        {initiative.name}
                                                                    </Typography>
                                                                </Box>

                                                            )}
                                                            no={() => (
                                                                <Box
                                                                    alignItems="center"
                                                                    display="flex"
                                                                >
                                                                    <Avatar
                                                                        className={classes.avatar}
                                                                        src={initiative.avatarUrl}
                                                                    >
                                                                        {getInitials(initiative.name)}
                                                                    </Avatar>
                                                                    <Typography
                                                                        color="textPrimary"
                                                                        variant="body1"
                                                                    >
                                                                        {initiative.name}
                                                                    </Typography>
                                                                </Box>
                                                            )}
                                                        />

                                                    </TableCell>
                                                    <TableCell>
                                                        <Can
                                                            role={role}
                                                            perform="initiative:edit"
                                                            yes={() => (
                                                                <IconButton
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className={classes.button}
                                                                >
                                                                    <Tooltip title="Edit initiative">
                                                                        <EditIcon />
                                                                    </Tooltip>
                                                                </IconButton>
                                                            )}
                                                        />
                                                        <Can
                                                            role={role}
                                                            perform="initiative:delete"
                                                            yes={() => (
                                                                <IconButton
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className={classes.button}
                                                                // marginRight={5}
                                                                >
                                                                    <Tooltip title="Delete initiative">
                                                                        <DeleteIcon />
                                                                    </Tooltip >
                                                                </IconButton>
                                                            )}
                                                        />
                                                        <Can
                                                            role={role}
                                                            perform="member:add"
                                                            yes={() => (
                                                                <IconButton
                                                                    variant="contained"
                                                                    color="primary"
                                                                // marginRight={5}
                                                                >
                                                                    <Tooltip title="Add users">
                                                                        <PersonAddIcon />
                                                                    </Tooltip>
                                                                </IconButton>
                                                            )}
                                                        />
                                                        <Can
                                                            role={role}
                                                            perform="evaluationCriteria:set"
                                                            yes={() => (

                                                                <IconButton
                                                                    variant="contained"
                                                                    color="primary"
                                                                >
                                                                    <Tooltip title="Set Evaluation Criteria">
                                                                        <TrendingUpIcon />
                                                                    </Tooltip>
                                                                </IconButton>
                                                            )}
                                                        />
                                                        <Can
                                                            role={role}
                                                            perform="review:set"
                                                            yes={() => (
                                                                <IconButton
                                                                    variant="contained"
                                                                    color="primary"
                                                                >
                                                                    <Tooltip title="Create review cycle">
                                                                        <CachedIcon />
                                                                    </Tooltip>
                                                                </IconButton>
                                                            )}
                                                        />
                                                        <Can
                                                            role={role}
                                                            perform="initiative:join"
                                                            yes={() => (

                                                                <Button
                                                                    variant="contained"
                                                                    color="default"
                                                                >
                                                                    Join
                                                                </Button>

                                                            )}
                                                        />

                                                    </TableCell>
                                                    {/* <InitiativeEditModal isInitiativeEditModalOpen={isInitiativeEditModalOpen} setIsInitiativeEditModalOpen={setIsInitiativeEditModalOpen} selectedYear={selectedYear} initiative={initiative.name} /> */}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </PerfectScrollbar>
                            <TablePagination
                                component="div"
                                count={initiatives.length}
                                onChangePage={handlePageChange}
                                onChangeRowsPerPage={handleLimitChange}
                                page={page}
                                rowsPerPage={limit}
                                rowsPerPageOptions={[5, 10, 25]}
                            />
                        </Card>
                    )
                }
            }
        </AzureAD>
    );
};

InitativeList.propTypes = {
    className: PropTypes.string,
    initiatives: PropTypes.array.isRequired,
    selectedYear: PropTypes.string
};

export default InitativeList;
