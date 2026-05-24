import { Product } from "../../types/product";

export const cslp1SingleLipCutter: Product = {
  id: '11',
  name: 'Single Lip Cutter',
  sku: 'CSLP1',
  specs: {
    flutes: 1,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/single-lip-cutter.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/single-lip-cutter-tech.png`,
  dimensions: [
    { code: 'CSLP1 030S', d1: '3',  d2h6: '6',  d3: '-', l1: '63',  l2: '6',  l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 040S', d1: '4',  d2h6: '6',  d3: '-', l1: '63',  l2: '6',  l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 050S', d1: '5',  d2h6: '6',  d3: '-', l1: '63',  l2: '8',  l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 060S', d1: '6',  d2h6: '6',  d3: '-', l1: '76',  l2: '10', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },

    { code: 'CSLP1 080S', d1: '8',  d2h6: '8',  d3: '-', l1: '76',  l2: '10', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 100S', d1: '10', d2h6: '10', d3: '-', l1: '76',  l2: '12', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },

    { code: 'CSLP1 120S', d1: '12', d2h6: '12', d3: '-', l1: '76',  l2: '14', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 120L', d1: '12', d2h6: '12', d3: '-', l1: '101', l2: '14', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },

    { code: 'CSLP1 140S', d1: '14', d2h6: '14', d3: '-', l1: '76',  l2: '16', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 140L', d1: '14', d2h6: '14', d3: '-', l1: '101', l2: '16', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },

    { code: 'CSLP1 160S', d1: '16', d2h6: '16', d3: '-', l1: '76',  l2: '18', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 160L', d1: '16', d2h6: '16', d3: '-', l1: '101', l2: '18', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },

    { code: 'CSLP1 180S', d1: '18', d2h6: '18', d3: '-', l1: '75',  l2: '20', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' },
    { code: 'CSLP1 180L', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '20', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Single Lip Cutter' },
    { label: 'Best For', value: 'Aluminum, soft metals, plastics' },
    { label: 'Chip Evacuation', value: 'Excellent (single flute design)' },
    { label: 'Application', value: 'Slotting, engraving, deep pocketing' },
    { label: 'Series Included', value: 'Regular' }
  ],
  ProductSEO:{
    title: "Single Lip Cutter",
    subtitle: "Engraving & Micro Machining Tool",
    description:
      "Precision single lip cutter designed for engraving, marking, and micro-slot machining with high accuracy and fine surface finish.",
    applications:
      "Engraving, PCB work, and precision micro machining.",
  }
};
