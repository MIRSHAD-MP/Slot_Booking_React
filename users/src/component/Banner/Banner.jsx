import { Container, Row, Col } from 'react-bootstrap'
import Typography from '@mui/material/Typography'
import './Banner.css'
const Banner = () => {
    return (
        <div className='hero'>
            <Container>
                <Row className='banner-media'>
                    <Col>
                        <Typography variant="h3" gutterBottom component="div" mt={2} mb={5}>
                            WLECOME
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
