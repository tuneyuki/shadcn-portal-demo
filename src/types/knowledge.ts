// types/knowledge.ts

export type IconName =
  | "LightBulbIcon"
  | "SparklesIcon"
  | "CpuChipIcon"
  | "ChatBubbleLeftRightIcon"
  | "PresentationChartBarIcon"
  | "CodeBracketIcon"
  | "QuestionMarkCircleIcon"
  | "ShieldCheckIcon"
  | "Squares2X2Icon"
  | "AcademicCapIcon"
  | "DocumentTextIcon"
  | "FolderOpenIcon";

export type KnowledgeItem = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};
