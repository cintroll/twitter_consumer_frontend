import {withStyles} from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';

import TopFiveTable from './TopFiveTable'

const styles = theme => ({});

function TopFive(props) {
    return (<TopFiveTable />);
}

TopFive.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopFive);