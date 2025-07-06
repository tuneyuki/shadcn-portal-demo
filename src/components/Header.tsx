"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* ロゴ＋タイトル */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/dataailogo.png"
            alt="ロゴ"
            width={50}
            height={50}
            className="rounded-sm"
          />
          <span className="text-xl font-bold tracking-tight text-primary">
            データ・AI活用ポータル
          </span>
        </Link>

        {/* ナビゲーションメニュー */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>生成AI</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <ul className="grid gap-2 w-48">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/knowledge/rag" className="text-sm text-muted-foreground hover:text-primary">
                        RAG活用ノウハウ
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/knowledge/genai" className="text-sm text-muted-foreground hover:text-primary">
                        ベストプラクティス
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>資料</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <ul className="grid gap-2 w-48">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/knowledge/ppt" className="text-sm text-muted-foreground hover:text-primary">
                        PPT関連資料
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/knowledge/api" className="text-sm text-muted-foreground hover:text-primary">
                        API仕様書
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
