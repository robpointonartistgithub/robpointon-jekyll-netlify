#Readme

me+robpointon

*Build Jekyll*

bundle exec jekyll serve

*Serve Jekyll*
bundle exec jekyll serve



## Jekyll Netlify Boilerplate

*Note: Check out my [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate). It does pretty much the same as this project but uses the [Eleventy](https://www.11ty.io/) static site generator. It's fast, flexible and doesn't require Ruby.*

**A really simple Jekyll template for creating a fast, static website on Netlify with
a continuous deployment workflow.**

🔥 **This project is featured on Netlify's official [template showcase](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/) and blog: [The top 10 Static Site Generators to watch in 2018](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/)** 🔥

* Minimal styling, ready to make your own
* Example blog posts, pages and contact form
* Responsive CSS Grid layout with fallbacks for older browsers
* Continuous Deployment workflow via Netlify and Github
* Netlify CMS for managing content
* Netlify Identity for authenticating users
* Netlify Forms for processing your static HTML forms with reCAPTCHA
* Optional Netlify `_redirects` and `_headers` files ready to use
* Jekyll SASS pipeline
* Minified HTML and CSS

Based on Netlify's [Jekyll + Netlify CMS](https://github.com/netlify-templates/jekyll-netlify-cms) starter template, head over there for more details on deployment and build settings or to get help with setting up Netlify.

For help with templates, local development and other Jekyll related stuff, check out the excellent [Jekyll Docs](https://jekyllrb.com/docs/home/).

## [View Demo](https://jekyll-netlify-boilerplate.netlify.com/)

## Performance

You can test the demo site's TTFB (Time To First Byte) at [testmysite.io](https://testmysite.io/5b50abe51f12b74b81dd5442/jekyll-netlify-boilerplate.netlify.com)

## Getting started

Simply click the deploy button to get your own copy of the repository deployed to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/jekyll-netlify-boilerplate&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Next, navigate to `/admin` on your site, choose your OAuth provider from the
login box and you should then be logged into your CMS.

Now you're all set, and you can start editing content!

**Note:** if you switch the repo that was created to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## Local Development

Clone this repository and run:

```bash
bundle install
bundle exec jekyll server --watch
```
Jekyll will watch your project folder for changes.

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.

## Edit content locally
To access the Netlify CMS admin on your local machine, follow these steps:

change local_backend to true ```local_backend: true ``` in the config.yml file in the admin folder.

Run npx netlify-cms-proxy-server from the root directory of the repository. The proxy server will run on a different port, typically port 8081.

Now, go to whatever route is running your website locally and go to /admin. So, if the app runs on port 3000 for example, you can access your admin at localhost:3000/admin

## Debug...

```
    site: {{ site | jsonify | escape }}
    page: {{ page | jsonify | escape }}
    layout: {{ layout | jsonify | escape }}
    content: {{ content | jsonify | escape }}
    paginator: {{ paginator | jsonify | escape }}
    Link tree: {{ site.data.members | jsonify | escape  }}
    Link tree: {{ site.data.linktrees.linktree.linktree_items | jsonify | escape  }}
```

<pre id="jekyll-debug"></pre>
<script>
  var obj = JSON.parse(decodeURIComponent("{{ page | jsonify | uri_escape }}"));
  var prettyJson = JSON.stringify(obj, null, 4);  // Pretty-printed JSON (indented 4 spaces).
  document.getElementById("jekyll-debug").textContent = prettyJson;
</script>
```




