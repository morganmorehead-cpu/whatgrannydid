# What Granny Did website

A growing website with a Journal (blog), Recipes, Favorites (affiliate products), Shop, and Courses, plus an admin dashboard at **whatgrannydid.com/admin** where you add and edit everything with simple forms. No code needed after setup.

---

## One-time setup (about 30 minutes, on a computer)

### 1. Put the files on GitHub
1. Create a free account at github.com.
2. Click **New repository**. Name it `whatgrannydid`. Private is fine. Click **Create repository**.
3. On the next screen, click **uploading an existing file**.
4. Unzip `whatgrannydid-website.zip`, open the `whatgrannydid-website` folder, select **everything inside it**, and drag it into the upload box.
5. Click **Commit changes**.

### 2. Connect GitHub to Netlify
1. In Netlify, click **Add new site** (or **Add new project**) → **Import an existing project** → **GitHub**, and allow access.
2. Choose the `whatgrannydid` repository. The build settings fill in automatically.
3. Click **Deploy**. In a minute or two your site is live.
4. Go to **Domain management** and add your domain. (If you already attached the domain to the earlier drag-and-drop site, remove it from that site first, then add it here.)

### 3. Turn on the admin login
1. On GitHub: click your profile picture → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**.
   - Application name: `What Granny Did admin`
   - Homepage URL: `https://whatgrannydid.com`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
2. Click **Register application**, copy the **Client ID**, then click **Generate a new client secret** and copy it.
3. In Netlify: open your site → **Site configuration** → **Access & security** → **OAuth** → **Install provider** → **GitHub**, and paste the Client ID and secret.
4. On GitHub, open `src/admin/config.yml`, click the pencil icon, change `YOUR-GITHUB-USERNAME` to your GitHub username, and click **Commit changes**.

### 4. Log in
Go to **whatgrannydid.com/admin** and click **Login with GitHub**. You're in.

(Netlify's menu names change from time to time. If a button isn't exactly where described, search Netlify's docs for "Decap CMS GitHub OAuth.")

---

## Using your dashboard

| To do this | Go to |
| --- | --- |
| Write a blog post | Journal posts → New Journal post |
| Add a recipe | Recipes → New Recipe |
| Add an affiliate product or deal | Favorites and affiliate products → New Product |
| Add an ebook, cookbook, or download | Shop products → New Shop product |
| Add a course | Courses → New Course |
| Change your meal plan link, Instagram, tagline | Site settings → Main settings and links |

Click **Publish** when you're done. The site updates on its own in about a minute.

**Tips**
- **Top pick:** turn this on for a product to show it on the home page.
- **Deal:** add a discount code and it shows as a yellow tag.
- **Sort order:** lower numbers show first.
- **Photos:** upload them right in the form. Keep your kids' faces and anything that shows your address out of photos.

## First things to update
1. **Site settings:** paste your Systeme.io free meal plan link.
2. **Shop products:** paste your Systeme.io ebook link into the ebook.
3. **Favorites:** paste each product's affiliate link (they currently say REPLACE-WITH-AFFILIATE-LINK).

## How selling works
Checkout, emails, and downloads stay in Systeme.io. Your website links to your Systeme.io pages. For courses, build the course in Systeme.io, then add it under Courses with the enrollment link.

## Adding a new room or recipe category
Add it in **Site settings**, then also add it to the matching list in `src/admin/config.yml` on GitHub so it appears in the dropdown.
