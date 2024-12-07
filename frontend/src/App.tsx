import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Course from './pages/Course';
import Visualizations from './pages/Visualizations';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function getUTMParams() {
      const urlParams = new URLSearchParams(window.location.search);
      return {
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_term: urlParams.get('utm_term'),
        utm_content: urlParams.get('utm_content'),
      };
    }

    function categorizeTrafficSource() {
      const utmParams = getUTMParams();

      if (
        utmParams.utm_medium === 'cpc' ||
        utmParams.utm_source === 'google' ||
        utmParams.utm_source === 'facebook'
      ) {
        return 'paid';
      } else if (
        utmParams.utm_medium === 'referral' ||
        utmParams.utm_source === 'referral'
      ) {
        return 'referral';
      } else if (
        utmParams.utm_medium === 'organic' ||
        utmParams.utm_source === 'google'
      ) {
        return 'organic';
      } else {
        return 'organic';
      }
    }

    const trafficSource = categorizeTrafficSource();
    localStorage.setItem('trafficSource', trafficSource);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-xxs transition-all ease">
      <Navbar />
      <div className="px-10 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/visualizations" element={<Visualizations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
