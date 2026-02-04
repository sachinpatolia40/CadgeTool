import { Product } from "../../types/product";

export const cdl5Drill5XD: Product = {
  id: '13',
  name: 'Drill – 5×D',
  sku: 'CDL5',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/drill-5xd.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/drill-5xd-tech.png`,
  dimensions: [
    { code: 'CDL5 0103R', d1: '1–3',     d2h6: '4',  d3: '-', l1: '50',  l2: '10',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0304R', d1: '3.1–4',   d2h6: '4',  d3: '-', l1: '50',  l2: '15',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0304R-6', d1: '3.1–4', d2h6: '6',  d3: '-', l1: '75',  l2: '35',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0405R', d1: '4.1–5',   d2h6: '6',  d3: '-', l1: '80',  l2: '40',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0506R', d1: '5.1–6',   d2h6: '6',  d3: '-', l1: '85',  l2: '45',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0607R', d1: '6.1–7',   d2h6: '8',  d3: '-', l1: '90',  l2: '50',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0708R', d1: '7.1–8',   d2h6: '8',  d3: '-', l1: '90',  l2: '50',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0809R', d1: '8.1–9',   d2h6: '10', d3: '-', l1: '105', l2: '55',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 0910R', d1: '9.1–10',  d2h6: '10', d3: '-', l1: '105', l2: '55',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1011R', d1: '10.1–11', d2h6: '12', d3: '-', l1: '120', l2: '75',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1112R', d1: '11.1–12', d2h6: '12', d3: '-', l1: '120', l2: '75',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1214R', d1: '12.1–14', d2h6: '14', d3: '-', l1: '125', l2: '80',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1416R', d1: '14.1–16', d2h6: '16', d3: '-', l1: '135', l2: '85',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1618R', d1: '16.1–18', d2h6: '18', d3: '-', l1: '145', l2: '95',  l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL5 1820R', d1: '18.1–20', d2h6: '20', d3: '-', l1: '150', l2: '100', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Solid Carbide Drill' },
    { label: 'Drilling Depth', value: '5×D' },
    { label: 'Application', value: 'Deeper hole drilling' },
    { label: 'Coolant', value: 'External' }
  ]
};
