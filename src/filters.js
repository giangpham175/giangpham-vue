export default {
  coinFormat(value) {
    let coin = new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND"
    }).format(value);
    return coin;
  }
};
