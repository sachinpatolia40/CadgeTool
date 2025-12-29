import { Product } from "../../types/product";

export const cdl3Drill3XD: Product = {
  id: '12',
  name: 'Drill – 3×D',
  sku: 'CDL3',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/drill-3xd.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/drill-3xd-tech.png`,
  dimensions: [
    { code: 'CDL3 0103R', d1: '1–3',     d2h6: '4',  d3: '-', l1: '50',  l2: '10', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0304R', d1: '3.1–4',   d2h6: '4',  d3: '-', l1: '50',  l2: '15', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0304R-6', d1: '3.1–4', d2h6: '6',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0405R', d1: '4.1–5',   d2h6: '6',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0506R', d1: '5.1–6',   d2h6: '6',  d3: '-', l1: '75',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0607R', d1: '6.1–7',   d2h6: '8',  d3: '-', l1: '80',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0708R', d1: '7.1–8',   d2h6: '8',  d3: '-', l1: '80',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0809R', d1: '8.1–9',   d2h6: '10', d3: '-', l1: '90',  l2: '45', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0910R', d1: '9.1–10',  d2h6: '10', d3: '-', l1: '90',  l2: '45', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1011R', d1: '10.1–11', d2h6: '12', d3: '-', l1: '100', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1112R', d1: '11.1–12', d2h6: '12', d3: '-', l1: '100', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1214R', d1: '12.1–14', d2h6: '14', d3: '-', l1: '110', l2: '60', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1416R', d1: '14.1–16', d2h6: '16', d3: '-', l1: '115', l2: '65', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1618R', d1: '16.1–18', d2h6: '18', d3: '-', l1: '125', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1820R', d1: '18.1–20', d2h6: '20', d3: '-', l1: '130', l2: '80', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Solid Carbide Drill' },
    { label: 'Drilling Depth', value: '3×D' },
    { label: 'Application', value: 'General purpose drilling' },
    { label: 'Coolant', value: 'External' }
  ]
};
