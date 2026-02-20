## Hexo Usage

> Src: [Hexo](https://hexo.io/zh-tw/)

```bash
# install
npm install hexo-cli -g
npm install pnpm -g
npm install .
cd themes/Anatolo && pnpm i

# add a new page in website
# this uses page scaffold
hexo new page <name>

# add new blog post as draft
# this will use draft or page scaffold
hexo new draft <name> # create new draft post
hexo publish <name> # publish draft as article

# local serve
# --draft to show drafts
hexo serve

# deploy
hexo clean
hexo deploy
```

Currently, `deploy` command will create a commit to `gh-pages` branch, and github will use branch `gh-pages` to build website. This is a static website.

### Markdown Special Display Section

**Horizontal Gallery**

In markdown, use the following code block as template:

```
<div class="gallery">
    <img src="...">
    <img src="...">
    <img src="...">
    ...
</div>
```

Then you will have a horizontal gallery bar in the page. Overflow will be handles via scrolling horizontally.

**Header Section**

In every post, there are several options can be added in header:

```
title: The article title. Basically this will be determined when creating drafts.
coverimg: '/images/<path>'. This can add the path of the cover image.
categories: This can add the categories for this article. It can be more than one with the following format.
  - <category 1>
  - ...
tags:   This can add the tags for this article. It can be more than one with the following format.
  - <tag 1>
  - ...
toc: <true/false>   This decides whether to add a table of contents at the left side of the article.
author: This adds the author note at the end of article
copyright: This adds a copyright string at the end of the article. It can be used as a notification string.
date: Typically automatically added by 'hexo publish'. Can be added manually.
```