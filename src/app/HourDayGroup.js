import {withStyles} from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';

import HourDayTable from './HourDayTable'

const styles = theme => ({});

function HourDayGroup(props) {
    return (<HourDayTable />);
}

HourDayGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HourDayGroup);