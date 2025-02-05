import URL from "./backendUrl";

export async function addNewPromotion(input) {
  try {
    const promotionForm = new FormData();
    promotionForm.append("promotionName", input.promotionName);
    promotionForm.append("discount", input.discount);
    promotionForm.append("expiry", input.expiry);
    promotionForm.append("promotionImage", input.promotionImage[0]);

    const res = await fetch(`${URL}/api/admin/new-promotion`, {
      method: "PUT",
      headers: {},
      body: promotionForm,
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllPromotions() {
  try {
    const res = await fetch(`${URL}/api/admin/all-promotions`, {
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

export async function updatePromotion(input) {
  try {
    const id = input.id;

    const promotionForm = new FormData();
    promotionForm.append("promotionName", input.promotionName);
    promotionForm.append("discount", input.discount);
    promotionForm.append("expiry", input.expiry);
    promotionForm.append("promotionImage", input.promotionImage[0]);

    const res = await fetch(`${URL}/api/admin/promotion/update?id=${id}`, {
      method: "PATCH",
      headers: {},
      body: promotionForm,
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePromotion(id) {
  try {
    const res = await fetch(`${URL}/api/admin/promotion/delete?id=${id}`, {
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
