import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <PriceChangeIcon sx={{ fontSize: 40 }} />,
      title: 'Price Tracking',
      description: 'Automatically track product prices from Amazon and other e-commerce platforms.'
    },
    {
      icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
      title: 'Price Alerts',
      description: 'Get notified when prices drop below your target price.'
    },
    {
      icon: <CompareArrowsIcon sx={{ fontSize: 40 }} />,
      title: 'Price Comparison',
      description: 'Compare prices across different platforms to find the best deals.'
    }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to PricePulse
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Track prices, get alerts, and find the best deals across e-commerce platforms
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/track')}
          sx={{ mt: 2 }}
        >
          Start Tracking
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home; 