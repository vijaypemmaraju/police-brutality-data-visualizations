export type DataType = {
  links: string[],
  state: string;
  edit_at: string;
  city: string;
  name: string;
  date: string;
  date_text: string;
}

export type Point = {
  x: Date;
  y: number;
};

export type LocationData = {
  locations: string[];
  values: number[];
};
