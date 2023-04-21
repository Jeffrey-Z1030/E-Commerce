import { useState,useEffect } from "react";
import { Paper, Typography, Grid, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

function Jewelry() {
    const [products, setProducts] = useState([]);

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    const productStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
        maxWidth: '500px',
    };

    async function getJewelry() {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setProducts(json));
    }

    useEffect(() => {
        getJewelry();
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products ? (
                products.map((product) => (
                    <Paper key={product.id} elevation={3} sx={productStyles}>
                        <Grid container spacing={2}>
                            <Grid item>
                                {/* Wrap the image in an anchor tag */}
                                <Link to={`/products/${product.id}`}>
                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <Img alt={product.title} src={product.image} />
                                    </ButtonBase>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {product.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: {product.id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Average Customer Ratings: {product.rating.rate}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                                            Add To Cart
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        ${product.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Jewelry;
