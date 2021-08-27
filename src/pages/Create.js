import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<KeyboardArrowRightIcon />}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>

      <br />

      {/* icons */}
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" />
    </Container>
  );
}
