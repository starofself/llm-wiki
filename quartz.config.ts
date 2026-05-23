import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — llm-wiki (냐안의 별)
 *
 * 디자인 컨셉: 흑백 중심, 한눈에 보기, 한글 가독성
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "llm-wiki — 냐안의 별",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "starofself.github.io/llm-wiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans KR",
        body: "Noto Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f2f2f2",
          gray: "#cccccc",
          darkgray: "#666666",
          dark: "#000000",
          secondary: "#000000",
          tertiary: "#444444",
          highlight: "rgba(0, 0, 0, 0.04)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#1a1a1a",
          gray: "#3a3a3a",
          darkgray: "#aaaaaa",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#bbbbbb",
          highlight: "rgba(255, 255, 255, 0.05)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
