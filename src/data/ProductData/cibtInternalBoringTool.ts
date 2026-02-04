import { Product } from "../../types/product";

export const cibtInternalBoringTool: Product = {
  id: '26',
  name: 'Internal Boring Tool',
  sku: 'CIBT',
  specs: {
    flutes: 1,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/internal-boring.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/internal-boring-tech.png`,
  dimensions: [
    { code: 'CIBT46 0122 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '22', l2: '50', l3: '-', radius: '0.1', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT46 0130 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '30', l2: '50', l3: '-', radius: '0.1', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT46 0210 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '10', l2: '50', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT46 0215 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '15', l2: '50', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT46 0222 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '22', l2: '50', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT46 0230 S5', d1: '4.6', d2h6: '5',  d3: '-', l1: '30', l2: '50', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.2', xAngle: '22°', yAngle: '8°' },

    { code: 'CIBT58 0215 S6', d1: '5.8', d2h6: '6',  d3: '-', l1: '15', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.4', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT58 0222 S6', d1: '5.8', d2h6: '6',  d3: '-', l1: '22', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.4', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT58 0230 S6', d1: '5.8', d2h6: '6',  d3: '-', l1: '30', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.4', xAngle: '22°', yAngle: '8°' },

    { code: 'CIBT68 0222 S7', d1: '6.8', d2h6: '7',  d3: '-', l1: '22', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.5', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT68 0230 S7', d1: '6.8', d2h6: '7',  d3: '-', l1: '30', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.5', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT68 0235 S7', d1: '6.8', d2h6: '7',  d3: '-', l1: '35', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.5', xAngle: '22°', yAngle: '8°' },

    { code: 'CIBT78 0215 S8', d1: '7.8', d2h6: '8',  d3: '-', l1: '15', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.6', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT78 0222 S8', d1: '7.8', d2h6: '8',  d3: '-', l1: '22', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.6', xAngle: '22°', yAngle: '8°' },
    { code: 'CIBT78 0235 S8', d1: '7.8', d2h6: '8',  d3: '-', l1: '35', l2: '63', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '1.6', xAngle: '22°', yAngle: '8°' },

    { code: 'CIBT98 0235 S10', d1: '9.8', d2h6: '10', d3: '-', l1: '35', l2: '70', l3: '-', radius: '0.2', flutes: 1, shankType: 'Cylindrical', depth: '2',   xAngle: '22°', yAngle: '8°' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Internal Boring Tool' },
    { label: 'Cutting Edge', value: 'Single point' },
    { label: 'Approach Angles', value: 'X = 22°, Y = 8°' },
    { label: 'Application', value: 'Internal boring and profiling' }
  ]
};
