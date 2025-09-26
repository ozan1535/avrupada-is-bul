import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IAccordionComponent } from "./accordionComponent.types";

export function AccordionComponent({ data }: { data: IAccordionComponent[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item) => (
        <AccordionItem
          value={String(item.id)}
          key={item.id}
          className="border-b"
        >
          <AccordionTrigger className="font-semibold text-lg cursor-pointer">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed dark:text-gray-300">
            {item.text}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
