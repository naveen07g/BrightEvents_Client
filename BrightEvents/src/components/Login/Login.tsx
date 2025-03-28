import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, InputAdornment, Checkbox, FormControlLabel, Link, Divider, Fade } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function LoginModal() {
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleTogglePassword = () => setShowPassword(!showPassword);

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleOpen}
                sx={{
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    mr: 12.5,
                    borderRadius: '5px',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: '#ffffff'
                    },
                }}
            >
                Login
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            borderRadius: 3,
                            boxShadow: 24,
                            p: 4,
                            outline: 'none'
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: '600', color: '#FF6F61' }}>
                            Welcome Back!
                        </Typography>

                        {/* Email Login */}
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                        />

                        {/* Password Login */}
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {/* Remember me & forgot password */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                            <Link href="#" underline="hover" sx={{ fontSize: '0.9rem' }}>
                                Forgot Password?
                            </Link>
                        </Box>

                        {/* Login Button */}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: '#FF6F61',
                                borderRadius: '8px',
                                '&:hover': { backgroundColor: '#ff443a' }
                            }}
                        >
                            Login
                        </Button>

                        <Divider sx={{ my: 3 }}>Or continue with</Divider>

                        {/* Social Login Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {/* Email Login */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<EmailIcon sx={{ color: '#FF6F61' }} />}
                                sx={{
                                    textTransform: 'none',
                                    borderColor: '#ccc',
                                    '&:hover': { borderColor: '#aaa', background: '#fdf3f2' }
                                }}
                            >
                                Continue with Email
                            </Button>

                            {/* Facebook Login */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<FacebookIcon sx={{ color: '#1877F2' }} />}
                                sx={{
                                    textTransform: 'none',
                                    borderColor: '#ccc',
                                    '&:hover': { borderColor: '#aaa', background: '#f0f4ff' }
                                }}
                            >
                                Continue with Facebook
                            </Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
