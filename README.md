# Kasbah Cuisine

## Description

Kasbah Cuisine is an authentic and elegant restaurant website that offers a fully responsive interface where users can explore the menu, interior, and information about the restaurant. The website allows customers to book, update, or cancel reservations directly. It includes integrated features such as a Google Map for directions, and a robust backend managed with Supabase to handle bookings and data interactions.

## Technology Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Supabase
- **Libraries and Plugins**: React Router, Google Maps

## Features

- **Context API for State Management**: Utilizes React's Context API to manage global state across various components without prop drilling. This approach simplifies the state management , theme settings, and more, making the app more maintainable and scalable.
- **React Hooks**: Employs React Hooks for state management and side effects in functional components. This includes useState for managing local state, useEffect for handling lifecycle events, and custom hooks for encapsulating reusable logic. This approach leads to cleaner, more readable code and enhances component reusability and composability.
- **Responsive Design**: Ensures a great user experience across all devices.
- **Booking System**: Allows users to book a table, update their reservation, or cancel it.
- **Real-time Data Interaction**: Users can interact with their bookings and view real-time updates.
- **Location Services**: Integrated Google Maps to provide directions and location details.

## Installation Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abdelkrimou/kasbah-cuisine.git
   cd kasbah-cuisine
   ```

2. **Install dependencies**:
   npm install
3. **Configure Environment Variables**:
   VITE_SUPABASE_KEY=your_supabase_api_key_here
   VITE_GOOGLE_API_KEY=your_google_maps_api_key_here

## How to Contribute

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## Credits and Acknowledgements

Special thanks to all the libraries and frameworks that made this project possible.
