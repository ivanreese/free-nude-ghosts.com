export default async (request, context) => {
  const response = await context.next();
  const page = await response.text();

  const totalImages = 5;

  const seconds = Date.now() / 1000;
  const index = seconds / 5; // New image every 5 seconds
  const image = (index % totalImages) | 0;

  const updatedPage = page.replace("{{}}", image);

  return new Response(updatedPage, response);
};

export const config = { path: "*" };