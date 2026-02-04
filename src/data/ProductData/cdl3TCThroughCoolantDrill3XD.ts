import { Product } from "../../types/product";

export const cdl3TCThroughCoolantDrill3XD: Product = {
  id: '14',
  name: 'Through Coolant Drill – 3×D',
  sku: 'CDL3-TC',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/through-coolant-drill-3xd.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/through-coolant-drill-3xd-tech.png`,
  dimensions: [
    { code: 'CDL3 0103TC', d1: '1–3',     d2h6: '4',  d3: '-', l1: '50',  l2: '10', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0304TC', d1: '3.1–4',   d2h6: '4',  d3: '-', l1: '50',  l2: '15', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0304TC-6', d1: '3.1–4', d2h6: '6',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0405TC', d1: '4.1–5',   d2h6: '6',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0506TC', d1: '5.1–6',   d2h6: '6',  d3: '-', l1: '75',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0607TC', d1: '6.1–7',   d2h6: '8',  d3: '-', l1: '80',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0708TC', d1: '7.1–8',   d2h6: '8',  d3: '-', l1: '80',  l2: '35', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0809TC', d1: '8.1–9',   d2h6: '10', d3: '-', l1: '90',  l2: '45', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 0910TC', d1: '9.1–10',  d2h6: '10', d3: '-', l1: '90',  l2: '45', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1011TC', d1: '10.1–11', d2h6: '12', d3: '-', l1: '100', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1112TC', d1: '11.1–12', d2h6: '12', d3: '-', l1: '100', l2: '55', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1214TC', d1: '12.1–14', d2h6: '14', d3: '-', l1: '110', l2: '60', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1416TC', d1: '14.1–16', d2h6: '16', d3: '-', l1: '115', l2: '65', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1618TC', d1: '16.1–18', d2h6: '18', d3: '-', l1: '125', l2: '75', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CDL3 1820TC', d1: '18.1–20', d2h6: '20', d3: '-', l1: '130', l2: '80', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Solid Carbide Through Coolant Drill' },
    { label: 'Drilling Depth', value: '3×D' },
    { label: 'Coolant', value: 'Through Coolant' },
    { label: 'Application', value: 'Stable drilling, better chip evacuation' }
  ]
};
