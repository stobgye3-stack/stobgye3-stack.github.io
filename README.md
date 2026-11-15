# Sonam Tobgye — Academic Website

A minimalist, responsive academic website built from Sonam Tobgye's CV supplied 15 November 2026. HTML, CSS and JavaScript only; no paid hosting or build tools required.

## View it on your computer

Double-click `index.html` in the extracted folder. The website has no server requirement. Internet access is needed only for optional Google fonts.

## Update your details (easiest way)

Open **`profile.js`** with any text editor (Notepad, VS Code or GitHub's pencil button). Every publication, teaching appointment, degree, award and email/LinkedIn URL is editable there.

- Add or remove publication entries from the `published`, `revision` and `review` arrays.
- Update `status` when a journal decision changes. Move accepted articles into `published` only once accepted/published, and revise their bibliographic details accordingly.
- To add verified DOIs, set `doi: 'https://doi.org/...'` on a publication.
- Update `teaching`, `education`, `experience`, `awards` and `interests` using the existing examples.
- Edit the introductory text and the headings directly in `index.html`.
- For a photo: place your licensed photograph at `assets/portrait.jpg` and change the image line in `index.html` from `assets/portrait-placeholder.svg` to `assets/portrait.jpg`. Update its `alt` text to `Portrait of Sonam Tobgye`.
- Edit `styles.css` to change colours, layout or font sizes.

The email currently uses the contact email supplied in the CV. Remove/replace it in `profile.js` before publication if you prefer not to publish that address. The CV's phone number, referee contact details, work rights and other private information were deliberately excluded. **The original CV is not bundled**; the site says "CV available on request" to avoid inadvertently publishing sensitive details.

## Publish on GitHub Pages

Your GitHub username from the earlier screenshot is `stobgye3-stack`. To use the short URL `https://stobgye3-stack.github.io/`:

1. In GitHub, create a **Public** repository named exactly `stobgye3-stack.github.io`, or rename your existing repository under **Settings → General → Repository name**.
2. Open the repository and choose **Add file → Upload files** (or **uploading an existing file** if empty).
3. Upload **the contents of this folder** (`index.html`, `profile.js`, `script.js`, `styles.css`, `assets`, `README.md`), not the ZIP. `index.html` must be in the repository root.
4. Click **Commit changes**.
5. Go to **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then Save.
6. When GitHub shows a successful deployment, open `https://stobgye3-stack.github.io/`.

If you keep a differently named repository, GitHub Pages can also publish it as a project site with a `/REPOSITORY-NAME/` suffix.

## Changes made while adapting the CV

- Removed duplicate entries for "Using risk information to inform adolescent tobacco prevention" (the CV lists it twice).
- Displayed "Journal of Asian Economics" under **Published** and grouped all other journal manuscripts by their current editorial status.
- Preserved listed journal names, adding common stylistic punctuation in the display (e.g., Quality & Quantity).
- Omitted all unverified journal-ranking claims from the public website. Publication rankings can be added later, with the classification year and verification source.
- The CV's 'Teaching Sessional (School of Economics, Finance and Marketing)' affiliation was interpreted as RMIT University, based on the other relevant CV context. Confirm before publication.
- The academic biography is an original summary based on the CV, not a verbatim reproduction.
- No references to the sample portfolio's creator appear in these files.

## File inventory

- `index.html`: page structure, introductory biography, sections
- `profile.js`: **easy-to-edit professional data**
- `script.js`: automatically renders the content from `profile.js`
- `styles.css`: visual design and mobile layout
- `assets/`: replaceable portrait placeholder and favicon

This site is static and requires no back-end or subscription.
