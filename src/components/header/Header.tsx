import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Space } from './style';

const Header = () => {
  const displayDesktop = () => {
    return <Toolbar>{logo}</Toolbar>;
  };

  const logo = (
    <Typography variant="h6" component="h1">
      Scale Tab Creator
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
      <Space />
    </header>
  );
};

export { Header };
