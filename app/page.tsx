import { BlogPosts } from "app/components/posts";
import { FadeIn } from "app/components/fade-in";
import { WorkProjects } from "app/components/work-projects";

const projects = [
  {
    name: "Gabai: Parental Control Mobile App",
    description:
      "An Android parental control app that helps parents monitor device usage, manage screen time, and securely protect children from unsafe online content using SSL Pinning.",
    stack: "Kotlin, Supabase, Kali Linux, MITMProxy, HTML, CSS, Figma",
    href: "/projects/project-one",
    previews: [
      {
        title: "Gabai App Identity",
        description:
          "The Gabai parental control app logo and visual identity.",
        image: "/images/projects/gabai/logo.png",
        accent: "linear-gradient(135deg, #0f766e, #1d4ed8)",
      },
      {
        title: "App Lock Screen",
        description:
          "The child-device restriction screen shown when a parent has locked an application.",
        image: "/images/projects/gabai/app-locked.jpg",
        accent: "linear-gradient(135deg, #164e63, #7c3aed)",
      },
      {
        title: "Parent Login",
        description:
          "The parent login screen, including secure account access and child-device QR scanning.",
        image: "/images/projects/gabai/login-screen.jpg",
        accent: "linear-gradient(135deg, #15803d, #0f172a)",
      },
    ],
  },
  {
    name: "Financial Assistance Program: Government System/Website",
    description:
      "A web-based voucher management system developed for the City Government of Biñan to digitize student records and automate financial assistance processing.",
    stack: "CodeIgniter4, PHP, XAMPP, MySQL, Photoshop, HTML, CSS, Bootstrap",
    href: "/practicum#output",
    previews: [
      {
        title: "Student Records",
        description:
          "The student management page with search, filtering, status tracking, and record actions.",
        image: "/images/projects/fap/students-page.png",
        accent: "linear-gradient(135deg, #1d4ed8, #475569)",
      },
      {
        title: "Voucher Printing",
        description:
          "The bulk voucher selection and print-confirmation workflow for qualified students.",
        image: "/images/projects/fap/printing-voucher.png",
        accent: "linear-gradient(135deg, #0369a1, #166534)",
      },
      {
        title: "Audit Logs",
        description:
          "The searchable audit trail used to review account activity and voucher record changes.",
        image: "/images/projects/fap/audit-logs.png",
        accent: "linear-gradient(135deg, #334155, #9333ea)",
      },
    ],
  },
  {
    name: "Thrifthroat: Vintage Clothing E-Commerce Website",
    description:
      "A responsive vintage clothing storefront with product filtering, detailed item views, cart interactions, and customer FAQs.",
    stack: "React, HTML, CSS, Frontend, UI/UX Design",
    href: "/projects/thrifthroat",
    liveUrl: "https://thrifthroat-react-eight.vercel.app",
    previews: [
      {
        title: "Mobile Landing Page",
        description:
          "A responsive mobile introduction to the store's curated vintage collection.",
        image: "/images/projects/thrifthroat/mobile-home.png",
        accent: "linear-gradient(135deg, #be123c, #0f766e)",
      },
      {
        title: "Shop Catalog",
        description:
          "The desktop product grid includes sorting, category filters, pricing, and add-to-cart actions.",
        image: "/images/projects/thrifthroat/catalog.png",
        accent: "linear-gradient(135deg, #7c2d12, #2563eb)",
      },
      {
        title: "Product Details",
        description:
          "A focused product modal presents additional photos, price, brand, measurements, and size.",
        image: "/images/projects/thrifthroat/product-details.png",
        accent: "linear-gradient(135deg, #4d7c0f, #4338ca)",
      },
      {
        title: "Customer FAQs",
        description:
          "Expandable answers help customers understand ordering, shipping, refunds, and store policies.",
        image: "/images/projects/thrifthroat/faqs.png",
        accent: "linear-gradient(135deg, #292524, #78716c)",
      },
    ],
  },
  {
    name: "Koreantea: Electric Billing Project",
    description:
      "An internal electric billing system that organizes customer accounts, invoice creation, payment tracking, and billing summaries in one web-based workflow.",
    stack: "CodeIgniter4, PHP, XAMPP, MySQL, HTML, CSS, Bootstrap",
    href: "#",
    previews: [
      {
        title: "Invoice List",
        description:
          "A searchable billing workspace for reviewing customer invoices, due dates, payment states, and outstanding balances.",
        accent: "linear-gradient(135deg, #0f766e, #334155)",
      },
      {
        title: "Create Invoice",
        description:
          "A structured invoice workflow for entering consumption details, calculating charges, and preparing accurate customer bills.",
        accent: "linear-gradient(135deg, #4338ca, #b45309)",
      },
      {
        title: "Payment Summary",
        description:
          "A concise financial overview that brings together collected payments, unpaid accounts, totals, and reporting information.",
        accent: "linear-gradient(135deg, #0891b2, #581c87)",
      },
    ],
  },
  {
    name: "Inkpress Solutions",
    description:
      "A responsive product website for a paper and printing-supplies business, designed to introduce the brand, showcase its catalog, and guide customers toward ordering.",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    href: "#",
    previews: [
      {
        title: "Brand Landing Page",
        description:
          "A high-impact hero page that establishes the Inkpress identity and provides direct navigation to ordering, reviews, and customer accounts.",
        image: "/images/projects/inkpress/landing-page.png",
        accent: "linear-gradient(135deg, #0891b2, #111827)",
      },
      {
        title: "Product Catalog",
        description:
          "A visual catalog presenting bond paper, cardstock, sticker paper, and laminating film in clear, easy-to-scan product categories.",
        image: "/images/projects/inkpress/products-section.png",
        accent: "linear-gradient(135deg, #0284c7, #7c3aed)",
      },
    ],
  },
  {
    name: "Laser Visitor Counter: IoT Device and Dashboard",
    description:
      "An IoT-based monitoring solution that uses a laser sensor and Raspberry Pi to count visitors and present occupancy activity through a web dashboard.",
    stack: "HTML, CSS, JavaScript, IoT, Raspberry Pi, Python",
    href: "#",
    previews: [
      {
        title: "Visitor Dashboard",
        description:
          "A live monitoring interface that turns sensor readings into an accessible visitor count for quick occupancy checks and activity tracking.",
        accent: "linear-gradient(135deg, #166534, #2563eb)",
      },
    ],
  },
  {
    name: "Laguna Travels: Shortest Path",
    description:
      "A machine problem that applies Dijkstra's algorithm to calculate the shortest available route between destinations across Laguna using a weighted graph.",
    stack: "Dijkstra's Algorithm, Graph Theory, Shortest-Path Optimization",
    href: "https://github.com/39jasno/Laguna-Travels-Shortest-Path",
    previews: [],
  },
];

