import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";

const BusinessSignUp = () => {
    const [formData, setFormData] = useState({
        ownerName: "Owner",
        businessName: "Hello",
        address: "Plano, Texas",
        mobileNumber: "9876543210",
        email: "hellonaveen@abc.com",
        gstin: "123123456456789789",
        businessCategory: "Catering",
    });

    const [errors, setErrors] = useState({
        ownerName: "",
        businessName: "",
        address: "",
        mobileNumber: "",
        email: "",
        gstin: "",
        logo: "",
        businessCategory: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }> | { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        if (typeof name === "string") {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        let isValid = true;
        const newErrors: typeof errors = {
            ownerName: "",
            businessName: "",
            address: "",
            mobileNumber: "",
            email: "",
            gstin: "",
            logo: "",
            businessCategory: "",
        };

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
        if (!formData.businessCategory) {
            newErrors.businessCategory = "Business Category is required";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate()) {
            console.log("Form Data Submitted:", formData);
            
            // Save form data as JSON and download it
            const jsonData = JSON.stringify(formData, null, 2); // Pretty-print JSON
            const blob = new Blob([jsonData], { type: "application/json" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "business_registration.json";
            link.click();
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
                            onChange={(e) => {
                                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                                handleChange({
                                    target: {
                                        name: e.target.name!,
                                        value: numericValue,
                                    },
                                });
                            }}
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber}
                            inputProps={{
                                maxLength: 10,
                                inputMode: "numeric",
                                pattern: "[0-9]{10}",
                                title: "Please enter a 10-digit phone number",
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
                        <FormControl fullWidth error={!!errors.businessCategory}>
                            <InputLabel>Business Category</InputLabel>
                            <Select
                                name="businessCategory"
                                value={formData.businessCategory}
                                onChange={handleChange}
                            >
                                <MenuItem value="Catering">Catering</MenuItem>
                                <MenuItem value="Photography">Photography</MenuItem>
                                <MenuItem value="Venues">Venues</MenuItem>
                                <MenuItem value="Anchors">Anchors</MenuItem>
                                <MenuItem value="Singers">Singers</MenuItem>
                                <MenuItem value="Magicians">Magicians</MenuItem>
                                <MenuItem value="Dancers">Dancers</MenuItem>
                            </Select>
                            {errors.businessCategory && (
                                <Typography color="error" variant="body2">
                                    {errors.businessCategory}
                                </Typography>
                            )}
                        </FormControl>
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