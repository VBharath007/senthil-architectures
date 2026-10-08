# Senthil Associates — original structure corrected

This delivery keeps the supplied website's page structure, section order, original English copy and project data. It supersedes the earlier redesign ZIPs.

- Body background: #67CA3E.
- Original home image-sequence hero and original isometric journey retained.
- Black-and-white imagery reveals colour on hover/focus.
- English / Tamil toggle before Contact, with saved language choice.
- Responsive spacing and alignment for mobile, tablet, laptop and desktop.
- Lenis / GSAP scrolling, lighter hero frames and reduced-motion support.
- Fixed missing final desktop frames: the supplied sequence contains 76 images, while the original code requested 81.
- Original media retained; optimized sequence copies reduce sequence transfer from approximately 137 MB to 5 MB.

## Run
Use Node.js 20.9 or newer. In the innermost project folder, run `npm ci`, then `npm run dev`.

## Build / host
Run `npm run build`. Deploy the `out` directory to a static host supporting clean URLs such as /about → /about.html. Use an HTTP server, not a double-clicked HTML file.

The corrected source ZIP preserves the supplied archive's outer folder hierarchy. The separate static ZIP contains the ready-built site.

## Scope and verification
The original contact form remains a demonstration form; a working submission backend is not included. External photography and maps require internet access. Browser checks cover the six main pages and one representative project page at 375, 768, 1024 and 1440 pixels. All 23 routes are built. Original English text and site data are checked against the supplied source. PDF/reference images were not available in this conversation.
