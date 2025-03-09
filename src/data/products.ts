import { Product, TechnicalParameter, Dimension, MaterialBadge, Filter, NumericFilter } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'High Performance End Mill',
    sku: 'EM-1000',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'High Performance End Mill',
    sku: 'EM-1001',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'High Performance End Mill',
    sku: 'EM-1002',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1589793080380-6089f6eb360e?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'High Performance End Mill',
    sku: 'EM-1003',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1590959651057-aaa98cd04fb2?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    name: 'High Performance End Mill',
    sku: 'EM-1004',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    name: 'High Performance End Mill',
    sku: 'EM-1005',
    specs: {
      flutes: 4,
      diameter: 12,
      material: 'AlTiN'
    },
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80'
  }
];

export const materialFilters: Filter[] = [
  { id: 'steel', name: 'Steel', count: 475, color: 'bg-blue-500' },
  { id: 'stainless', name: 'Stainless Steel', count: 475, color: 'bg-yellow-500' },
  { id: 'cast-iron', name: 'Cast Iron', count: 460, color: 'bg-red-500' },
  { id: 'non-ferrous', name: 'Non-ferrous', count: 373, color: 'bg-green-500' },
  { id: 'special-alloys', name: 'Special Alloys', count: 475, color: 'bg-orange-500' },
  { id: 'hardened-steel', name: 'Hardened Steel', count: 143, color: 'bg-gray-500' }
];

export const numericFilters: NumericFilter[] = [
  { name: 'Diameter mm', placeholder: 'Enter value' },
  { name: 'Length of cut mm', placeholder: 'Enter value' },
  { name: 'Overall Length mm', placeholder: 'Enter value' },
  { name: 'Corner Radius mm', placeholder: 'Enter value' },
  { name: 'Shank Type', placeholder: 'Enter value' }
];

export const technicalParameters: TechnicalParameter[] = [
  { label: 'Cutting Speed', value: '180-220 m/min' },
  { label: 'Feed Rate', value: '0.05-0.15 mm/tooth' },
  { label: 'Depth of Cut', value: 'Up to 1×D' }
];

export const dimensions: Dimension[] = [
  {
    code: '12.700',
    d1: '1/2',
    d2h6: '1/2',
    d3: '-',
    l1: '3 1/2',
    l2: '1',
    l3: '-',
    radius: '0.005',
    flutes: 4,
    shankType: 'HB Weldon flat'
  }
];

export const materialBadges: MaterialBadge[] = [
  { letter: 'P', color: 'bg-blue-500' },
  { letter: 'M', color: 'bg-yellow-500' },
  { letter: 'K', color: 'bg-red-500' },
  { letter: 'N', color: 'bg-green-500' },
  { letter: 'S', color: 'bg-purple-500' },
  { letter: 'H', color: 'bg-gray-500' }
];