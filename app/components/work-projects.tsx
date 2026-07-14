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
  liveUrl?: string
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
    <div className="space-y-3 sm:space-y-5">
      {projects.map((project) => {
        const isOpen = openProject === project.name
        const activeSlide = activeSlides[project.name] ?? 0
        const preview = project.previews[activeSlide]

        if (project.previews.length === 0) {
          return (
            <article
              className="group min-w-0 overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 p-4 shadow-lg shadow-indigo-100/30 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/60 sm:p-5 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-indigo-500/50"
              key={project.name}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                  <p className="mt-3 break-words text-xs font-medium uppercase tracking-[0.1em] text-cyan-700 sm:tracking-[0.12em] dark:text-cyan-400">
                    {project.stack}
                  </p>
                </div>
                <a
                  className="inline-flex shrink-0 self-start rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 transition hover:-translate-y-0.5 sm:self-auto"
                  href={project.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View repository ↗
                </a>
              </div>
            </article>
          )
        }

        return (
          <article
            className="group min-w-0 overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 shadow-lg shadow-indigo-100/30 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/60 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none dark:hover:border-indigo-500/50"
            key={project.name}
          >
            <button
              aria-expanded={isOpen}
              className="relative w-full min-w-0 p-4 text-left sm:p-5"
              onClick={() => toggleProject(project.name)}
              type="button"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="pr-1 font-medium leading-snug text-neutral-950 dark:text-neutral-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {project.description}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg leading-none text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white sm:mt-1 dark:bg-indigo-500/10 dark:text-indigo-300">
                    {isOpen ? '-' : '+'}
                  </span>
                </div>
                <p className="break-words text-xs font-medium uppercase tracking-[0.1em] text-cyan-700 sm:tracking-[0.12em] dark:text-cyan-400">
                  {project.stack}
                </p>
              </div>
            </button>

            {isOpen ? (
              <div className="border-t border-indigo-100 p-4 pt-0 sm:p-5 sm:pt-0 dark:border-white/10">
                <div className="grid gap-4 pt-4 md:grid-cols-[1.4fr_0.8fr]">
                  <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                    {preview.image ? (
                      <div
                        className="flex aspect-video items-center justify-center bg-neutral-100 dark:bg-neutral-900"
                        style={{ background: preview.accent }}
                      >
                        <img
                          alt={`${project.name} - ${preview.title}`}
                          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          src={preview.image}
                        />
                      </div>
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
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg leading-none text-neutral-950 shadow-sm transition hover:bg-white sm:left-3 sm:h-10 sm:w-10 sm:text-xl dark:bg-neutral-950/90 dark:text-neutral-50 dark:hover:bg-neutral-900"
                      onClick={() => moveSlide(project, -1)}
                      type="button"
                    >
                      {'<'}
                    </button>
                    <button
                      aria-label="Next preview"
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg leading-none text-neutral-950 shadow-sm transition hover:bg-white sm:right-3 sm:h-10 sm:w-10 sm:text-xl dark:bg-neutral-950/90 dark:text-neutral-50 dark:hover:bg-neutral-900"
                      onClick={() => moveSlide(project, 1)}
                      type="button"
                    >
                      {'>'}
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">
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

                  <div className="flex flex-col justify-between gap-4 md:min-h-48">
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
                          className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 transition hover:-translate-y-0.5"
                          href={project.href}
                        >
                          View project
                        </a>
                        {project.liveUrl ? (
                          <a
                            className="rounded-full border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/30"
                            href={project.liveUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Live site ↗
                          </a>
                        ) : null}
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
