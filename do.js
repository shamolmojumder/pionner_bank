const currentSelleingPrice = 199;
const sellingPrice = 799;

const discountPercentce = (((sellingPrice - currentSelleingPrice) / sellingPrice) * 100)
const roundDiscountPercentce = Math.round(discountPercentce);
console.log("current disount is ", roundDiscountPercentce, "% off");