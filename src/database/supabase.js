import { createClient } from "@supabase/supabase-js";
import { TABLE } from "../utils/consts";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getProducts() {
  const { data: products } = await supabase.from(TABLE).select();
  return products;
}

async function addProduct(product) {
  const { error } = await supabase.from(TABLE).insert(product);
  if (error) console.log(error);
  else console.log("se añadió locura");
}

async function updateProduct() {
  const { error } = await supabase
    .from(TABLE)
    .update({ name: "Australia" })
    .eq("id", 1);
  if (error) console.log(error);
  else console.log("updated");
}

async function deleteProduct() {
  const response = await supabase.from(TABLE).delete().eq("id", 1);
  console.log(response);
}

export { addProduct, deleteProduct, getProducts, supabase, updateProduct };
