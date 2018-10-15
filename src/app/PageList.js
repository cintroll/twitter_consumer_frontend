import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import React from "react";
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const styles = theme => ({
    routeLink: {
        textDecoration: 'none',
        display: 'block'
    }
});

function PagesList(props) {
    const { classes } = props;
    return (
        <MenuList>
            <NavLink exact to='/' className={classes.routeLink}>
                <MenuItem>Home</MenuItem>
            </NavLink>
            <NavLink to='/topfive' className={classes.routeLink}>
                <MenuItem>Top Five</MenuItem>
            </NavLink>
            <NavLink to='/hourdaygroup' className={classes.routeLink}>
                <MenuItem>Hour of Day Group</MenuItem>
            </NavLink>
            <NavLink to='/hashtaglanggroup' className={classes.routeLink}>
                <MenuItem>Hashtag Language Group</MenuItem>
            </NavLink>
        </MenuList>
    );
}

PagesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PagesList);