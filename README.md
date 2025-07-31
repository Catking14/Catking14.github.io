## Hexo Usage

> Src: [Hexo](https://hexo.io/zh-tw/)

```bash
# install
npm install hexo-cli -g
npm install pnpm -g
npm install .
cd themes/Anatolo && pnpm i

# add new blog post as draft
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