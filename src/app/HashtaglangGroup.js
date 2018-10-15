import {withStyles} from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';

import HashtagLangView from './HashtagLangView'

const styles = theme => ({});

function HashtagLangGroup(props) {
    return (<HashtagLangView />);
}

HashtagLangGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HashtagLangGroup);