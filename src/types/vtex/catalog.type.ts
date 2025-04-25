import { Product } from "@/mocks/productMock";

export type VTEXProductResponse<T extends Product = Product> = {
  data: T;
  relatedProducts: T[];
  range?: {
    total: number;
    from: number;
    to: number;
  };
};

export type VTEXFacet = {
  name: string;
  values: Array<{
    id: string;
    quantity: number;
  }>;
};

export type VTEXSort =
  | 'priceDesc'
  | 'priceAsc'
  | 'nameAsc'
  | 'nameDesc'
  | 'releaseDesc';