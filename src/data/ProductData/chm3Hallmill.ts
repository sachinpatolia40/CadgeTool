import { Product } from "../../types/product";

export const chm3Hallmill: Product = {
  id: '16',
  name: 'Hallmill',
  sku: 'CHM3',
  specs: {
    flutes: 3,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/hallmill.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/hallmill-tech.png`,
  dimensions: [
    { code: 'CHM3 030R', d1: '3',  d2h6: '3',  d3: '-', l1: '57',  l2: '16', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 040R', d1: '4',  d2h6: '4',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 050R', d1: '5',  d2h6: '5',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 060R', d1: '6',  d2h6: '6',  d3: '-', l1: '76',  l2: '25', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 070R', d1: '7',  d2h6: '7',  d3: '-', l1: '76',  l2: '29', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 080R', d1: '8',  d2h6: '8',  d3: '-', l1: '76',  l2: '29', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 090R', d1: '9',  d2h6: '9',  d3: '-', l1: '76',  l2: '32', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 100R', d1: '10', d2h6: '10', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 110R', d1: '11', d2h6: '11', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 120R', d1: '12', d2h6: '12', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 130R', d1: '13', d2h6: '13', d3: '-', l1: '125', l2: '45', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 140R', d1: '14', d2h6: '14', d3: '-', l1: '125', l2: '45', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 150R', d1: '15', d2h6: '15', d3: '-', l1: '125', l2: '50', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' },
    { code: 'CHM3 160R', d1: '16', d2h6: '16', d3: '-', l1: '125', l2: '50', l3: '-', radius: '-', flutes: 3, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Hallmill' },
    { label: 'Application', value: 'High feed milling and profiling' },
    { label: 'Material', value: 'Steel and alloy steel' },
    { label: 'Series Included', value: 'Regular' }
  ],
  ProductSEO: {
    title: "Hallmill",
    subtitle: "Precision Contour Milling Tool",
    description:
      "Specialized milling tool designed for radial profiling, contour finishing, and precision machining in hardened materials.",
    applications:
      "Die & mold industry and precision engineering components.",
  }
};
