import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — llm-wiki (냐안의 별)
 *
 * 디자인 컨셉: 흑백 + 미세한 강조, 한글 가독성, 모던 미니멀
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
        header: "IBM Plex Sans KR",
        body: "IBM Plex Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",          // 오프화이트 배경 (눈 편함)
          lightgray: "#eeeeee",      // 보더, 카드 배경
          gray: "#b8b8b8",           // 가벼운 구분선
          darkgray: "#555555",       // 보조 텍스트
          dark: "#1a1a1a",           // 본문 (소프트 블랙)
          secondary: "#2c3e50",      // 링크/active (다크 네이비, 미세 강조)
          tertiary: "#5a7a9a",       // 호버, 그래프 노드
          highlight: "rgba(44, 62, 80, 0.06)",
          textHighlight: "#fff5b188",
        },
        darkMode: {
          light: "#121214",          // 소프트 다크 배경
          lightgray: "#1f1f23",
          gray: "#3a3a40",
          darkgray: "#a8a8b0",
          dark: "#f0f0f0",           // 본문 (소프트 화이트)
          secondary: "#a8c0d8",      // 라이트 블루 강조
          tertiary: "#7a90a8",
          highlight: "rgba(168, 192, 216, 0.08)",
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
