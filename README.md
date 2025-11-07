# AcceleratorX Web

Site Next.js (TypeScript, Tailwind, next-intl) multilingv (RO/EN/FR) pentru prezentarea unui accelerator de particule, cu două căi: Civil și Apărare.

## Rulare locală (fără drepturi de administrator)

1. Deschide PowerShell în folderul `acceleratorx-web\site`.
2. Setează temporar PATH pentru Node portabil:

```powershell
$env:Path = "c:\Users\marius.udrescu\CascadeProjects\acceleratorx-web\_tools\node\node-v20.18.0-win-x64;" + $env:Path
```

3. Pornește serverul de dezvoltare:

```powershell
npm run dev
```

4. Deschide http://localhost:3000 și navighează la /ro, /en, /fr.

## Configurare i18n
- next-intl cu rute `/(ro|en|fr)`
- Mesaje: `messages/ro.json`, `messages/en.json`, `messages/fr.json`

## Pagini
- `/<locale>` – Acasă
- `/<locale>/civil`
- `/<locale>/defense`
- `/<locale>/applications`
- `/<locale>/research`
- `/<locale>/contact`

## Formular Contact
- API: `app/api/contact/route.ts`
- Variabile de mediu (setează în `.env.local` sau în cloud):
  - `RESEND_API_KEY`
  - `CONTACT_TO`
  - `CONTACT_FROM`
- Exemplu: `.env.local.example`

## SEO
- `app/robots.ts`, `app/sitemap.ts`
- Setează `NEXT_PUBLIC_SITE_URL` în environment (ex.: https://acceleratorx.example.com)

## Deploy pe Vercel (recomandat)
1. Inițializează repo git (vezi mai jos) și publică pe GitHub/GitLab.
2. În Vercel Dashboard: New Project → Import existing repo.
3. Setează Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_TO`
   - `CONTACT_FROM`
4. Deploy. Build implicit: `npm install && npm run build`.

## Inițializare Git (comenzi)
Din folderul `site`:
```powershell
git init
git add -A
git commit -m "chore: initial Next.js i18n site"
```
Apoi setează remote și `git push` conform platformei alese (GitHub/GitLab/Bitbucket).
