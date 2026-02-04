import { TeamMember, Milestone, Certification, ContactInfo } from '../types/about';

export const teamMembers: TeamMember[] = [
  {
    name: 'Vishal Patel',
    position: 'Administration & Finance',
    image: `${import.meta.env.BASE_URL}/Staff/VishalPatel.png`,
    description: 'Keeping operations smooth and finances on track.'
  },
  {
    name: 'Prakash Sagar',
    position: 'Sales & Marketing',
    image: `${import.meta.env.BASE_URL}/Staff/PrakashSagar.png`,
    description: 'Driving growth through smart sales and strong branding.'
  },
  {
    name: 'Ajit Patel',
    position: 'Production & Development',
    image: `${import.meta.env.BASE_URL}/Staff/AjitPatel.png`,
    description: 'Turning ideas into precision products—efficiently and reliably.'
  },
  {
    name: 'Pratik Patel',
    position: 'Quality & Design',
    image: `${import.meta.env.BASE_URL}/Staff/PratikPatel.png`,
    description: 'Designing better tools and ensuring uncompromising quality.'
  }
  ,
  {
    name: 'Akash Patel',
    position: 'Production & Supply Chain',
    image: `${import.meta.env.BASE_URL}/Staff/AkashPatel.png`,
    description: 'Ensuring timely production and a seamless supply chain.'
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
    image: `${import.meta.env.BASE_URL}/ISO9001.jpeg`
  }
];

export const ContactInfos:ContactInfo={
  email:" cadgetools@gmail.com",
  phone1:"9898506560",
  phone2:"9879426326",
  address:"18, Vaibhav Industrial Estate, Behind Super Nova Kian Showroom,  Nikol-Kathwada Cross Road, S. P. Ring Road, Kathwada, Ahmedabad - 382 430"
}