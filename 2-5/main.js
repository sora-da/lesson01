const money = process.argv[2];

const a =  money / 100 ;

const b =  money % 100;

const c = b / 10;
const d = b % 10;


console.log(` 100円玉は${Math.floor(a)}枚、10円玉は${Math.floor(c)}枚、1円玉は${d}枚です。`);



