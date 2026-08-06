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
    badge: '🔥 Must-Have for Exams',
    tagline: 'Official Monash & Australian University Exam Approved Calculator',
    description:
      'Required for Monash STEM, Business, Commerce, and Engineering mid-terms & final exams. Features natural textbook display and prime factorization.',
    rating: 4.9,
    reviewsCount: 3840,
    amazonUrl: `https://www.amazon.com.au/s?k=Casio+FX-82AU+PLUS+II+Scientific+Calculator&tag=${AMAZON_STORE_ID}`,
    keyBenefits: [
      'Approved for Monash invigilated exams',
      'Dual-line natural textbook display',
      'High-speed calculation memory',
    ],
    ctaText: 'Buy on Amazon Australia →',
    iconName: 'calculator',
  },
  {
    id: 'macbook-air-m2',
    title: 'Apple MacBook Air 13" (M2 Chip, 8GB RAM, 256GB SSD)',
    category: 'tech',
    categoryLabel: 'Laptops & Tablets',
    badge: '🏆 #1 Student Laptop',
    tagline: 'Lightweight, All-Day 18-Hour Battery Life for Campus Lectures',
    description:
      'The gold standard laptop for Monash university students. Silent fanless design, liquid retina display, and lightning-fast M2 chip for assignments & coding.',
    rating: 4.8,
    reviewsCount: 5210,
    amazonUrl: `https://www.amazon.com.au/s?k=Apple+MacBook+Air+M2&tag=${AMAZON_STORE_ID}`,
    keyBenefits: [
      '18-hour all-day battery life',
      'Super lightweight for campus backpacks',
      'Seamless multi-tasking for university software',
    ],
    ctaText: 'Check Price on Amazon AU →',
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
    keyBenefits: [
      'Perfect digital notepad for lectures',
      'Ultra-sharp Liquid Retina display',
      'Apple Pencil Pro & Magic Keyboard support',
    ],
    ctaText: 'View Deal on Amazon AU →',
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
    keyBenefits: [
      'Adjustable height for ideal posture',
      'Fits all 10"-17" laptops (MacBook, Dell, HP)',
      'Foldable and portable for desk & library',
    ],
    ctaText: 'Buy Laptop Stand on Amazon AU →',
    iconName: 'stand',
  },
];
