type AggregatedData = {
  continents: {
    [key: string]: number;
  };
  horns: {
    [key: string]: number;
  };
  total: number;
};

type Antelope = {
  name: string;
  continent: string;
  weight: number;
  height: number;
  horns: string;
  picture: string;
};

export async function getAggregatedAntelopes(): Promise<AggregatedData> {
  return {
    continents: {},
    horns: {},
    total: 0,
  };
}

export async function getListAntelopes(): Promise<Antelope[]> {
  // return storage.getAllAntelopes();
  return [];
}
