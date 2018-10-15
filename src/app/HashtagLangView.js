import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import hashtaglang_data from '../data/hashtaglang_data'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

function LangTable(props) {
    const { data } = props

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Language</TableCell>
                    <TableCell numeric>Tweets Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => {
                    return (
                        <TableRow key={row.user_id}>
                            <TableCell component="th" scope="row">
                                {row.lang}
                            </TableCell>
                            <TableCell numeric>{row.count}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

class HashtagLangView extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="#1da1f2">
                    <Tabs value={value} onChange={this.handleChange}>
                        {hashtaglang_data.map(row => {
                            return (
                                <Tab label={row.hashtag} />
                            );
                        })}
                    </Tabs>
                </AppBar>
                <LangTable data={hashtaglang_data[value].lang_group}/>
            </div>
        );
    }
}

HashtagLangView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HashtagLangView);