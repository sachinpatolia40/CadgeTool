import { Product } from "../../types/product";

export const crem4RougherSquare: Product = {
  id: '9',
  name: '4 Flute Rougher Square Endmill',
  sku: 'CREM4',
  specs: {
    flutes: 4,
    diameter: 0,
    material: 'Carbide'
  },
  image: `${import.meta.env.BASE_URL}Products/Endmill/4flute-rougher.png`,
  techSketch: `${import.meta.env.BASE_URL}Products/Sketches/4flute-rougher-tech.png`,
  dimensions: [
    { code: 'CREM4 050R', d1: '5',  d2h6: '5',  d3: '-', l1: '51',  l2: '16', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 060R', d1: '6',  d2h6: '6',  d3: '-', l1: '63',  l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 080R', d1: '8',  d2h6: '8',  d3: '-', l1: '63',  l2: '22', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 100R', d1: '10', d2h6: '10', d3: '-', l1: '70',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 120R', d1: '12', d2h6: '12', d3: '-', l1: '75',  l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 140R', d1: '14', d2h6: '14', d3: '-', l1: '80',  l2: '30', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 160R', d1: '16', d2h6: '16', d3: '-', l1: '80',  l2: '32', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 180R', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
    { code: 'CREM4 200R', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' }
  ],
  technicalParameter: [
    { label: 'Tool Type', value: 'Rougher Square Endmill' },
    { label: 'Best For', value: 'High material removal (roughing)' },
    { label: 'Application', value: 'Slotting and heavy side milling' },
    { label: 'Series Included', value: 'Regular' }
  ],
  ProductSEO:{
    title: "4 Flute Rougher End Mill",
    subtitle: "High Metal Removal Roughing Tool",
    description:
      "Serrated roughing end mill designed for maximum material removal rate while reducing cutting forces and heat generation during heavy machining.",
    applications:
      "Rough milling, stock removal, and high-speed production machining.",
  }
};
