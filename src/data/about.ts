import { TeamMember, Milestone, Certification, ContactInfo } from '../types/about';

export const teamMembers: TeamMember[] = [
  {
    name: 'Vishal Patel',
    position: 'Administration & Finance',
    image: `${import.meta.env.BASE_URL}Staff/VishalPatel.png`,
    description: 'Vishal Patel leads the Administration & Finance function, ensuring strong financial governance, efficient administrative systems, and compliance to support sustainable growth.He Manages international sales and export operations, ensuring global compliance, timely deliveries, and strong overseas customer relationships'
  },
  {
    name: 'Prakash Sagar',
    position: 'Sales & Marketing',
    image: `${import.meta.env.BASE_URL}Staff/PrakashSagar.png`,
    description: 'Prakash Sagar heads Sales & Marketing, focusing on customer engagement, market expansion, and revenue growth. With a customer-first approach, he strengthens the company’s market presence and drives sustainable sales growth'
  },
  {
    name: 'Ajit Patel',
    position: 'Production & Development',
    image: `${import.meta.env.BASE_URL}Staff/AjitPatel.png`,
    description: 'Ajit Patel leads Production & Development, overseeing advanced manufacturing processes and continuous product innovation to deliver consistent quality and performance'
  },
  {
    name: 'Pratik Patel',
    position: 'Quality & Design',
    image: `${import.meta.env.BASE_URL}Staff/PratikPatel.png`,
    description: 'Pratik Patel engaged to Ensures precision, quality compliance, and innovative design to deliver reliable and high-performance products.'
  }
  ,
  {
    name: 'Akash Patel',
    position: 'Production & Supply Chain',
    image: `${import.meta.env.BASE_URL}Staff/AkashPatel.png`,
    description: 'Akash Patel Manages production planning and supply chain operations, ensuring timely delivery, cost efficiency, and smooth material flow.'
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
    image: `${import.meta.env.BASE_URL}ISO9001.jpeg`
  }
];

export const ContactInfos:ContactInfo={
  email:" cadgetools@gmail.com",
  phone1:"9898506560",
  phone2:"9879426326",
  address:"18, Vaibhav Industrial Estate, Behind Super Nova Kian Showroom,  Nikol-Kathwada Cross Road, S. P. Ring Road, Kathwada, Ahmedabad - 382 430"
}