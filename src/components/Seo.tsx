import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
  path?: string; // f.eks "/about"
};

export default function Seo({ title, description, path = "/" }: Props) {
  const canonical = `https://syrianvisions.com${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      {/* primær SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Twitter */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Syrian Visions" />
      <meta property="og:image" content="https://syrianvisions.com/pictures/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
