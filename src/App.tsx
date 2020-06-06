import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

type DataType = {
  links: string[],
  state: string;
  edit_at: string;
  city: string;
  name: string;
  date: string;
  date_text: string;
}

type Point = {
  x: Date;
  y: number;
};

const App: React.FC = () => {
  const [data, setData] = useState<Point[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json');
      const json: { data: DataType[] } = await response.json();
      const transformedData = json.data.reduce((agg, current) => {
        if (!current.date) {
          return agg;
        }
        const date = new Date(current.date);
        const existing = agg.find((point) => point.x.getTime() === date.getTime());
        if (existing) {
          existing.y += 1;
        } else {
          agg.push({ x: date, y: 1 });
        }
        return agg;
      }, [] as Point[]);
      setData(transformedData.map((point) => {
        point.x.setHours(0, 0, 0);
        return point;
      }).sort((point1, point2) => point2.x.getTime() - point1.x.getTime()));
    })();
  }, []);
  return (
    <div className="App">
      {data.length > 0 && (
        <Line
          data={{
            datasets: [{
              label: 'Incidents',
              data,
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
            maintainAspectRatio: true,
          }}
        />
      )}
    </div>
  );
};

export default App;
