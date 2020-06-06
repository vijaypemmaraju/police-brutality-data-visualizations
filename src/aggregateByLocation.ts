import { DataType, LocationData } from './types';

const aggregateByLocation = (data: DataType[]): LocationData => {
  const transformedData = data.reduce((agg, current) => {
    const fullLocation = `${current.city}, ${current.state}`;
    agg[fullLocation] = agg[fullLocation] || 0;
    agg[fullLocation] += 1;
    return agg;
  }, {} as { [key: string]: number });

  const transformedEntries = Object.entries(transformedData).sort((e1, e2) => e2[1] - e1[1]);

  return {
    locations: transformedEntries.map((e) => e[0]),
    values: transformedEntries.map((e) => e[1]),
  };
};

export default aggregateByLocation;
