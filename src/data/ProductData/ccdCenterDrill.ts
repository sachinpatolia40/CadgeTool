import { Product } from "../../types/product";

export const ccdCenterDrill: Product = {
  id: '17',
  name: 'Center Drill',
  sku: 'CCD',
  specs: {
    flutes: 2,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/center-drill.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/center-drill-tech.png`,
  dimensions: [
    { code: 'CCD 010R', d1: '1',    d2h6: '3.15', d3: '-', l1: '32', l2: '1.6', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 016R', d1: '1.6',  d2h6: '4',    d3: '-', l1: '35', l2: '2.4', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 020R', d1: '2',    d2h6: '5',    d3: '-', l1: '40', l2: '2.9', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 025R', d1: '2.5',  d2h6: '6.3',  d3: '-', l1: '45', l2: '3.6', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 031R', d1: '3.15', d2h6: '8',    d3: '-', l1: '50', l2: '4.4', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 040R', d1: '4',    d2h6: '10',   d3: '-', l1: '56', l2: '5.6', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 050R', d1: '5',    d2h6: '12.5', d3: '-', l1: '63', l2: '6.9', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 063R', d1: '6.3',  d2h6: '16',   d3: '-', l1: '71', l2: '8.6', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' },
    { code: 'CCD 080R', d1: '8',    d2h6: '20',   d3: '-', l1: '80', l2: '10.1', l3: '-', radius: '-', flutes: 2, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Center Drill' },
    { label: 'Application', value: 'Spotting and centering before drilling' },
    { label: 'Point Style', value: 'Combined drill & countersink' },
    { label: 'Series Included', value: 'Regular' }
  ]
};
