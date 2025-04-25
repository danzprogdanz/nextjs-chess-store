export interface RatingStatistics {
  average: number;
  total: number;
  breakdown: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

export interface Product {
  id: string;
  sku: string;
  title: string;
  slug?: string;
  price: {
    amount: number;
    currency: string;
    formatted: string;
    originalAmount?: number;
    discountPercentage?: number;
  };
  images: Array<{
    url: string;
    altText: string;
    type: 'main' | 'gallery' | 'thumbnail';
    width: number;
    height: number;
  }>;
  description: string;
  technicalInfo: {
    specifications: Array<{
      category: string;
      properties: Array<{
        name: string;
        value: string;
        unit?: string;
        icon?: string;
      }>;
    }>;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  ratings?: {
    statistics: RatingStatistics;
    reviews: Array<{
      id: string;
      user: {
        id: string;
        name: string;
        avatar?: string;
      };
      rating: 1 | 2 | 3 | 4 | 5;
      title?: string;
      comment: string;
      likes: number;
      dislikes: number;
      verifiedPurchase: boolean;
      date: Date;
      attachments?: Array<{
        type: 'image' | 'video';
        url: string;
      }>;
    }>;
  };
  inventory: {
    stock: number;
    lowStockThreshold: number;
    available: boolean;
    skus?: Array<{
      code: string;
      size?: string;
      color?: string;
      stock: number;
    }>;
  };
  shipping: {
    freeShipping: boolean;
    estimatedDelivery: string;
    shipsFrom: string;
    returnPolicy: {
      days: number;
      details: string;
    };
  };
  category: Array<{
    id: string;
    name: string;
    path: string;
  }>;
  brand: {
    id: string;
    name: string;
    logo: string;
  };
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface ProductListingResponse {
  data: Product[];
  total: number;
  limit: number;
  skip: number;
}

export interface ProductDetailResponse {
  data: Product;
  relatedProducts: Product[];
}