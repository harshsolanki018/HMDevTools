import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({
  title = 'HMDevTools — Developer tools that just work.',
  description = 'Fast, privacy-focused, practical developer utilities. JSON tools, Base64 converters, UUID generators, regex testing, timestamp tools, and more.',
  canonical,
  ogType = 'website',
  ogImage = '/favicon.svg',
  noindex = false
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://hmdevtools.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* OpenGraph Tags */}
      <meta property="og:site_name" content="HMDevTools" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
};

export default SEOHead;
