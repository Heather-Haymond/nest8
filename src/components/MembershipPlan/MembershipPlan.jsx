import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container, Card, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp";

function MembershipPlan() {
  const dispatch = useDispatch();
  const [openPopUp, setOpenPopUp] = useState(false);
  const products = useSelector((store) => store.products.products);
  const [productSelected, setProductSelected] = useState(0);

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, []);

  const handleAddToCart = (productId) => {
    setProductSelected(productId);
    setOpenPopUp(true);
  };

  const closePopUp = () => {
    setOpenPopUp(false);
  };

  return (
    <Container
      style={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={10} sx={{ p: 5 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 2 }}>
          Nest 8 Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            {products.map((product) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  pb: 2,
                }}
                key={product.id}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  whiteSpace="nowrap"
                  minWidth={160}
                  gap={2}
                  p={2}
                  sx={{ border: "2px solid grey" }}
                  key={product.id}
                >
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="h5">${product.promo_price}</Typography>
                  <Typography variant="h">
                    <s>${product.price}</s>
                    {product.description}
                  </Typography>
                  <Typography variant="body1">30-day free trial</Typography>
                </Box>
                <Button
                  sx={{ alignText: "center" }}
                  variant="contained"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </Button>
                {openPopUp ? (
                  <ConfirmPopUp
                    closePopUp={closePopUp}
                    productId={productSelected}
                  />
                ) : (
                  ""
                )}
              </Card>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <FormControlLabel
            sx={{ mx: 5 }}
            control={<Checkbox checked readOnly />}
            label="All-in-one tracker: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            sx={{ mx: 5 }}
            control={<Checkbox checked readOnly />}
            label="All-in-one tracker: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default MembershipPlan;
