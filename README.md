# 乔木电台 · Qiaomu Radio for Obsidian

**中文** | [English](#english)

不用离开笔记，收听全球直播电台。原版与 iPod 两种完整播放器，支持搜索、分类浏览、收藏和最近收听。

Listen to live radio without leaving your notes, with two complete players and local favorites.

[安装现有官方版](https://community.obsidian.md/plugins/qiaomu-radio) · [网站版](https://radio.qiaomu.ai/) · [GPL-3.0](LICENSE)

> 仓库拆分中：官方目录仍绑定[原仓库](https://github.com/joeseesun/qiaomu-radio)。此仓库以原仓库 1.1.0 为基线，不代表新版本已发布或目录迁移已完成。

## 功能

| 功能 | 使用体验 |
| --- | --- |
| 原版 / iPod | 在笔记工作区中切换两种播放器 |
| 浏览与搜索 | 按类型、语言和地区发现电台 |
| 收藏与最近 | 保存个人收听记录 |
| 多语言 | 自动选择界面语言，也可在设置中指定 |
| 缓存与容错 | 缓存目录，播放失败时尝试下一家电台 |

## 安装与开发

在 Obsidian 社区插件中搜索 **Qiaomu Radio**，启用后运行“打开乔木电台”。现有用户无需卸载或重新安装。

```bash
npm ci
npm run check
```

开发安装：将 `main.js`、`manifest.json`、`styles.css` 复制到专用测试库的 `.obsidian/plugins/qiaomu-radio/`，重载插件。不要覆盖用户 `data.json`。

`plugin-src/` 是唯一运行时源码目录。CI 检查测试、类型、构建可复现性及依赖边界；这不等于官方审核或移动真机验证。

## 隐私、限制与来源

目录查询连接乔木电台 API 和 Radio Browser，音频连接第三方电台；收藏与设置通过 Obsidian 插件数据保存。直播内容和可用性由第三方决定，没有离线收听或下载功能。最低 Obsidian 版本见 `manifest.json`。

网站、服务端及部署留在原仓库。源码提取自 [`6947427`](https://github.com/joeseesun/qiaomu-radio/commit/694742763248cab0aab8d629316ccc7a52de72dd)，保留作者和许可证，历史提交可在原仓库查阅。未合入尚未验收的 iPod 转盘改动。

开源许可为 GPL-3.0-or-later，另提供[独立商业许可](COMMERCIAL-LICENSE.md)。参见[迁移说明](docs/MIGRATION.md)、[贡献指南](CONTRIBUTING.md)和[安全政策](SECURITY.md)。

作者：向阳乔木 · [GitHub](https://github.com/joeseesun/) · [X](https://x.com/vista8)

## English

Qiaomu Radio offers classic and iPod players, search and filters, local favorites and history, and configurable interface languages. Install **Qiaomu Radio** from Obsidian's community plugins. The listing currently still uses the original repository; this extraction is not a new release or a completed directory migration. Existing users should not reinstall.

Run `npm ci` and `npm run check` to test and build. Copy `main.js`, `manifest.json`, and `styles.css` into a dedicated test vault's `.obsidian/plugins/qiaomu-radio/`, then reload. Never replace user `data.json`. CI verifies tests, types, reproducibility and runtime boundaries, not mobile-device or official-review certification.

Directory queries and third-party audio streams require network access. Settings and listening history are saved as Obsidian plugin data. Stream availability varies; offline listening is not supported. Website/server development remains in the original repository. GPL-3.0-or-later with a separate commercial license. See [migration](docs/MIGRATION.md), [contributing](CONTRIBUTING.md), and [security](SECURITY.md).
