export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'JesseRai Salon',
    image: 'https://jesserai.vercel.app/jesse.jpg',
    '@id': 'https://jesserai.vercel.app',
    url: 'https://jesserai.vercel.app',
    telephone: '(410) 555-4247',
    email: 'hello@jesserai.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '108 Old Solomons Island Rd #L1',
      addressLocality: 'Annapolis',
      addressRegion: 'MD',
      postalCode: '21401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.97,
      longitude: -76.5,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: 'Jessica Angell',
      jobTitle: 'Owner & Master Stylist',
    },
    sameAs: [
      'https://www.facebook.com/littlejhiggs/photos',
      'https://www.instagram.com/jesseraihair',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Annapolis',
      '@id': 'https://en.wikipedia.org/wiki/Annapolis,_Maryland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair and Nail Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Haircuts & Styling',
            description: 'Professional haircuts and styling for men and women',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Coloring',
            description: 'Full color, highlights, balayage, and color correction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nail Services',
            description: 'Manicures and pedicures with gel options',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
