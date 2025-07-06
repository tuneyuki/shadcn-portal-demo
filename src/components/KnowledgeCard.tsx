import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { KnowledgeItem } from "@/types/knowledge";

import {
  LightBulbIcon,
  SparklesIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  AcademicCapIcon,
  DocumentTextIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  LightBulbIcon,
  SparklesIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  AcademicCapIcon,
  DocumentTextIcon,
  FolderOpenIcon,
};

export default function KnowledgeCard({
  title,
  description,
  href,
  icon,
}: KnowledgeItem) {
  const Icon = iconMap[icon];

  return (
    <Card className="hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-shadow h-full flex flex-col justify-between rounded-lg">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant="secondary" className="w-fit mt-1">
            ナレッジ
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 flex flex-col gap-4">
        <CardDescription>{description}</CardDescription>
        <Link href={href}>
          <Button variant="link" className="px-0 text-blue-600 hover:underline">
            詳細を見る →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
