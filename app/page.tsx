import { BlogPosts } from 'app/components/posts'
import { WorkProjects } from 'app/components/work-projects'

const projects = [
  {
    name: 'Gabai: Parental Control Mobile App',
    description:
      'A short case-study style description of what you built, who it helped, and what changed because of it.',
    stack: 'Kotlin, Supabase, Kali Linux, MITMProxy, HTML, CSS, Figma',
    href: '/projects/project-one',
    previews: [
      {
        title: 'Guardian Dashboard',
        description: 'A quick preview of the main dashboard and safety overview.',
        accent: 'linear-gradient(135deg, #0f766e, #1d4ed8)',
      },
      {
        title: 'Device Activity',
        description: 'A sample screen for reviewing activity and usage signals.',
        accent: 'linear-gradient(135deg, #164e63, #7c3aed)',
      },
      {
        title: 'Mobile Flow',
        description: 'A preview slot for the mobile setup and parent controls.',
        accent: 'linear-gradient(135deg, #15803d, #0f172a)',
      },
    ],
  },
  {
    name: 'Financial Assistance Program: Government System/Website',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'CodeIgniter4, PHP, XAMPP, MySQL, Photoshop, HTML, CSS, Bootstrap',
    href: '#',
    previews: [
      {
        title: 'Applicant Records',
        description: 'Preview the records table and filtering workflow.',
        accent: 'linear-gradient(135deg, #1d4ed8, #475569)',
      },
      {
        title: 'Assistance Form',
        description: 'Show the data-entry flow for assistance applications.',
        accent: 'linear-gradient(135deg, #0369a1, #166534)',
      },
      {
        title: 'Report View',
        description: 'A carousel slot for generated summaries and reports.',
        accent: 'linear-gradient(135deg, #334155, #9333ea)',
      },
    ],
  },
   {
    name: 'Thrifthroat: Vintage Clothing E-Commerce Website',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'React, HTML, CSS, Frontend, UI/UX Design',
    href: '#',
    previews: [
      {
        title: 'Shop Catalog',
        description: 'Preview the product grid and browsing experience.',
        accent: 'linear-gradient(135deg, #be123c, #0f766e)',
      },
      {
        title: 'Product Details',
        description: 'Highlight an individual clothing item and purchase details.',
        accent: 'linear-gradient(135deg, #7c2d12, #2563eb)',
      },
      {
        title: 'Checkout Flow',
        description: 'A preview slot for cart and checkout interactions.',
        accent: 'linear-gradient(135deg, #4d7c0f, #4338ca)',
      },
    ],
  },
  {
    name: 'Billing Project: Internal Tool for Invoice Management',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'CodeIgniter4, PHP, XAMPP, MySQL, HTML, CSS, Bootstrap',
    href: '#',
    previews: [
      {
        title: 'Invoice List',
        description: 'Preview invoice tracking, statuses, and search.',
        accent: 'linear-gradient(135deg, #0f766e, #334155)',
      },
      {
        title: 'Create Invoice',
        description: 'Show the internal workflow for building a new invoice.',
        accent: 'linear-gradient(135deg, #4338ca, #b45309)',
      },
      {
        title: 'Payment Summary',
        description: 'A carousel slot for totals, payment state, and exports.',
        accent: 'linear-gradient(135deg, #0891b2, #581c87)',
      },
    ],
   
  },
  {
     name: 'Laser Visitor Counter: IoT Device and Dashboard',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'HTML, CSS, JavaScript, IoT, Raspberry Pi, Python',
    href: '#',
    previews: [
      {
        title: 'Visitor Dashboard',
        description: 'Preview live visitor count cards and dashboard metrics.',
        accent: 'linear-gradient(135deg, #166534, #2563eb)',
      },
      {
        title: 'Sensor Setup',
        description: 'Show the device configuration and hardware context.',
        accent: 'linear-gradient(135deg, #92400e, #0f766e)',
      },
      {
        title: 'Daily Trends',
        description: 'A preview slot for charts and historical visitor counts.',
        accent: 'linear-gradient(135deg, #0f172a, #0284c7)',
      },
    ],
  },
]

export default function Page() {
  return (
    <section className="space-y-14">
      <section className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          Hedow, welcome!
        </p>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50">
            My Portfolio!
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300">
            The name is <strong>Jiro Madrid</strong>. I am a developer focused on clean interfaces, thoughtful user flows,
            and maintainable software. This portfolio collects the projects,
            writing, and technical notes that best represent how I work.
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

      <section id="work" className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
        <WorkProjects projects={projects} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Write two or three sentences about the kind of work you want more of:
          frontend, full-stack, design systems, backend tools, data dashboards,
          client sites, or whatever direction fits you. Keep it specific and
          honest.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Writing</h2>
        <BlogPosts />
      </section>
    </section>
  )
}
