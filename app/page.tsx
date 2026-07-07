import { BlogPosts } from 'app/components/posts'

const projects = [
  {
    name: 'Gabai: Parental Control Mobile App',
    description:
      'A short case-study style description of what you built, who it helped, and what changed because of it.',
    stack: 'Kotlin, Supabase, Kali Linux, MITMProxy, HTML, CSS, Figma',
    href: '/projects/project-one',
  },
  {
    name: 'Financial Assistance Program: Government System/Website',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'CodeIgniter4, PHP, XAMPP, MySQL, Photoshop, HTML, CSS, Bootstrap',
    href: '#',
  },
   {
    name: 'Thrifthroat: Vintage Clothing E-Commerce Website',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'React, HTML, CSS, Frontend, UI/UX Design',
    href: '#',
  },
  {
    name: 'Billing Project: Internal Tool for Invoice Management',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'CodeIgniter4, PHP, XAMPP, MySQL, HTML, CSS, Bootstrap',
    href: '#',
   
  },
  {
     name: 'Laser Visitor Counter: IoT Device and Dashboard',
    description:
      'Use this space for your strongest second project. Focus on the problem, your role, and the outcome.',
    stack: 'HTML, CSS, JavaScript, IoT, Raspberry Pi, Python',
    href: '#',
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
            The name is Jiro Madrid. I am a developer focused on clean interfaces, thoughtful user flows,
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
        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project.name}
              className="block rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
              href={project.href}
            >
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                  {project.stack}
                </p>
              </div>
            </a>
          ))}
        </div>
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
