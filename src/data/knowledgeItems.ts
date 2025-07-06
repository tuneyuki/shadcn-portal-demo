import { KnowledgeItem } from "@/types/knowledge";

export const knowledgeItems = [
  {
    title: "RAG活用ノウハウ",
    description: "導入・展開事例や手順を解説",
    href: "/knowledge/rag",
    icon: "LightBulbIcon",
  },
  {
    title: "生成AIベストプラクティス",
    description: "活用例とFAQをまとめた資料",
    href: "/knowledge/genai",
    icon: "SparklesIcon",
  },
  {
    title: "Slack連携",
    description: "Slackとの統合方法",
    href: "/knowledge/slack",
    icon: "ChatBubbleLeftRightIcon",
  },
  {
    title: "PowerPointテンプレート",
    description: "社内向けテンプレート集",
    href: "/knowledge/ppt",
    icon: "PresentationChartBarIcon",
  },
  {
    title: "API仕様書",
    description: "各種APIの使い方ガイド",
    href: "/knowledge/api",
    icon: "CodeBracketIcon",
  },
  {
    title: "FAQ集",
    description: "よくある質問と回答",
    href: "/knowledge/faq",
    icon: "QuestionMarkCircleIcon",
  },
  {
    title: "データセキュリティ",
    description: "情報管理と注意点",
    href: "/knowledge/security",
    icon: "ShieldCheckIcon",
  },
  {
    title: "業務プロセス",
    description: "社内ワークフローの説明",
    href: "/knowledge/process",
    icon: "Squares2X2Icon",
  },
  {
    title: "トレーニング資料",
    description: "新人教育資料集",
    href: "/knowledge/training",
    icon: "AcademicCapIcon",
  },
  {
    title: "リリースノート",
    description: "最新アップデート情報",
    href: "/knowledge/release",
    icon: "DocumentTextIcon",
  },
  {
    title: "プロジェクト管理",
    description: "進行中プロジェクトの情報",
    href: "/knowledge/project",
    icon: "FolderOpenIcon",
  },
] as const satisfies readonly KnowledgeItem[];
