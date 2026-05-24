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
  techSketch: string,
  dimensions: Dimension[];
  technicalParameter: TechnicalParameter[],
  ProductSEO: ProductSEO
}

export interface ProductSEO {
  title: string;
  subtitle: string;

  description: string;
  applications: string;
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
  variant?: "Regular" | "Long" | "Extra Long";
  threadSize?: string;      // e.g. "M10 x 1.5"
  pitch?: string;           // pitch in mm (from your table column "TPI")
  cuttingDia?: string;      // cutting dia (mm)
  threadAngle?: string;     // e.g. "60°"
  width?: string;
  depth?: string;
  xAngle?: string;   // X angle (°)
  yAngle?: string;   // Y angle (°)
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

// export interface NumericFilter {
//   name: string;
//   placeholder: string;
// }