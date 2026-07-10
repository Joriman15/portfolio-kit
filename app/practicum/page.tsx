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
    <article className="space-y-16">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          Practicum Overview
        </p>
        <h1 className="text-2xl font-semibold tracking-tighter text-neutral-950 sm:text-3xl dark:text-neutral-50">
          Building a public-service system through real-world collaboration
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          My practicum at the City Government of Biñan gave me the opportunity
          to apply full-stack development skills to an operational government
          workflow. The main output was a web-based Financial Assistance Program
          and voucher management system.
        </p>
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
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
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
                  className={`w-full rounded-lg border border-neutral-200 object-cover dark:border-neutral-800 ${
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
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
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
              className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
              key={output.title}
            >
              <div className="flex aspect-video items-center justify-center bg-neutral-100 dark:bg-neutral-900">
                <img
                  alt={output.alt}
                  className="h-full w-full object-contain"
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
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
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
