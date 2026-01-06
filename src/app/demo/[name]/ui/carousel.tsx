export const carousel = {
  name: "carousel",
  defaultComponent: "carousel",
  usage: [
    `import {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"`,
    `<Carousel>\n <CarouselContent>\n  <CarouselItem>...</CarouselItem>\n  <CarouselItem>...</CarouselItem>\n  <CarouselItem>...</CarouselItem>\n </CarouselContent>\n <CarouselPrevious />\n <CarouselNext />\n</Carousel>`,
  ],
  components: {
    "Start Aligned": "carousel-start-aligned",
    "Negative Margin": "carousel-negative-margin",
  },
};
