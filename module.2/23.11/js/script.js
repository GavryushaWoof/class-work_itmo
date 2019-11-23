let str = "esfs";
let str2 = 'sfes';
let str3 = `sgd${str2}gkdjl`; //назыывается шаблон
console.log(str);
console.log(str2);
console.log(str3);

let str4 = "a";
str4 += "b";
console.log(str4);

console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log(str4.startsWith("a"));
console.log(str4.endsWith("b"));

console.log(str4.repeat(4));

console.log(str4.includes("ab"));

let str5 = "9999";
console.log(str5.padStart(6, "0"));
console.log(str5.padEnd(6, "0"));
console.log(str5.padEnd(20, "hello"));
let str6 = str5.padEnd(20, "hello");
console.log(str6.substr(4, 2));
console.log(str6.substring(4, 6));
console.log(str6.slice(4, 6));

console.log(str6.charCodeAt(0));
console.log(String.fromCharCode(57));