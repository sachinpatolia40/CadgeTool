import { Product } from "../../types/product";

export const cem4FourFlute: Product = {
    id: '2',
    name: '4 Flute Endmill',
    sku: 'CEM4',
    specs: {
      flutes: 4,
      diameter: 0,          // can be ignored / used as default
      material: 'Carbide'
    },
    image: `${import.meta.env.BASE_URL}Products/Endmill/4flute-regular.png`, // hero image
    techSketch: `${import.meta.env.BASE_URL}Products/Sketches/4flute-endmill-tech.png`,
    dimensions: [
      // ------- REGULAR -------
      { code: 'CEM4 030R', variant: 'Regular', d1: '3', d2h6: '3', d3: '-', l1: '39', l2: '10', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 040R', variant: 'Regular', d1: '4', d2h6: '4', d3: '-', l1: '51', l2: '14', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 050R', variant: 'Regular', d1: '5', d2h6: '5', d3: '-', l1: '51', l2: '16', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 060R', variant: 'Regular', d1: '6', d2h6: '6', d3: '-', l1: '63', l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 080R', variant: 'Regular', d1: '8', d2h6: '8', d3: '-', l1: '63', l2: '22', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 100R', variant: 'Regular', d1: '10', d2h6: '10', d3: '-', l1: '70', l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 120R', variant: 'Regular', d1: '12', d2h6: '12', d3: '-', l1: '75', l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 140R', variant: 'Regular', d1: '14', d2h6: '14', d3: '-', l1: '80', l2: '30', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 160R', variant: 'Regular', d1: '16', d2h6: '16', d3: '-', l1: '80', l2: '32', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 180R', variant: 'Regular', d1: '18', d2h6: '18', d3: '-', l1: '101', l2: '35', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 200R', variant: 'Regular', d1: '20', d2h6: '20', d3: '-', l1: '101', l2: '38', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },

      // ------- LONG -------
      { code: 'CEM4 030L', variant: 'Long', d1: '3', d2h6: '3', d3: '-', l1: '57', l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 040L', variant: 'Long', d1: '4', d2h6: '4', d3: '-', l1: '57', l2: '19', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 050L', variant: 'Long', d1: '5', d2h6: '5', d3: '-', l1: '63', l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 060L', variant: 'Long', d1: '6', d2h6: '6', d3: '-', l1: '76', l2: '28', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 080L', variant: 'Long', d1: '8', d2h6: '8', d3: '-', l1: '76', l2: '29', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 100L', variant: 'Long', d1: '10', d2h6: '10', d3: '-', l1: '76', l2: '32', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 120L', variant: 'Long', d1: '12', d2h6: '12', d3: '-', l1: '101', l2: '51', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 140L', variant: 'Long', d1: '14', d2h6: '14', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 160L', variant: 'Long', d1: '16', d2h6: '16', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 180L', variant: 'Long', d1: '18', d2h6: '18', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 200L', variant: 'Long', d1: '20', d2h6: '20', d3: '-', l1: '125', l2: '55', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },

      // ------- EXTRA LONG -------
      { code: 'CEM4 030XL', variant: 'Extra Long', d1: '3', d2h6: '3', d3: '-', l1: '75', l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 040XL', variant: 'Extra Long', d1: '4', d2h6: '4', d3: '-', l1: '75', l2: '25', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 050XL', variant: 'Extra Long', d1: '5', d2h6: '5', d3: '-', l1: '75', l2: '28', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 060XL', variant: 'Extra Long', d1: '6', d2h6: '6', d3: '-', l1: '100', l2: '38', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 080XL', variant: 'Extra Long', d1: '8', d2h6: '8', d3: '-', l1: '100', l2: '40', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 100XL', variant: 'Extra Long', d1: '10', d2h6: '10', d3: '-', l1: '100', l2: '45', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 120XL', variant: 'Extra Long', d1: '12', d2h6: '12', d3: '-', l1: '150', l2: '60', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 140XL', variant: 'Extra Long', d1: '14', d2h6: '14', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 160XL', variant: 'Extra Long', d1: '16', d2h6: '16', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 180XL', variant: 'Extra Long', d1: '18', d2h6: '18', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' },
      { code: 'CEM4 200XL', variant: 'Extra Long', d1: '20', d2h6: '20', d3: '-', l1: '150', l2: '75', l3: '-', radius: '-', flutes: 4, shankType: 'Cylindrical' }
    ],
    technicalParameter: [
      { label: 'Best For', value: 'Steel, alloy steel, cast iron' },
      { label: 'Applications', value: 'Side milling, profiling, finishing cuts' },
      { label: 'Series Included', value: 'Regular, Long, Extra Long' }
    ],
    ProductSEO:{
    title: "4 Flute End Mill",
    subtitle: "General Purpose Steel Cutting Tool",
    description:
      "Versatile 4 flute solid carbide end mill designed for machining steel, stainless steel, and cast iron with excellent surface finish and tool life. Optimized flute geometry ensures stable cutting and reduced vibration.",
    applications:
      "Used in slot milling, side milling, and finishing operations in industrial CNC environments.",
  }
};
