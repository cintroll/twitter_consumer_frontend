import { Route, HashRouter} from "react-router-dom";

import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PagesList from './PageList'
import Tweets from './Tweets'
import TopFive from './TopFive'
import HourDayGroup from './HourDayGroup'
import HashtagLangGroup from './HashtaglangGroup'
import TwitterIcon from './TwitterIcon'

const drawerWidth = 250;

const styles = theme => ({
    root: {
        minWidth: 600
    },
    flex: {
        flexGrow: 1
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        "background-color": "#1da1f2",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    }
})

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    handleDrawerOpen() {
        this.setState({ open: true });
    };

    handleDrawerClose() {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        const appBar = (
            <AppBar
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}>
                <Toolbar disableGutters={false}>
                    <IconButton
                        color="inherit"
                        onClick={this.handleDrawerOpen}
                        className={classes.menuButton}>
                        <TwitterIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}>
                        Twitter Consumer
                    </Typography>
                </Toolbar>
            </AppBar>
        );
        const drawer = (
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                <Divider />
                <PagesList />
            </Drawer>
        );

        const content = (
            <div
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}>
                <div className={classes.drawerHeader} />

                <Route exact path="/" component={Tweets} />
                <Route path="/topfive" component={TopFive} />
                <Route path="/hourdaygroup" component={HourDayGroup} />
                <Route path="/hashtaglanggroup" component={HashtagLangGroup} />
            </div>
        );

        return (
            <HashRouter>
                <div className={classes.root}>
                    {appBar}
                    {drawer}
                    {content}
                </div>
            </HashRouter>
        );
    }
}

export default withStyles(styles)(App);