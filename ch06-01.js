let product = {
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

console.log(product);

// 이름, 학번, 전공, 연락처
let student = {
    이름: '최자윤',
    학번: 3113,
    전공: '소프트웨어과',
    연락처: '0101231231'
};
console.log(student);

let fruit = {
    name: '바나나',
    price: 120000,
    print: function() {
        console.log(`${name}의 가격은 ${this.price}입니다`);
    }
};
console.log(fruit.name + "\t" + fruit.price);
fruit.print();