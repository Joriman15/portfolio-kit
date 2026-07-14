import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practicum Overview",
  description:
    "Jiro Madrid's practicum experience and Financial Assistance Program project for the City Government of Biñan.",
};

const responsibilities = [
  "Designed and maintained student and applicant records in MySQL.",
  "Developed workflows for voucher creation and financial assistance processing.",
  "Implemented Excel data imports, validation, search, and filtering tools.",
  "Added audit logging and supported system testing and troubleshooting.",
  "Collaborated with the team to translate office processes into usable modules.",
];

const outputs = [
  {
    title: "Applicant Records",
    description:
      "A centralized records module for viewing, searching, filtering, and maintaining student information used during assistance processing.",
    image: "/images/projects/fap/students-page.png",
    alt: "Financial Assistance Program student records page",
  },
  {
    title: "Voucher Processing",
    description:
      "A guided workflow for preparing and managing financial assistance vouchers while reducing repetitive manual encoding.",
    image: "/images/projects/fap/printing-voucher.png",
    alt: "Financial Assistance Program bulk voucher printing confirmation",
  },
  {
    title: "Reports and Audit Logs",
    description:
      "Reporting and activity-tracking features that improve accountability and help authorized personnel review system transactions.",
    image: "/images/projects/fap/audit-logs.png",
    alt: "Financial Assistance Program audit logs page",
  },
];

const viewingPhotos = [
  {
    src: "/images/practicum/fap-viewing-01.jpg",
    alt: "The development team presenting the Financial Assistance Program during the City Education Office system viewing",
  },
  {
    src: "/images/practicum/fap-viewing-02.jpg",
    alt: "City Education Office personnel reviewing the Financial Assistance Program on a laptop",
  },
  {
    src: "/images/practicum/city-education-office-team.jpg",
    alt: "The practicum team with City Education Officer Edmil L. Recibe after the Financial Assistance Program viewing",
  },
];

export default function PracticumPage() {
  return (
    <article className="space-y-20">
      <header className="relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-7 text-white shadow-2xl shadow-indigo-200 sm:p-10 dark:border-white/10 dark:shadow-indigo-950/40">
        <div className="absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border-[28px] border-white/10" />
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100">
          Practicum Overview
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tighter sm:text-5xl">
          Building a public-service system through real-world collaboration
        </h1>
        <p className="mt-5 max-w-2xl text-indigo-50">
          My practicum at the City Government of Biñan gave me the opportunity
          to apply full-stack development skills to an operational government
          workflow. The main output was a web-based Financial Assistance Program
          and voucher management system.
        </p>
        <a
          className="mt-7 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-indigo-700 shadow-lg shadow-indigo-950/20 transition hover:-translate-y-0.5 hover:shadow-indigo-950/30"
          href="/final-report-document.pdf"
          download
        >
          Download Final Report
        </a>
      </header>

      <section id="experience" className="scroll-mt-8 space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            01 — Engagement
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Practicum Experience
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            The City Government of Biñan serves the local community through
            public programs and administrative services. During my 486-hour
            practicum, I worked on digitizing parts of its student financial
            assistance process and contributed across development, data
            management, testing, and documentation.
          </p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-3">
          {[
            ["Organization", "City Government of Biñan"],
            ["Role", "Full-stack web developer"],
            ["Hours rendered", "486 hours"],
          ].map(([label, value]) => (
            <div
              className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-5 shadow-md shadow-indigo-100/40 dark:border-indigo-500/20 dark:from-indigo-950/30 dark:to-cyan-950/20 dark:shadow-none"
              key={label}
            >
              <p className="text-neutral-500 dark:text-neutral-400">{label}</p>
              <p className="mt-1 font-medium text-neutral-950 dark:text-neutral-50">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-medium">Assignments and responsibilities</h3>
          <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
            {responsibilities.map((item) => (
              <li className="flex gap-3" key={item}>
                <span aria-hidden="true" className="text-neutral-400">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">City Education Office system viewing</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Our team presented and reviewed the Financial Assistance Program
              with the City Education Office, the department for which the
              system was developed. The session allowed us to demonstrate the
              workflow and gather feedback from its intended users.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {viewingPhotos.map((photo, index) => (
              <figure
                className={index === 2 ? "sm:col-span-2" : ""}
                key={photo.src}
              >
                <img
                  alt={photo.alt}
                  className={`w-full rounded-lg border border-neutral-200 object-cover transition duration-500 ease-out hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 ${
                    index === 2 ? "aspect-[16/10]" : "aspect-[4/5]"
                  }`}
                  src={photo.src}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="output" className="scroll-mt-8 space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            02 — Presentation of Output
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Financial Assistance Program
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            The Financial Assistance Program is a web-based voucher management
            system built with CodeIgniter 4, PHP, MySQL, JavaScript, jQuery,
            AJAX, and Bootstrap. It centralizes student records and supports the
            preparation, tracking, and review of financial assistance vouchers.
          </p>
          <a
            className="inline-flex rounded-md bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
            href="https://github.com/jgtrea/FinancialAssistanceProgram_G2"
            rel="noopener noreferrer"
            target="_blank"
          >
            View FAP repository ↗
          </a>
        </div>

        <div className="space-y-5">
          {outputs.map((output) => (
            <article
              className="overflow-hidden rounded-2xl border border-indigo-100 bg-white/80 shadow-xl shadow-indigo-100/40 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
              key={output.title}
            >
              <div className="flex aspect-video items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                <img
                  alt={output.alt}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out hover:scale-[1.02]"
                  src={output.image}
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-medium">{output.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {output.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="synthesis" className="scroll-mt-8 space-y-5">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400">
            03 — Synthesis
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Learnings, Realizations, and Conclusion
          </h2>
        </div>
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <p>
            The engagement strengthened my understanding of full-stack
            development beyond classroom exercises. I learned to work with an
            existing process, translate stakeholder needs into system features,
            validate real records carefully, and test each workflow from the
            user&apos;s perspective.
          </p>
          <p>
            I realized that a successful system is not measured only by the
            amount of code written. Reliability, clear communication,
            documentation, data accuracy, and ease of use are equally important,
            especially when software supports a public service.
          </p>
          <p>
            Overall, the practicum helped me become a more responsible and
            adaptable developer. It connected my technical foundation with the
            realities of teamwork and service, and confirmed my interest in
            building maintainable solutions that make everyday work more
            efficient.
          </p>
        </div>
      </section>
    </article>
  );
}
