# Sonam Tobgye — Modern academic website

A standalone, responsive academic website. Built from the CV supplied 15 November 2026 and prepared for GitHub Pages. No WordPress, database, hosting fee, or build tools are necessary.

## Preview before publishing

Double-click `index.html` on your computer, or run a simple local web server in this folder. The site works without installation; Google Fonts will load when connected to the internet.

## Make edits yourself (the easy way)

Open `profile.js` in GitHub and click the pencil button. Update the text between the quote marks, then choose **Commit changes**. Leave punctuation such as commas, square brackets, and curly braces intact. The site uses `profile.js` to populate the biography, teaching, research and education sections.

- **Your short introduction and biography:** `introduction` and `bio` at the beginning of `profile.js`.
- **New teaching subjects:** the `courses` list within the appropriate `teaching` item.
- **New published article:** insert an item in the `published` list. Add a `doi` field with a full `https://doi.org/...` link when available.
- **Research status change:** move the manuscript object from `revision` or `review` to `published` when formally accepted/published, and update its status accurately. `review` includes papers with an editor, under review or newly submitted.
- **Email, LinkedIn:** edit `contact`.
- **Theme, layout and spacing:** `styles.css` (only when changing design).
- **Page structure and navigation:** `index.html`.

## Add your own professional photograph

1. Choose a portrait you own and are comfortable displaying publicly.
2. Crop a good-quality photograph vertically (about 4:5 aspect ratio).
3. Name the file `portrait.jpg` and upload it into the `assets` folder in your GitHub repository.
4. The website automatically displays it. Until then, a clean initials placeholder appears, without broken-image icons. Alternatively, edit the `photo` path in `profile.js` if the filename is different.

## Publish / replace your existing GitHub Pages site

Your GitHub account is `stobgye3-stack` and the user-site repository is `stobgye3-stack.github.io`.

1. Open https://github.com/stobgye3-stack/stobgye3-stack.github.io
2. Optional but recommended: before replacing anything, download a backup of the current repository using **Code → Download ZIP**.
3. Extract this ZIP. In GitHub, use **Add file → Upload files**. Upload all the files and the `assets` folder contents from the extracted package **not the ZIP itself**. For files with the same names, GitHub will update them; GitHub may require you to drag files into the upload interface. If upload refuses replacement, open the file, choose the pencil icon, paste the new contents and commit, or use GitHub Desktop.
4. Make sure `index.html`, `styles.css`, `script.js`, and `profile.js` appear at repository top level, and that `assets/favicon.svg` and later `assets/portrait.jpg` are in the `assets` directory.
5. Commit changes to `main`. Check **Settings → Pages** uses **Deploy from a branch / main / (root)**. Visit https://stobgye3-stack.github.io/ once the Pages deployment reports success.

### Notes on source accuracy and privacy

The 2026 journal paper and manuscript statuses are taken from the supplied CV, with duplicated tobacco-prevention submission removed. Publication data may evolve; please check before circulating. The public version does not include your telephone number, referee contact details, immigration/work-rights information, or the personal details listed in the last section of the CV. Journal rank claims are not displayed.

This website contains no references to the example site's creator. All source files are included and editable.
