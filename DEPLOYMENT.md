# GitHub Pages And GoDaddy Domain Setup

This portfolio is a static React app deployed with GitHub Pages from the `docs` folder.

## GitHub Setup

1. Push this repo to GitHub.
2. In the repo, go to Settings -> Pages.
3. Set Build and deployment source to Deploy from a branch.
4. Set the branch to `main` and the folder to `/docs`.
5. Set the custom domain to `santiagopirezvelasco.com`.
6. Enable HTTPS after GitHub finishes checking DNS.

The source code lives in `src`. The production site files live in `docs`.
After changes, run `npm run build` and copy the new `dist` output into `docs` before committing.

## GoDaddy DNS

Point the root domain to GitHub Pages:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Point `www` to GitHub Pages:

```text
www  CNAME  santiago2692.github.io
```

DNS changes can take up to 24 hours. GitHub will issue HTTPS automatically once the domain is verified.
