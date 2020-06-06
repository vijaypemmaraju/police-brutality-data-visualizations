import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import './App.css';
import randomColor from 'randomcolor';
import fetchData from './fetchData';
import aggregateByDate from './aggregateByDate';
import { Point, LocationData } from './types';
import aggregateByLocation from './aggregateByLocation';


const App: React.FC = () => {
  const [dateData, setDateData] = useState<Point[]>([]);
  const [locationData, setLocationData] = useState<LocationData>({} as LocationData);

  useEffect(() => {
    (async () => {
      const jsonData = await fetchData();

      setDateData(aggregateByDate(jsonData));
      setLocationData(aggregateByLocation(jsonData));
    })();
  }, []);

  return (
    <div className="App">
      {dateData.length > 0 && (
        <Line
          height={55}
          data={{
            datasets: [{
              label: 'Incidents',
              data: dateData,
              backgroundColor: randomColor({ hue: 'red' }),
            }],
          }}
          options={{
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  unit: 'day',
                },
              }],
            },
            // maintainAspectRatio: true,
          }}
        />
      )}
      {locationData.values && (
        <Pie
          height={100}
          data={{
            datasets: [{
              data: locationData.values,
              backgroundColor: randomColor({
                count: locationData.locations.length,
                hue: 'red',
                alpha: 0.5,
              }),
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: locationData.locations,
          }}
          options={{
            type: 'doughnut',
            cutoutPercentage: 25,
          }}
        />
      )}
    </div>
  );
};

export default App;
