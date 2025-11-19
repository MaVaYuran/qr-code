import React from 'react';
import Navigation from './components/navigation/Navigation';
import QRCodeGenerator from './components/generator/QRCodeGenerator';
import QRCodeScanner from './components/scanner/QRCodeScanner';
import GenerateHistory from './components/GenerateHistory';
import ScanHistory from './components/ScanHistory';
import { Route, Routes } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QRCodeGenerator />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/genstore" element={<GenerateHistory />} />
        <Route path="/scanstore" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
