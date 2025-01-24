import { 
  Calendar, 
  Users, 
  Clock, 
  Shield, 
  MessageSquare, 
  BarChart, 
  CreditCard, 
  Smartphone, 
  Bell, 
  Settings, 
  Palette, 
  Gift,
  Heart,
  Scissors
} from 'lucide-react';

export const featuresList = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling system that optimizes your calendar and prevents double-bookings automatically.",
    isKeyFeature: true
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Comprehensive staff management with performance tracking, scheduling, and commission calculations.",
    isKeyFeature: true
  },
  {
    icon: Scissors,
    title: "Services Management",
    description: "Efficiently manage your service catalog, pricing, duration, and staff assignments all in one place.",
    isKeyFeature: true
  },
  {
    icon: Clock,
    title: "24/7 Online Booking",
    description: "Let clients book appointments anytime through your customized booking page.",
    isKeyFeature: true
  },
  {
    icon: Heart,
    title: "Customer Engagement",
    description: "Build lasting relationships with automated follow-ups, personalized promotions, and client feedback systems.",
    isKeyFeature: true
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Integrated payment processing with secure transactions and automated invoicing.",
    isKeyFeature: false
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description: "Automated appointment reminders and follow-ups via SMS and email.",
    isKeyFeature: false
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Real-time insights into your business performance, revenue, and customer satisfaction.",
    isKeyFeature: true
  },
  {
    icon: CreditCard,
    title: "Point of Sale",
    description: "Integrated POS system for managing in-person payments and inventory.",
    isKeyFeature: false
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your business on the go with our powerful mobile application.",
    isKeyFeature: false
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Customizable alerts for appointments, reviews, and business metrics.",
    isKeyFeature: false
  },
  {
    icon: Settings,
    title: "Custom Workflows",
    description: "Create automated workflows tailored to your salon's specific needs.",
    isKeyFeature: false
  },
  {
    icon: Palette,
    title: "Service Menu",
    description: "Digital service menu with pricing, duration, and online booking integration.",
    isKeyFeature: false
  },
  {
    icon: Gift,
    title: "Loyalty Program",
    description: "Built-in loyalty program to reward regular clients and boost retention.",
    isKeyFeature: false
  }
] as const;