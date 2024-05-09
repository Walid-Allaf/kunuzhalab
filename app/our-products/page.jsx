import { redirect } from "next/navigation";

async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/Categories/GetAll`, {
    // cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const category = await getCategories();
  redirect(`/our-products/${category[0]?.categoryId}`);
};

export default page;
