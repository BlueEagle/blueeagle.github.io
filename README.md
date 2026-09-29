# Collin's Code [![Netlify Status](https://api.netlify.com/api/v1/badges/268ebf0c-bf29-414d-845e-8f49a9e1fb85/deploy-status)](https://app.netlify.com/sites/collins-code/deploys)
## A home for my work. Live at [ballou.rocks](https://ballou.rocks).

Built with React 19 and Vite, deployed by Netlify from the `reactifying` branch (see `netlify.toml`).

### Development
Requires Node 22.12+.

```sh
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

### Writing a post
Add an entry to `src/resources/posts.json` (`slug`, `title`, `date` as `YYYY-MM-DD`, `author`, `tags`, `body`).
Each `body` item is a paragraph string (supports `[text](url)` links) or a code block `{ "code": "...", "lang": "js" }`.
Optionally set `cover` to an image path in `public/`. The RSS feed is regenerated on every build.
