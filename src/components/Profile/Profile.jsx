import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Select, MenuItem, IconButton, Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function Profile() {
  const industries = useSelector((store) => store.industries);
  const user = useSelector((store) => store.editUser);
  const dispatch = useDispatch();
  const [industry, setIndustry] = useState([]);
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    dispatch({
      type: "FETCH_EDIT_USER",
    });
    dispatch({
      type: "FETCH_INDUSTRIES",
    });
  }, [dispatch]);

  useEffect(() => {
    setIndustry(user.industry);
  }, [user]);

  const handleFirstNameChange = (event) => {
    dispatch({
      type: "UPDATE_USER_FIRST_NAME",
      payload: event.target.value,
    });
  };

  const handleLastNameChange = (event) => {
    dispatch({
      type: "UPDATE_USER_LAST_NAME",
      payload: event.target.value,
    });
  };

  const handleCompanyChange = (event) => {
    dispatch({
      type: "UPDATE_USER_COMPANY",
      payload: event.target.value,
    });
  };

  const handleIndustryChange = (event) => {
    if (event.target.value) {
      dispatch({
        type: "UPDATE_USER_INDUSTRY",
        payload: event.target.value,
      });
    }
  };

  const handleEmailChange = (event) => {
    dispatch({
      type: "UPDATE_USER_EMAIL",
      payload: event.target.value,
    });
  };

  const handleEditButton = (event) => {
    event.preventDefault();
    setReadOnly(!readOnly);
  };

  const handleSaveButton = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  return (
    <Container style={{ paddingTop: "100px" }}>
      <Card
        elevation={10}
        component="form"
        sx={{
          "& > :not(style)": { m: 3 },
          position: "relative", // Ensure Card is relative for absolute positioning if needed
          p: 2,
          mx: "auto", // Center the card
          maxWidth: 800, // Optional: Limit the card's maximum width for better aesthetics
        }}
        noValidate
        autoComplete="off"
      >
        <Typography gutterBottom variant="h4" component="div">
          My Profile
        </Typography>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="flex-start"
          sx={{ paddingLeft: 2, paddingRight: 2 }}
        >
          <Grid item xs={12}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ mb: 2, maxWidth: "800%" }}
            >
              <Input
                placeholder="First Name"
                value={user.first_name || ""}
                onChange={handleFirstNameChange}
                id="component-simple"
                readOnly={readOnly}
              />
              <FormHelperText>First Name</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ mb: 2, maxWidth: "800%" }}
            >
              <Input
                placeholder="Last Name"
                value={user.last_name || ""}
                onChange={handleLastNameChange}
                id="component-helper"
                aria-describedby="component-helper-text"
                readOnly={readOnly}
              />
              <FormHelperText>Last Name</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ mb: 2, maxWidth: "800%" }}
            >
              <Input
                placeholder="Company"
                value={user.company || ""}
                onChange={handleCompanyChange}
                id="component-simple"
                readOnly={readOnly}
              />
              <FormHelperText>Company</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ mb: 2, maxWidth: "100%" }}
            >
              <Select
                labelId="dynamic-select-label"
                value={user.industry_id || ""}
                onChange={handleIndustryChange}
                disabled={readOnly}
              >
                <MenuItem value="" disabled>
                  Industry
                </MenuItem>
                {industries?.map((industry) => (
                  <MenuItem key={industry.id} value={industry.id}>
                    {industry.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Industry</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ mb: 2, maxWidth: "800%" }}
            >
              <Input
                placeholder="Email"
                value={user.username || ""}
                onChange={handleEmailChange}
                id="component-simple"
                readOnly={readOnly}
              />
              <FormHelperText>Email</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            onClick={handleSaveButton}
            variant="contained"
            color="primary"
            disabled={readOnly}
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <IconButton onClick={handleEditButton}>
            <EditIcon />
          </IconButton>
        </Box>
      </Card>
    </Container>
  );
}

export default Profile;
