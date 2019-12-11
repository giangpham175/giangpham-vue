export default {
  methods: {
    coinFormat(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
  // coinFormat: function(value, length) {
  //   return value.toFixed(length) + " đ";
  // }
};
