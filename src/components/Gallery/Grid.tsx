import React from "react";

type GridItem = {
  id: number;
};

type GridProps<T extends GridItem> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function Grid<T extends GridItem>({
  data,
  renderItem,
}: GridProps<T>) {
  return (
    <ul
      className="
        mx-auto
        grid
        w-fit
        max-w-full
        grid-cols-2
        gap-x-6
        gap-y-8
        px-4
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
      "
    >
      {data.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
