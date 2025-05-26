# PricePulse

PricePulse is a web application that helps users track product prices from Amazon and get notified when prices drop below their target price.

## Features

- User authentication (register/login)
- Track product prices from Amazon
- Set target prices and get email notifications
- View price history with interactive charts
- Modern and responsive UI
- Automatic price tracking every 30 minutes

## Tech Stack

### Frontend
- React
- TypeScript
- Material-UI
- Chart.js
- Axios

### Backend
- FastAPI
- SQLAlchemy
- APScheduler
- SQLite
- JWT Authentication

## Setup Instructions

### Backend Setup

1. Create and activate a virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Initialize the database:
```bash
python init_db.py
```

4. Start the backend server:
```bash
uvicorn main:app --reload
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
SECRET_KEY=your-secret-key
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=your-email@example.com
OPENAI_API_KEY=your-openai-api-key
```

## API Documentation

Once the backend server is running, you can access the API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 