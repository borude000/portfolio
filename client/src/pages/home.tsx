import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, Search, Rocket, Zap, Eye, Edit, Shield, Code, TrendingUp, Clock, Infinity, MapPin, ShoppingCart, Link, Clipboard } from 'lucide-react';
import { SEOHead } from '@/components/ui/seo-head';
import { SectionHeader } from '@/components/ui/section-header';
import { CTAButton } from '@/components/ui/cta-button';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import { Hero } from '@/components/Hero';
import testimonialsData from '@/data/testimonials.json';
import projectsData from '@/data/projects.json';


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebRevamp Studio",
    "description": "Modern website redesigns for growing businesses across India",
    "url": "https://webrevampstudio.com",
    "logo": "https://webrevampstudio.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  };

  function getIndustryColor(industry: string) {
    switch (industry.toLowerCase()) {
      case "e-commerce":
        return "bg-primary/20 text-primary";
      case "healthcare":
        return "bg-success/20 text-success";
      case "local business":
        return "bg-warning/20 text-warning";
      case "education":
        return "bg-blue-100 text-blue-600";
      case "fitness":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }

  return (
    <>
      <SEOHead
        title="WebRevamp Studio - Modern Website Redesigns for Growing Businesses"
        description="We transform outdated websites into modern, fast, mobile-first experiences. Professional website redesign, development, and maintenance services for Indian SMBs."
        structuredData={structuredData}
      />

      {/* Hero Section with Device Mockups */}
      <Hero />

      {/* Pain to Outcome Grid for Freelancing Agency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="From Website Challenges to Business Growth"
            subtitle="We help businesses overcome digital hurdles and turn websites into client-attracting machines"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[

              // E-commerce
              {
                problem: { icon: <div className="text-red-500 text-3xl">🛒</div>, title: "Poor Sales", desc: "Your online store isn’t converting visitors" },
                solution: { icon: <Rocket className="text-3xl text-success" />, title: "Conversion Optimized", desc: "Store setup, product pages & checkout that drive sales" }
              },
              // Healthcare
              {
                problem: { icon: <div className="text-red-500 text-3xl">🏥</div>, title: "Invisible Online", desc: "Patients can’t find your clinic online" },
                solution: { icon: <Zap className="text-3xl text-success" />, title: "SEO Optimized", desc: "Rank high on Google for local searches like 'dentist near me'" }
              },

              // Local Businesses
              {
                problem: { icon: <div className="text-red-500 text-3xl">📉</div>, title: "Low Foot Traffic", desc: "Local customers can’t find your store online" },
                solution: { icon: <TrendingUp className="text-3xl text-success" />, title: "Local Visibility", desc: "Google Maps & local SEO boost your store’s reach" }
              },


              {
                problem: { icon: <div className="text-red-500 text-3xl">📦</div>, title: "Slow Setup", desc: "Launching a store takes too long" },
                solution: { icon: <Code className="text-3xl text-success" />, title: "Fast Deployment", desc: "Shopify/WooCommerce store ready in days, not weeks" }
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-red-50 p-6 rounded-2xl mb-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3
                    }}
                  >
                    {item.problem.icon}
                  </motion.div>
                  <h3 className="font-sora font-semibold text-lg text-dark mb-2 mt-4">{item.problem.title}</h3>
                  <p className="text-gray-text text-sm">{item.problem.desc}</p>
                </motion.div>

                <motion.div
                  className="flex justify-center mb-4"
                  animate={{
                    y: [0, -3, 0],
                    rotate: [90, 95, 85, 90]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="text-primary text-2xl rotate-90" />
                </motion.div>

                <motion.div
                  className="bg-success/10 p-6 rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      delay: index * 0.5
                    }}
                  >
                    {item.solution.icon}
                  </motion.div>
                  <h3 className="font-sora font-semibold text-lg text-dark mb-2 mt-4">{item.solution.title}</h3>
                  <p className="text-gray-text text-sm">{item.solution.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Services Snapshot for Freelancing Agency */}
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
      {[
        // Healthcare
        {
          icon: <Shield className="text-primary text-xl" />,
          title: "Healthcare Websites",
          desc: "HIPAA-compliant websites designed for clinics and local doctors, optimized for patient trust and conversions.",
          features: ["HIPAA & data security compliance", "Responsive design for all devices", "Appointment booking integration"]
        },
        // Local Businesses
        {
          icon: <MapPin className="text-primary text-xl" />,
          title: "Local Business Websites",
          desc: "Affordable, responsive websites for shops, cafes, and service providers with local SEO and Google Maps optimization.",
          features: ["Google Maps & local SEO", "CMS for quick updates", "Mobile-first responsive design"]
        },
        // E-commerce
        {
          icon: <ShoppingCart className="text-primary text-xl" />,
          title: "E-commerce Stores",
          desc: "Full-featured Shotionpify/WooCommerce stores optimized for sales, SEO, and advertising campaigns.",
          features: ["Shopify/WooCommerce setup", "Product & checkout optimization", "SEO & paid ads integration"]
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          variants={fadeInUp}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              backgroundColor: "rgba(249, 115, 22, 0.2)"
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
            whileHover={{ color: "#F97316" }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h3>
          <p className="text-gray-text mb-6">{service.desc}</p>
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


      {/* Portfolio Grid - Freelancing Agency */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionHeader 
      title="Our Projects in Action"
      subtitle="Real websites we’ve built for clients across industries"
    />

    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {projectsData.projects.map((project, index) => (
        <motion.div
          key={project.slug}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          variants={fadeInUp}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            borderColor: "rgba(249, 115, 22, 0.3)"
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.div 
            className="relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={project.afterImage}
              alt={`${project.title} website`}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div  
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute top-4 right-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
            >
              <motion.span 
                className={`text-xs px-2 py-1 rounded ${getIndustryColor(project.industry)}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {project.industry}
              </motion.span>
            </motion.div>
          </motion.div>
          
          <div className="p-6">
            <h3 className="font-sora font-semibold text-lg text-dark mb-2">{project.title}</h3>
            <p className="text-gray-text text-sm mb-4 line-clamp-2">{project.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-text px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs text-gray-400">+{project.stack.length - 3} more</span>
              )}
            </div>
            
            <Link 
              href={`/work/${project.slug}`}
              className="text-primary font-semibold text-sm hover:underline flex items-center group"
            >
              View Case Study 
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      

      {/* Agency Process Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionHeader
      title="Our streamlined 4-step process"
      subtitle="From initial client contact to ongoing support, we make building websites simple and transparent"
    />

    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-8 bottom-8 w-0.5 bg-primary"></div>

        {/* Process Steps */}
        <div className="space-y-12">
          {[
            {
              number: 1,
              title: "Discovery & Consultation",
              desc: "We talk to you, understand your business, goals, and target audience, and identify the best solutions for your website.",
              duration: "1–2 days",
              icon: <Search />
            },
            {
              number: 2,
              title: "Proposal & Planning",
              desc: "We provide a detailed proposal including scope, timeline, and pricing, and finalize the plan before work begins.",
              duration: "2–3 days",
              icon: <Clipboard />
            },
            {
              number: 3,
              title: "Design & Development",
              desc: "Our team designs modern, responsive interfaces and develops the website with SEO, performance, and mobile-first principles.",
              duration: "2–4 weeks",
              icon: <Code />
            },
            {
              number: 4,
              title: "Launch & Ongoing Support",
              desc: "We deploy the website, provide training, and offer monthly maintenance or marketing retainers to keep your site performing at its best.",
              duration: "Ongoing",
              icon: <Rocket />
            }
          ].map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.number}
              </div>

              {/* Step Details */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                <div className="flex items-center mb-2 space-x-3">
                  <div className="text-primary">{step.icon}</div>
                  <h3 className="font-sora font-semibold text-xl text-dark">{step.title}</h3>
                </div>
                <p className="text-gray-text">{step.desc}</p>
                <div className="mt-4 text-sm text-primary font-medium flex items-center">
                  <Clock className="inline mr-1" size={16} />
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
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
          title: "Basic Website",
          price: "$800",
          features: [
            "Up to 5 pages",
            "Responsive design",
            "Basic SEO setup",
            "1 round of revisions"
          ],
          highlight: false
        },
        {
          title: "Standard Website",
          price: "$1,500",
          features: [
            "Up to 10 pages",
            "Custom UI/UX design",
            "SEO & performance optimization",
            "2 rounds of revisions",
            "CMS integration"
          ],
          highlight: true
        },
        {
          title: "Premium Website",
          price: "$3,000+",
          features: [
            "Unlimited pages",
            "Advanced UI/UX & animations",
            "Full SEO & marketing setup",
            "Ongoing maintenance option",
            "E-commerce or custom features"
          ],
          highlight: false
        }
      ].map((plan, index) => (
        <motion.div
          key={index}
          className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border ${
            plan.highlight ? "border-primary scale-105" : "border-gray-100"
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
              plan.highlight ? "bg-primary text-white" : "bg-gray-100 text-dark hover:bg-gray-200"
            } transition-colors`}
          >
            Get Started
          </a>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="What our clients say"
            subtitle="Real feedback from business owners who transformed their online presence"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonialsData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-warning text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-text mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark">{testimonial.author}</div>
                    <div className="text-sm text-gray-text">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Freelancing Agency */}
<section className="py-20 bg-primary text-white">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
        Ready to Grow Your Business Online?
      </h2>
      <p className="text-xl mb-8 opacity-90">
        Work with our agency to get a modern, high-performing website and ongoing support that drives results.
      </p>
      <CTAButton
        href="/contact"
        variant="secondary"
        size="lg"
        eventLabel="final_cta"
        icon={<Rocket size={20} />}
      >
        Schedule Your Free Consultation
      </CTAButton>
      <p className="mt-4 text-sm opacity-80">
        We handle everything from design and development to SEO and maintenance — no technical hassle for you.
      </p>
    </div>
  </div>
</section>

    </>
  );
}
