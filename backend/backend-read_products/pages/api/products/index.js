import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  if (request.method === "GET") {
    await dbConnect();

    const products = await Product.find();

    return response.status(200).json(products);
  } else {
    return response.status(404).json({ error: "Not Found" });
  }
}
