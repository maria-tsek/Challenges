import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";
export default function title2() {
  const vol2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <h1>{vol2.title}</h1>
      <p>{vol2.description}</p>
      <ul>
        {vol2.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The two towers"
      />
      <div>
        <Link href="/volumes/the-fellowship-of-the-ring">Previous volume</Link>
      </div>
      <div>
        <Link href="/volumes/the-return-of-the-king">Next volume</Link>
      </div>
    </div>
  );
}
