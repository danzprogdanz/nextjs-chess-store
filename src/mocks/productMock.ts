// lib/mockData.ts

interface RatingStatistics {
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

const generateMockProducts = (): Product[] => [
  // Staunton Style Chess Sets
  {
    id: 'chess_001',
    sku: 'STAUN-ROSE',
    title: 'Classic Staunton Rosewood Chess Set',
    price: {
      amount: 299.99,
      currency: 'USD',
      formatted: '$299.99',
      originalAmount: 349.99,
      discountPercentage: 14,
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Classic Staunton chess set with rosewood pieces',
        type: 'main',
        width: 1200,
        height: 800,
      },
      {
        url: '/images/staunton-rose-board.jpg',
        altText: 'Chess board detail',
        type: 'gallery',
        width: 800,
        height: 600,
      },
    ],
    description:
      'Official FIDE tournament-approved Staunton design in premium rosewood and ebony',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'Pieces Material', value: 'Rosewood & Ebony' },
            { name: 'Board Material', value: 'Walnut & Maple' },
            { name: 'King Height', value: '3.75', unit: 'inches' },
          ],
        },
        {
          category: 'Certification',
          properties: [
            { name: 'FIDE Approved', value: 'Yes' },
            { name: 'Tournament Size', value: '3.75" King' },
          ],
        },
      ],
      features: [
        {
          title: 'Professional Tournament Set',
          description: 'Official World Chess Federation specifications',
          icon: 'trophy',
        },
      ],
    },
    inventory: {
      stock: 15,
      lowStockThreshold: 3,
      available: true,
      skus: [
        { code: 'STAUN-ROSE-BAS', size: '3.75"', stock: 10 },
        { code: 'STAUN-ROSE-PRE', size: '4.25"', stock: 5 },
      ],
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '5-7 business days',
      shipsFrom: 'London, UK',
      returnPolicy: {
        days: 30,
        details: 'Free returns for unused sets',
      },
    },
    category: [
      {
        id: 'cat_classic',
        name: 'Classic Chess Sets',
        path: 'games/chess/classic',
      },
    ],
    brand: {
      id: 'brand_regal',
      name: 'Regal Chess Co.',
      logo: '/logos/regal-chess.png',
    },
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2024-03-15'),
    tags: ['tournament', 'wooden', 'fide-approved'],
  },
  {
    id: 'chess_002',
    sku: 'STAUN-OBSID',
    title: 'Obsidian Staunton Chess Set',
    price: {
      amount: 459.99,
      currency: 'USD',
      formatted: '$459.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Modern obsidian Staunton chess set',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Contemporary Staunton design in polished obsidian and alabaster',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'Black Pieces', value: 'Polished Obsidian' },
            { name: 'White Pieces', value: 'Carved Alabaster' },
            { name: 'Board Material', value: 'Tempered Glass' },
          ],
        },
      ],
      features: [
        {
          title: 'Weighted Pieces',
          description: 'Premium weighted pieces for tournament play',
          icon: 'weight',
        },
      ],
    },
    inventory: {
      stock: 8,
      lowStockThreshold: 2,
      available: true,
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '7-10 business days',
      shipsFrom: 'Milan, Italy',
      returnPolicy: {
        days: 14,
        details: 'Special order - non-returnable',
      },
    },
    category: [
      {
        id: 'cat_classic',
        name: 'Classic Chess Sets',
        path: 'games/chess/classic',
      },
    ],
    brand: {
      id: 'brand_modernchess',
      name: 'Modern Chess Designs',
      logo: '/logos/mcd-logo.png',
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-03-20'),
    tags: ['luxury', 'stone', 'weighted'],
  },

  // Isle of Lewis Chess Sets
  {
    id: 'chess_003',
    sku: 'LEWIS-WALRUS',
    title: 'Lewis Chessmen Reproduction Set',
    price: {
      amount: 899.99,
      currency: 'USD',
      formatted: '$899.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Authentic Lewis chessmen reproduction',
        type: 'main',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Walnut chess set with matching board',
        type: 'gallery',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Walnut chess set with matching board',
        type: 'gallery',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Walnut chess set with matching board',
        type: 'gallery',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Museum-quality reproduction of the 12th-century Lewis chessmen in walrus ivory',
    technicalInfo: {
      specifications: [
        {
          category: 'Historical',
          properties: [
            { name: 'Era', value: '12th Century Reproduction' },
            { name: 'Material', value: 'Walrus Ivory' },
            { name: 'Height Range', value: '2.5-3.5', unit: 'inches' },
          ],
        },
      ],
      features: [
        {
          title: 'Museum Reproduction',
          description: 'Created using original British Museum scans',
          icon: 'museum',
        },
      ],
    },
    inventory: {
      stock: 3,
      lowStockThreshold: 1,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '10-14 business days',
      shipsFrom: 'Edinburgh, Scotland',
      returnPolicy: {
        days: 60,
        details: 'Certificate of authenticity included',
      },
    },
    category: [
      {
        id: 'cat_historical',
        name: 'Historical Chess Sets',
        path: 'games/chess/historical',
      },
    ],
    brand: {
      id: 'brand_heritage',
      name: 'Heritage Reproductions',
      logo: '/logos/heritage-repro.png',
    },
    createdAt: new Date('2022-05-15'),
    updatedAt: new Date('2024-02-01'),
    tags: ['historical', 'museum', 'ivory'],
  },
  {
    id: 'chess_004',
    sku: 'LEWIS-RESIN',
    title: 'Lewis Chessmen Collectors Edition',
    price: {
      amount: 149.99,
      currency: 'USD',
      formatted: '$149.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Lewis chessmen in synthetic ivory resin',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Ethical synthetic ivory reproduction of the famous medieval chessmen',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'Material', value: 'Synthetic Ivory Resin' },
            { name: 'Height Range', value: '3-4', unit: 'inches' },
          ],
        },
      ],
      features: [
        {
          title: 'Ethical Alternative',
          description: 'No animal products used in production',
          icon: 'eco',
        },
      ],
    },
    inventory: {
      stock: 25,
      lowStockThreshold: 5,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '3-5 business days',
      shipsFrom: 'Portland, OR',
      returnPolicy: {
        days: 30,
        details: '30-day satisfaction guarantee',
      },
    },
    category: [
      {
        id: 'cat_historical',
        name: 'Historical Chess Sets',
        path: 'games/chess/historical',
      },
    ],
    brand: {
      id: 'brand_chesseco',
      name: 'Eco Chess Co.',
      logo: '/logos/eco-chess.png',
    },
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2024-03-10'),
    tags: ['eco-friendly', 'replica', 'medieval'],
  },

  // Modern/Contemporary Chess Sets
  {
    id: 'chess_005',
    sku: 'MOD-CARBON',
    title: 'Carbon Fiber Contemporary Chess Set',
    price: {
      amount: 649.99,
      currency: 'USD',
      formatted: '$649.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Modern carbon fiber chess set',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Ultra-modern chess set with aerospace-grade carbon fiber pieces',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'Black Pieces', value: 'Carbon Fiber' },
            { name: 'White Pieces', value: 'Anodized Aluminum' },
            { name: 'Board', value: 'Tempered Glass with LED' },
          ],
        },
      ],
      features: [
        {
          title: 'LED Illuminated Board',
          description: 'Programmable RGB lighting system',
          icon: 'lighting',
        },
      ],
    },
    inventory: {
      stock: 12,
      lowStockThreshold: 3,
      available: true,
      skus: [
        { code: 'CARBON-BLK', color: 'Matte Black', stock: 8 },
        { code: 'CARBON-RED', color: 'Red Accents', stock: 4 },
      ],
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2-3 business days',
      shipsFrom: 'San Francisco, CA',
      returnPolicy: {
        days: 14,
        details: 'Free returns within 14 days',
      },
    },
    category: [
      {
        id: 'cat_modern',
        name: 'Modern Chess Sets',
        path: 'games/chess/modern',
      },
    ],
    brand: {
      id: 'brand_futurechess',
      name: 'Future Chess Designs',
      logo: '/logos/future-chess.png',
    },
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-25'),
    tags: ['modern', 'carbon-fiber', 'led'],
  },
  {
    id: 'chess_006',
    sku: 'MOD-SCULPT',
    title: 'Abstract Sculptural Chess Set',
    price: {
      amount: 799.99,
      currency: 'USD',
      formatted: '$799.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Modern abstract chess set',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description:
      'Artistic interpretation of chess pieces by contemporary sculptor Lina Chen',
    technicalInfo: {
      specifications: [
        {
          category: 'Design',
          properties: [
            { name: 'Designer', value: 'Lina Chen' },
            { name: 'Material', value: 'Bronze & Marble' },
            { name: 'Weight', value: '18.5', unit: 'lbs' },
          ],
        },
      ],
      features: [
        {
          title: 'Art Gallery Edition',
          description: 'Numbered limited edition with certificate',
          icon: 'art',
        },
      ],
    },
    inventory: {
      stock: 5,
      lowStockThreshold: 1,
      available: true,
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '14-21 business days',
      shipsFrom: 'Berlin, Germany',
      returnPolicy: {
        days: 7,
        details: 'Special handling required',
      },
    },
    category: [
      {
        id: 'cat_modern',
        name: 'Modern Chess Sets',
        path: 'games/chess/modern',
      },
    ],
    brand: {
      id: 'brand_artchess',
      name: 'Art Chess Collective',
      logo: '/logos/art-chess.png',
    },
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-03-18'),
    tags: ['art', 'sculpture', 'limited-edition'],
  },
  {
    id: 'chess_007',
    sku: 'STAUN-TRAVEL',
    title: 'Staunton Travel Chess Set',
    price: {
      amount: 89.99,
      currency: 'USD',
      formatted: '$89.99',
      originalAmount: 109.99,
      discountPercentage: 18,
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png',
        altText: 'Compact travel chess set with Staunton pieces',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Magnetic Staunton pieces with foldable board for travel',
    technicalInfo: {
      specifications: [
        {
          category: 'Design',
          properties: [
            { name: 'Pieces Material', value: 'Weighted Plastic' },
            { name: 'Board Material', value: 'Leatherette' },
            { name: 'King Height', value: '2.5', unit: 'inches' },
            { name: 'Magnetic', value: 'Yes' },
          ],
        },
      ],
      features: [
        {
          title: 'Portable Design',
          description: 'All pieces store securely in compact folding board',
          icon: 'travel',
        },
      ],
    },
    inventory: {
      stock: 42,
      lowStockThreshold: 10,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '3-5 business days',
      shipsFrom: 'Chicago, IL',
      returnPolicy: {
        days: 30,
        details: 'Standard return policy applies',
      },
    },
    category: [
      {
        id: 'cat_classic',
        name: 'Classic Chess Sets',
        path: 'games/chess/classic',
      },
      {
        id: 'cat_travel',
        name: 'Travel Chess',
        path: 'games/chess/travel',
      },
    ],
    brand: {
      id: 'brand_regal',
      name: 'Regal Chess Co.',
      logo: '/logos/regal-chess.png',
    },
    createdAt: new Date('2023-09-15'),
    updatedAt: new Date('2024-02-28'),
    tags: ['travel', 'magnetic', 'compact'],
  },

  // Luxury Chess Sets
  {
    id: 'chess_008',
    sku: 'LUX-GOLD',
    title: '24K Gold Plated Chess Set',
    price: {
      amount: 4999.99,
      currency: 'USD',
      formatted: '$4,999.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Luxury gold plated chess set with crystal pieces',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Exclusive limited edition chess set with 24K gold plating',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'White Pieces', value: '24K Gold Plated Brass' },
            { name: 'Black Pieces', value: 'Rhodium Plated Brass' },
            { name: 'Board', value: 'Italian Marble with Gold Inlay' },
          ],
        },
      ],
      features: [
        {
          title: 'Collector\'s Edition',
          description: 'Numbered certificate of authenticity included',
          icon: 'certificate',
        },
      ],
    },
    inventory: {
      stock: 2,
      lowStockThreshold: 1,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: 'By appointment only',
      shipsFrom: 'Zurich, Switzerland',
      returnPolicy: {
        days: 7,
        details: 'Special handling required - insurance mandatory',
      },
    },
    category: [
      {
        id: 'cat_luxury',
        name: 'Luxury Chess Sets',
        path: 'games/chess/luxury',
      },
    ],
    brand: {
      id: 'brand_royalchess',
      name: 'Royal Chess Collections',
      logo: '/logos/royal-chess.png',
    },
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-03-30'),
    tags: ['luxury', 'gold', 'limited-edition'],
  },

  // Themed Chess Sets
  {
    id: 'chess_009',
    sku: 'THEME-LOTR',
    title: 'Lord of the Rings Chess Set',
    price: {
      amount: 249.99,
      currency: 'USD',
      formatted: '$249.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Lord of the Rings themed chess set',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Officially licensed Lord of the Rings character chess pieces',
    technicalInfo: {
      specifications: [
        {
          category: 'Design',
          properties: [
            { name: 'Material', value: 'Polystone Resin' },
            { name: 'King Height', value: '4.5', unit: 'inches' },
            { name: 'License', value: 'Official Middle-earth Enterprises' },
          ],
        },
      ],
      features: [
        {
          title: 'Character Pieces',
          description: 'Gandalf vs Sauron as kings, with full fellowship',
          icon: 'fantasy',
        },
      ],
    },
    inventory: {
      stock: 18,
      lowStockThreshold: 5,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '5-7 business days',
      shipsFrom: 'Austin, TX',
      returnPolicy: {
        days: 30,
        details: 'Standard return policy applies',
      },
    },
    category: [
      {
        id: 'cat_themed',
        name: 'Themed Chess Sets',
        path: 'games/chess/themed',
      },
    ],
    brand: {
      id: 'brand_geekchess',
      name: 'Geek Chess Collectibles',
      logo: '/logos/geek-chess.png',
    },
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2024-03-12'),
    tags: ['lotr', 'fantasy', 'licensed'],
  },

  // Electronic Chess Sets
  {
    id: 'chess_010',
    sku: 'ELECT-DGT',
    title: 'DGT Centaur Electronic Chess Board',
    price: {
      amount: 399.99,
      currency: 'USD',
      formatted: '$399.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Electronic chess board with LED display',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Smart chess board with built-in AI opponent and training modes',
    technicalInfo: {
      specifications: [
        {
          category: 'Technical',
          properties: [
            { name: 'Board Type', value: 'Electronic with LED' },
            { name: 'Skill Levels', value: '20 difficulty settings' },
            { name: 'Battery Life', value: '15', unit: 'hours' },
          ],
        },
      ],
      features: [
        {
          title: 'Adaptive AI',
          description: 'Learns your playing style and adjusts difficulty',
          icon: 'ai',
        },
      ],
    },
    inventory: {
      stock: 22,
      lowStockThreshold: 5,
      available: true,
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2-4 business days',
      shipsFrom: 'Eindhoven, Netherlands',
      returnPolicy: {
        days: 30,
        details: 'Free returns within 30 days',
      },
    },
    category: [
      {
        id: 'cat_electronic',
        name: 'Electronic Chess',
        path: 'games/chess/electronic',
      },
    ],
    brand: {
      id: 'brand_dgt',
      name: 'Digital Game Technology',
      logo: '/logos/dgt.png',
    },
    createdAt: new Date('2023-10-10'),
    updatedAt: new Date('2024-03-22'),
    tags: ['electronic', 'smart', 'training'],
  },

  // Chess Set + Board Combos
  {
    id: 'chess_011',
    sku: 'COMBO-WAL',
    title: 'Walnut Chess Set & Board Combo',
    price: {
      amount: 349.99,
      currency: 'USD',
      formatted: '$349.99',
      originalAmount: 399.99,
      discountPercentage: 12,
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Walnut chess set with matching board',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Premium walnut and maple chess set with matching 21" board',
    technicalInfo: {
      specifications: [
        {
          category: 'Materials',
          properties: [
            { name: 'Pieces Material', value: 'Walnut & Maple' },
            { name: 'Board Material', value: 'Walnut & Maple' },
            { name: 'Square Size', value: '2.25', unit: 'inches' },
          ],
        },
      ],
      features: [
        {
          title: 'Matching Set',
          description: 'Pieces perfectly complement the board colors',
          icon: 'combo',
        },
      ],
    },
    inventory: {
      stock: 9,
      lowStockThreshold: 2,
      available: true,
      skus: [
        { code: 'COMBO-WAL-21', size: '21"', stock: 6 },
        { code: 'COMBO-WAL-18', size: '18"', stock: 3 },
      ],
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '7-10 business days',
      shipsFrom: 'Portland, OR',
      returnPolicy: {
        days: 30,
        details: 'Free returns for unused sets',
      },
    },
    category: [
      {
        id: 'cat_classic',
        name: 'Classic Chess Sets',
        path: 'games/chess/classic',
      },
      {
        id: 'cat_combos',
        name: 'Chess Combos',
        path: 'games/chess/combos',
      },
    ],
    brand: {
      id: 'brand_chesscraft',
      name: 'ChessCraft Woodworks',
      logo: '/logos/chesscraft.png',
    },
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2024-03-05'),
    tags: ['wood', 'combo', 'tournament'],
  },

  // Budget Chess Sets
  {
    id: 'chess_012',
    sku: 'BASIC-PLAST',
    title: 'Beginner Plastic Chess Set',
    price: {
      amount: 19.99,
      currency: 'USD',
      formatted: '$19.99',
    },
    images: [
      {
        url: 'https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/64999ac31edcaba25029dde2_DSC_5786_knights.jpg',
        altText: 'Basic plastic chess set for beginners',
        type: 'main',
        width: 1200,
        height: 800,
      },
    ],
    description: 'Affordable starter chess set with roll-up vinyl board',
    technicalInfo: {
      specifications: [
        {
          category: 'Design',
          properties: [
            { name: 'Pieces Material', value: 'Durable Plastic' },
            { name: 'Board Material', value: 'Vinyl' },
            { name: 'King Height', value: '3', unit: 'inches' },
          ],
        },
      ],
      features: [
        {
          title: 'Beginner Friendly',
          description: 'Perfect for learning the game',
          icon: 'beginner',
        },
      ],
    },
    inventory: {
      stock: 127,
      lowStockThreshold: 20,
      available: true,
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '3-7 business days',
      shipsFrom: 'Multiple US locations',
      returnPolicy: {
        days: 30,
        details: 'Standard return policy applies',
      },
    },
    category: [
      {
        id: 'cat_beginner',
        name: 'Beginner Chess',
        path: 'games/chess/beginner',
      },
    ],
    brand: {
      id: 'brand_chessbasics',
      name: 'Chess Basics',
      logo: '/logos/chess-basics.png',
    },
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2024-03-01'),
    tags: ['beginner', 'plastic', 'budget'],
  },
];

// Utility functions remain similar with type updates
export const mockProducts = generateMockProducts();

export const getAllProducts = async (): Promise<ProductListingResponse> => {
  await simulateDelay();
  return {
    data: mockProducts,
    total: mockProducts.length,
    limit: 10,
    skip: 0,
  };
};

export const getProductBySlug = async (
  slug: string
): Promise<ProductDetailResponse> => {
  await simulateDelay();
  
  // Create a slug-friendly version for comparison
  const formattedSlug = slug.replace(/-/g, ' ');
  
  const product = mockProducts.find((p) =>
    p.title.toLowerCase().includes(formattedSlug)
  );

  if (!product) {
    throw new Error('Product not found');
  }

  return {
    data: product,
    relatedProducts: mockProducts
      .filter((p) => p.id !== product.id && p.category.some(c => 
        product.category.some(pc => pc.id === c.id)
      ))
      .slice(0, 3),
  };
};

const simulateDelay = () =>
  new Promise((resolve) =>
    setTimeout(resolve, process.env.NODE_ENV === 'test' ? 0 : 10)
  );
