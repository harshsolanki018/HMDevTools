import React from 'react';
import { Helmet } from 'react-helmet-async';

export const JsonLd = ({ data }) => {
  if (!data) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default JsonLd;
