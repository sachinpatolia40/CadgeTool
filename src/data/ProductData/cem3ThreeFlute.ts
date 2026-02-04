import { Product } from "../../types/product";

export const cem3ThreeFlute: Product = {
  id: '3',
  name: '3 Flute Square Endmill',
  sku: 'CEM3',
  specs: {
    flutes: 3,
    diameter: 0, // handled via dimensions table
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/3flute-regular.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/2flute-endmill-tech.png`,
  dimensions: [
    { code: 'CEM3 030R', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 040R', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 050R', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 060R', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 080R', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 100R', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 120R', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 140R', d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 160R', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 180R', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CEM3 200R', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Best For', value: 'Aluminum, Mild Steel, Copper Alloys' },
    { label: 'Flute Design', value: '3 flutes for balance of chip evacuation and strength' },
    { label: 'Application', value: 'Slotting, side milling, profiling' },
    { label: 'Series Included', value: 'Regular' }
  ]
};
