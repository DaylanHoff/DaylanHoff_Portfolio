export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daylan Hoff",
    url: "https://daylanhoff.com",
    image: "https://daylanhoff.com/images/metadata.png",
    jobTitle: "Senior DevOps Engineer",
    description: "Cloud and platform engineer with six years of engineering experience in AWS, Kubernetes, CI/CD, and full-stack development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salt Lake City",
      addressRegion: "Utah",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/DaylanHoff/",
      "https://github.com/DaylanHoff",
      "https://www.youtube.com/channel/UCi-cpZ_fAX4-QqADvUm3nxg"
    ],
    knowsAbout: [
      "DevOps",
      "C#",
      ".NET",
      "AWS",
      "Amazon EKS",
      "Kubernetes",
      "Helm",
      "Argo CD",
      "Cloud Security",
      "Cloud Infrastructure",
      "CI/CD",
      "Privacy Engineering",
      "Software Development",
      "Automation",
      "Infrastructure as Code"
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Neumont College"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
