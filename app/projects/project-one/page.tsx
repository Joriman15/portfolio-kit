const galleryItems = [
  {
    title: 'Dashboard Overview',
    description: 'Replace this block with a screenshot of the main project screen.',
  },
  {
    title: 'Core Workflow',
    description: 'Show the most important action a user can take in the app.',
  },
  {
    title: 'Mobile View',
    description: 'Add a responsive screenshot or short demo clip here.',
  },
]

export const metadata = {
  title: 'Project One',
  description: 'A project case study with screenshots, demos, and implementation details.',
}

export default function ProjectOnePage() {
  return (
    <section className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          Project Case Study
        </p>
        <h1 className="text-3xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50">
          Project One
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          Use this page to explain what the project does, why you built it, your
          role, the tools you used, and what the final result looks like.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            className="rounded-md bg-neutral-950 px-4 py-2 text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
            href="#demo"
          >
            View demo
          </a>
          <a
            className="rounded-md border border-neutral-300 px-4 py-2 transition hover:border-neutral-950 dark:border-neutral-700 dark:hover:border-neutral-200"
            href="https://github.com/your-username/project-one"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source code
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Gallery</h2>
        <div className="grid gap-4">
          {galleryItems.map((item) => (
            <div
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
              key={item.title}
            >
              <div className="flex aspect-video items-center justify-center rounded-md bg-neutral-100 text-sm text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                Screenshot or demo media
              </div>
              <h3 className="mt-4 font-medium text-neutral-950 dark:text-neutral-50">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Demo Notes</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Add a live demo link, embedded video, or a walkthrough of the main
          features here. For a portfolio, this page should make the project easy
          to understand even if the visitor does not open the code.
        </p>
      </section>
    </section>
  )
}
