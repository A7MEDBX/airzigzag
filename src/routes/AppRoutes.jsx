import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const FlightPermits = lazy(() => import('../pages/FlightPermits/FlightPermits'));
const GroundHandling = lazy(() => import('../pages/GroundHandling/GroundHandling'));
const FuelServices = lazy(() => import('../pages/FuelServices/FuelServices'));
const FlightPlanning = lazy(() => import('../pages/FlightPlanning/FlightPlanning'));
const AncillaryServices = lazy(() => import('../pages/AncillaryServices/AncillaryServices'));
const HotelAccommodation = lazy(() => import('../pages/HotelAccommodation/HotelAccommodation'));
const VIPTransportation = lazy(() => import('../pages/VIPTransportation/VIPTransportation'));
const VisaTicketing = lazy(() => import('../pages/VisaTicketing/VisaTicketing'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const CargoOperations = lazy(() => import('../pages/CargoOperations/CargoOperations'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/flight-permits" element={<FlightPermits />} />
      <Route path="/ground-handling" element={<GroundHandling />} />
      <Route path="/fuel-services" element={<FuelServices />} />
      <Route path="/flight-planning" element={<FlightPlanning />} />
      <Route path="/ancillary-services" element={<AncillaryServices />} />
      <Route path="/hotel-accommodation" element={<HotelAccommodation />} />
      <Route path="/vip-transportation" element={<VIPTransportation />} />
      <Route path="/visa-ticketing" element={<VisaTicketing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cargo-operations" element={<CargoOperations />} />
    </Routes>
  );
};

export default AppRoutes;
