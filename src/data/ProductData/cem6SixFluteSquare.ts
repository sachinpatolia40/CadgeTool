import { Product } from "../../types/product";

export const cem6SixFluteSquare: Product = {
  id: '10',
  name: '6 Flute Square Endmill',
  sku: 'CEM6',
  specs: {
    flutes: 6,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/6flute-square.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/6flute-square-tech.png`,
  dimensions: [
    { code: 'CEM6 060R', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CEM6 080R', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CEM6 100R', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CEM6 120R', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CEM6 160R', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CEM6 200R', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Best For', value: 'Finishing and high-feed side milling in steel' },
    { label: 'Flute Count', value: '6 flutes for better surface finish' },
    { label: 'Application', value: 'Profiling, finishing passes' },
    { label: 'Series Included', value: 'Regular' }
  ],
  ProductSEO:{
    title: "6 Flute Square End Mill",
    subtitle: "Finishing & High Precision Tool",
    description:
      "High flute count end mill designed for superior surface finish and dimensional accuracy in hardened steels and high-temperature alloys.",
    applications:
      "Finish machining and precision engineering applications.",
  }
};
