// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://colibricode.com";

    // Static routes you already have
    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/services",
        "/capabilities",
        "/stack/drupal",
        "/stack/devops",
        "/stack/symfony-laravel",
        "/stack/next-react",
        "/stack/mobile",
        "/stack/go",
        "/stack/python",
        "/case-studies",
        "/why-colibricode",
        "/engagement",
        "/contact",
        "/privacy",
        "/terms",
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
    }));

    // TODO later: dynamic case studies / blog posts
    // Example if you fetch from API:
    // const cases = await fetch(`${process.env.API}/case-studies`).then(r => r.json());
    // const caseRoutes = cases.map((cs) => ({
    //   url: `${baseUrl}/case-studies/${cs.slug}`,
    //   lastModified: cs.updatedAt ?? new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // }));

    return [
        ...staticRoutes,
        // ...caseRoutes,
    ];
}