const certificates = [
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "June 2024",
    href: "https://www.credly.com/badges/03928af6-e392-4712-b656-7843455473f9/public_url",
    image: "/images/credentials/ethical-hacker.png",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "April 2024",
    href: "https://www.credly.com/badges/00b8f575-6727-48b0-8cfe-79ea1f95dcbd/public_url",
    image: "/images/credentials/ccna-introduction.png",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    href: "https://www.credly.com/badges/452a2b81-daa5-4c2a-81f4-d413e0912986/public_url",
    image: "/images/credentials/ccna-srwe.png",
  },
  {
    name: "CompTIA IT Fundamentals+ (ITF+) Certification",
    issuer: "CompTIA",
    date: "July 2024",
    href: "https://www.credly.com/badges/1c390039-098a-4c53-b641-a26bffe0de36/public_url",
    image: "/images/credentials/comptia-itf-plus.png",
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "AWS",
    date: "November 2023",
    href: "https://www.credly.com/badges/7820ef68-18da-4cef-a495-1004e9381778/public_url",
    image: "/images/credentials/aws-cloud-foundations.png",
  },
];

const googleCloudBadges = [
  "Build a Secure Google Cloud Network Skill Badge",
  "Implement Load Balancing on Compute Engine Skill Badge",
  "Prepare Data for ML APIs on Google Cloud Skill Badge",
  "Set Up an App Dev Environment on Google Cloud Skill Badge",
];

