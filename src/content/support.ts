import { MessageCircle, Phone, Mail, FileText, Youtube, BookOpen } from 'lucide-react';

export const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help from our support team during business hours.",
    actionText: "Start Chat",
    actionLink: "#",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly for immediate assistance.",
    actionText: "1-800-LINKEDNET",
    actionLink: "tel:1-800-LINKEDNET",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions anytime.",
    actionText: "support@linkednet.com",
    actionLink: "mailto:support@linkednet.com",
  },
] as const;

export const resourceOptions = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive guides and API documentation.",
    actionText: "Browse Docs →",
    actionLink: "#",
  },
  {
    icon: Youtube,
    title: "Video Tutorials",
    description: "Step-by-step video guides for all features.",
    actionText: "Watch Tutorials →",
    actionLink: "#",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Find answers to common questions.",
    actionText: "Explore KB →",
    actionLink: "#",
  },
] as const;