// textExport.js - Centralized Content Management File
export const metadata = {
  title: "Navneet Gupta | Frontend Software Engineer & Product Developer",
  description:
    "Software Engineer specializing in React, Next.js, and full-stack development. Building scalable solutions with expertise in frontend development, product design, and entrepreneurship.",
  keywords:
    "Navneet Gupta, Software Engineer, Frontend Developer, React Developer, Next.js Expert, Product Development, UI/UX Design, Full Stack Developer, JavaScript Developer",
  openGraph: {
    title: "Navneet Gupta | Frontend Software Engineer & Product Developer",
    description:
      "Software engineer specializing in React, Next.js, and modern web technologies. View my portfolio of enterprise solutions and innovative projects.",
    url: "https://navneet-dev-portfolio.vercel.app",
    type: "website",
    image: "/path-to-preview-image.jpg",
    locale: "en_US",
    siteName: "Navneet Gupta Portfolio",
  },
  
};

export const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Navneet Gupta",
  jobTitle: "Software Engineer",
  url: "https://navneet-dev-portfolio.vercel.app",
  image: "/path-to-profile-image.jpg",
  description:
    "Software Engineer specializing in frontend development and product design",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Your University Name",
  },
  worksFor: {
    "@type": "Organization",
    name: "Climbax Entertainment Pvt. Ltd.",
  },
  sameAs: [
    "https://linkedin.com/in/navneetgupta",
    "https://github.com/navneetgupta",
    // Add other social profiles
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "UI/UX Design",
  ],
  knowsAbout: [
    "Software Development",
    "Web Applications",
    "Product Design",
    "Project Management",
  ],
};

export const analyticsConfig = {
  googleAnalytics: {
    id: "GA_TRACKING_ID",
    script: `
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
      </script>
    `,
  },
};

export const performanceConfig = {
  preload: [
    {
      rel: "preload",
      href: "/path-to-font.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],
};

export const accessibilityConfig = {
  htmlAttributes: {
    lang: "en",
    dir: "ltr",
  },
  landmarks: {
    mainRole: "main",
  },
};

// export const AboutMeContext = `As a <strong> Software Engineer </strong> and <strong> Freelance Developer </strong>, I specialize in creating scalable, user-focused digital solutions. My expertise lies in <strong> frontend development </strong>, <strong> product design </strong>, and <strong> project management </strong>.\n
//           With a passion for innovation and problem-solving, I bring an entrepreneurial mindset to every project. Over the years, I've honed my skills in <strong> Next.js </strong>, <strong> React </strong>, and other modern web technologies, building impactful applications tailored to client needs.\n
//           Beyond technical expertise, I excel in understanding <strong> user psychology </strong> and translating complex requirements into seamless user experiences. My journey as a co-founder of a startup during the pandemic taught me invaluable lessons in adaptability, leadership, and creating products that truly resonate with people.\n
//           Today, I am focused on building my personal brand and collaborating on projects that align with my vision of empowering businesses through technology. Whether it's a <strong> web app </strong>, <strong> mobile app </strong>, or a <strong> full-stack solution </strong>, I bring dedication and a results-driven approach.\n
//           Let's connect and create something extraordinary together. I'm currently open to opportunities in <strong> Full Stack Development </strong>, <strong> UI/UX Consulting </strong> ,and <strong> Product Strategy </strong>.`;


export const AboutMeContext = `As a <strong>Senior Software Engineer</strong> specializing in <strong>Frontend Development</strong>, I architect and build scalable digital solutions that drive business growth. My expertise spans <strong>React</strong>, <strong>Next.js</strong>, and modern web technologies, complemented by strong product design and project management capabilities.\n
With over 2 years of experience, I've led the development of enterprise-level applications, including learning management systems and point-of-sale solutions. My work at Climbax Entertainment has focused on creating high-performance web applications that enhance operational efficiency and user engagement.\n
My entrepreneurial background as a startup co-founder during the pandemic shaped my approach to product development - focusing on user-centric design and measurable business outcomes. I've successfully improved learning efficiency by 50% through innovative LMS solutions and streamlined operations with modern POS systems.\n
I'm passionate about creating intuitive user experiences and solving complex technical challenges. My technical toolkit includes <strong>TypeScript</strong>, <strong>Material UI</strong>, <strong>Tailwind CSS</strong>, and various modern frameworks, allowing me to deliver robust and scalable solutions.\n
Currently seeking opportunities in <strong>Frontend Architecture</strong>, <strong>Technical Leadership</strong>, and <strong>Product Development</strong>. Let's connect and explore how we can create impactful digital solutions together.`;