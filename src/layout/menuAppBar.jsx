import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import { Badge, Grid } from '@material-ui/core';
import { ShoppingCart, Favorite } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoContainer: {
    cursor: 'pointer'
  },
  img: {
    height: 60,
    width: 60,
    margin: 10
  },
};

const StyledTitle = withStyles({
  root: {
    color: 'white',
    padding: '0 20px',
    fontSize: 30,
    marginTop: 20,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Typography);


class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <Grid 
                container 
                item 
                direction="row" 
                alignItems="center"
                xs={3}
                md={3}
                sm={6}
                lg={3}
                className={classes.logoContainer}
                onClick={() => this.props.history.replace('/')}
              >
                {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton> */}
                <img src={require('./img/learning (6).png')} alt="logo" className={classes.img} />
                <StyledTitle>Pausa na leitura</StyledTitle>

              </Grid>

              <Grid
                container
                item
                direction="row"
                alignItems="center"
                xs={6}
                sm={3}
                md={3}
                lg={1}
                justify="space-between"
              >
                <IconButton color="inherit" onClick={() => this.goTo('shopping')}>
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                    {/* 
                    <Link to="shopping">
                      <ShoppingCart />
                    </Link> */}
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={() => this.goTo('wishlist')}>
                  <Badge badgeContent={4} color="secondary">
                    <Favorite />
                    {/* <Link to="wishlists">
                      <Favorite />
                    </Link> */}
                  </Badge>
                </IconButton>

                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Meu perfil</MenuItem>
                    <MenuItem onClick={this.handleClose}>Sair</MenuItem>
                  </Menu>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);