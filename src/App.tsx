import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import './App.css';
import randomColor from 'randomcolor';
import fetchData from './fetchData';
import aggregateByDate from './aggregateByDate';
import { Point, LocationData } from './types';
import aggregateByLocation from './aggregateByLocation';


const App: React.FC = () => {
  const [tab, setTab] = useState('date');
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
      <AppBar color="default" position="static">
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
          <Tab value="date" label="By Date" />
          <Tab value="location" label="By Location" />
        </Tabs>
      </AppBar>
      {tab === 'date' && dateData.length > 0 && (
        <Line
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
          }}
        />
      )}
      {tab === 'location' && locationData.values && (
        <Pie
          data={{
            datasets: [{
              data: locationData.values,
              backgroundColor: randomColor({
                count: locationData.locations.length,
                hue: 'red',
                alpha: 0.5,
              }),
            }],
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
