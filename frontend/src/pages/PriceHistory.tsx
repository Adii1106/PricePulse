import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PriceData {
  timestamp: string;
  price: number;
}

interface ProductData {
  name: string;
  current_price: number;
  target_price: number | null;
  image_url: string | null;
}

const PriceHistory = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [priceHistory, setPriceHistory] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products/${productId}`);
        setProductData(response.data.product);
        setPriceHistory(response.data.price_history);
      } catch (err) {
        setError('Failed to fetch product data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const chartData = {
    labels: priceHistory.map(data => new Date(data.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Price History',
        data: priceHistory.map(data => data.price),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price History'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (₹)'
        }
      }
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              {productData?.image_url && (
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                  <img
                    src={productData.image_url}
                    alt={productData.name}
                    style={{ maxWidth: '100%', maxHeight: 200 }}
                  />
                </Box>
              )}
              <Typography variant="h5" gutterBottom>
                {productData?.name}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                Current Price: ₹{productData?.current_price}
              </Typography>
              {productData?.target_price && (
                <Typography variant="body1" color="text.secondary">
                  Target Price: ₹{productData.target_price}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Line data={chartData} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PriceHistory; 