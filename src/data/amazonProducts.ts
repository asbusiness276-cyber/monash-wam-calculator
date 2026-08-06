export interface AmazonProduct {
  id: string;
  title: string;
  category: 'calculators' | 'tech' | 'study' | 'desk';
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  rating: number;
  reviewsCount: number;
  amazonUrl: string;
  imageUrl: string;
  fallbackImageUrl: string;
  keyBenefits: string[];
  ctaText: string;
  iconName: 'calculator' | 'laptop' | 'tablet' | 'headphones' | 'battery' | 'stand';
}

export const AMAZON_STORE_ID = 'visitbest-22';

export const AMAZON_STUDENT_PRODUCTS: AmazonProduct[] = [
  {
    id: 'casio-fx82au',
    title: 'Casio FX-82AU PLUS II Scientific Calculator (2nd Ed)',
    category: 'calculators',
    categoryLabel: 'Monash Exam Approved',
    badge: '🔥 Official Monash Exam Approved',
    tagline: 'Required for Monash STEM, Business, Commerce & Engineering Exams',
    description:
      'The exact scientific calculator approved by Monash invigilators for mid-terms & final exams. Features natural textbook display, prime factorization, and dual-line screen.',
    rating: 4.9,
    reviewsCount: 3840,
    amazonUrl: `https://www.amazon.com.au/s?k=Casio+FX-82AU+PLUS+II+Scientific+Calculator&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Casio_fx-82MS_2nd_edition.png',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/71u9sJm0hGL._AC_SL1500_.jpg',
    keyBenefits: [
      'Allowed in Monash invigilated exams',
      'Dual-line natural textbook display',
      'High-speed calculation engine',
    ],
    ctaText: 'Check Price on Amazon AU →',
    iconName: 'calculator',
  },
  {
    id: 'macbook-air-m2',
    title: 'Apple MacBook Air 13" (M2 Chip, 8GB RAM, 256GB SSD)',
    category: 'tech',
    categoryLabel: 'Laptops & Tablets',
    badge: '🏆 #1 Recommended Student Laptop',
    tagline: '18-Hour Battery Life & Ultra-Lightweight for Campus',
    description:
      'The gold standard laptop for Monash university students. Silent fanless design, liquid retina display, and lightning-fast M2 chip for assignments & coding.',
    rating: 4.8,
    reviewsCount: 5210,
    amazonUrl: `https://www.amazon.com.au/s?k=Apple+MacBook+Air+M2&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/MacBook_Air_M2_2022_Space_Gray.png/640px-MacBook_Air_M2_2022_Space_Gray.png',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
    keyBenefits: [
      '18-hour all-day campus battery life',
      'Super lightweight for backpacks',
      'Seamless multi-tasking for uni software',
    ],
    ctaText: 'View Amazon AU Deal →',
    iconName: 'laptop',
  },
  {
    id: 'ipad-air',
    title: 'Apple iPad Air (11-inch, M2 Chip, Wi-Fi 128GB)',
    category: 'tech',
    categoryLabel: 'Digital Note Taking',
    badge: '✏️ Best for Lecture Notes',
    tagline: 'Pair with Apple Pencil for PDF Annotations & Digital Hand Note-Taking',
    description:
      'Ideal for annotating Monash Moodle lecture slides, drawing diagrams, and reading PDF textbooks in lectures and tutorials.',
    rating: 4.8,
    reviewsCount: 2950,
    amazonUrl: `https://www.amazon.com.au/s?k=Apple+iPad+Air&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/IPad_Air_5.png/640px-IPad_Air_5.png',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/61k0d0u-6yL._AC_SL1500_.jpg',
    keyBenefits: [
      'Perfect digital notepad for lectures',
      'Ultra-sharp Liquid Retina display',
      'Apple Pencil Pro & Magic Keyboard support',
    ],
    ctaText: 'Check Price on Amazon AU →',
    iconName: 'tablet',
  },
  {
    id: 'sony-wh1000xm5',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    category: 'study',
    categoryLabel: 'Library & Focus Gear',
    badge: '🎧 Silent Study Focus',
    tagline: 'Industry-Leading Active Noise Cancellation for Deep Library Study',
    description:
      'Block out distractions in Monash Hargrave-Andrew or Matheson libraries. Crystal-clear sound, 30-hour battery, and ultra-comfortable ear cushions.',
    rating: 4.7,
    reviewsCount: 8420,
    amazonUrl: `https://www.amazon.com.au/s?k=Sony+WH-1000XM5+Headphones&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sony_WH-1000XM5_Headphones.png/640px-Sony_WH-1000XM5_Headphones.png',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1500_.jpg',
    keyBenefits: [
      'Industry-leading active noise cancellation',
      '30-hour battery life with quick charge',
      'Lightweight ergonomic fit for long study sessions',
    ],
    ctaText: 'Shop Headphones on Amazon AU →',
    iconName: 'headphones',
  },
  {
    id: 'anker-power-bank',
    title: 'Anker Magnetic Wireless Power Bank 10,000mAh',
    category: 'study',
    categoryLabel: 'Campus Travel',
    badge: '⚡ All-Day Campus Power',
    tagline: 'Fast Portable Charging for Phone, AirPods & Tablets on Campus',
    description:
      'Never run out of battery during back-to-back lectures or late-night library study sessions at Monash campuses.',
    rating: 4.6,
    reviewsCount: 4180,
    amazonUrl: `https://www.amazon.com.au/s?k=Anker+Magnetic+Power+Bank+10000mAh&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://images.unsplash.com/photo-1609592424074-122e23075c35?w=600&auto=format&fit=crop&q=80',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/61s8A14nZmL._AC_SL1500_.jpg',
    keyBenefits: [
      '10,000mAh capacity (charges iPhone 2+ times)',
      'Compact magnetic snap-on design',
      'USB-C high-speed fast charging',
    ],
    ctaText: 'Get Campus Power Bank →',
    iconName: 'battery',
  },
  {
    id: 'laptop-stand-ergonomic',
    title: 'Aluminium Ergonomic Adjustable Laptop Stand',
    category: 'desk',
    categoryLabel: 'Study Setup',
    badge: 'Posture & Ergonomics',
    tagline: 'Prevents Neck & Eye Strain During Late Night Assignment Writing',
    description:
      'Elevates your laptop screen to eye level. Sturdy foldable aluminium construction with heat dissipation ventilation.',
    rating: 4.8,
    reviewsCount: 6310,
    amazonUrl: `https://www.amazon.com.au/s?k=Ergonomic+Laptop+Stand+Aluminium&tag=${AMAZON_STORE_ID}`,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
    fallbackImageUrl: 'https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SL1500_.jpg',
    keyBenefits: [
      'Adjustable height for ideal posture',
      'Fits all 10"-17" laptops (MacBook, Dell, HP)',
      'Foldable and portable for desk & library',
    ],
    ctaText: 'Buy Laptop Stand on Amazon AU →',
    iconName: 'stand',
  },
];
