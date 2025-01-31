# Product Management Frontend (React)

This is the frontend of the Product Management Application built using React.


## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn installed


## Installation & Setup

1. **Clone the repository**  
   git clone <repository-url>
   cd frontend

2. **Install dependencies**
    npm install  # or yarn install

3. **Configure API Base URL**
    In src/api.js, update the API base URL if needed:
    export const API_BASE_URL = "http://127.0.0.1:8000/api/products/";

4. **Run the development server**
    npm start  # or yarn start
    The frontend will be available at http://localhost:3000.


## Features
    Add Product: Users can add new products.
    View Products: List of all available products.
    Edit Product: Users can edit existing products.
    Delete Product: Users can delete a product.
    Form Validation: Ensures the name is not empty and price is positive.


## Troubleshooting
    CORS Policy Issue: If you get a CORS error, ensure the backend has CORS headers configured (see backend README).
    API Not Responding: Ensure the Django backend is running on http://127.0.0.1:8000/api/products/.