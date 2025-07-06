"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const newContents = [
  {
    title: "RAG導入事例まとめ",
    image: "/images/sample1.png",
    href: "/knowledge/rag-case",
    date: "2025-07-01",
  },
  {
    title: "PS5導入ガイド",
    image: "/images/sample2.png",
    href: "/knowledge/ps5-guide",
    date: "2025-06-28",
  },
  {
    title: "生成AI活用Tips",
    image: "/images/sample3.png",
    href: "/knowledge/genai-tips",
    date: "2025-06-25",
  },
  {
    title: "API活用ベストプラクティス",
    image: "/images/sample4.png",
    href: "/knowledge/api-best",
    date: "2025-06-20",
  },
  {
    title: "Slack連携設定マニュアル",
    image: "/images/sample5.png",
    href: "/knowledge/slack-setup",
    date: "2025-06-15",
  },
  {
    title: "PowerPointテンプレート集",
    image: "/images/sample6.png",
    href: "/knowledge/ppt-templates",
    date: "2025-06-10",
  },
  {
    title: "データセキュリティ基礎",
    image: "/images/sample7.png",
    href: "/knowledge/data-security",
    date: "2025-06-05",
  },
];

export default function NewContentCarousel() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">新着コンテンツ</h2>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {newContents.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
            >
              <Link href={item.href}>
                <Card className="hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden">
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{item.date}</p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
