# Sonam Tobgye — Personal Website

A responsive, minimalist personal site for **Sonam Tobgye, Lecturer at Kaplan Business School**. The visual direction is inspired by [Xiaojie Zhang's academic portfolio](https://luckyjasmin.github.io/xiaojie-research-portfolio/), but the code and writing in this package were created for Sonam.

## Preview locally

Open `index.html` by double-clicking it. No installation or build tools needed. Google Fonts loads when connected to the internet; fallback fonts work offline.

## Publish on GitHub Pages (no programming required)

1. Create a free account at https://github.com if you don't have one.
2. Create a **public** repository named `YOUR_GITHUB_USERNAME.github.io` (replace with your exact username). For example, for a username `sonamtobgye` use `sonamtobgye.github.io`.
3. On the repository page choose **Add file → Upload files**.
4. **Unzip this package first.** Upload `index.html`, `styles.css`, `script.js`, and the **assets** folder so that `index.html` is at the top level of the repository. You can drag the contents into the upload area; verify the `assets/` files have been uploaded too. Do not upload the ZIP as a single file.
5. Select **Commit changes**.
6. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/(root)`; click **Save**. (If Pages is already configured, you may skip this.)
7. Visit `https://YOUR_GITHUB_USERNAME.github.io/` once GitHub has completed deployment. Under the repository's **Actions** tab you can check deployment status.

To use a different repository name, your site will normally be available at `https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/`. Relative CSS, JavaScript, and image paths already support this.

## Personalise before sharing widely

The initial version intentionally uses placeholders rather than guessing facts. In `index.html`:

- **Photo:** Place your photo at `assets/portrait.jpg`; replace the `portrait-placeholder` div with `<img src="assets/portrait.jpg" alt="Portrait of Sonam Tobgye">` as shown in the HTML comment.
- **Biography:** Edit the two paragraphs in `#about` to reflect your background and teaching approach. Remove the editor note once you've replaced it.
- **Teaching:** Replace the placeholder feature cards with subjects you actually teach.
- **Interests:** Replace the placeholder descriptions with genuine interests, projects, talks or updates.
- **Contact:** Replace the paragraph "Email and professional profile links coming soon" with real links, e.g. `<a href="mailto:YOUR_EMAIL">Email me ↗</a>`. Don't publish an email address you don't want public.
- **CV:** If you want a downloadable CV, place a file at `assets/Sonam_Tobgye_CV.pdf` and link to it using `<a href="assets/Sonam_Tobgye_CV.pdf" target="_blank" rel="noopener noreferrer">View CV ↗</a>`.

After making edits, upload changed files to the same repository and commit. GitHub Pages will republish.

## Files

- `index.html`: all website content and markup
- `styles.css`: layout, colours, fonts and mobile responsiveness
- `script.js`: automatic footer year
- `assets/favicon.svg`: browser tab icon
- `assets/monogram.svg`: optional monogram graphic / social preview placeholder

## Notes

No cookies, tracking scripts, forms, backend, or paid services. Google Fonts is loaded from Google's servers; remove its link from `index.html` if you prefer no external requests. This website is **not yet published**: publishing requires access to your own GitHub account.
