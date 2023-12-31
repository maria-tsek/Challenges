import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductsPage() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: €{product.price}</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
