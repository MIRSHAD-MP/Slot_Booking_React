import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'


const theme = createTheme();
const Registration = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async (data) => {
    try {
      const token = user.jwt
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      let addIncubation = await axios.post('/user/addIncubation', {data:data},config)
      console.log(addIncubation);
      if (addIncubation.data.updated) {
        navigate('/processing')
      }
    } catch (error) {
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  error={!!errors?.name}
                  helperText={errors?.name ? errors.name.message : null}
                  {...register("name", { required: "Name is required" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="family-name"
                  error={!!errors?.address}
                  hyperText={errors?.address ? errors.address.message : null}
                  {...register("address", { required: "Address is required" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="City"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                  error={!!errors?.city}
                  hyperText={errors?.city ? errors.city.message : null}
                  {...register("city", { required: "City is required" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="State"
                  autoComplete="family-name"
                  error={!!errors?.state}
                  hyperText={errors?.state ? errors.state.message : null}
                  {...register("state", { required: "State is required" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type='email'
                  autoFocus
                  error={!!errors?.email}
                  hyperText={errors?.email ? errors.email.message : null}
                  {...register("email", { required: "Email is required" })}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type='tel'
                  autoComplete="family-name"
                  error={!!errors?.phoneNumber}
                  hyperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
                  {...register("phoneNumber", { required: "Phone Number is required" })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="companyName"
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  autoFocus
                  error={!!errors?.companyName}
                  hyperText={errors?.companyName ? errors.companyName.message : null}
                  {...register("companyName", { required: "Company Name is required" })}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="background"
                  label="Dscribe Your Team and Background"
                  name="background"
                  autoComplete="background"
                  multiline
                  minRows={3}
                  error={!!errors?.background}
                  hyperText={errors?.background ? errors.background.message : null}
                  {...register("background", { required: "Background is required" })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="products"
                  label="Dscribe Your Company and Products"
                  name="products"
                  autoComplete="products"
                  multiline
                  minRows={3}
                  error={!!errors?.products}
                  hyperText={errors?.products ? errors.products.message : null}
                  {...register("products", { required: "Products are required" })}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="solve"
                  label="Dscribe the problem yor are trying to solve"
                  name="solve"
                  autoComplete="solve"
                  multiline
                  minRows={3}
                  error={!!errors?.solve}
                  hyperText={errors?.solve ? errors.solve.message : null}
                  {...register("solve", { required: "Solve is required" })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrations
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Registration
