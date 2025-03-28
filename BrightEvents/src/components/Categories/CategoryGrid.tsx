// src/components/CategoryGrid.tsx

import { Box, Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

// Sample images (replace with your actual images)
import DJImage from '../assets/dj.jpg';
import PhotographyImage from '../assets/photography.jpg';
import CateringImage from '../assets/catering.jpg';

const CategoryGrid = () => {
    return (
        <Box sx={{ py: 8, px: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item>
                    <CategoryCard title="DJ" image={DJImage} />
                </Grid>
                <Grid item>
                    <CategoryCard title="Photography" image={PhotographyImage} />
                </Grid>
                <Grid item>
                    <CategoryCard title="Catering" image={CateringImage} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryGrid;
