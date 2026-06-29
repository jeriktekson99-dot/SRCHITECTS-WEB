/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, Feature } from "./types";

export const BRAND_INFO = {
  name: "S.R.chitects",
  fullName: "S.R.chitects Construction Corporation",
  tagline: "Bridging architectural vision with pure structural force.",
  heroHeading: "We Don't Just Build. We Craft Your Reality.",
  heroSubheading: "Traditional construction is plagued by broken timelines, compromised designs, and hidden costs. You shouldn't have to compromise your vision for execution.",
  solutionHeading: "Built to Last. Down to Every Detail.",
  solutionBody: "S.R.chitects bridges the gap between elite architectural design and heavy-duty structural execution. We engineer spaces with uncompromising precision, ensuring what is drawn on paper is flawlessly executed on-site.",
  whyChooseUsHeader: "Built Different. By Design.",
  heroImage: "/src/assets/images/hero_arch_1780841992150.png",
  solutionImage: "/src/assets/images/geo_sketch_1780842009578.png"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "pre-construction",
    index: "01",
    title: "Pre-Construction Planning",
    description: "Meticulous site analysis, feasibility models, and parametric budgeting to eliminate cost overruns before a single concrete block is cast.",
    iconName: "Compass"
  },
  {
    id: "architectural-design",
    index: "02",
    title: "Architectural Design",
    description: "Elite modern concepts incorporating sustainable materials, raw brutalist geometry, and fluid structural spaces detailed to perfection.",
    iconName: "PenTool"
  },
  {
    id: "structural-engineering",
    index: "03",
    title: "Structural Engineering",
    description: "High-calc steel and reinforced concrete design engineered for seismic stability, grand cantilevers, and heavy-duty loading requirements.",
    iconName: "Cpu"
  },
  {
    id: "interior-fit-outs",
    index: "04",
    title: "Interior Fit-Outs",
    description: "Sleek industrial and minimalist bespoke fittings. Polished plaster, architectural glass, steel framing, and integrated spatial lighting.",
    iconName: "Layers"
  },
  {
    id: "project-management",
    index: "05",
    title: "Project Management",
    description: "Zero-error timeline enforcement overseen by senior engineers. Full client portal synchronization with rigorous structural inspections.",
    iconName: "Briefcase"
  },
  {
    id: "turnkey-construction",
    index: "06",
    title: "Turnkey Construction",
    description: "The complete seamless delivery system. Handing over fully commissioned, structurally supreme commercial and residential masterpieces.",
    iconName: "Key"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "apex-tower",
    title: "The Apex Tower",
    location: "Metropolitan District",
    imageUrl: "/src/assets/images/apex_tower_1780842026378.png",
    isWide: true,
    category: "Commercial High-Rise",
    year: "2025",
    structuralHighlight: "Reinforced load-bearing concrete cores & wind-resistant curtain wall design."
  },
  {
    id: "cantilever-house",
    title: "The Cantilever House",
    location: "West Ridge Estates",
    imageUrl: "/src/assets/images/cantilever_house_1780842043269.png",
    isWide: true,
    category: "Bespoke Residence",
    year: "2026",
    structuralHighlight: "12-meter reinforced concrete cantilever suspended over architectural lake."
  },
  {
    id: "steel-nexus",
    title: "Steel Nexus Hub",
    location: "Industrial Zone C",
    imageUrl: "/src/assets/images/steel_nexus_1780842062992.png",
    isWide: false,
    category: "Industrial Center",
    year: "2024",
    structuralHighlight: "High-tensile structural bolted steel trusses with raw iron connections."
  },
  {
    id: "minimalist-pavilion",
    title: "The Brutalist Gallery",
    location: "Cultural Park Delta",
    imageUrl: "/src/assets/images/concrete_pavilion_1780842081905.png",
    isWide: false,
    category: "Cultural Landmark",
    year: "2025",
    structuralHighlight: "Polished raw aggregate concrete structures and double-glazed slit windows."
  },
  {
    id: "column-atrium",
    title: "Glazed Atrium Office",
    location: "Financial Center North",
    imageUrl: "/src/assets/images/column_atrium_1780842124958.png",
    isWide: false,
    category: "Corporate Atrium",
    year: "2026",
    structuralHighlight: "Seismically isolated concrete support columns with continuous steel frames."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    author: "Elena Rostov",
    role: "Director of Development",
    company: "Archon Group Holdings",
    content: "S.R.chitects did what three previous firms deemed structurally impossible. Their ability to translate custom brutalist designs into safe, solid commercial realities under budget is unmatched.",
    rating: 5
  },
  {
    id: "t2",
    author: "Marcus Vance",
    role: "Lead Architect",
    company: "Vance & Partners Studios",
    content: "As an architect, there is nothing more frustrating than having your drawings compromised on-site due to contractor limitations. S.R.chitects executes precisely down to the millimeter.",
    rating: 5
  },
  {
    id: "t3",
    author: "Richard Holloway",
    role: "Private Investor",
    company: "West Ridge Luxury Estates",
    content: "The seamless transparency of their timeline tracking and the immaculate execution of the massive steel elements of our private estate made the construction positive, predictable, and elite.",
    rating: 5
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: "f1",
    index: "ENGINEERING_01",
    title: "Absolute Precision Engineering",
    description: "Every structural calculation and joint measurement is verified twice with dual-coordinate laser scanners and high-stress simulation models before pouring concrete."
  },
  {
    id: "f2",
    index: "ENGINEERING_02",
    title: "Transparent, Zero-Markup Workflows",
    description: "We work with real-time digital tracking. Every structural block, structural steel beam, and bill-of-materials is tracked via client portal with no sudden cost hikes."
  },
  {
    id: "f3",
    index: "ENGINEERING_03",
    title: "Uncompromising Concrete Craft",
    description: "We are obsessed with our core materials. Our proprietary aggregate mix and high-performance casting guarantee structural durability meant to last generations."
  }
];
