import { createClient } from "@spb/server";

export default async function Page() {
  const supabase = await createClient();

  const { data: images } = await supabase.from("images").select();

  return (
    <ul>
      {images?.length ? (
        images?.map((img, i) => <li key={i}>{img}</li>)
      ) : (
        <span>No images</span>
      )}
    </ul>
  );
}
