# GitHub Pages And GoDaddy Domain Setup

This portfolio is a static React app deployed with GitHub Pages.

## GitHub Setup

1. Push this repo to GitHub.
2. In the repo, go to Settings -> Pages.
3. Set Build and deployment source to GitHub Actions.
4. Set the custom domain to `santiagopirezvelasco.com`.
5. Enable HTTPS after GitHub finishes checking DNS.

The workflow in `.github/workflows/deploy.yml` builds the site with `npm run build` and publishes `dist`.

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
