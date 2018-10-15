import {withStyles} from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';

const styles = theme => ({});

function Tweets(props) {
    return (<div>To be done</div>);
}

Tweets.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweets);