import { useRef } from "react";

type CarouselItem = {
  id: number;
};

type CarouselProps<T extends CarouselItem> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function Carousel<T extends CarouselItem>({
  data,
  renderItem,
}: CarouselProps<T>) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white"
        aria-label="Scroll left"
      >
        ←
      </button>

      <ul
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-12 carousel-scroll scrollbar-hide"
      >
        {data.map((item) => (
          <li key={item.id} className="shrink-0">
            {renderItem(item)}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white"
        aria-label="Scroll right"
      >
        →
      </button>
    </div>
  );
}
