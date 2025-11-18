import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const carousel = {
  name: "carousel",
  defaultComponent: (
    <div className="w-full max-w-sm mx-auto">
      <Carousel className="w-full" aria-label="Number cards carousel with 5 slides">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-subtle-bg border-subtle-bg">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold text-body-text">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  ),
  usage: [
    `import {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"`,
    `<div className="w-full max-w-sm mx-auto">\n  <Carousel className="w-full" aria-label="Number cards carousel with 5 slides">\n    <CarouselContent>\n      {Array.from({ length: 5 }).map((_, index) => (\n        <CarouselItem key={index}>\n          <div className="p-1">\n            <Card className="bg-subtle-bg border-subtle-bg">\n              <CardContent className="flex aspect-square items-center justify-center p-6">\n                <span className="text-4xl font-semibold text-body-text">{index + 1}</span>\n              </CardContent>\n            </Card>\n          </div>\n        </CarouselItem>\n      ))}\n    </CarouselContent>\n    <CarouselPrevious/>\n    <CarouselNext/>\n  </Carousel>\n</div>`
  ],
  components: {

    // Start-aligned Carousel
    "Start Aligned": (
      <div className="w-full max-w-sm mx-auto">
        <Carousel
          className="w-full"
          aria-label="Responsive cards carousel with start alignment"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-subtle-bg border-subtle-bg">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold text-body-text">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
    ),

    // Carousel with negative margin + half-width items
    "Negative Margin": (
      <div className="w-full max-w-sm mx-auto">
        <Carousel className="w-full" aria-label="Half-width cards carousel with negative margin">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-subtle-bg border-subtle-bg">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold text-body-text">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
    ),
  },
};
