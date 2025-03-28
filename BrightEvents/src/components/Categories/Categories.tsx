
import { Box, Button, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";

// Sample images
import CateringImage from '../../assets/Categories/Catering.jpg';
import DJImage from '../../assets/Categories/DJ.jpg';
import EventManager from '../../assets/Categories/EventManager.jpg';
import PhotographyImage from '../../assets/Categories/Photographer.jpg';
import MakeupImage from '../../assets/Categories/bridalmakep.jpg';

const Categories = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 8, backgroundColor: '#F5F5F5' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FF6F61', mb: 2 }}>
                Our Services
            </Typography>
            <Typography variant="h6" sx={{ color: 'gray', maxWidth: '700px', mx: 'auto' }}>
                We offer a wide range of services to make your events unforgettable. Choose from our best services tailored to your needs.
            </Typography>



            {/* Grid with 5 Cards */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <CategoryCard title="Makeup Artist" image={MakeupImage} />
                <CategoryCard title="DJ's" image={DJImage} />
                <CategoryCard title="Photographers" image={PhotographyImage} />
                <CategoryCard title="Catering Services" image={CateringImage} />
                <CategoryCard title="Event Managers" image={EventManager} />

            </Box>

            {/* Right aligned text BELOW the grid */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 35, mt: 3 }}>

                <Button
                    variant="text"
                    sx={{
                        color: '#FF6F61',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&:hover svg': {
                            transform: 'translateX(4px)',
                            transition: 'transform 0.3s ease',
                        },
                        '&:hover': {
                            color: '#ff443a',
                            backgroundColor: 'transparent',
                        }
                    }}
                >
                    View All Services
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                        style={{ transition: 'transform 0.3s ease' }}
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                    </svg>
                </Button>

            </Box>
        </Box>


    );
};

export default Categories;
