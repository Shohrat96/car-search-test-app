'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

  useEffect(() => {
    // Fetch vehicle makes from the API
    const fetchMakes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_VEHICLE_API_BASE_URL}/GetMakesForVehicleType/car?format=json`);
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error('Failed to fetch vehicle makes:', error);
      }
    };

    fetchMakes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Vehicle Filter</h1>

      {/* Vehicle Make Selector */}
      <div className="mb-4 w-full max-w-xs">
        <label htmlFor="make" className="block text-sm font-medium text-gray-700">Vehicle Make</label>
        <select
          id="make"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select a make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      {/* Model Year Selector */}
      <div className="mb-4 w-full max-w-xs">
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Model Year</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Link
        href={`/result/${selectedMake}/${selectedYear}`}
        className={`px-4 py-2 rounded-md text-white ${selectedMake && selectedYear ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        Next
      </Link>
    </div>
  );
}
