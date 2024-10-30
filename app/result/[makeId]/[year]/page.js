import { Suspense } from 'react';

async function fetchVehicleModels(makeId, year) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VEHICLE_API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    if (!res.ok) throw new Error('Failed to fetch vehicle models');
    const data = await res.json();
    return data.Results;
  }

export async function generateStaticParams() {
    const makes = await fetch(`${process.env.NEXT_PUBLIC_VEHICLE_API_BASE_URL}/GetMakesForVehicleType/car?format=json`)
      .then((res) => res.json())
      .then((data) => data.Results);
  
    // 2015 selected just as a minimum bound of date range
    const years = Array.from({ length: new Date().getFullYear() - 2015 + 1 }, (_, i) => 2015 + i);
  
    const paths = [];
    makes.forEach((make) => {
      years.forEach((year) => {
        paths.push({ makeId: make.MakeId.toString(), year: year.toString() });
      });
    });
  
    return paths;
  }

  export default async function ResultPage({ params }) {
    const { makeId, year } = params;
  
    const models = await fetchVehicleModels(makeId, year);
  
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
        <h1 className="text-2xl font-semibold mb-6">
          Vehicle Models for Make ID: {makeId}, Year: {year}
        </h1>
        
        <Suspense fallback={<Loading />}>
          <ModelList models={models} />
        </Suspense>
      </div>
    );
  }

  function ModelList({ models }) {
    if (models.length === 0) {
      return <p>No models found for the selected make and year.</p>;
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {models.map((model) => (
          <div key={model.Model_ID} className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
            <p>Model ID: {model.Model_ID}</p>
          </div>
        ))}
      </div>
    );
  }

  function Loading() {
    return <p>Loading vehicle models...</p>;
  }