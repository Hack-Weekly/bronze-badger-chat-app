import * as React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import { SwipeableDrawer } from '@mui/material';

const drawerWidth = 360;

function ResponsiveDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  console.log(props);

  //   Contents of the drawer
  const drawer = <div>Test</div>;

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: 'flex' }}>
    //   <Box
    //     component='nav'
    //     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    //     aria-label='mailbox folders'
    //   >
    <div className='md:min-w-[360px]'>
      <SwipeableDrawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
      <SwipeableDrawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </SwipeableDrawer>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
  mobileOpen: Boolean,
  handleDrawerToggle: PropTypes.func,
};

export default ResponsiveDrawer;
