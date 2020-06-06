import { DataType } from './types';

const fetchData = async (): Promise<DataType[]> => {
  const response = await fetch('https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json');
  const json: { data: DataType[] } = await response.json();
  return json.data;
};

export default fetchData;
