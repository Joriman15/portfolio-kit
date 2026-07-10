const galleryItems = [
  {
    title: 'Gabai App Identity',
    description: 'The visual identity created for the Gabai parental control application.',
    image: '/images/projects/gabai/logo.png',
    alt: 'Gabai parental control app logo',
  },
  {
    title: 'App Lock Screen',
    description: 'Children see this friendly restriction screen when a parent locks an application.',
    image: '/images/projects/gabai/app-locked.jpg',
    alt: 'Gabai child-device screen showing that the CalcES app is locked',
  },
  {
    title: 'Parent Login',
    description: 'Parents can sign in securely or connect a child device by scanning its QR code.',
    image: '/images/projects/gabai/login-screen.jpg',
    alt: 'Gabai parent login screen with email, password, and child-device QR scan controls',
  },
]

export const metadata = {
  title: 'Gabai Parental Control App',
  description: 'A case study of Gabai, an Android parental control app for modern families.',
}

export default function ProjectOnePage() {
  return (
    <section className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          Mobile App Case Study
        </p>
        <h1 className="text-3xl font-semibold tracking-tighter text-neutral-950 dark:text-neutral-50">
          Gabai: Parental Control Mobile App
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          Gabai helps parents manage screen time, restrict selected apps, and
          protect their children&apos;s digital experience through a clear and
          approachable Android interface.
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
            href="#gallery"
            rel="noopener noreferrer"
            target="_blank"
          >
            View screenshots
          </a>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-8 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Gallery</h2>
        <div className="grid gap-4">
          {galleryItems.map((item, index) => (
            <div
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
              key={item.title}
            >
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-950 dark:to-blue-950">
                <img
                  alt={item.alt}
                  className={`h-full w-full object-contain ${index === 0 ? 'p-8 sm:p-12' : ''}`}
                  src={item.image}
                />
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
          The current screens demonstrate Gabai&apos;s parent authentication and
          child-device restriction flow. The interface uses reassuring language,
          prominent actions, and a consistent blue visual system to keep parental
          controls understandable for both parents and children.
        </p>
      </section>
    </section>
  )
}
