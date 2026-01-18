/**
 * dataReply.js
 * Central knowledge base for Adarsh Tiwari's Portfolio Chatbot
 * Scalable, clean, and production-ready
 */

const chatReplies = [
  // ================= BASIC INTRO =================
  {
    intent: "intro",
    keywords: ["who", "about", "introduce", "yourself", "profile", "adarsh"],
    reply:
      "Adarsh Tiwari is a Software Development Engineer (SDE-1) and Full Stack Developer focused on building scalable, secure, and high-performance web applications. He blends strong engineering fundamentals with modern frontend and backend systems.",
    suggestions: ["Technical Stack", "Work Experience", "View Projects"],
  },

  // ================= TECH STACK =================
  {
    intent: "tech_stack",
    keywords: ["skills", "tech", "stack", "technologies", "languages"],
    reply:
      "🛠 Technical Stack:\n\n" +
      "• Languages: JavaScript (ES6+), TypeScript, SQL\n" +
      "• Frontend: React.js, Next.js (SSR / ISR), Tailwind CSS\n" +
      "• Backend: Node.js, Express.js, REST APIs\n" +
      "• Databases: MongoDB, PostgreSQL, Redis\n" +
      "• DevOps & Tools: Docker, GitHub Actions, AWS S3",
    suggestions: ["Security Expertise", "API Performance", "Work Experience"],
  },

  // ================= EXPERIENCE =================
  {
    intent: "experience",
    keywords: ["experience", "work", "internship", "career", "history"],
    reply:
      "💼 Professional Experience:\n\n" +
      "1. GNB EV Service Center – Full Stack Intern\n" +
      "2. IBM SkillsBuild – Software Engineer Intern\n" +
      "3. EmbProto – Frontend Intern\n\n" +
      "Delivered measurable results including 45% traffic growth and 30% performance improvements.",
    suggestions: ["GNB EV Project", "IBM Internship", "EmbProto Details"],
  },

  // ================= GNB EV =================
  {
    intent: "gnb_ev",
    keywords: ["gnb", "ev", "fleet", "gnb ev project"],
    reply:
      "🚗 GNB EV Fleet Platform:\n" +
      "A production-grade platform serving 500+ daily users. Implemented SSR, SEO optimization, and backend stability improvements, resulting in ~45% increase in organic leads.\n\n" +
      "🔗 Live: https://www.gridaneobhart.com",
    suggestions: ["SEO Strategies", "View Projects"],
  },

  // ================= IBM =================
  {
    intent: "ibm",
    keywords: ["ibm", "skillsbuild", "ibm internship"],
    reply:
      "🏢 IBM SkillsBuild Internship:\n" +
      "Migrated legacy UI modules to React.js, improved frontend performance by ~30%, and followed enterprise-grade Git workflows, peer reviews, and coding standards.",
    suggestions: ["Technical Stack", "Security Expertise"],
  },

  // ================= EMBPROTO =================
  {
    intent: "embproto",
    keywords: ["embproto", "frontend intern"],
    reply:
      "🎨 EmbProto Internship:\n" +
      "Resolved 30+ UI bugs, enhanced responsiveness across devices, and reduced post-release hotfixes by ~20%.",
    suggestions: ["View Projects", "Contact Adarsh"],
  },

  // ================= PROJECTS =================
  {
    intent: "projects",
    keywords: ["projects", "project", "portfolio", "work", "demo", "live"],
    reply:
      "🚀 Featured Projects:\n\n" +
      "• GNB EV Fleet – https://www.gridaneobhart.com\n" +
      "• Lumina – Scalable MERN-based EdTech platform\n" +
      "• Kodemates – Developer collaboration platform (In Progress)",
    suggestions: ["Tell me about Lumina", "GitHub Codebase"],
  },

  // ================= LUMINA =================
  {
    intent: "lumina",
    keywords: ["lumina", "edtech"],
    reply:
      "📚 Lumina EdTech Platform:\n" +
      "Built using MERN stack with secure authentication, refresh token rotation, Cloudinary media optimization, and scalable backend architecture.",
    suggestions: ["Security Expertise", "API Performance"],
  },

  // ================= SECURITY =================
  {
    intent: "security",
    keywords: ["security", "auth", "jwt", "rbac"],
    reply:
      "🔐 Security Practices:\n" +
      "Implements JWT authentication using HTTP-only cookies, refresh token rotation, role-based access control (RBAC), and secure API design principles.",
    suggestions: ["API Performance", "Database Skills"],
  },

  // ================= SEO =================
  {
    intent: "seo",
    keywords: ["seo", "search", "ranking"],
    reply:
      "📈 SEO Optimization:\n" +
      "Uses Next.js SSR & ISR, semantic HTML, structured data, and performance tuning to improve indexing, load speed, and discoverability.",
    suggestions: ["View Projects", "API Performance"],
  },

  // ================= PERFORMANCE =================
  {
    intent: "performance",
    keywords: ["performance", "latency", "optimization", "speed"],
    reply:
      "⚡ Performance Optimization:\n" +
      "Reduced API latency by ~25% using MongoDB indexing, Redis caching, SQL query optimization, and efficient backend logic.",
    suggestions: ["Database Skills", "Technical Stack"],
  },

  // ================= DATABASE =================
  {
    intent: "database",
    keywords: ["database", "mongo", "postgres", "redis"],
    reply:
      "🗄 Database Expertise:\n" +
      "MongoDB for flexible schemas, PostgreSQL for relational integrity, and Redis for caching & session optimization.",
    suggestions: ["API Performance", "Security Expertise"],
  },

  // ================= GITHUB =================
  {
    intent: "github",
    keywords: ["github", "repo", "code", "repository"],
    reply:
      "💻 GitHub:\nhttps://github.com/adarshtiwaridev\n\nExplore production-ready code, side projects, and open-source contributions.",
    suggestions: ["View Projects", "contact"],
  },

  // ================= CONTACT =================
 {
  intent: "contact",
  keywords: ["contact", "contact adarsh", "reach", "connect", "email", "phone"],
  reply:
    "📬 Contact Information:\n\n" +
    "• Email: adarshtiwaridev01@gmail.com\n" +
    "• Phone: +91 9473662794\n" +
    "• LinkedIn: https://linkedin.com/in/adarshtiwaridev\n" +
    "• Portfolio: https://adarshtiwaridev.com",
  suggestions: ["Email", "Phone", "GitHub", "Location"],
},


  // ================= LOCATION =================
  {
    intent: "location",
    keywords: ["location", "city", "where", "based"],
    reply:
      "📍 Location:\nAdarsh is based in Kushinagar, Uttar Pradesh, India, and is open to remote as well as on-site opportunities.",
    suggestions: ["Contact Adarsh", "Work Experience"],
  },
];

export default chatReplies;
