export const categories = [
  'Getting Started',
  'Appointments',
  'Staff Management',
  'Payments',
  'Integrations',
  'Account Settings'
] as const;

export const articles = [
  {
    title: 'Quick Start Guide',
    content: 'Learn how to set up your salon profile, add services, and start accepting bookings in under 15 minutes.',
    category: 'Getting Started',
    link: '/kb/quick-start-guide'
  },
  {
    title: 'Managing Your Calendar',
    content: 'Master the calendar features to efficiently manage appointments, block time slots, and handle scheduling conflicts.',
    category: 'Appointments',
    link: '/kb/managing-calendar'
  },
  {
    title: 'Staff Scheduling Best Practices',
    content: 'Learn how to create optimal staff schedules, manage time off requests, and track performance metrics.',
    category: 'Staff Management',
    link: '/kb/staff-scheduling'
  },
  {
    title: 'Setting Up Payment Methods',
    content: 'Configure your payment settings, including accepted payment methods, cancellation policies, and deposit requirements.',
    category: 'Payments',
    link: '/kb/payment-setup'
  },
  {
    title: 'Connecting Your Social Media',
    content: 'Integrate your social media accounts to automatically share updates and promote your services.',
    category: 'Integrations',
    link: '/kb/social-media-integration'
  },
  {
    title: 'Customizing Notification Settings',
    content: 'Configure email and SMS notifications for appointments, reminders, and marketing communications.',
    category: 'Account Settings',
    link: '/kb/notification-settings'
  },
  {
    title: 'Service Menu Management',
    content: 'Learn how to create, update, and organize your service menu, including pricing and duration settings.',
    category: 'Getting Started',
    link: '/kb/service-menu'
  },
  {
    title: 'Client Database Features',
    content: 'Discover how to manage your client database, track visit history, and maintain customer preferences.',
    category: 'Getting Started',
    link: '/kb/client-database'
  },
  {
    title: 'Processing Refunds',
    content: 'Step-by-step guide on how to process refunds, handle disputes, and manage payment adjustments.',
    category: 'Payments',
    link: '/kb/processing-refunds'
  }
] as const;