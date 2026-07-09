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
        title: "Guardian Dashboard",
        description:
          "Monitor your child's activity, manage screen time, block restricted applications, and receive real-time alerts through a secure parent dashboard.",
        accent: "linear-gradient(135deg, #0f766e, #1d4ed8)",
      },
      {
        title: "Child Device Interface",
        description:
          "Displays the child's interface, enforces screen time restrictions, and securely applies parental controls in the background.",
        accent: "linear-gradient(135deg, #164e63, #7c3aed)",
      },
      {
        title: "Mobile Flow",
        description: "A preview slot for the mobile setup and parent controls.",
        accent: "linear-gradient(135deg, #15803d, #0f172a)",
      },
    ],
  },
  {
    name: "Financial Assistance Program: Government System/Website",
    description:
      "A web-based voucher management system developed for the City Government of Biñan to digitize student records and automate financial assistance processing.",
    stack: "CodeIgniter4, PHP, XAMPP, MySQL, Photoshop, HTML, CSS, Bootstrap",
    href: "#",
    previews: [
      {
        title: "Applicant Records",
        description: "Preview the records table and filtering workflow.",
        accent: "linear-gradient(135deg, #1d4ed8, #475569)",
      },
      {
        title: "Assistance Form",
        description: "Show the data-entry flow for assistance applications.",
        accent: "linear-gradient(135deg, #0369a1, #166534)",
      },
      {
        title: "Report View",
        description: "A carousel slot for generated summaries and reports.",
        accent: "linear-gradient(135deg, #334155, #9333ea)",
      },
    ],
  },
  {
    name: "Thrifthroat: Vintage Clothing E-Commerce Website",
    description:
      "Use this space for your strongest second project. Focus on the problem, your role, and the outcome.",
    stack: "React, HTML, CSS, Frontend, UI/UX Design",
    href: "#",
    previews: [
      {
        title: "Shop Catalog",
        description: "Preview the product grid and browsing experience.",
        accent: "linear-gradient(135deg, #be123c, #0f766e)",
      },
      {
        title: "Product Details",
        description:
          "Highlight an individual clothing item and purchase details.",
        accent: "linear-gradient(135deg, #7c2d12, #2563eb)",
      },
      {
        title: "Checkout Flow",
        description: "A preview slot for cart and checkout interactions.",
        accent: "linear-gradient(135deg, #4d7c0f, #4338ca)",
      },
    ],
  },
  {
    name: "Billing Project: Internal Tool for Invoice Management",
    description:
      "Use this space for your strongest second project. Focus on the problem, your role, and the outcome.",
    stack: "CodeIgniter4, PHP, XAMPP, MySQL, HTML, CSS, Bootstrap",
    href: "#",
    previews: [
      {
        title: "Invoice List",
        description: "Preview invoice tracking, statuses, and search.",
        accent: "linear-gradient(135deg, #0f766e, #334155)",
      },
      {
        title: "Create Invoice",
        description: "Show the internal workflow for building a new invoice.",
        accent: "linear-gradient(135deg, #4338ca, #b45309)",
      },
      {
        title: "Payment Summary",
        description: "A carousel slot for totals, payment state, and exports.",
        accent: "linear-gradient(135deg, #0891b2, #581c87)",
      },
    ],
  },
  {
    name: "Laser Visitor Counter: IoT Device and Dashboard",
    description:
      "Use this space for your strongest second project. Focus on the problem, your role, and the outcome.",
    stack: "HTML, CSS, JavaScript, IoT, Raspberry Pi, Python",
    href: "#",
    previews: [
      {
        title: "Visitor Dashboard",
        description: "Preview live visitor count cards and dashboard metrics.",
        accent: "linear-gradient(135deg, #166534, #2563eb)",
      },
      {
        title: "Sensor Setup",
        description: "Show the device configuration and hardware context.",
        accent: "linear-gradient(135deg, #92400e, #0f766e)",
      },
      {
        title: "Daily Trends",
        description: "A preview slot for charts and historical visitor counts.",
        accent: "linear-gradient(135deg, #0f172a, #0284c7)",
      },
    ],
  },
];

