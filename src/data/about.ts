import { TeamMember, Milestone, Certification, ContactInfo } from '../types/about';

export const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    description: 'With over 25 years of experience in precision engineering'
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80',
    description: 'Expert in advanced manufacturing processes'
  },
  {
    name: 'Michael Chen',
    position: 'R&D Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    description: 'Leading innovation in cutting tool technology'
  }
];

export const milestones: Milestone[] = [
  {
    year: 1995,
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize precision tooling'
  },
  {
    year: 2005,
    title: 'Global Expansion',
    description: 'Expanded operations to international markets'
  },
  {
    year: 2010,
    title: 'Innovation Center',
    description: 'Opened state-of-the-art R&D facility'
  },
  {
    year: 2015,
    title: 'Industry 4.0',
    description: 'Implemented smart manufacturing technologies'
  },
  {
    year: 2020,
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly manufacturing processes'
  }
];

export const certifications: Certification[] = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    image: 'https://images.unsplash.com/photo-1589793687747-83b8d0ca2f9b?auto=format&fit=crop&q=80'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    image: 'https://images.unsplash.com/photo-1589793687747-83b8d0ca2f9b?auto=format&fit=crop&q=80'
  },
  {
    name: 'AS9100D',
    description: 'Aerospace Standard',
    image: 'https://images.unsplash.com/photo-1589793687747-83b8d0ca2f9b?auto=format&fit=crop&q=80'
  }
];

export const ContactInfos:ContactInfo={
  email:"info@cadgetool.com",
  phone:"9975599999",
  address:"GIDC, Ahmedabad"
}