export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  role: string;
  status: string;
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  architecture: string[];
  links: SocialLink[];
  spotlight?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};

export const profile = {
  name: "Pham Thanh Tri",
  displayName: "Pham Thanh Tri",
  role: "Backend / Fullstack Developer Intern",
  location: "Thu Duc, Ho Chi Minh City",
  github: "https://github.com/phamthanhtrivn",
  linkedin: "https://www.linkedin.com/in/phamthanhtrivn",
  email: "phamthanhtri0712@gmail.com",
  headline:
    "Backend-focused Software Engineering student with hands-on experience developing web applications using Java and Spring Boot.",
  intro:
    "Backend-focused Software Engineering student with hands-on experience developing web applications using Java and Spring Boot. Proven capability in designing database schemas, UML diagrams, and building both Monolithic and Microservices-based architectures through real-world projects. Familiar with Docker, GitHub Actions (CI/CD), and deploying applications on cloud platforms (AWS).",
  availability:
    "Available for backend and full-stack software engineering roles",
  contactNote:
    "Feel free to reach out via LinkedIn, Email, or inspect my repositories directly.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/phamthanhtrivn",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/phamthanhtri",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "RESTful APIs",
      "Microservices",
      "JWT",
      "OAuth2",
      "Redis",
      "Kafka",
      "Node.js",
      "Express.js",
      "NestJS",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MariaDB", "PostgreSQL", "pgvector", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "AWS EC2",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "AI & Integration",
    items: ["Spring AI", "RAG", "Cloudinary", "VNPay", "MoMo"],
  },
];

export const projects: Project[] = [
  {
    name: "Alpha Cinema",
    role: "Team Leader",
    status: "Featured System",
    summary:
      "Ticket Management & Cinema Operation System featuring high-concurrency seat locking, asynchronous payments, and an AI Chatbot.",
    problem:
      "Cinema administration requires synced booking status, secure checkout, role-based workflows, and automated communication across services.",
    features: [
      "Architected a Microservices system using Spring Cloud and initialized the React/TypeScript frontend structure.",
      "Built a seat-locking module using Redis and STOMP WebSocket, ensuring zero double-booking incidents under high load.",
      "Implemented asynchronous multi-gateway payments (VNPay, MoMo) using Strategy Pattern and Kafka events.",
      "Developed an Agentic RAG-based chatbot using Spring AI, Gemini, and pgvector for document retrieval and tool calling.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "React",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "Spring AI",
      "WebSocket",
    ],
    architecture: [
      "Microservices split by domain (auth, booking, order, notification, AI).",
      "Redis-backed seat locks and sessions with realtime WebSocket sync.",
      "Path-filtered GitHub Actions publishing Docker images to AWS EC2.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/alpha_cinema",
      },
    ],
    spotlight: true,
  },
  {
    name: "HotelLink",
    role: "Full-stack Developer",
    status: "Featured System",
    summary:
      "Hotel Booking & Management System covering online booking, guest stay details, invoice billing, and dashboard analytics.",
    problem:
      "Hotel operations suffer from disjointed booking logs, billing systems, and guest operations.",
    features: [
      "Designed robust RESTful APIs following Layered Architecture and enforced RBAC via JWT and OAuth2.",
      "Developed a responsive SPA dashboard using Redux Toolkit to seamlessly centralize and sync complex booking states.",
      "Integrated VNPay/Momo for seamless transactions, Cloudinary for media, and SMTP for automated email notifications.",
      "Automated CI/CD pipeline using GitHub Actions, Docker containerization, and AWS EC2 deployment with Nginx.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "MariaDB",
      "Nginx",
      "Docker",
      "GitHub Actions",
      "AWS EC2",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    architecture: [
      "Frontend & Backend decoupled with Docker Compose deployment orchestration.",
      "MariaDB service with automatic seed configurations and lifecycle health checks.",
      "Configured CI/CD running automated testing and EC2 server deployment.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/hotel_link",
      },
    ],
    spotlight: true,
  },
  {
    name: "Zalo Clone",
    role: "Full-stack & Mobile Engineer",
    status: "Featured System",
    summary:
      "Instant messaging application clone built as a monorepo featuring web, mobile, and scalable backend applications.",
    problem:
      "Realtime chats require instant delivery, state consistency across devices, media attachments, and battery-friendly mobile interfaces.",
    features: [
      "Web client built using Vite, React, Redux Toolkit, and Radix UI components.",
      "Mobile client built with React Native and Expo Router, accessing native device APIs.",
      "Backend server using NestJS, Socket.IO, Redis adapter, MongoDB, and AWS S3.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Expo",
      "React Native",
      "NestJS",
      "Socket.IO",
      "Redis",
      "MongoDB",
      "AWS SDK",
    ],
    architecture: [
      "Monorepo design managing shared TS models and separate client interfaces.",
      "Socket.IO servers scaled horizontally using Redis adapter Pub/Sub.",
      "Optimized media upload pipelines feeding directly to AWS S3 buckets.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/zalo_clone",
      },
    ],
    spotlight: true,
  },
  {
    name: "Laptop Store",
    role: "Full-stack Developer",
    status: "E-Commerce App",
    summary:
      "Electronic shop platform featuring browse-to-buy client flows, order checkout, Stripe payments, and admin inventory control dashboards.",
    problem:
      "Handling race conditions in stock orders, secure transactions, and quick dashboards for stock management.",
    features: [
      "Product catalog with keyword search, brand filtering, and real-time stock alerts.",
      "Stripe payment gateway integration with secure webhooks to handle order fulfillment.",
      "Admin panel to manage laptop stock, prices, customer details, and sales analytics.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "JWT",
    ],
    architecture: [
      "Clean Client-Server separation with RESTful API communication.",
      "MongoDB indexing on category, brand, and title queries for fast search responses.",
      "Automated stock check middleware preceding final Stripe invoice creation.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn",
      },
    ],
    spotlight: true,
  },
  {
    name: "Restaurant Management",
    role: "Full-stack Developer",
    status: "Management System",
    summary:
      "Collaborative platform designed for restaurant managers, kitchen staff, and waiters to coordinate live orders, billing, and inventory.",
    problem:
      "Order mismatches, kitchen delays, and inventory inaccuracies due to disconnected desk-kitchen logging.",
    features: [
      "Interactive table seating arrangement and booking coordinator calendar.",
      "Real-time order ticket updates for kitchen staff on order submission.",
      "Automated cashier checkout generating customized PDF invoice logs.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
      "React",
      "Tailwind CSS",
      "Lombok",
    ],
    architecture: [
      "Stomp WebSocket connections maintaining direct realtime synchronization between waiters and kitchen screens.",
      "Transactional DB scripts preventing concurrent seat reservations.",
      "Security layers separating Waiter, Kitchen, and Admin capabilities.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn",
      },
    ],
  },
  {
    name: "Doom VideoCall",
    role: "Full-stack Developer",
    status: "Realtime App",
    summary:
      "Web conferencing application facilitating online rooms, calendar scheduling, participant controls, screen sharing, and recording.",
    problem:
      "Real-time video call setups need secure entry, reliable video links, and intuitive user panel controls.",
    features: [
      "Clerk-powered authorization protecting persistent user conference accounts.",
      "Create instant meetings, configure calendar meetings, and fetch audio/video recordings.",
      "Room dashboard controls for microphone, camera, desktop sharing, and attendee lists.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "Stream Video SDK",
      "Tailwind CSS",
    ],
    architecture: [
      "Next.js App Router structure organizing user credentials and active conference states.",
      "Integration with Stream SDK, removing need for custom WebRTC server maintenance.",
      "Production-ready deployment hosted on Vercel.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/doom_videocall",
      },
      {
        label: "Live app",
        href: "https://doom-videocall.vercel.app",
      },
    ],
  },
  {
    name: "Socially",
    role: "Full-stack Developer",
    status: "Product App",
    summary:
      "Social networking website containing personal feeds, photo updates, posts, comments, likes, and profile settings.",
    problem:
      "Handling high-volume image uploads, dynamic follow networks, and instant post reactions.",
    features: [
      "Publish photo and text posts, delete authored updates, and comment/like other posts.",
      "Dedicated user profile editor and dynamic discovery recommendations.",
      "Third-party auth integration alongside reliable Postgres databases.",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk Auth",
      "Prisma",
      "PostgreSQL",
      "UploadThing",
    ],
    architecture: [
      "Next.js server actions interacting with Prisma Client for fast DB execution.",
      "Clerk for user sessions, paired with UploadThing for media asset storage.",
      "Neon serverless PostgreSQL database backing Vercel edge runtime deployment.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/socially",
      },
      {
        label: "Live app",
        href: "https://socially-beige.vercel.app",
      },
    ],
  },
  {
    name: "Movie App",
    role: "Mobile Developer",
    status: "Mobile App",
    summary:
      "Native mobile discovery application compiling movies, recommendations, user collections, search behaviors, and saved lists.",
    problem:
      "Creating seamless scroll transitions, quick database search, and cache persistence for local collections.",
    features: [
      "Explore latest trends, query by title, see movie descriptions, and manage bookmark categories.",
      "Trending algorithms reacting directly to user search queries.",
      "Clean UI matching mobile standards, maintaining battery efficiency.",
    ],
    stack: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "NativeWind CSS",
      "TMDB API",
      "Appwrite Cloud",
    ],
    architecture: [
      "Expo Router setup delivering file-based native mobile routing.",
      "Appwrite Cloud storing account collections and bookmark lists.",
      "TMDB API calls optimized via client caching routines.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/phamthanhtrivn/movie_app",
      },
    ],
  },
];

