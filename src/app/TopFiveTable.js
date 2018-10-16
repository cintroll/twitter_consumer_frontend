import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
    },
});

class TopFiveTable extends React.Component {
    state = {
        topfive_data: [],
        hasData: false,
        error: null,
    };

    componentDidMount() {
        fetch("https://bwd3gzngif.execute-api.sa-east-1.amazonaws.com/prod/twitter_api?type=1")
                .then(res => res.json())
                .then(
                    (result) => {
                        if (!result.hasOwnProperty("errorMessage")) {
                            this.setState({
                                hasData: true,
                                topfive_data: result
                            });
                        }
                        else {
                            this.setState({
                                error: {message: result["errorMessage"]},
                                hasData: false
                            });
                        }
                    }
                ).catch(error => this.setState({
                    error, hasData: false
                }));
    }

    render() {
        const { classes } = this.props;
        const { topfive_data, hasData, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (!hasData) {
            return (
                <CircularProgress />
            );
        }

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
}

TopFiveTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopFiveTable);