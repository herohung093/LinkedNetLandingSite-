export interface Testimonial {
  content: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const testimonialsList = [
  {
    content: "LinkedNet has completely transformed how we manage our salon. The automated booking system has saved us countless hours.",
    name: "Sarah Johnson",
    role: "Owner, Glow Beauty Salon",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The staff management features are incredible. It's made scheduling and performance tracking so much easier.",
    name: "Michael Chen",
    role: "Director, Style Studio",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Customer engagement has improved significantly since we started using LinkedNet. Our clients love the easy booking process.",
    name: "Emma Rodriguez",
    role: "Manager, Chic Cuts",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
] as const;