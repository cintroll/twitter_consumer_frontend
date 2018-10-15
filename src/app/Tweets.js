import {withStyles} from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';

import TweetTable from './TweetTable'

const styles = theme => ({});

function Tweets(props) {
    return (<TweetTable />);
}

Tweets.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweets);