export default {
  methods: {
    coinFormat(value) {
      let coin = new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND"
      }).format(value);
      return coin;
    }
  }
  // coinFormat: function(value, length) {
  //   return value.toFixed(length) + " đ";
  // }
};
