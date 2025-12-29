import { Product } from "../../types/product";

export const cem2TwoFlute: Product = {
  id: '1',
  name: '2 Flute End Mill',
  sku: 'CEM2',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/2flute-regular.png`, // hero image
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/2flute-endmill-tech.png`,
  dimensions: [
    // ---------------- REGULAR ----------------
    { code: 'CEM2 030R', variant: 'Regular', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 040R', variant: 'Regular', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 050R', variant: 'Regular', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 060R', variant: 'Regular', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 080R', variant: 'Regular', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 100R', variant: 'Regular', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 120R', variant: 'Regular', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 140R', variant: 'Regular', d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 160R', variant: 'Regular', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 180R', variant: 'Regular', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 200R', variant: 'Regular', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },

    // ---------------- LONG ----------------
    { code: 'CEM2 030L', variant: 'Long', d1: '3',  d2h6: '3',  d3: '-', l1: '57',  l2: '19', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 040L', variant: 'Long', d1: '4',  d2h6: '4',  d3: '-', l1: '57',  l2: '19', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 050L', variant: 'Long', d1: '5',  d2h6: '5',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 060L', variant: 'Long', d1: '6',  d2h6: '6',  d3: '-', l1: '76',  l2: '28', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 080L', variant: 'Long', d1: '8',  d2h6: '8',  d3: '-', l1: '76',  l2: '29', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 100L', variant: 'Long', d1: '10', d2h6: '10', d3: '-', l1: '76',  l2: '32', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 120L', variant: 'Long', d1: '12', d2h6: '12', d3: '-', l1: '101', l2: '51', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 140L', variant: 'Long', d1: '14', d2h6: '14', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 160L', variant: 'Long', d1: '16', d2h6: '16', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 180L', variant: 'Long', d1: '18', d2h6: '18', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 200L', variant: 'Long', d1: '20', d2h6: '20', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },

    // ---------------- EXTRA LONG ----------------
    { code: 'CEM2 030XL', variant: 'Extra Long', d1: '3',  d2h6: '3',  d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 040XL', variant: 'Extra Long', d1: '4',  d2h6: '4',  d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 050XL', variant: 'Extra Long', d1: '5',  d2h6: '5',  d3: '-', l1: '75',  l2: '28', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 060XL', variant: 'Extra Long', d1: '6',  d2h6: '6',  d3: '-', l1: '100', l2: '38', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 080XL', variant: 'Extra Long', d1: '8',  d2h6: '8',  d3: '-', l1: '100', l2: '40', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 100XL', variant: 'Extra Long', d1: '10', d2h6: '10', d3: '-', l1: '100', l2: '45', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 120XL', variant: 'Extra Long', d1: '12', d2h6: '12', d3: '-', l1: '150', l2: '60', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 140XL', variant: 'Extra Long', d1: '14', d2h6: '14', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 160XL', variant: 'Extra Long', d1: '16', d2h6: '16', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 180XL', variant: 'Extra Long', d1: '18', d2h6: '18', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CEM2 200XL', variant: 'Extra Long', d1: '20', d2h6: '20', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Best For', value: 'Aluminum, Brass, Copper, Plastics' },
    { label: 'Cutting Speed (Vc)', value: '180–350 m/min (Aluminum)' },
    { label: 'Feed per Tooth (Fz)', value: '0.03–0.08 mm/tooth' },
    { label: 'Max Depth of Cut', value: '1×D (Slotting), 2×D (Side Cutting)' },
    { label: 'Series Included', value: 'Regular, Long, Extra Long' }
  ]
};
