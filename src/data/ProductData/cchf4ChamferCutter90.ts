import { Product } from "../../types/product";

export const cchf4ChamferCutter90: Product = {
  id: '22',
  name: 'Chamfer Cutter (90°)',
  sku: 'CCHF4',
  specs: {
    flutes: 4,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/chamfer-cutter-90.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/chamfer-cutter-90-tech.png`,
  dimensions: [
    { code: 'CCHF4 030S', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 040S', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 050S', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 060S', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 080S', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 100S', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 120S', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 140S', d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 160S', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 180S', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' },
    { code: 'CCHF4 200S', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '-', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical', threadAngle: '90°' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Chamfer Cutter' },
    { label: 'Angle', value: '90°' },
    { label: 'Application', value: 'Chamfering, deburring, countersinking edges' },
    { label: 'Series Included', value: 'Regular' }
  ]
};
