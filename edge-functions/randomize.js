import { Context } from "@netlify/edge-functions";

export default async (request, context) => {
  const response = await context.next();
  const page = await response.text();

  const n = 5;
  const r = (Math.random() * n) | 0;

  const updatedPage = page.replace("{{}}", r);

  return new Response(updatedPage, response);
};
