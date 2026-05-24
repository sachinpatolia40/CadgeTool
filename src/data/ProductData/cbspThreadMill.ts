import { Product } from "../../types/product";

export const cbspThreadMill: Product = {
  id: '20',
  name: 'BSP Thread Mill',
  sku: 'CBSP',
  specs: {
    flutes: 0,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/bsp-thread-mill.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/bsp-thread-mill-tech.png`,
  dimensions: [
    {
      code: 'CBSP06 28S',
      d1: '5.8',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '12',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: `1/16", 1/8" X 28`,
      pitch: '28 TPI',
      cuttingDia: '5.8',
      threadAngle: '55°'
    },
    {
      code: 'CBSP08 28S',
      d1: '7.7',
      d2h6: '8',
      d3: '-',
      l1: '63',
      l2: '20',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: `1/8" X 28`,
      pitch: '28 TPI',
      cuttingDia: '7.7',
      threadAngle: '55°'
    },
    {
      code: 'CBSP10 19S',
      d1: '9.9',
      d2h6: '10',
      d3: '-',
      l1: '75',
      l2: '25',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: `1/4", 3/8" X 19`,
      pitch: '19 TPI',
      cuttingDia: '9.9',
      threadAngle: '55°'
    },
    {
      code: 'CBSP16 19S',
      d1: '13.4',
      d2h6: '16',
      d3: '-',
      l1: '80',
      l2: '30',
      l3: '-',
      radius: '-',
      flutes: 4,
      shankType: 'Cylindrical',
      threadSize: `3/8" X 19`,
      pitch: '19 TPI',
      cuttingDia: '13.4',
      threadAngle: '55°'
    },
    {
      code: 'CBSP16 14S',
      d1: '15.7',
      d2h6: '16',
      d3: '-',
      l1: '80',
      l2: '35',
      l3: '-',
      radius: '-',
      flutes: 4,
      shankType: 'Cylindrical',
      threadSize: `1/2", 3/4" X 14`,
      pitch: '14 TPI',
      cuttingDia: '15.7',
      threadAngle: '55°'
    },
    {
      code: 'CBSP20 11S',
      d1: '19.9',
      d2h6: '20',
      d3: '-',
      l1: '100',
      l2: '40',
      l3: '-',
      radius: '-',
      flutes: 4,
      shankType: 'Cylindrical',
      threadSize: `1", 1 1/2", 2, 2 1/2" X 11`,
      pitch: '11 TPI',
      cuttingDia: '19.9',
      threadAngle: '55°'
    }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'BSP Thread Mill' },
    { label: 'Thread Angle', value: '55°' },
    { label: 'Standard', value: 'BSP (British Standard Pipe)' },
    { label: 'Note', value: 'Pitch values are listed as TPI (threads per inch)' }
  ],
  ProductSEO: {
    title: "BSP Thread Mill",
    subtitle: "Pipe Thread Milling Tool",
    description:
      "Designed for British Standard Pipe threads used in hydraulic and pneumatic systems ensuring accurate and leak-free connections.",
    applications:
      "Fluid power, plumbing, and industrial piping systems.",
  }
};
