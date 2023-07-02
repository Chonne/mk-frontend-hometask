type AggregatedDataOutput = {
  continents: {
    continentId: number;
    continentName: string;
    nbAntelopes: number;
  }[];
  horns: {
    hornsId: number;
    hornsShape: string;
    nbAntelopes: number;
  }[];
  total: number;
};
