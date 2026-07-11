import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GABAI Parental Control App",
  description:
    "A detailed capstone case study of GABAI, an Android parental control and remote-monitoring application secured with SSL pinning.",
};

const features = [
  {
    number: "01",
    title: "Secure device pairing",
    description:
      "A parent generates a unique QR code that the child device scans to establish the account relationship. CameraX, ML Kit, and ZXing support a quick pairing flow while each device remains identifiable in the parent dashboard.",
  },
  {
    number: "02",
    title: "Usage and activity monitoring",
    description:
      "Using Android's UsageStats API, GABAI summarizes foreground application activity and accumulated screen time. Parents can review linked children and activity reports without accessing private messages, calls, or personal media.",
  },
  {
    number: "03",
    title: "Application and website blocking",
    description:
      "Parents can restrict selected applications and manually maintain a website blocklist. The child app detects foreground activity through Android Accessibility Service and displays a clear restriction screen when a blocked destination is opened.",
  },
  {
    number: "04",
    title: "Screen-time and bedtime rules",
    description:
      "Parents can define daily device limits, app-specific allowances, and scheduled bedtime lock and unlock periods. Once the available time reaches zero, the child device is locked until the parent grants additional time.",
  },
  {
    number: "05",
    title: "Real-time alerts and reports",
    description:
      "The notification framework informs parents about restriction attempts and time-limit events. Reports consolidate application activity and blocked-access attempts so parents can make informed adjustments to household rules.",
  },
  {
    number: "06",
    title: "SSL-pinned communication",
    description:
      "OkHttp certificate pinning validates the trusted backend certificate before exchanging data with Supabase. Controlled MITMProxy testing recorded a 100% blocking rate across ten forged-certificate interception attempts.",
  },
];

const galleryItems = [
  {
    title: "Parent login",
    description: "Secure account entry and the starting point for parent-child setup.",
    image: "/images/projects/gabai/login-screen.jpg",
    alt: "GABAI parent login interface",
  },
  {
    title: "Parent dashboard",
    description: "A central view of linked child profiles and their current status.",
    image: "/images/projects/gabai/manuscript/figure-98-1.png",
    alt: "GABAI parent dashboard showing linked children",
  },
  {
    title: "Device pairing",
    description: "QR-based linking associates the child device with the correct parent account.",
    image: "/images/projects/gabai/manuscript/figure-99-1.png",
    alt: "GABAI device pairing interface",
  },
  {
    title: "Child-device setup",
    description: "Guided setup covers the permissions needed for reliable background monitoring.",
    image: "/images/projects/gabai/manuscript/figure-100-1.png",
    alt: "GABAI child device permission setup",
  },
  {
    title: "Child dashboard",
    description: "A deliberately simple interface shows remaining time, bedtime, and restrictions.",
    image: "/images/projects/gabai/manuscript/figure-101-1.png",
    alt: "GABAI child dashboard",
  },
  {
    title: "Website restriction",
    description: "Children receive immediate, understandable feedback when a blocked site is opened.",
    image: "/images/projects/gabai/manuscript/figure-102-3.png",
    alt: "GABAI website blocked screen",
  },
  {
    title: "Application blocking",
    description: "The restriction screen prevents access to applications selected by the parent.",
    image: "/images/projects/gabai/app-locked.jpg",
    alt: "GABAI application locked screen",
  },
  {
    title: "Time limit per app",
    description: "Parents assign daily allowances to individual applications from one screen.",
    image: "/images/projects/gabai/manuscript/figure-104-2.png",
    alt: "GABAI per-application screen time controls",
  },
  {
    title: "Screen-time enforcement",
    description: "A full-device lock is shown when the child's daily allowance is exhausted.",
    image: "/images/projects/gabai/manuscript/figure-105-1.png",
    alt: "GABAI child device screen-time lock",
  },
  {
    title: "Activity reports",
    description: "Parents review usage statistics and attempts to open restricted applications.",
    image: "/images/projects/gabai/manuscript/figure-106-1.png",
    alt: "GABAI activity reports interface",
  },
];

const software = [
  ["Kotlin", "Primary language for the parent and child Android applications"],
  ["Android Studio & Gradle", "Development environment, builds, debugging, and APK deployment"],
  ["Supabase", "PostgreSQL data, authentication, REST endpoints, and real-time synchronization"],
  ["OkHttp & SSL Pinning", "API communication and forged-certificate rejection"],
  ["UsageStats & Accessibility APIs", "Usage monitoring and restriction enforcement"],
  ["MITMProxy, Kali Linux & VirtualBox", "Controlled penetration testing of network communication"],
  ["GitHub", "Source control and team collaboration"],
];

