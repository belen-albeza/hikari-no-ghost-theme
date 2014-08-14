# Hikari no Ghost

Theme for the Ghost blogging platform. Source code available at [https://github.com/belen-albeza/hikari-no-ghost-theme/](https://github.com/belen-albeza/hikari-no-ghost-theme/).

[![Preview](/screenshot-preview.png?raw=true)](/screenshot.png?raw=true)

## Installation

This theme works with **Ghost 0.4** or newer.

If you are using [Ghost.org](http://ghost.org)'s Pro platform, follow the instructions at [http://support.ghost.org/upload-theme-ghostpro/](http://support.ghost.org/upload-theme-ghostpro/).

If you are hosting your own Ghost installation, follow these steps:

1. Go to the [releases page](https://github.com/belen-albeza/hikari-no-ghost-theme/releases) and download a release.
2. If you are hosting your own Ghost installation, unzip the tarball file into `content/themes/`.
3. Restart Node. How you do this will depend on your actual server setup.
4. Login into your blog, go to `Settings` and pick up `hikari-no-ghost-theme` from the `Theme` dropdown.

## Configuration

**You need to upload cover and logo images for your blog** or this theme will look extremely ugly! Seriously!

If you need to change some wording, etc. you can edit the files with `.hbs` extension. These are Handlebars templates and they contain:

- `default.hbs`: A wrapper for all the other templates.
- `index.hbs`: What gets rendered in the home
- `page.hbs`: What gets rendered when you are viewing a static page.
- `post.hbs`: What gets rendered when you are viewing a single post.
- `tag.hbs`: What gets rendered when you are filtering posts by tags.
- `partials/menu.hbs`: What gets rendered as the menu

### Adding Twitter and Github buttons in the footer

Besides the RSS feed button at the footer, you can also add Twitter and/or Github buttons. Edit `default.hbs` and look for these lines:

```
{{! Put here your own twitter link}}
{{!-- <a class="twitter" href="https://www.twitter.com/ladybenko"><span>@ladybenko</span></a> --}}
{{! Github is also available}}
{{!-- <a class="github" href="https://www.github.com/belen-albeza"><span>belen-albeza</span></a> --}}
```

Uncomment them and edit the actual links and texts to set your own username.

### Editing the About page

This theme assumes you have an *About* static page with the slug `about`. To create one:

1. Login into Ghost and select `New post`
2. Write your *About* page like a regular blog post.
3. Before publishing it, click on the gear icon besides the publish/save button.
4. Tick the `Static page` checkbox and set `about` as the `URL`.
5. Publish the page.

### Adding / removing static pages

If you don't need the *About* page you can get rid of the menu by editing `partials/menu.hbs` and deleting these lines:

```
<nav class="main-menu"><ul>
    <li><a href="/about/">About</a></li>
    {{! Add there all your static pages}}
</ul></nav>
```

If you need to add more static pages, just add more links to that `<ul>` list.

## Development

If you want to play around, you'll need:

- Node
- Grunt (`npm install -g grunt-cli`)

Install the required packages with:

```
npm install
```

You can build a release with:

```
grunt build
```

You can have a daemon watching for changes in the Sass files and recompiling them with:

```
grunt run
```

## Changelog

### 1.0.X

- 1.0.3
    + Blog cover image now fills up the whole header
- 1.0.2
    + Added top menu to static pages
    + Made images in posts to appear centered
- 1.0.1
    + Fixed navigation footer styles
- 1.0.0
    + First version.

## License

© 2014 Belén Albeza.

Source code released under the MIT license. See `LICENSE` for details.

[Font Awesome](https://github.com/FortAwesome/Font-Awesome/) font (`assets/fonts/fontawesome-webfont.woff`) is licensed under the [SIL Open Font License 1.1](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL). 
