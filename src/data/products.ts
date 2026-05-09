export interface Product {
  name: string;
  description: string;
  price: number;
  mrp: number;
  image: string;
  link: string;
}

export const products: Product[] = [
  {
    name: "Gray's Anatomy for Students",
    description:
      "Concise, readable text and an outstanding art program make Gray's Anatomy for Students, 5th Edition, your go-to text for essential information in human anatomy. Focuses on core information with more than 1,000 innovative illustrations. Includes clinical case studies, surface anatomy coverage, and online self-assessment materials.",
    price: 92,
    mrp: 95,
    image: "https://m.media-amazon.com/images/I/71+oVODT3tL._SL1272_.jpg",
    link: "https://amzn.to/4thUolh",
  },
  {
    name: "Artificial Intelligence: A Modern Approach",
    description:
      "The leading textbook in AI, used in universities worldwide. Covers all major areas of AI from search and logic to learning and robotics. Ideal for computer science students looking to build a solid foundation in artificial intelligence concepts and algorithms.",
    price: 92,
    mrp: 95,
    image: "https://m.media-amazon.com/images/I/71+oVODT3tL._SY385_.jpg",
    link: "https://amzn.asia/d/09VG127G",
  },
  {
    name: "Guyton and Hall Textbook of Medical Physiology",
    description:
      "A favorite physiology text worldwide. Delivers complex knowledge in a distinctive easy-to-digest format with clear, comprehensive coverage of core physiology. Winner of the 2026 TAA McGuffey Longevity Award. Features two-font system for fundamentals and advanced content.",
    price: 195,
    mrp: 198,
    image: "https://m.media-amazon.com/images/I/61JIlVWdj9L._SY385_.jpg",
    link: "https://amzn.asia/d/00d8MeKH",
  },
  {
    name: "Gray's Anatomy for Students Flash Card",
    description:
      "Based on acclaimed artwork from Gray's Anatomy for Students. Over 400 flashcards perfect for course exams or USMLE Step 1. Each card features full-color artwork with numbered structures and clinical correlations. Includes electronic version with purchase.",
    price: 62,
    mrp: 65,
    image: "https://m.media-amazon.com/images/I/71ev+j+2fcL._SL1500_.jpg",
    link: "https://amzn.to/42kEHPu",
  },
  {
    name: "Robbins, Cotran & Kumar Pathologic Basis of Disease",
    description:
      "Comprehensive, accessible pathology text with in-depth state-of-the-art overview of human diseases. Selected for 2025 Doody's Core Titles with Essential Purchase designation. Includes 1,000+ high-quality photographs and full-color illustrations.",
    price: 195,
    mrp: 198,
    image: "https://m.media-amazon.com/images/I/71uaNIlJCUL._SY385_.jpg",
    link: "https://amzn.asia/d/09LgnG9s",
  },
  {
    name: "Art of Computer Programming, Volumes 1-4b Boxed Set",
    description:
      "Countless readers have spoken of the profound personal influence of Knuth's work. Scientists have marveled at the beauty and elegance of his analysis. This five-volume set is arguably the most important set of information on any serious programmer's bookshelf.",
    price: 482,
    mrp: 485,
    image: "https://m.media-amazon.com/images/I/719SYGJejmL._SY342_.jpg",
    link: "https://amzn.asia/d/0bQ7SvrJ",
  },
];
