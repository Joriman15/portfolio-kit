'use client'

import { useState } from 'react'

type ProjectPreview = {
  title: string
  description: string
  image?: string
  accent: string
}

type Project = {
  name: string
  description: string
  stack: string
  href: string
  previews: ProjectPreview[]
}

type WorkProjectsProps = {
  projects: Project[]
}

export function WorkProjects({ projects }: WorkProjectsProps) {
  const [openProject, setOpenProject] = useState(projects[0]?.name ?? '')
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({})

  function toggleProject(projectName: string) {
    setOpenProject((current) => (current === projectName ? '' : projectName))
  }

  function moveSlide(project: Project, direction: number) {
    setActiveSlides((current) => {
      const activeSlide = current[project.name] ?? 0
      const nextSlide =
        (activeSlide + direction + project.previews.length) %
        project.previews.length

      return {
        ...current,
        [project.name]: nextSlide,
      }
    })
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => {
        const isOpen = openProject === project.name
        const activeSlide = activeSlides[project.name] ?? 0
        const preview = project.previews[activeSlide]

        return (
          <article
            className="rounded-lg border border-neutral-200 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            key={project.name}
          >
            <button
              aria-expanded={isOpen}
              className="w-full p-4 text-left"
              onClick={() => toggleProject(project.name)}
              type="button"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                      {project.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-lg leading-none text-neutral-500 dark:text-neutral-400">
                    {isOpen ? '-' : '+'}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                  {project.stack}
                </p>
              </div>
            </button>

            {isOpen ? (
              <div className="border-t border-neutral-200 p-4 pt-0 dark:border-neutral-800">
                <div className="grid gap-4 pt-4 md:grid-cols-[1.4fr_0.8fr]">
                  <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                    {preview.image ? (
                      <img
                        alt={`${project.name} - ${preview.title}`}
                        className="aspect-video w-full object-cover"
                        src={preview.image}
                      />
                    ) : (
                      <div
                        className="flex aspect-video items-center justify-center px-6 text-center"
                        style={{ background: preview.accent }}
                      >
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                            Preview
                          </p>
                          <p className="mt-2 text-lg font-medium text-white">
                            {preview.title}
                          </p>
                        </div>
                      </div>
                    )}
                    <button
                      aria-label="Previous preview"
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-neutral-950 shadow-sm transition hover:bg-white dark:bg-neutral-950/90 dark:text-neutral-50 dark:hover:bg-neutral-900"
                      onClick={() => moveSlide(project, -1)}
                      type="button"
                    >
                      {'<'}
                    </button>
                    <button
                      aria-label="Next preview"
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-neutral-950 shadow-sm transition hover:bg-white dark:bg-neutral-950/90 dark:text-neutral-50 dark:hover:bg-neutral-900"
                      onClick={() => moveSlide(project, 1)}
                      type="button"
                    >
                      {'>'}
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
                      {project.previews.map((item, index) => (
                        <button
                          aria-label={`Show ${item.title}`}
                          className={`h-2 rounded-full transition ${
                            index === activeSlide
                              ? 'w-6 bg-white'
                              : 'w-2 bg-white/45 hover:bg-white/75'
                          }`}
                          key={item.title}
                          onClick={() =>
                            setActiveSlides((current) => ({
                              ...current,
                              [project.name]: index,
                            }))
                          }
                          type="button"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex min-h-48 flex-col justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
                        {preview.title}
                      </p>
                      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                        {preview.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          className="rounded-md bg-neutral-950 px-4 py-2 text-sm text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                          href={project.href}
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}
