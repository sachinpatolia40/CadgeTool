import { Product } from "../../types/product";

export const cittInternalThreadingTool: Product = {
  id: '25',
  name: 'Internal Threading Tool',
  sku: 'CITT',
  specs: {
    flutes: 1,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/internal-threading.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/internal-threading-tech.png`,
  dimensions: [
    // 55° series
    { code: 'CITT55 0001', d1: '2.9', d2h6: '3', d3: '-', l1: '15', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5–1.0', threadAngle: '55°' },
    { code: 'CITT55 0002', d1: '3.8', d2h6: '4', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5–1.25', threadAngle: '55°' },
    { code: 'CITT55 0003', d1: '4.8', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5–1.25', threadAngle: '55°' },
    { code: 'CITT55 0004', d1: '4.8', d2h6: '5', d3: '-', l1: '22', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5–1.5', threadAngle: '55°' },
    { code: 'CITT55 0005', d1: '5.6', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5–1.5', threadAngle: '55°' },
    { code: 'CITT55 0006', d1: '5.6', d2h6: '6', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.7–1.0', threadAngle: '55°' },

    // 60° series
    { code: 'CITT60 0001', d1: '2.9', d2h6: '3', d3: '-', l1: '15', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.8–1.0', threadAngle: '60°' },
    { code: 'CITT60 0002', d1: '3.8', d2h6: '4', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0–1.25', threadAngle: '60°' },
    { code: 'CITT60 0003', d1: '4.8', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0–1.25', threadAngle: '60°' },
    { code: 'CITT60 0004', d1: '4.8', d2h6: '5', d3: '-', l1: '22', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0–1.5', threadAngle: '60°' },
    { code: 'CITT60 0005', d1: '5.6', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0–1.5', threadAngle: '60°' },
    { code: 'CITT60 0006', d1: '5.6', d2h6: '6', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0–2.0', threadAngle: '60°' },
    { code: 'CITT60 0007', d1: '7.6', d2h6: '8', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5', threadAngle: '60°' },
    { code: 'CITT60 0008', d1: '2.5', d2h6: '3', d3: '-', l1: '10', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5', threadAngle: '60°' },
    { code: 'CITT60 0009', d1: '2.9', d2h6: '3', d3: '-', l1: '15', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.7', threadAngle: '60°' },
    { code: 'CITT60 0010', d1: '2.9', d2h6: '3', d3: '-', l1: '15', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.75', threadAngle: '60°' },
    { code: 'CITT60 0011', d1: '2.9', d2h6: '3', d3: '-', l1: '15', l2: '39', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.5', threadAngle: '60°' },
    { code: 'CITT60 0012', d1: '3.8', d2h6: '4', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.75', threadAngle: '60°' },
    { code: 'CITT60 0013', d1: '3.8', d2h6: '4', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '0.8', threadAngle: '60°' },
    { code: 'CITT60 0014', d1: '3.8', d2h6: '4', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.0', threadAngle: '60°' },
    { code: 'CITT60 0015', d1: '4.7', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '1.25', threadAngle: '60°' },
    { code: 'CITT60 0016', d1: '4.7', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', pitch: '-', threadAngle: '60°' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Internal Threading Tool' },
    { label: 'Thread Angles Available', value: '55° and 60°' },
    { label: 'Application', value: 'Internal threading for fine and standard pitches' },
    { label: 'Cutting Edge', value: 'Single point' }
  ]
};
