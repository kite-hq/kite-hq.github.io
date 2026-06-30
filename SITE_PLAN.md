# Kite 官网 — 建站交接文档

> 自包含交接文档。在任何全新会话中只读这一份即可接手建站,无需额外上下文。
> 本仓库 `kite-hq/kite-hq.github.io` 通过 **GitHub Pages** 托管,线上地址:**`https://kite-hq.github.io`**。
> 注意:组织主页要落在根路径,仓库**必须**叫 `<org>.github.io`(即 `kite-hq.github.io`)。若叫别的名字(如 `kite-hq`),会被当成项目页,挂在子路径 `kite-hq.github.io/<repo>/`,导致 `base:'/'` 下的资源全部 404。

---

## 0. 目标

为开源 API 客户端 **Kite** 做一个**单页营销官网**:讲清楚它是什么、给谁用、有什么不同,引导去 GitHub / 下载。域名无所谓,走默认的 `kite-hq.github.io`。

产品一句话:**轻量、跨平台、Git 友好的开源 API 客户端。**
口号:**send it up the line.**

---

## 1. 技术选型(建议)

| 方案 | 适用 | 备注 |
|---|---|---|
| **Astro**(推荐) | 营销站首选 | 默认零 JS、极快;需要交互时可挂 React island;`@astrojs/...` 部署 Pages 很顺 |
| Vite + React | 想全程 React | 单页足够,但营销站用不上重前端 |
| 纯静态 HTML + CSS | 极简 | 一个 `index.html` 也能托管,后续难扩展 |

**决策建议:用 Astro。** 它对"内容型 + 少量交互"的落地页最合适,构建产物纯静态,GitHub Pages 直接托管。若想最省事,先用纯 HTML 起一版也行,后面再迁。

---

## 2. GitHub Pages 部署

两种方式二选一:

**A. Actions 构建(推荐,配合 Astro)**
- 仓库名必须是 `kite-hq.github.io`(`<org>.github.io`),否则落不到根路径(见上方注意)。
- 仓库 Settings → Pages → Source = **GitHub Actions**。
- 用官方 `withastro/action` 或标准静态部署 workflow,push 到 `main` 自动构建发布。
- Astro 配置:`site: 'https://kite-hq.github.io'`,`base: '/'`(org 页用根路径,不是项目页,所以 base 是 `/`)。

**B. 纯静态直接发布**
- 把 `index.html` 等放仓库根,Settings → Pages → Source = `main` 分支根目录。

> 注意:这是**组织主页站**(`<org>.github.io` 仓库),路径是根 `/`,不要配成项目页的 `/repo/` 子路径。

---

## 3. 页面结构(单页,自上而下)

1. **Hero**
   - Kite 图标(满色版)+ 字标 "kite"。
   - 大标题:轻量、跨平台的开源 API 客户端。
   - 副标题/slogan:*send it up the line.*
   - 主 CTA:`View on GitHub`(→ `https://github.com/kite-hq/kite`)、`Download`(暂可指向 GitHub Releases)。
   - 背景可用品牌靛蓝 `#4F5BD5`,放一张应用截图(暂用占位图)。

2. **核心卖点(3–4 个卡片)**
   - **轻**:不背 Chromium,安装包小、启动快(Wails + 系统 WebView)。
   - **Git 友好**:集合是纯文本文件,可直接进 Git——diff、review、合并、跨设备同步全靠你自己的仓库。
   - **跨平台**:macOS / Windows / Linux。
   - **开发者优先**:直来直去的 UI,键盘友好。

3. **截图 / 演示区**(占位)
   - 一两张应用界面图。现在没有,先放占位框 + "screenshots coming soon"。

4. **为什么不同 / 对比**(可选)
   - 一句话点出和 Postman/Bruno 的差异:更轻、纯文本、本地优先、不绑账号。

5. **快速开始 / 安装**
   - 下载链接、或 `brew install` 之类(待项目有发布产物后填)。

6. **Footer**
   - GitHub 链接、License(MIT 建议)、org 名 kite-hq。

---

## 4. 品牌资产

完整规范见品牌 `brand.md`。建站要用到的:

**配色**
| 角色 | Hex | 用途 |
|---|---|---|
| Indigo 主色 | `#4F5BD5` | Hero 背景、主按钮 |
| Indigo Deep | `#2E388F` | 主色文字、hover |
| Sky | `#AFC0FF` | 辅助、点缀 |
| Coral | `#FF9F45` | 强调、次级 CTA |
| Ink | `#1A1A2E` | 正文深色字 |

**字体**:标题/UI 用 **Inter**;代码片段用等宽(JetBrains Mono / IBM Plex Mono)。全站 sentence case。

**Logo / favicon 文件**:当前在本机临时目录(scratchpad)的 `kite-brand/` 下,需手动拷入本仓库(建议 `public/` 或根):
- `icon.svg` / `appicon.png` —— 站点 logo
- `favicon.svg` + `png/icon-32.png` 等 —— 浏览器 favicon
- `wordmark.svg` —— 页眉字标(发布前把文字转曲,避免缺字体回退)

> 如果拿不到这些文件,可按上面的几何重新生成:四格风车菱形(对角白/天蓝交替)+ 橙色波浪尾巴 + 细风筝线,底色靛蓝 `#4F5BD5`。

---

## 5. 文案草稿(可直接用)

- Hero 标题:**The lightweight, Git-friendly API client.**
- Hero 副标题:Send it up the line. Your requests live as plain text — diff them, review them, sync them with Git.
- 卖点一(轻):No Chromium baggage. A small, fast desktop app built on Wails.
- 卖点二(Git):Every request is a plain-text file. Version it, branch it, merge it — sync across machines with your own Git repo.
- 卖点三(跨平台):macOS, Windows, and Linux.
- 卖点四(开发者):A no-nonsense UI built for developers. Keyboard-first.
- CTA:`Star on GitHub` · `Download`

---

## 6. 起步清单(新会话可直接照做)

1. `cd kite-hq.github.io`(本仓库;仓库名必须是 `<org>.github.io` 才能落根路径)。
2. `bun create astro@latest .`(或 `npm create astro`),选最简模板。
3. `astro.config` 设 `site: 'https://kite-hq.github.io'`、`base: '/'`。
4. 拷入品牌资产到 `public/`。
5. 按 §3 写单页:Hero → 卖点 → 截图占位 → 安装 → Footer,配色用 §4。
6. 加 GitHub Actions 部署 workflow,push `main` 自动发布。
7. 仓库 Settings → Pages → Source = GitHub Actions。

> 配套的 app 项目设计文档在隔壁 `../kite/DESIGN.md`,卖点/口径以那份为准,保持一致。
