import { Product } from "../../types/product";

export const csurSurgicalThreadMill: Product = {
  id: '19',
  name: 'Surgical Thread Mill',
  sku: 'CSUR',
  specs: {
    flutes: 0,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/surgical-thread-mill.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/surgical-thread-mill-tech.png`,
  dimensions: [
    {
      code: 'CSUR030 06S',
      d1: '1.8',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '8',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: '10°',
      pitch: '0.3',
      cuttingDia: '1.8',
      threadAngle: '55°'
    },
    {
      code: 'CSUR035 06S',
      d1: '2.0',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '8',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: '10°',
      pitch: '0.35',
      cuttingDia: '2.0',
      threadAngle: '55°'
    },
    {
      code: 'CSUR040 06S',
      d1: '2.5',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '8',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: '10°',
      pitch: '0.4',
      cuttingDia: '2.5',
      threadAngle: '60°'
    },
    {
      code: 'CSUR050 06S',
      d1: '2.9',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '9',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: '10°',
      pitch: '0.5',
      cuttingDia: '2.9',
      threadAngle: '60°'
    },
    {
      code: 'CSUR060 06S',
      d1: '3.0',
      d2h6: '6',
      d3: '-',
      l1: '63',
      l2: '9',
      l3: '-',
      radius: '-',
      flutes: 3,
      shankType: 'Cylindrical',
      threadSize: '10°',
      pitch: '0.6',
      cuttingDia: '3.0',
      threadAngle: '60°'
    }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Surgical Thread Mill' },
    { label: 'Application', value: 'Medical and surgical implant threading' },
    { label: 'Thread Angle', value: '55° / 60° (as specified)' },
    { label: 'Notes', value: 'Designed for fine-pitch precision threads' }
  ]
};
