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

function deepCopy(target) {
  // 기본 데이터 타입이나 null은 그대로 반환
  if (target === null || typeof target !== "object") {
    return target;
  }

  // 배열인 경우
  if (Array.isArray(target)) {
    const arrCopy = [];
    for (let i = 0; i < target.length; i++) {
      arrCopy[i] = deepCopy(target[i]); // 재귀적으로 복사
    }
    return arrCopy;
  }

  // 객체인 경우
  const objCopy = {};
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(target[key]); // 재귀적으로 복사
    }
  }
  return objCopy;
}

const userBCart = deepCopy(userACart);

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log("OriginalUserACart ==>", userACart);
console.log("DisCountUserBCart ==>", userBCart);
