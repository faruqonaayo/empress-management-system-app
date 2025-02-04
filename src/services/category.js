import URL from "./backendUrl";

export async function addNewCategory(input) {
  try {
    const categoryForm = new FormData();
    categoryForm.append("categoryName", input.categoryName);
    categoryForm.append("categoryImage", input.categoryImage[0]);

    const res = await fetch(`${URL}/api/admin/new-category`, {
      method: "PUT",
      headers: {},
      body: categoryForm,
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllCategories() {
  try {
    const res = await fetch(`${URL}/api/admin/all-categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategory(id) {
  try {
    const res = await fetch(`${URL}/api/admin/category/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
