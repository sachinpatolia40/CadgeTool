import { Product } from "../../types/product";

export const ccr2CornerRadius: Product = {
  id: '6',
  name: '2 Flute Corner Radius Endmill',
  sku: 'CCR2',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/2flute-corner-radius.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/2flute-corner-radius-tech.png`,
  dimensions: [
    { code: 'CCR2 030R 0.5', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 030R 1',   d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 040R 0.5', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 040R 1',   d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 050R 0.5', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 050R 1',   d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 060R 0.5', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 060R 1',   d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 060R 1.5', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '1.5', flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 080R 0.5', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 080R 1',   d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 080R 2',   d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '2',   flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 100R 0.5', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 100R 1',   d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 100R 2',   d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '2',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 100R 2.5', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '2.5', flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 120R 0.5', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '0.5', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 120R 1',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '1',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 120R 2',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '2',   flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 120R 3',   d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '3',   flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 140R 1',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '1', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 140R 2',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '2', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 140R 3',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '3', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 140R 4',   d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '4', flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 160R 1',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '1', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 160R 2',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '2', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 160R 3',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '3', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 160R 4',   d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '4', flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 180R 1',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '1', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 180R 2',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '2', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 180R 3',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '3', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 180R 4',   d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '4', flutes: 2, shankType: 'Cylindrical' },

    { code: 'CCR2 200R 1',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '1', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 200R 2',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '2', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 200R 3',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '3', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCR2 200R 4',   d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '4', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Best For', value: 'Corner finishing, filleting, profiling' },
    { label: 'Tool Type', value: '2 Flute Corner Radius (Regular)' },
    { label: 'Series Included', value: 'Regular' }
  ]
};
