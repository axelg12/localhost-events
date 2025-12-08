import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>localhost-events</title>
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Localhost Events" />
        <meta property="og:description" content="Browse upcoming and past programming and tech related events in your area." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Localhost Events" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Localhost Events" />
        <meta name="twitter:description" content="Browse upcoming and past programming and tech related events in your area." />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
