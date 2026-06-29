/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon reference
}

export interface Project {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  isWide: boolean;
  category: string;
  year: string;
  structuralHighlight: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Feature {
  id: string;
  index: string;
  title: string;
  description: string;
}
