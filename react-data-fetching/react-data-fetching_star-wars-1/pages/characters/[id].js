import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const id = useRouter().query.id;

  // const searchParams = useSearchParams();

  // const search = searchParams.get('search');

  const URL = `https://swapi.dev/api/people/${id}`;

  const { data, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