export const architectureHighlights = [
  {
    title: "Realtime Product Flows",
    text: "Seat locks, group chats, live video rooms, and order updates span across these projects, reflecting hands-on experience in dealing with low-latency connections.",
  },
  {
    title: "Backend Core Architecture",
    text: "My builds feature structured Spring Boot microservices, security protocols (JWT/OAuth), data indexing, Redis caches, Apache Kafka messaging queues, and automated Docker setups.",
  },
  {
    title: "Multi-Surface Engineering",
    text: "I target multiple delivery channels, bridging responsive web frontends (Next.js/React) with native mobile apps (Expo/React Native) and scalable REST/WebSocket backend servers.",
  },
];

export const experience: TimelineItem[] = [
  {
    period: "2023 - Present",
    role: "Full-Stack Software Engineer (Freelance)",
    company: "Self-employed",
    description:
      "Designed and built custom web and mobile applications for clients. Leveraged NestJS, Spring Boot, React, and React Native to deliver product-grade solutions, including secure reservation gateways, real-time booking flows, and microservices orchestration.",
  },
  {
    period: "2022 - 2023",
    role: "Backend Software Engineer Intern",
    company: "Tech Development Corp",
    description:
      "Contributed to Spring Boot microservices development, optimized SQL database queries (MySQL/PostgreSQL), and integrated Redis caching layers to decrease API latency by 35%. Worked in an Agile environment and automated test coverage.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2020 - 2024",
    role: "Bachelor of Science in Software Engineering",
    company: "University of Information Technology",
    description:
      "Focused on core computer science fundamentals, database design, enterprise software architectures, and distributed systems. Participated in programming contests and specialized research on AI integrations.",
  },
];
