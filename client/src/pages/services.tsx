import { motion } from 'framer-motion';
import { CheckCircle, Shield, MapPin, ShoppingCart, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { CTAButton } from '@/components/ui/cta-button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  const services = [
    // Healthcare
    {
      icon: <Shield className="text-primary text-xl" />,
      title: 'Healthcare Websites',
      description:
        'HIPAA-compliant websites designed for clinics and local doctors, optimized for patient trust and conversions.',
      features: ['HIPAA & data security compliance', 'Responsive design for all devices', 'Appointment booking integration']
    },
    // Local Businesses
    {
      icon: <MapPin className="text-primary text-xl" />,
      title: 'Local Business Websites',
      description:
        'Affordable, responsive websites for shops, cafes, and service providers with local SEO and Google Maps optimization.',
      features: ['Google Maps & local SEO', 'CMS for quick updates', 'Mobile-first responsive design']
    },
    // E-commerce
    {
      icon: <ShoppingCart className="text-primary text-xl" />,
      title: 'E-commerce Stores',
      description:
        'Full-featured Shotionpify/WooCommerce stores optimized for sales, SEO, and advertising campaigns.',
      features: ['Shopify/WooCommerce setup', 'Product & checkout optimization', 'SEO & paid ads integration']
    }
  ];

  const maintenancePlans = [
    {
      name: "Starter",
      price: "₹2,999",
      description: "Essential maintenance for small businesses",
      features: [
        "Regular updates & patches",
        "Daily automated backups",
        "Uptime monitoring",
        "Basic security scanning",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹5,999",
      description: "Everything in Starter plus content management",
      features: [
        "Everything in Starter",
        "Monthly content updates",
        "Advanced security scanning",
        "Performance monitoring",
        "Monthly reports",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "₹9,999",
      description: "Complete management for growing businesses",
      features: [
        "Everything in Growth",
        "5 hours feature development",
        "SEO optimization tweaks",
        "A/B testing setup",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Website Redesign Services - WebRevamp Studio"
        description="Professional website redesign, responsive development, SEO optimization, and maintenance services for Indian SMBs. Transform your outdated website into a growth engine."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold text-dark mb-6 leading-tight">
              Complete website transformation{' '}
              <span className="text-primary">services</span>
            </h1>
            
            <p className="text-xl text-gray-text mb-8 max-w-2xl mx-auto leading-relaxed">
              From redesign to ongoing maintenance, we handle every aspect of your web presence with expertise and transparency.
            </p>
            
            <CTAButton
              href="/contact"
              size="lg"
              eventLabel="services_hero_cta"
              icon={<ArrowRight size={20} />}
            >
              Get Started Today
            </CTAButton>
          </motion.div>
        </div>
      </section>

      

      {/* Services Grid - Copied from Home page */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Our Freelancing Agency Services"
            subtitle="From creating stunning websites to ongoing support, we help businesses grow online"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: 'rgba(249, 115, 22, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="font-sora font-semibold text-xl text-dark mb-4"
                  whileHover={{ color: '#F97316' }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-text mb-6">{service.description}</p>
                <motion.ul
                  className="space-y-2 text-sm text-gray-text"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center"
                      variants={slideInLeft}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: idx * 0.2
                        }}
                      >
                        <CheckCircle className="text-success mr-2" size={16} />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Simple & Transparent Pricing"
            subtitle="Flexible packages designed to fit small businesses and growing brands"
          />

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Basic Website',
                price: '$800',
                features: [
                  'Up to 5 pages',
                  'Responsive design',
                  'Basic SEO setup',
                  '1 round of revisions'
                ],
                highlight: false
              },
              {
                title: 'Standard Website',
                price: '$1,500',
                features: [
                  'Up to 10 pages',
                  'Custom UI/UX design',
                  'SEO & performance optimization',
                  '2 rounds of revisions',
                  'CMS integration'
                ],
                highlight: true
              },
              {
                title: 'Premium Website',
                price: '$3,000+',
                features: [
                  'Unlimited pages',
                  'Advanced UI/UX & animations',
                  'Full SEO & marketing setup',
                  'Ongoing maintenance option',
                  'E-commerce or custom features'
                ],
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border ${
                  plan.highlight ? 'border-primary scale-105' : 'border-gray-100'
                }`}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: plan.highlight ? 1.07 : 1.03 }}
              >
                <h3 className="font-sora font-semibold text-xl text-dark mb-4">{plan.title}</h3>
                <p className="text-primary font-bold text-3xl mb-6">{plan.price}</p>

                <ul className="space-y-3 mb-6 text-gray-text text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-success mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block text-center font-semibold py-3 rounded-lg ${
                    plan.highlight ? 'bg-primary text-white' : 'bg-gray-100 text-dark hover:bg-gray-200'
                  } transition-colors`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Maintenance Plans */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="Maintenance plans that fit your needs"
            subtitle="Keep your website secure, fast, and up-to-date with our ongoing maintenance services"
          />
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-primary text-white transform scale-105' 
                    : 'bg-white'
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`font-sora font-semibold text-xl mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.popular ? 'opacity-80' : 'text-gray-text'}`}>
                      /month
                    </span>
                  </div>
                  <p className={`${plan.popular ? 'opacity-90' : 'text-gray-text'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-text'}`}>
                      <CheckCircle className="text-success mr-3 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <CTAButton
                  href="/contact"
                  variant={plan.popular ? "secondary" : "outline"}
                  className="w-full"
                  eventLabel={`maintenance_${plan.name.toLowerCase()}_cta`}
                >
                  Get Started
                </CTAButton>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-gray-text mb-4">
              Need a custom solution?{' '}
              <CTAButton
                href="/contact"
                variant="outline"
                size="sm"
                eventLabel="custom_solution_cta"
                className="inline-flex"
              >
                Let's talk
              </CTAButton>
            </p>
          </div>
        </div>
      </section> */}

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            title="How we deliver results"
            subtitle="Our proven methodology ensures successful project delivery every time"
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description: "We analyze your current website and business goals to create a comprehensive strategy."
              },
              {
                step: "02", 
                title: "Design & Plan",
                description: "Our team creates detailed wireframes and mockups for your approval before development begins."
              },
              {
                step: "03",
                title: "Develop & Optimize",
                description: "We build your website using modern technologies with focus on performance and SEO."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We handle the launch process and provide ongoing support to ensure continued success."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-sora font-semibold text-lg text-dark mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
              Ready to transform your website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and discover how our services can help grow your business.
            </p>
            <CTAButton
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="services_bottom_cta"
              icon={<ArrowRight size={20} />}
            >
              Start Your Project Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
