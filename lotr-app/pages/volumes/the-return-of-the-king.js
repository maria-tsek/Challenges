import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";
export default function title2() {
  const vol3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <h1>{vol3.title}</h1>
      <p>{vol3.description}</p>
      <ul>
        {vol3.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="The return of the king"
      />
      <div>
        <Link href="/volumes/the-two-towers">Previous volume</Link>
      </div>
    </div>
  );
}