export default function Page() {
  return (
    <section className="space-y-20">
      <FadeIn id="home" className="relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-indigo-100/70 backdrop-blur sm:p-10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-indigo-950/30">
        <div className="float-slow absolute -right-16 -top-16 -z-10 h-52 w-52 rounded-full bg-gradient-to-br from-indigo-400/40 to-cyan-300/30 blur-2xl" />
        <div className="absolute -bottom-24 -left-16 -z-10 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-400/25 to-fuchsia-300/20 blur-2xl" />
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          Developer · Designer · Cybersecurity · Problem solver
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-6xl dark:text-neutral-50">
            Hello, I&apos;m <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">Jiro.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            I am a developer focused
            on clean interfaces, thoughtful user flows, and maintainable
            software. This portfolio collects the projects, writing, and
            technical notes that best represent how I work.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          <a
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-indigo-500/30"
            href="/resume.pdf"
            download
          >
            CV
          </a>
          <a
            className="rounded-full border border-neutral-300 bg-white/80 px-5 py-2.5 font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-neutral-700 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            href="mailto:you@example.com"
          >
            Contact me
          </a>
        </div>
      </FadeIn>

      <FadeIn id="about" className="scroll-mt-8 grid gap-5 sm:grid-cols-[0.7fr_1.6fr]" delay={0.05}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">A little context</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">About Me</h2>
        </div>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          I am an Information Technology student and developer who enjoys
          turning practical problems into clear, reliable digital solutions.
          My interests span full-stack web development, mobile applications,
          cybersecurity, and user-centered interface design.
        </p>
      </FadeIn>

      <section id="credentials" className="scroll-mt-8">
      <FadeIn className="space-y-5" delay={0.1}>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            Credentials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Certificates and Badges
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            A collection of certificates, badges, and training milestones that
            support my technical foundation and continuous learning.
          </p>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {certificates.map((certificate) => (
            <article
              className="group flex items-center gap-4 py-4 transition hover:translate-x-1"
              key={`${certificate.name}-${certificate.issuer}`}
            >
              {certificate.image ? (
                <img
                  alt={`${certificate.name} badge`}
                  className="h-16 w-16 shrink-0 rounded-xl bg-white p-1 object-contain shadow-md shadow-indigo-100 transition group-hover:rotate-2 group-hover:scale-105 sm:h-20 sm:w-20 dark:shadow-none"
                  src={certificate.image}
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-neutral-100 text-xs text-neutral-500 sm:h-20 sm:w-20 dark:bg-neutral-900 dark:text-neutral-400">
                  Badge
                </div>
              )}
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="font-medium leading-snug text-neutral-950 dark:text-neutral-50">
                    {certificate.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {certificate.issuer} · {certificate.date}
                  </p>
                </div>
                <a
                  className="mt-2 inline-flex shrink-0 text-sm font-medium text-neutral-950 underline underline-offset-4 transition hover:text-neutral-600 sm:mt-0 dark:text-neutral-50 dark:hover:text-neutral-300"
                  href={certificate.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-2">
          <div className="space-y-1">
            <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
              Google Cloud Skill Badges
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Additional hands-on cloud learning milestones
            </p>
          </div>
          <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm text-neutral-700 sm:grid-cols-2 dark:text-neutral-300">
            {googleCloudBadges.map((badge) => (
              <li className="flex gap-2" key={badge}>
                <span aria-hidden="true" className="text-neutral-400">—</span>
                <span>{badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      </section>

      <FadeIn id="projects" className="scroll-mt-8 space-y-6" delay={0.05}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-600 dark:text-cyan-400">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Selected Work</h2>
        </div>
        <WorkProjects projects={projects} />
      </FadeIn>

    </section>
  );
}
