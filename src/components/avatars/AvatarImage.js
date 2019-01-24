import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Profil from '../../assets/profil.png';

const styles = {
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Wind Code" src={Profil} className={classes.avatar} />
      <Avatar alt="Wind Code" src={Profil} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
