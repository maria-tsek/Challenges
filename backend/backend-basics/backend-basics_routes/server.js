import { createServer } from "node:http";
import { request } from "node:https";

export const server = createServer((request, response) => {
  if (request.url === `/api/fish/1`) {
    response.statusCode = `200`;
    response.end(`"Shrimp"`);
  } else if (request.url === `/api/fish/2`) {
    response.statusCode = `200`;
    response.end(`"Anemonefish"`);
  } else {
    response.statusCode = `404`;
    response.end("Not Found");
  }
});
