import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  console.log("id", id);
  const product = getProductById(id);
  console.log("product", product);
  if (id && !product) {
    return response.status(404).json({ status: "Id not found" });
  }
  response.status(200).json(product);
}
