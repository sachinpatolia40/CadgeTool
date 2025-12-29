import { Product } from "../../types/product";

export const cigtInternalGrooving: Product = {
  id: '24',
  name: 'Internal Grooving Tool',
  sku: 'CIGT',
  specs: {
    flutes: 1,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}/Products/Endmill/internal-grooving.png`,
  techSketch: `${import.meta.env.BASE_URL}/Products/Sketches/internal-grooving-tech.png`,
  dimensions: [
    // E 4.8 – Shank 5
    { code: 'CIGT48 0001', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.2' },
    { code: 'CIGT48 0002', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '22', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.2' },
    { code: 'CIGT48 0003', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.2' },
    { code: 'CIGT48 0004', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '22', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.2' },
    { code: 'CIGT48 0005', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '15', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '1.2' },
    { code: 'CIGT48 0006', d1: 'E 4.8', d2h6: '5', d3: '-', l1: '22', l2: '50', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '1.2' },

    // E 5.8 – Shank 6
    { code: 'CIGT58 0001', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.4' },
    { code: 'CIGT58 0002', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.4' },
    { code: 'CIGT58 0003', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.4' },
    { code: 'CIGT58 0004', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.4' },
    { code: 'CIGT58 0005', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '1.4' },
    { code: 'CIGT58 0006', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '1.4' },
    { code: 'CIGT58 0007', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '17', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.8' },
    { code: 'CIGT58 0008', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '17', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.8' },
    { code: 'CIGT58 0009', d1: 'E 5.8', d2h6: '6', d3: '-', l1: '17', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '1.8' },

    // E 6.8 – Shank 7
    { code: 'CIGT68 0001', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '2.5' },
    { code: 'CIGT68 0002', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '2.5' },
    { code: 'CIGT68 0003', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '30', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '2.5' },
    { code: 'CIGT68 0004', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '2.5' },
    { code: 'CIGT68 0005', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '2.5' },
    { code: 'CIGT68 0006', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '30', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '2.5' },
    { code: 'CIGT68 0007', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '15', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '2.5' },
    { code: 'CIGT68 0008', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '2.5' },
    { code: 'CIGT68 0009', d1: 'E 6.8', d2h6: '7', d3: '-', l1: '30', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '2.5' },

    // E 7.8 – Shank 8
    { code: 'CIGT78 0001', d1: 'E 7.8', d2h6: '8', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1',   depth: '1.7' },
    { code: 'CIGT78 0002', d1: 'E 7.8', d2h6: '8', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '1.5', depth: '1.7' },
    { code: 'CIGT78 0003', d1: 'E 7.8', d2h6: '8', d3: '-', l1: '22', l2: '63', l3: '-', radius: '-', flutes: 1, shankType: 'Cylindrical', width: '2',   depth: '2.6' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Internal Grooving Tool' },
    { label: 'Application', value: 'Internal groove machining' },
    { label: 'Cutting Edge', value: 'Single edge' }
  ]
};
