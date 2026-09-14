# 仓库迁移 / Repository migration

- Original: https://github.com/joeseesun/qiaomu-radio
- Destination: https://github.com/joeseesun/qiaomu-radio-obsidian
- Plugin ID: `qiaomu-radio` (unchanged).
- Baseline: `694742763248cab0aab8d629316ccc7a52de72dd`, version `1.1.0`.

Only plugin source, tests, build assets and licensing files were extracted. The original website, public releases and uncommitted iPod development remain untouched. No release is automatically published.

## Remaining gates

1. Merge extraction after CI; compare all three assets with the original 1.1.0.
2. Coordinate repository transfer with Obsidian administrators. Do not create a second listing, change the ID, archive the original, or delete releases.
3. Follow administrator instructions for the baseline release and destination Preview Scan before switching the listing.
4. Changed code requires final-SHA Preview Scan, draft asset verification and isolated installation/upgrade QA before publication.
5. Read back the directory repository/version and actual client updates before calling migration complete.

Official guidance: https://docs.obsidian.md/community-directory/faq — only administrators can transfer entries to another GitHub location, via the official Discord `#community-directory` channel.

## Administrator request draft (not sent)

Hello Obsidian team,

I maintain Qiaomu Radio (plugin ID `qiaomu-radio`) and own both repositories. Please help migrate the existing directory entry from `joeseesun/qiaomu-radio` to `joeseesun/qiaomu-radio-obsidian`, preserving its ID and existing users' update path.

The original repository contains both website and plugin code. The scanner applies Obsidian-specific rules to website-only React sources that are not included in the plugin build. The destination extracts the 1.1.0 plugin source, preserves its license and identity, and excludes website/server sources. Original public releases remain available.

Please advise how to coordinate the destination baseline release and Preview Scan before switching the listing. Thank you.

## Presentation follow-up

GitHub social preview is not configured; upload an approved real UI capture in Settings → Social preview.
