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
    description: "Smart scheduling system designed for Australian salons, with timezone support across all states and territories.",
    isKeyFeature: true
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Complete staff management system with award rate calculations, penalty rates, and Australian employment compliance.",
    isKeyFeature: true
  },
  {
    icon: Scissors,
    title: "Services Management",
    description: "Manage your service menu with GST-inclusive pricing, booking durations, and staff assignments all in one place.",
    isKeyFeature: true
  },
  {
    icon: Clock,
    title: "24/7 Online Booking",
    description: "Allow clients to book appointments anytime, with smart timezone handling for all Australian states.",
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
    description: "Secure payment processing with support for major Australian banks and payment methods including EFTPOS and AfterPay.",
    isKeyFeature: false
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description: "Automated SMS and email reminders using Australian mobile carriers and local phone number formats.",
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
    description: "Australian GST-compliant POS system with integrated EFTPOS and complete financial reporting.",
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