import type { Metadata } from "next";

const liveUrl = "https://thrifthroat-react-eight.vercel.app";

export const metadata: Metadata = {
  title: "Thrifthroat Vintage Clothing Store",
  description:
    "A case study of Thrifthroat, a responsive React storefront for curated vintage clothing.",
};

const features = [
  {
    title: "Responsive storefront",
    description:
      "A visual landing experience that adapts from a full desktop layout to a focused mobile shopping flow.",
  },
  {
    title: "Catalog and product details",
    description:
      "Customers can filter the catalog, browse product cards, and open detailed item views before adding a piece to their cart.",
  },
  {
    title: "Customer guidance",
    description:
      "An accordion-based FAQ section answers common questions about ordering, shipping, refunds, and store policies.",
  },
];

export default function ThrifthroatPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
          E-commerce Project
        </p>
        <h1 className="text-2xl font-semibold tracking-tighter text-neutral-950 sm:text-3xl dark:text-neutral-50">
          Thrifthroat: Vintage Clothing Store
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          Thrifthroat is a React storefront for curated secondhand clothing. It
          combines a nostalgic visual identity with responsive browsing,
          filtering, product details, cart interactions, and practical customer
          information.
        </p>
        <a
          className="inline-flex rounded-md bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
          href={liveUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit live website ↗
        </a>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Live preview</h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Explore the deployed storefront directly below or open it in a new tab.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800">
          <iframe
            className="h-[65svh] min-h-96 w-full sm:h-[70vh] sm:min-h-[560px]"
            loading="lazy"
            src={liveUrl}
            title="Live preview of the Thrifthroat vintage clothing website"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Key features</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
              key={feature.title}
            >
              <h3 className="font-medium text-neutral-950 dark:text-neutral-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
