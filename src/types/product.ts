export interface Product {
  id: string;
  name: string;
  sku: string;
  specs: {
    flutes: number;
    diameter: number;
    material: string;
  };
  image: string;
}

export interface TechnicalParameter {
  label: string;
  value: string;
}

export interface Dimension {
  code: string;
  d1: string;
  d2h6: string;
  d3: string;
  l1: string;
  l2: string;
  l3: string;
  radius: string;
  flutes: number;
  shankType: string;
}

export interface MaterialBadge {
  letter: string;
  color: string;
}

export interface Filter {
  id: string;
  name: string;
  count: number;
  color: string;
}

export interface NumericFilter {
  name: string;
  placeholder: string;
}