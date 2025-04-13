export interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  description: string;
  image: string;
}

export interface ContactInfo{
  email:string,
  phone:string,
  address:string
}