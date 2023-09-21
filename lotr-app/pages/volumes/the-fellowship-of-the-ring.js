import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";
export default function title1() {
  const vol1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <h1>{vol1.title}</h1>
      <p>{vol1.description}</p>
      <ul>
        {vol1.books.map((book) => (
          <li key={book.title}>{book.ordinal}</li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="The fellowship of the ring"
      />
      <div>
        <Link href="/volumes/">All the Volumes</Link>
      </div>
      <div>
        <Link href="/volumes/the-two-towers">Next volume</Link>
      </div>
    </div>
  );
}
