export default async function handler(_, res) {
  await res.revalidate("/cards");
  return res.json({ revalidated: true });
}