const hardware = [
  {
    title: "Android parent device",
    detail:
      "A physical Android smartphone runs the administrative app for pairing, rule configuration, reports, and alerts.",
  },
  {
    title: "Android child device",
    detail:
      "A separate Android smartphone runs continuous monitoring and enforces application, website, bedtime, and screen-time restrictions.",
  },
  {
    title: "Development workstation",
    detail:
      "A computer capable of running Android Studio, Gradle, the Android emulator, VirtualBox, and the security-testing environment.",
  },
  {
    title: "Test environments",
    detail:
      "Physical devices using Samsung One UI, Honor MagicOS, TECNO HiOS, Infinix XOS, Xiaomi HyperOS, and POCO HyperOS, plus a stock-Android emulator.",
  },
];

export default function ProjectOnePage() {
  return (
    <article className="space-y-20">
      <header className="relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 p-7 text-white shadow-2xl shadow-blue-200 sm:p-10 dark:border-white/10 dark:shadow-blue-950/40">
        <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border-[32px] border-white/10" />
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-100">
          Capstone Project · Android Security
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
          GABAI
        </h1>
        <p className="mt-2 text-xl font-medium text-sky-100">
          Parental Control and Remote Monitoring Application
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-blue-50">
          GABAI helps parents guide safer mobile Android use through proportional
          monitoring, configurable restrictions, and secure communication. It
          was developed as our capstone project for families with
          children using Android devices.
        </p>
        <nav aria-label="Project sections" className="mt-7 flex flex-wrap gap-2 text-sm">
          {[
            ["Features", "#features"],
            ["GUI", "#gui"],
            ["Software", "#software"],
            ["Hardware", "#hardware"],
          ].map(([label, href]) => (
            <a className="rounded-full bg-white/15 px-4 py-2 backdrop-blur transition hover:bg-white/25" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="features" className="scroll-mt-8 space-y-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">System capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Discussion of the Features</h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            GABAI uses separate parent and child interfaces. The parent side is administrative but accessible; the child side intentionally limits controls and clearly communicates the rules being applied.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-lg shadow-blue-100/30 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none" key={feature.title}>
              <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{feature.number}</span>
              <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{feature.description}</p>
            </article>
          ))}
        </div>
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-100">
          <strong>Privacy boundary:</strong> GABAI does not collect private messages, emails, calls, contacts, camera or microphone data, media files, or keyboard input. Monitoring is limited to information needed for usage, restriction, notification, and reporting features.
        </aside>
      </section>

      <section id="gui" className="scroll-mt-8 space-y-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400">Interface walkthrough</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Screenshots of the GUI</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">The screens below trace the primary journey from authentication and pairing to monitoring, rule enforcement, and reporting.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure className="group overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 shadow-xl shadow-indigo-100/30 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none" key={item.title}>
              <div className="flex aspect-[9/16] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-950 dark:to-indigo-950">
                <img alt={item.alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" src={item.image} />
              </div>
              <figcaption className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="software" className="scroll-mt-8 space-y-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-600 dark:text-cyan-400">Development stack</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Software Used</h2>
        </div>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {software.map(([name, purpose]) => (
            <div className="grid gap-1 py-4 sm:grid-cols-[0.8fr_1.7fr] sm:gap-6" key={name}>
              <h3 className="font-semibold text-neutral-950 dark:text-neutral-50">{name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hardware" className="scroll-mt-8 space-y-7">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">Physical environment</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Hardware Used</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">The completed system uses two Android roles and was validated across physical devices and an emulator. Android 10 or newer is the documented minimum requirement.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {hardware.map((item) => (
            <article className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-5 dark:border-indigo-500/20 dark:from-indigo-950/30 dark:to-cyan-950/20" key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          Compatibility note: the parent application worked across all documented test environments. Child-side monitoring was fully compatible with Stock Android, One UI, MagicOS, HiOS, and XOS; the manuscript records partial compatibility with the tested Xiaomi and POCO HyperOS devices because of manufacturer background-process restrictions.
        </p>
      </section>
    </article>
  );
}
