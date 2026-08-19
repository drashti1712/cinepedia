import { Link } from "react-router";

interface MovieCardProps {
  id: number;
  path: string | null;
  title: string;
}

export default function MovieCard({ id, path, title }: MovieCardProps) {
  return (
    // <Link to={`/movie/${id}`}>
    //   <article className="group flex flex-col max-w-50 m-2 overflow-hidden rounded-xl cursor-pointer text-white hover:scale-110 transition-transform duration-300">
    //     <img
    //       className="rounded-xl"
    //       src={`https://image.tmdb.org/t/p/w154${path}`}
    //     />
    //     <h3 className="p-2">{title}</h3>
    //   </article>
    // </Link>
    <Link to={`/movie/${id}`} className="block w-44 shrink-0">
      <article className="group overflow-hidden rounded-xl text-white">
        <img
          src={`https://image.tmdb.org/t/p/w342${path}`}
          alt={title}
          className="
            aspect-[2/3]
            w-full
            rounded-xl
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        <h3
          className="
            mt-2
            h-12
            overflow-hidden
            text-sm
            font-medium
            leading-6
          "
        >
          {title}
        </h3>
      </article>
    </Link>
  );
}
