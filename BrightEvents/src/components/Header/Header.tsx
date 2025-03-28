
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LoginModal from '../Login/Login';
import './Header.css';
import BusinessLogin from '../BusinessLogin/BusinessLogin';

const pages = ['Venues', 'Vendors', 'Photos', 'Real Weddings', 'Blog', 'E-Invites'];

const Header = () => {

  const handleNavClick = (page: string) => {
    console.log(`Navigate to ${page}`);
    // Optional: React Router navigation here
  };

  return (
    <AppBar position="absolute" sx={{ width: '100%', background: 'linear-gradient(rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)', borderBottom: 'none', boxShadow: 'none' }}>
      <Toolbar className='align-toolbar' >

        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          BRIGHTEVENTS LOGO
        </Typography>

        {/* Menu close to logo */}
        <Box sx={{ display: 'flex', gap: 3, marginLeft: '100px' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleNavClick(page)}
              sx={{
                color: 'white',
                mx: 1,
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />
        
          <BusinessLogin/>

        {/* Right - Login Button */}
        <LoginModal />
      </Toolbar>
    </AppBar>
  )
}

export default Header
