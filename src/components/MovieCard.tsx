import { Link } from "react-router";
import placeholder from "../assets/movie.avif";

interface MovieCardProps {
  id: number;
  path: string | null;
  title: string;
}

export default function MovieCard({ id, path, title }: MovieCardProps) {
  const imgsrc = path ? `https://image.tmdb.org/t/p/w342${path}` : placeholder;
  return (
    <Link to={`/movie/${id}`} className="block w-44 shrink-0">
      <article className="group overflow-hidden rounded-xl text-white">
        <img
          src={imgsrc}
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
