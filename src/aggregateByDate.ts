import { DataType, Point } from './types';

const aggregateByDate = (data: DataType[]): Point[] => {
  const transformedData = data.reduce((agg, current) => {
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

  return transformedData
    .map((point) => {
      point.x.setHours(0, 0, 0);
      return point;
    })
    .sort((point1, point2) => point2.x.getTime() - point1.x.getTime());
};

export default aggregateByDate;
