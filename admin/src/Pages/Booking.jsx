import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RecordLIst from '../components/Record Track/RecordLIst';
import BookingSlot from '../components/BookingSlot/BookingSlot';
const Booking = () => {
  return (
    <div>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                }}
                            >
                                <Typography>
                                    NEW APPLICANT LIST
                                </Typography>
                                <BookingSlot/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
  )
}

export default Booking
