import KnowledgeCard from "./KnowledgeCard";
import { KnowledgeItem } from "@/types/knowledge";
import Container from "@/components/Container";

type Props = {
  items: readonly KnowledgeItem[];
};

export default function KnowledgeGrid({ items }: Props) {
  return (
    <section className="mt-16">
      <Container>
        <h2 className="text-2xl font-semibold mb-6">おすすめナレッジ</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <KnowledgeCard key={item.href} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
