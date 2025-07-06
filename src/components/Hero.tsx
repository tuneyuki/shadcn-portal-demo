import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-white to-slate-100 py-12">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          {/* テキストブロック */}
          <div className="text-center md:text-left space-y-4 flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-800 leading-snug">
              データ・AI活用ポータルへようこそ
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              社内の生成AI活用・ノウハウ・資料をここで一元管理。
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 shadow"
            >
              今すぐ使ってみる
            </Button>
          </div>

          {/* 画像ブロック */}
          <div className="shrink-0">
            <Image
              src="/images/logoonly.png"
              alt="AIポータルのイメージ"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