const certificates = [
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "June 2024",
    href: "https://www.credly.com/badges/03928af6-e392-4712-b656-7843455473f9/public_url",
    image: "",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "April 2024",
    href: "https://www.credly.com/badges/00b8f575-6727-48b0-8cfe-79ea1f95dcbd/public_url",
    image: "",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    href: "https://www.credly.com/badges/452a2b81-daa5-4c2a-81f4-d413e0912986/public_url",
    image: "",
  },
  {
    name: "CompTIA IT Fundamentals+ (ITF+) Certification",
    issuer: "CompTIA",
    date: "July 2024",
    href: "https://www.credly.com/badges/1c390039-098a-4c53-b641-a26bffe0de36/public_url",
    image: "",
  },
  {
    name: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "AWS",
    date: "November 2023",
    href: "https://www.credly.com/badges/7820ef68-18da-4cef-a495-1004e9381778/public_url",
    image: "",
  },
];

export default function Page() {
  return (
    <section className="space-y-14">
      <section className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          ------------------------------------------------------------------------
        </p>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50">
            Hedow, Welcome!
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            The name is <strong>Jiro Madrid</strong>. I am a developer focused
            on clean interfaces, thoughtful user flows, and maintainable
            software. This portfolio collects the projects, writing, and
            technical notes that best represent how I work.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            className="rounded-md bg-neutral-950 px-4 py-2 text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
            href="/resume.pdf"
            download
          >
            CV
          </a>
          <a
            className="rounded-md bg-neutral-950 px-4 py-2 text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
            href="mailto:you@example.com"
          >
            Contact me
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">About Me</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Write two or three sentences about the kind of work you want more of:
          frontend, full-stack, design systems, backend tools, data dashboards,
          client sites, or whatever direction fits you. Keep it specific and
          honest.
        </p>
      </section>

      <FadeIn className="space-y-5" delay={0.1}>
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            Credentials
          </p>
          <h2 className="text-xl font-semibold tracking-tight">
            Certificates and Badges
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            A collection of certificates, badges, and training milestones that
            support my technical foundation and continuous learning.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              className="rounded-md border border-neutral-200 p-4 dark:border-neutral-800"
              key={`${certificate.name}-${certificate.issuer}`}
            >
              {certificate.image ? (
                <img
                  alt={`${certificate.name} certificate`}
                  className="mb-4 aspect-video w-full rounded-sm object-cover"
                  src={certificate.image}
                />
              ) : (
                <div className="mb-4 flex aspect-video items-center justify-center rounded-sm bg-neutral-100 text-sm font-medium text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                  Certificate image
                </div>
              )}
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
                    {certificate.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {certificate.issuer} - {certificate.date}
                  </p>
                </div>
                <a
                  className="inline-flex text-sm font-medium text-neutral-950 underline underline-offset-4 transition hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300"
                  href={certificate.href}
                >
                  View credential
                </a>
              </div>
            </article>
          ))}
        </div>
      </FadeIn>

      <section className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          Practicum
        </p>
        <h2 className="text-xl font-semibold tracking-tight">
          Practicum Experience
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          I completed my practicum at the City Government of Biñan, where I
          contributed to several projects, mainly the development of a web-based Voucher Management
          System for the Financial Assistance Program.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          My work involved full-stack web development using CodeIgniter 4, PHP,
          MySQL, JavaScript, jQuery, AJAX, and Bootstrap, including database
          design, student record management, voucher generation, Excel import
          functionality, audit logging, and system testing. Through this
          experience, I strengthened my technical,
          problem-solving, and collaborative skills in a real-world government
          setting.
        </p>
        <div className="grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <p className="font-medium text-neutral-950 dark:text-neutral-50">
              Company
            </p>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              City Government of Binan
            </p>
          </div>
          <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <p className="font-medium text-neutral-950 dark:text-neutral-50">
              Focus
            </p>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Full-stack web development
            </p>
          </div>
          <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <p className="font-medium text-neutral-950 dark:text-neutral-50">
              Hours
            </p>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              486 rendered hours
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
        <WorkProjects projects={projects} />
      </section>

    </section>
  );
}
