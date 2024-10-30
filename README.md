# Vehicle Information Next.js Application

## Overview

This application is a Next.js-based project designed to let users filter and view vehicle makes and models by selecting a vehicle type and model year. The application uses the National Highway Traffic Safety Administration (NHTSA) API to fetch and display data.

## Features

- **Filter Page**: Users can select a vehicle make and model year from dropdowns. Once selections are made, a "Next" button enables navigation to the results page.
- **Result Page**: Displays the list of vehicle models for the selected make and year, fetched from the NHTSA API.
- **Responsive Design**: Styled with Tailwind CSS to ensure usability across different screen sizes.
- **Server-Side Rendering**: Uses Next.js's server component features for efficient data fetching and page rendering.
- **Suspense Loading State**: Implements React’s `Suspense` to show loading feedback while fetching data.

## Project Architecture

- **Pages**: The project uses Next.js's file-based routing system. The main pages are:
  - `FilterPage`: The home page with dropdowns for vehicle make and year selection.
  - `ResultPage`: Displays results for the selected vehicle make and year.
- **API**: Uses the NHTSA API for real-time data fetching.
- **Environment Variables**: The application uses environment variables for API URLs, stored in `.env.local`.
- **Styling**: Tailwind CSS is used for responsive and modern UI design.

## Getting Started

- **Node.js** (version 14 or higher) and **npm** (Node Package Manager) installed.


### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies:**:
   ```bash
   npm install

3. **Set up environment variables:**:
   Create a .env.local file in the root directory:
   NEXT_PUBLIC_VEHICLE_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles
   Note: Environment variables prefixed with NEXT_PUBLIC_ are accessible on both server and client.

## Running the Application
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

