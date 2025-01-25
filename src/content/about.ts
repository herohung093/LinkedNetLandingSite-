import { Users, Target, Heart, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  imageUrl: string;
}

export const stats = [
  { number: "2,000+", label: "Australian Salons" },
  { number: "500K+", label: "Appointments Booked" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "8", label: "States & Territories" }
] as const;

export const values: Value[] = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize our customers' success and growth above all else."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously improving our platform with cutting-edge technology."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to transforming the salon industry with powerful solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality service and support."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    experience: "15+ years of experience in Australian salon industry",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Zhang",
    role: "Chief Technology Officer",
    experience: "12+ years of experience in Australian tech companies",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emma Thompson",
    role: "Chief Operating Officer",
    experience: "10+ years of experience in Australian salon operations",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  }
] as const;