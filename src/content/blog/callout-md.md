---
title: "Code Block Enhancements, Callout Syntax and Image Lightbox"
description: ""
pubDate: 2026-07-04T12:00:00
tags: []
---


## Code Block Enhancements (MD)

This guide shows enhanced code blocks in Markdown (.md) files.

> **Note:** For MDX files, see [Code Block Enhancements (MDX)](/code-blocks-mdx).

### Basic Code Block

A simple code block with syntax highlighting:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

### With Filename

Add a filename label using the `title` attribute:

```ts title="src/utils.ts"
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

```py title="main.py"
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

### Diff Syntax

Show code changes with diff syntax:

```diff
 function greet(name: string): string {
-  return `Hello, ${name}!`;
+  return `Hi, ${name}!`;
 }

-console.log(greet('World'));
+console.log(greet('Astro'));
```

```diff
- oldFunction();
+ newFunction();

+ const added = true;
  const unchanged = false;
- const removed = true;
```

### Filename + Diff

Combine filename with diff syntax:

```diff title="src/config.ts"
 export const config = {
-  theme: 'light',
+  theme: 'dark',
   lang: 'en',
 };
```

### Copy Button

Hover over any code block to see the copy button. Click it to copy the code to your clipboard.

```js title="src/index.js"
// Try copying this code!
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### Multiple Languages

Code blocks support various programming languages:

```css title="styles.css"
.capsule-nav {
  border-radius: 9999px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.8);
}
```

```html title="index.html"
<nav class="capsule-nav">
  <a href="/" class="nav-logo">Logo</a>
  <div class="nav-links">...</div>
</nav>
```

### Features

- **Filename labels** — Show the file name above the code
- **Diff syntax** — Highlight added/removed lines
- **Copy button** — One-click copy to clipboard
- **Syntax highlighting** — Support for 100+ languages
- **Dark mode** — Automatic theme switching

### MD vs MDX

| Feature | MD (.md) | MDX (.mdx) |
|---------|----------|------------|
| Filename | `title="file.ts"` | `title="file.ts"` |
| Diff | `+`/`-` prefixes | `+`/`-` prefixes |
| Copy button | Auto-injected | Auto-injected |
| Custom components | No | Yes |






## Callout Syntax (MD)

This guide shows how to use GitHub-style alert syntax in Markdown (.md) files.

> **Note:** For MDX files, see [Callout Components (MDX)](/callout-mdx) which uses Astro components.

### Basic Usage

Use blockquotes with special syntax to create alerts.

#### Note

> [!NOTE]
> This is a **note** alert. It's perfect for supplementary information that readers might find helpful.

#### Tip

> [!TIP]
> This is a **tip** alert. It's great for sharing shortcuts or recommendations.

#### Important

> [!IMPORTANT]
> This is an **important** alert. Use it when readers need to pay special attention.

#### Warning

> [!WARNING]
> This is a **warning** alert. Use it when readers need to be careful about something.

#### Caution

> [!CAUTION]
> This is a **caution** alert. Use it to advise about risks or negative outcomes.

### Multi-line Alerts

Alerts can contain multiple paragraphs and other markdown content.

> [!NOTE]
> This is the first paragraph of the note. It provides some initial context or information.
>
> This is the second paragraph. Alerts can contain multiple paragraphs to provide more detailed explanations.
>
> You can also include **bold**, *italic*, and `code` formatting.

### Lists in Alerts

Alerts support lists and other markdown features.

> [!TIP]
> Here are some best practices:
>
> 1. Keep alerts concise and to the point
> 2. Use the appropriate type for the content
> 3. Don't overload alerts with too much information
>
> Or use unordered lists:
> - Feature one
> - Feature two
> - Feature three

### How to Use

Use this syntax in any Markdown file:

```markdown
> [!NOTE]
> Your content here.
```

### Available Types

| Type | Use Case |
|------|----------|
| `NOTE` | General information, side notes |
| `TIP` | Suggestions, best practices |
| `IMPORTANT` | Critical information |
| `WARNING` | Potential issues, important considerations |
| `CAUTION` | Risks, negative outcomes |

### MD vs MDX

| Feature | MD (.md) | MDX (.mdx) |
|---------|----------|------------|
| Syntax | `> [!NOTE]` | `<Callout type="note">` |
| Import required | No | Yes |
| Component customization | Limited | Full |
| Best for | Simple callouts | Complex layouts |






## Image Lightbox

CapsuleX includes a built-in lightbox for viewing images in fullscreen mode.

### How It Works

Click any image in a blog post to open it in a fullscreen lightbox overlay.

![Demo Image 1](/images/demo-1.svg)

### Features

- **Fullscreen view** — Images are displayed in a fullscreen overlay
- **Keyboard navigation** — Use arrow keys to navigate between images
- **Close options** — Click the close button, press ESC, or click the overlay background
- **Smooth animations** — Fade in/out transitions for a polished experience
- **Multiple images** — Navigate between all images in the post

### Multiple Images

Here are more example images to test navigation:

![Demo Image 2](/images/demo-2.svg)

![Demo Image 3](/images/demo-3.svg)

### Usage

The lightbox is automatically enabled for all blog posts. Simply:

1. Add images to your Markdown file using standard syntax
2. The lightbox will automatically attach click handlers
3. Click any image to open the fullscreen view

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `ESC` | Close lightbox |
| `←` | Previous image |
| `→` | Next image |

### Configuration

The lightbox can be toggled in `src/config.ts`:

```ts
features: {
  lightbox: true,  // Enable image lightbox on click
}
```
