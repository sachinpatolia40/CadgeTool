import { Product, TechnicalParameter, Dimension, MaterialBadge, Filter, NumericFilter } from '../types/product';
import { cem2TwoFlute } from "../data/ProductData/cem2TwoFlute"
import { cem4FourFlute } from "../data/ProductData/cem4FourFlute"
import { cem3ThreeFlute } from "../data/ProductData/cem3ThreeFlute"
import { cbn2BallNose } from "../data/ProductData/cbn2BallNose"
import { cbn4BallNose } from "../data/ProductData/cbn4BallNose"
import { ccr2CornerRadius } from "../data/ProductData/ccr2CornerRadius"
import { ccr4CornerRadius } from "../data/ProductData/ccr4CornerRadius"
import { cemp4PSquare } from "../data/ProductData/cemp4PSquare"
import { crem4RougherSquare } from "../data/ProductData/crem4RougherSquare"
import { cem6SixFluteSquare } from "../data/ProductData/cem6SixFluteSquare"
import { cslp1SingleLipCutter } from "../data/ProductData/cslp1SingleLipCutter"
import { cdl3Drill3XD } from "../data/ProductData/cdl3Drill3XD"
import { cdl5Drill5XD } from "../data/ProductData/cdl5Drill5XD"
import { cdl3TCThroughCoolantDrill3XD } from "../data/ProductData/cdl3TCThroughCoolantDrill3XD"
import { cdl5TCThroughCoolantDrill5XD } from "../data/ProductData/cdl5TCThroughCoolantDrill5XD"
import { chm3Hallmill } from "../data/ProductData/chm3Hallmill"
import { ccdCenterDrill } from "../data/ProductData/ccdCenterDrill"
import { isoMetricThreadMill } from "../data/ProductData/isoMetricThreadMill"
import { csurSurgicalThreadMill } from "../data/ProductData/csurSurgicalThreadMill"
import { cbspThreadMill } from "../data/ProductData/cbspThreadMill"
import { cnptThreadMill } from "../data/ProductData/cnptThreadMill"
import { cchf4ChamferCutter90 } from "../data/ProductData/cchf4ChamferCutter90"
import { dmctCutter } from "../data/ProductData/dmctCutter"
import { cigtInternalGrooving } from "../data/ProductData/cigtInternalGrooving"
import { cittInternalThreadingTool } from "../data/ProductData/cittInternalThreadingTool"
import { cibtInternalBoringTool } from "../data/ProductData/cibtInternalBoringTool"
export const products: Product[] = [
  cem2TwoFlute,
  cem4FourFlute,
  cem3ThreeFlute,
  cbn2BallNose,
  cbn4BallNose,
  ccr2CornerRadius,
  ccr4CornerRadius,
  cemp4PSquare,
  crem4RougherSquare,
  cem6SixFluteSquare,
  cslp1SingleLipCutter,
  cdl3Drill3XD,
  cdl5Drill5XD,
  cdl3TCThroughCoolantDrill3XD,
  cdl5TCThroughCoolantDrill5XD,
  chm3Hallmill,
  ccdCenterDrill,
  isoMetricThreadMill,
  csurSurgicalThreadMill,
  cbspThreadMill,
  cnptThreadMill,
  cchf4ChamferCutter90,
  dmctCutter,
  cigtInternalGrooving,
  cittInternalThreadingTool,
  cibtInternalBoringTool

];


export const materialFilters: Filter[] = [
  { id: 'steel', name: 'Steel', count: 475, color: 'bg-blue-500' },
  { id: 'stainless', name: 'Stainless Steel', count: 475, color: 'bg-yellow-500' },
  { id: 'cast-iron', name: 'Cast Iron', count: 460, color: 'bg-red-500' },
  { id: 'non-ferrous', name: 'Non-ferrous', count: 373, color: 'bg-green-500' },
  { id: 'special-alloys', name: 'Special Alloys', count: 475, color: 'bg-orange-500' },
  { id: 'hardened-steel', name: 'Hardened Steel', count: 143, color: 'bg-gray-500' }
];

// export const numericFilters: NumericFilter[] = [
//   { name: 'Diameter mm', placeholder: 'Enter value' },
//   { name: 'Length of cut mm', placeholder: 'Enter value' },
//   { name: 'Overall Length mm', placeholder: 'Enter value' },
//   { name: 'Corner Radius mm', placeholder: 'Enter value' },
//   { name: 'Shank Type', placeholder: 'Enter value' }
// ];

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
    variant: "Regular",
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


