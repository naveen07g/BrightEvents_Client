import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
} from "@mui/material";

const BusinessSignUp = () => {
    const [formData, setFormData] = useState({
        ownerName: "",
        businessName: "",
        address: "",
        mobileNumber: "",
        email: "",
        gstin: "",
    });

    const [errors, setErrors] = useState({
        ownerName: "",
        businessName: "",
        address: "",
        mobileNumber: "",
        email: "",
        gstin: "",
        logo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size > 1024 * 1024) {
            setErrors({ ...errors, logo: "File size must be less than 1MB" });
        } else {
            setFormData({ ...formData });
            setErrors({ ...errors, logo: "" });
        }
    };

    const validate = () => {
        let isValid = true;
        const newErrors: any = {};

        if (!formData.ownerName) {
            newErrors.ownerName = "Owner Name is required";
            isValid = false;
        }
        if (!formData.businessName) {
            newErrors.businessName = "Business Name is required";
            isValid = false;
        }
        if (!formData.address) {
            newErrors.address = "Address is required";
            isValid = false;
        }
        if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Valid Mobile Number is required";
            isValid = false;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid Email is required";
            isValid = false;
        }
        if (!formData.gstin || formData.gstin.length !== 15) {
            newErrors.gstin = "Valid GSTIN (15 characters) is required";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Data Submitted:", formData);
            // Add your form submission logic here
        }
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Business Registration
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Business Owner Name"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            error={!!errors.ownerName}
                            helperText={errors.ownerName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Business Name"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            error={!!errors.businessName}
                            helperText={errors.businessName}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Mobile Number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber}
                            inputProps={{
                                maxLength: 10, // Restrict input to 10 characters
                                inputMode: "numeric", // Show numeric keyboard on mobile devices
                                pattern: "[0-9]*", // Allow only numeric input
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email ID"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="GSTIN Number"
                            name="gstin"
                            value={formData.gstin}
                            onChange={handleChange}
                            error={!!errors.gstin}
                            helperText={errors.gstin}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            color={errors.logo ? "error" : "primary"}
                        >
                            Upload Business Logo
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </Button>
                        {errors.logo && (
                            <Typography color="error" variant="body2">
                                {errors.logo}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default BusinessSignUp;