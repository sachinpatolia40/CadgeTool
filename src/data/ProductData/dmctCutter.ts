import { Product } from "../../types/product";

export const dmctCutter: Product = {
  id: '23',
  name: 'DMCT',
  sku: 'DMCT',
  specs: {
    flutes: 0,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/dmct.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/dmct-tech.png`,
  dimensions: [
    { code: 'CRM4 030 S', d1: '3',  d2h6: '6',  d3: '-', l1: '51', l2: '6',  l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CRM4 040 S', d1: '4',  d2h6: '6',  d3: '-', l1: '51', l2: '8',  l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CRM4 050 S', d1: '5',  d2h6: '6',  d3: '-', l1: '51', l2: '10', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CRM4 060 S', d1: '6',  d2h6: '6',  d3: '-', l1: '63', l2: '12', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },

    { code: 'CRM6 080 S', d1: '8',  d2h6: '8',  d3: '-', l1: '63', l2: '16', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CRM6 100 S', d1: '10', d2h6: '10', d3: '-', l1: '70', l2: '20', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CRM6 120 S', d1: '12', d2h6: '12', d3: '-', l1: '76', l2: '22', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CRM6 140 S', d1: '14', d2h6: '14', d3: '-', l1: '89', l2: '25', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' },
    { code: 'CRM6 160 S', d1: '16', d2h6: '16', d3: '-', l1: '89', l2: '28', l3: '-', radius: '-', flutes: 6, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'DMCT Cutter' },
    { label: 'Series', value: 'CRM4 / CRM6' },
    { label: 'Application', value: 'General milling / profiling (as per catalog series)' }
  ]
};
