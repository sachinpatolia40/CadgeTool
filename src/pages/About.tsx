import { FaCheck, FaIndustry, FaUsers, FaGlobe, FaCogs, FaBullseye, FaTools, FaShieldAlt } from 'react-icons/fa';
import { teamMembers, certifications } from '../data/about';
import { Helmet } from "react-helmet-async";


export default function About() {
  const stats = [
    { icon: FaIndustry, value: '10+', label: 'Years Experience' },
    { icon: FaUsers, value: '1000+', label: 'Global Clients' },
    { icon: FaGlobe, value: '50+', label: 'Countries Served' }
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in cutting tool technology' },
    { title: 'Quality', description: 'Uncompromising standards in every product' },
    { title: 'Sustainability', description: 'Environmentally conscious manufacturing' },
    { title: 'Partnership', description: 'Building lasting relationships with clients' }
  ];

  const highlights = [
    {
      icon: FaBullseye,
      title: 'Precision-Driven Performance',
      description:
        'Solid carbide cutting tools engineered for high accuracy, durability, and consistent results in demanding machining environments.'
    },
    {
      icon: FaCogs,
      title: 'Advanced CNC Grinding',
      description:
        'Manufactured with advanced CNC grinding technology, premium-grade carbide, and strict quality controls for long tool life.'
    },
    {
      icon: FaTools,
      title: 'Standard + Custom Profiles',
      description:
        'From standard catalogue tools to customized profiles—reliable solutions for milling, drilling, and profiling applications.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality You Can Trust',
      description:
        'Every tool reflects our commitment to precision, efficiency, and customer satisfaction—built for modern machining needs.'
    }
  ];

  const industries = [
    'Automotive',
    'Aerospace',
    'Die & Mold',
    'Engineering',
    'General Manufacturing'
  ];

  const processSteps = [
    {
      title: 'Design & Engineering',
      description:
        'Tool geometry and performance goals are defined with precision—optimized for your application and material.'
    },
    {
      title: 'CNC Manufacturing',
      description:
        'High-accuracy CNC grinding ensures tight tolerances, superior edge quality, and repeatable production consistency.'
    },
    {
      title: 'Quality Control',
      description:
        'Strict inspection and quality checks ensure consistent performance, reliability, and extended tool life.'
    },
    {
      title: 'Delivery & Support',
      description:
        'We deliver dependable cutting solutions with responsive support—helping you improve throughput and efficiency.'
    }
  ];

  return (<>
    <Helmet>
      <title>About CadgeTools - ISO 9001:2015 Certified Cutting Tool Manufacturer in India</title>
      <meta name="description" content="Learn about CadgeTools, an ISO 9001:2015 certified manufacturer of solid carbide end mills and drills based in Ahmedabad, India. Serving automotive, aerospace, die & mold, and engineering industries." />
      <meta name="keywords" content="about CadgeTools, cutting tool company India, CNC tool manufacturer Ahmedabad, carbide tools company Gujarat, ISO certified cutting tools" />
      <link rel="canonical" href="https://www.cadgetools.com/about" />
      <meta property="og:title" content="About CadgeTools - ISO Certified CNC Cutting Tool Manufacturer" />
      <meta property="og:description" content="Discover CadgeTools, an ISO 9001:2015 certified manufacturer of precision solid carbide end mills and drills based in Ahmedabad, India." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.cadgetools.com/about" />
      <meta property="og:image" content="https://www.cadgetools.com/og/about.png" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cadgetools.com/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.cadgetools.com/about" }
        ]
      })}</script>
    </Helmet>
    <div className="min-h-screen pt-16">

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565439371467-61a8857372e3?auto=format&fit=crop&q=80"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advancing Manufacturing Through Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Established in 2024 with over 10 years of proven experience in the same field. CadgeTools has been at the forefront of precision cutting tool manufacturing,
            delivering excellence to industries worldwide.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="mx-auto text-4xl text-primary mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About / Story (REPLACED SECTION) */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                We are a precision-driven manufacturing company specializing in solid carbide cutting tools designed for high performance, accuracy, and durability.
                With a strong focus on innovation and quality, we deliver cutting solutions that meet the evolving needs of modern machining industries.
              </p>
            </div>

            {/* Two-column: copy + key card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-3">Built for Modern Machining</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our tools are manufactured using advanced CNC grinding technology, premium-grade carbide materials, and strict quality control processes to ensure
                  consistent performance and long tool life. From standard tools to customized profiles, we provide reliable solutions for milling, drilling, and profiling applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Driven by engineering excellence and continuous improvement, we serve industries such as automotive, aerospace, die & mold, engineering, and general manufacturing.
                  Every tool we produce reflects our commitment to precision, efficiency, and customer satisfaction.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industries.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FaCheck className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Made in India. Built for the World.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proudly Made in India, we aim to contribute to global manufacturing by offering world-class solid carbide tools at competitive value.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-gray-700">High performance & accuracy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-gray-700">Premium carbide + CNC grinding</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p className="text-gray-700">Standard & custom tool profiles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {highlights.map((h, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <h.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{h.title}</h4>
                    <p className="text-gray-600">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h3 className="text-xl font-semibold">How We Deliver Consistent Quality</h3>
                <span className="text-sm text-gray-500">Engineering • Manufacturing • Inspection • Support</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-48 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-100 mb-8">
            Let's discuss how we can help optimize your manufacturing processes
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Contact Us Today →
          </button>
        </div>
      </div>
    </div>
  </>
  );
}
