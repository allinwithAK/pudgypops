# PUDGY POPS Hub

A small, friendly static website for fans of Lil Pudgy #19587: *one pengu, two pops, zero chill.* 🍦🐧

No build step, no frameworks, no accounts or tracking scripts. Just HTML, CSS and a little JavaScript, so it can be hosted free on GitHub Pages.

> PUDGY POPS is an independent, fan-made brand built around one Lil Pudgy (#19587) owned by its holder. Not affiliated with or endorsed by Igloo Inc. or Pudgy Penguins.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: hero, what's inside, early access signup |
| `meet-pops.html` | Character card for Pops |
| `story.html` | Mango Island, Chapter 1 |
| `popsicle-family.html` | Gallery of popsicle Pudgys (added by hand, with permission) |
| `updates.html` | Building-in-public log |
| `join.html` | Signup and social links |
| `about.html` | About, disclaimer, contact |
| `404.html` | "Melted." page |

## Put it online (no terminal needed)

1. Create a **new public repository** on GitHub (for example `pudgy-pops-hub`).
2. Click **Add file > Upload files**, drag in everything from this folder (including the `assets` folder and the hidden `.nojekyll` file if your computer shows it), and commit.
3. Go to **Settings > Pages**. Under "Build and deployment", pick **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two your site appears at `https://YOUR-USERNAME.github.io/pudgy-pops-hub/`.
5. Open it and click through every page on your phone and computer.

### Using your own domain later
In **Settings > Pages > Custom domain**, enter your domain and follow GitHub's DNS steps. Nothing in this site needs to change.

## Set up the email signup (Mailchimp)

Until you do this, the signup form opens the visitor's email app with a pre-filled message to the brand email, so it still works.

1. In Mailchimp, go to **Audience > Signup forms > Embedded forms**.
2. In the code Mailchimp shows, find the form's `action="..."` URL.
3. Open `assets/js/config.js` and paste that URL into `mailchimpAction`.
4. In the same Mailchimp code, find the hidden anti-bot input whose name starts with `b_`. Paste that name into `mailchimpHoneypotName`.
5. Save, commit, and test with an email you control.

The free wallpaper pack is promised to early members "when it's ready." Set up a welcome email in Mailchimp with the download link once your wallpaper files exist. Don't promise it more specifically until they do.

## Everyday edits

- **Colors and fonts:** the top of `assets/css/styles.css`.
- **Email, socials, Mailchimp:** `assets/js/config.js`.
- **Add a Popsicle Family member:** only after they've said yes. Put their image in `assets/img/family/` and add an entry to `assets/js/family.js`. Always credit them.
- **New update post:** add a `<li>` at the top of the list in `updates.html`.
- **Wording:** edit the `.html` files directly. Every page shares the same header and footer, so a change to the navigation needs to be made on each page.

## Brand kit

| Color | Hex | Use |
|---|---|---|
| Night | `#1D1D1F` | Backgrounds |
| Snow | `#F5F5F5` | Text, wordmark |
| Orange | `#F7931E` | Buttons, accent |
| Green | `#34B34A` | Accent |
| Sky Blue | `#7CC4EE` | Accent |
| Beanie Pink | `#E98FB9` | Accent |
| Sunburn Red | `#D92B25` | Alerts |

Font: Poppins (loaded from Google Fonts; to avoid that third-party request, download it and host it in `assets/`). Wordmark: heavy white letters with an offset shadow cycling orange, green, blue and pink.

Voice: playful, beachy, short sentences. Never say "official" or "licensed," and never talk about prices, value or investing.

## Public repo hygiene

This repository is public, so keep it clean:

- Never commit passwords, API keys, seed phrases, wallet details or private notes.
- Keep business plans, supplier details, financial figures and legal documents out of this repo.
- Only use the public brand email, never a personal one.
- Check images before uploading. Photos can carry hidden location data, and screenshots can show names, tabs or wallet addresses.
- Only publish someone else's art or likeness with their permission, and credit them.

## Licensing

- The **code** (HTML, CSS, JS) is free for you to reuse and edit.
- The **Lil Pudgy art and related marks are not part of that**. They belong to their respective owners and are used here as permitted for the holder. Don't treat this repo as a license to reuse the art, and confirm your own rights with a lawyer before selling anything with it.

## Folder map

```
index.html ... 404.html   the pages
assets/css/styles.css     brand styles
assets/js/config.js       email, socials, Mailchimp
assets/js/family.js       Popsicle Family gallery data
assets/js/main.js         theme toggle, signup form, gallery
assets/img/               art and favicon
.nojekyll                 tells GitHub Pages to serve files as-is
```
