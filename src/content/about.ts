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
  { number: "10,000+", label: "Salon Partners" },
  { number: "1M+", label: "Appointments Booked" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "50+", label: "Countries" }
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
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    experience: "15+ years of experience in salon industry and technology",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    experience: "12+ years of experience in software development",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emma Rodriguez",
    role: "Chief Operating Officer",
    experience: "10+ years of experience in business operations",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  }
] as const;