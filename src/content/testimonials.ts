export interface Testimonial {
  content: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const testimonialsList = [
  {
    content: "LinkedNet has revolutionised our salon management in Perth. The automated booking system handles time zones perfectly, even with daylight savings in other states.",
    name: "Sarah Mitchell",
    role: "Owner, Glow Beauty Salon, Subiaco",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The staff management system handles our award rates and penalty rates perfectly. It's brilliant for Australian payroll compliance.",
    name: "Michael Zhang",
    role: "Director, Style Studio, Melbourne",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Since implementing LinkedNet, our Sydney salon has seen a massive boost in bookings. The AfterPay integration is a game-changer for our clients.",
    name: "Emma Thompson",
    role: "Manager, Chic Cuts, Bondi",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
] as const;