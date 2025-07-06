import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link"; // これを追加！

import {
  ChartBarIcon,
  CubeIcon,
  Cog6ToothIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const dataItems = [
  {
    title: "データ分析ツール",
    href: "/data-tools/analytics",
    description: "データの傾向を可視化し分析するツール群",
    icon: ChartBarIcon,
  },
  {
    title: "BIダッシュボード",
    href: "/data-tools/bi-dashboard",
    description: "経営指標をリアルタイムで監視するダッシュボード",
    icon: CubeIcon,
  },
  {
    title: "ETLプロセス",
    href: "/data-tools/etl-process",
    description: "データ抽出・変換・ロードを効率化する仕組み",
    icon: Cog6ToothIcon,
  },
];

const aiItems = [
  {
    title: "Chatbot導入事例",
    href: "/ai-tools/chatbot",
    description: "顧客対応に役立つチャットボットの活用例",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    title: "画像認識AI",
    href: "/ai-tools/image-recognition",
    description: "画像を解析し自動認識を実現するAI技術",
    icon: SparklesIcon,
  },
  {
    title: "自然言語処理",
    href: "/ai-tools/nlp",
    description: "テキスト解析や要約などの自然言語処理技術",
    icon: CpuChipIcon,
  },
];

export default function DataaiColumnItems() {
  return (
    <section className="bg-muted py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 左カラム */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-800 border-b border-blue-400 pb-2">
              データ活用アイテム
            </h3>
            <div className="space-y-4">
              {dataItems.map(({ icon: Icon, ...item }) => (
                <Card
                  key={item.href}
                  className="hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
                >
                  <CardContent className="flex flex-col sm:flex-row items-start gap-4 py-4">
                    <Icon className="w-8 h-8 text-blue-500 flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-blue-700 text-base sm:text-lg">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {/* ここを修正 */}
                    <Button
                      asChild // これを追加
                      className="self-center whitespace-nowrap bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Link href={item.href}> {/* Buttonの子としてLinkを配置 */}
                        詳細を見る
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 右カラム */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-800 border-b border-green-400 pb-2">
              AI活用アイテム
            </h3>
            <div className="space-y-4">
              {aiItems.map(({ icon: Icon, ...item }) => (
                <Card
                  key={item.href}
                  className="hover:shadow-md hover:border-green-300 transition-all cursor-pointer"
                >
                  <CardContent className="flex flex-col sm:flex-row items-start gap-4 py-4">
                    <Icon className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <div className="flex-1">
                      <CardTitle className="text-green-700 text-base sm:text-lg">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {/* ここも修正 */}
                    <Button
                      asChild // これを追加
                      className="self-center whitespace-nowrap bg-green-600 text-white hover:bg-green-700"
                    >
                      <Link href={item.href}> {/* Buttonの子としてLinkを配置 */}
                        詳細を見る
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}