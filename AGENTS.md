<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the shared site header and footer in the root shell so every content page has consistent navigation.
- Centralize original media URLs and page metadata helpers in the browser-safe site-assets module so pages reuse the same source assets.
- Store all visual styling in the global token-based stylesheet to keep the reference reproduction consistent across pages.
