// 6. 장바구니 뒤바뀜 문제

// 1. userACart.items와 userBCart.items가 동일하게 쿠폰이 적용되어 둘 다 할인이 적용된다.
// 2. userACart와 userBCart는 같은 데이터 주소를 참조하기 때문이다.
// 3. 아래와 같이 깊은 복사를 해 원본 객체와 복사된 객체가 분리되어야 한다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// * 수정된 풀이 (JSON.parse(JSON.stringify(target)) 를 활용)
const userBCart = JSON.parse(JSON.stringify(userACart));

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log("OriginalUserACart ==>", userACart);
console.log("DisCountUserBCart ==>", userBCart);
