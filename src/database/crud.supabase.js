import { toast } from "react-hot-toast";
import { TABLE } from "../utils/consts";
import { len } from "../utils/helpers";
import supabase from "./supabase";

async function getProducts() {
  const { data } = await supabase.from(TABLE).select();
  return data;
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

async function getProductsByIds(ids) {
  //* En desuso hasta nuevo aviso.
  try {
    if (!Array.isArray(ids) || len(ids) == 0) {
      toast.error("El array de IDs no es válido.");
      return [];
    }

    const { data, error } = await supabase.from(TABLE).select().in("id", ids);

    if (error) {
      console.error(`catch en 'getProductsByIds' ${error.message}`);
      return [];
    }

    return data;
  } catch (err) {
    console.error(`catch error en 'getProductsByIds' ${err.message}`);
    return [];
  }
}


export {
  addProduct,
  deleteProduct,
  getProducts,
  getProductsByIds,
  updateProduct,
};
