import { Product } from "../../types/product";

export const ccr4CornerRadius: Product = {
  id: '7',
  name: '4 Flute Corner Radius Endmill',
  sku: 'CCR4',
  specs: {
    flutes: 4,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/4flute-corner-radius.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/4flute-corner-radius-tech.png`,
  dimensions: [
    { code: 'CCR4 030R 0.5', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 030R 1',   d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 040R 0.5', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 040R 1',   d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 050R 0.5', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 050R 1',   d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 060R 0.5', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 060R 1',   d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 060R 1.5', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '1.5', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 080R 0.5', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 080R 1',   d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 080R 2',   d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '2',   flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 100R 0.5', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 100R 1',   d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 100R 2',   d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '2',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 100R 2.5', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '2.5', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 120R 0.5', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '0.5', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 120R 1',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '1',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 120R 2',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '2',   flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 120R 3',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '3',   flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 140R 1',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '1', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 140R 2',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '2', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 140R 3',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '3', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 140R 4',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '4', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 160R 1',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '1', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 160R 2',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '2', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 160R 3',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '3', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 160R 4',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '4', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 180R 1',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '1', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 180R 2',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '2', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 180R 3',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '3', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 180R 4',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '4', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CCR4 200R 1',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '1', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 200R 2',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '2', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 200R 3',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '3', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CCR4 200R 4',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '4', flutes: 4, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Best For', value: 'Corner finishing, profiling in steel & cast iron' },
    { label: 'Tool Type', value: '4 Flute Corner Radius (Regular)' },
    { label: 'Series Included', value: 'Regular' }
  ],
  ProductSEO:{
    title: "4 Flute Corner Radius End Mill",
    subtitle: "Heavy-Duty Steel Machining Tool",
    description:
      "Designed for steel and cast iron machining with reinforced corner geometry for improved durability and reduced wear during aggressive cutting.",
    applications:
      "Side milling, ramping, and production machining.",
  }
};
