import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import topfive_data from '../data/topfive_data'

const styles = theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
    },
});

function TopFiveTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>User name</TableCell>
                        <TableCell numeric>Followers</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topfive_data.map(row => {
                        return (
                            <TableRow key={row.user_id}>
                                <TableCell component="th" scope="row">
                                    {row.user_name}
                                </TableCell>
                                <TableCell numeric>{row.user_followers}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

TopFiveTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopFiveTable);