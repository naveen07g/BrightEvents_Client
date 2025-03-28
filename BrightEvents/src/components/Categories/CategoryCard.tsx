// src/components/CategoryCard.tsx

import { Card, CardActionArea, CardMedia, Typography, Box } from "@mui/material";
import { useState } from "react";

interface CategoryCardProps {
    title: string;
    image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                width: 300,
                borderRadius: 4,
                mt:3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                }
            }}
        >
            <CardActionArea>
                <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height="320" image={image} alt={title} />

                    {/* Overlay */}
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: hovered
                            ? 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))'
                            : 'transparent',
                        transition: '0.3s'
                    }} />

                    {/* Show title ONLY on hover */}
                    {hovered && (
                        <Typography variant="h5" sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            color: 'white',
                            fontWeight: 'bold',
                            opacity: hovered ? 1 : 0,
                            transition: 'opacity 0.3s',
                            textAlign: 'center'
                        }}>
                            {title}
                        </Typography>
                    )}
                </Box>
{/* 
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent> */}
            </CardActionArea>
        </Card>
    );
};

export default CategoryCard;
