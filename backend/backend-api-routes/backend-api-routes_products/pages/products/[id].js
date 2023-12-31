import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

  if (!data) return;

  if (error) {
    return <div>Error loading product data: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>Price: €{data.price}</p>
      <p>{data.category}</p>
    </div>
  );
}

export default ProductDetail;
