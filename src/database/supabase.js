import { createClient } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";
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
  if (error) console.error(`Error en 'addProduct' ${error.message} `);
}

async function updateProduct(product) {
  const { error } = await supabase
    .from(TABLE)
    .update(product)
    .eq("id", product.id);
  if (error) console.error(`Error en 'updateProduct' ${error.message} `);
}

async function deleteProduct(id) {
  try {
    await supabase.from(TABLE).delete().eq("id", id);
  } catch (err) {
    console.error(`Error en 'deleteProduct' ${err.message} `);
    toast.error("Error al eliminar producto");
  }
}

export { addProduct, deleteProduct, getProducts, supabase, updateProduct };

