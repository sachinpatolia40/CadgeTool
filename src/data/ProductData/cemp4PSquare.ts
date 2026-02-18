// import { Product } from "../../types/product";

// export const cemp4PSquare: Product = {
//   id: '8',
//   name: '4 Flute P Series Square Endmill',
//   sku: 'CEMP4',
//   specs: {
//     flutes: 4,
//     diameter: 0,
//     material: 'Carbide'
//   },
//   image: `${import.meta.env.BASE_URL}Products/Endmill/4flute-pseries.png`,
//   techSketch: `${import.meta.env.BASE_URL}Products/Sketches/4flute-pseries-tech.png`,
//   dimensions: [
//     // ---------------- REGULAR ----------------
//     { code: 'CEMP4 030R', d1: '3',  d2h6: '3',  d3: '-', l1: '39',  l2: '10', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 040R', d1: '4',  d2h6: '4',  d3: '-', l1: '51',  l2: '14', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 050R', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 060R', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 080R', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 100R', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 120R', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 140R', d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 160R', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 180R', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 200R', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },

//     // ---------------- LONG ----------------
//     { code: 'CEMP4 030L', d1: '3',  d2h6: '3',  d3: '-', l1: '57',  l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 040L', d1: '4',  d2h6: '4',  d3: '-', l1: '57',  l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 050L', d1: '5',  d2h6: '5',  d3: '-', l1: '63',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 060L', d1: '6',  d2h6: '6',  d3: '-', l1: '76',  l2: '28', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 080L', d1: '8',  d2h6: '8',  d3: '-', l1: '76',  l2: '29', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 100L', d1: '10', d2h6: '10', d3: '-', l1: '76',  l2: '32', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 120L', d1: '12', d2h6: '12', d3: '-', l1: '101', l2: '51', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 140L', d1: '14', d2h6: '14', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 160L', d1: '16', d2h6: '16', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 180L', d1: '18', d2h6: '18', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 200L', d1: '20', d2h6: '20', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },

//     // ---------------- EXTRA LONG ----------------
//     { code: 'CEMP4 030XL', d1: '3',  d2h6: '3',  d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 040XL', d1: '4',  d2h6: '4',  d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 050XL', d1: '5',  d2h6: '5',  d3: '-', l1: '75',  l2: '28', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 060XL', d1: '6',  d2h6: '6',  d3: '-', l1: '100', l2: '38', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 080XL', d1: '8',  d2h6: '8',  d3: '-', l1: '100', l2: '40', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 100XL', d1: '10', d2h6: '10', d3: '-', l1: '100', l2: '45', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 120XL', d1: '12', d2h6: '12', d3: '-', l1: '150', l2: '60', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 140XL', d1: '14', d2h6: '14', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 160XL', d1: '16', d2h6: '16', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 180XL', d1: '18', d2h6: '18', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
//     { code: 'CEMP4 200XL', d1: '20', d2h6: '20', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' }
//   ],
//   technicalParameter: [
//     { label: 'Best For', value: 'Steel machining (P-series materials)' },
//     { label: 'Tool Series', value: 'P Series – high strength core' },
//     { label: 'Application', value: 'Slotting, profiling, side milling' },
//     { label: 'Series Included', value: 'Regular, Long, Extra Long' }
//   ]
// };
