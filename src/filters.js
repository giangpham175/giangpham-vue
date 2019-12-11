export default {
  methods: {
    coinFormat(value) {
      let val = new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND"
      }).format(value);
      return val;
    }
  }
  // coinFormat: function(value, length) {
  //   return value.toFixed(length) + " đ";
  // }
};
