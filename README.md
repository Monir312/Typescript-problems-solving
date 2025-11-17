১. TypeScript এ Interface এবং Type এর পার্থক্য:

TypeScript এ interface এবং type দুটোই অবজেক্টের গঠন বা স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। 

১. ব্যবহার Usage
* interface সাধারণত কোনো object বা class এর structure বর্ণনা করতে ব্যবহৃত হয়।

* type ব্যবহার করা হয় যেকোনো কিছু টাইপ করার জন্য—object, union, tuple, function ইত্যাদি।

২. Extend বা যোগ করা
* interface একাধিক interface-কে extend করতে পারে এবং অন্য interface এটিকে extend করতে পারে।

* type ও extend করা যায় (intersection এর মাধ্যমে), কিন্তু interface-এর মতো বারবার merge হওয়া যায় না।

৩. Declaration merging
* শুধু interface-এ ঘোষণা যোগ করা যায় (declaration merging)।

উদাহরণ:
interface User { name: string }
interface User { age: number }
// final User = { name: string, age: number }

Type-এ এটা করা যায় না।

৪. কোনটা কখন ব্যবহার করবো?
* যদি object/class এর shape নির্ধারণ করা হয়  -> interface ভালো

* যদি  union, primitive, function বা জটিল টাইপ বানানো -> type ভালো


✔️ সংক্ষেপে
* Object structure: Interface এবং Type দুটোতেই অবজেক্টের স্ট্রাকচার বানানো যায়।

* Declaration merging: শুধুমাত্র Interface-এ declaration merging করা যায়, অর্থাৎ একই নামে Interface দুইবার লিখলে তারা একত্রে মিলে যায়। 

* Union type তৈরি: Interface দিয়ে union টাইপ তৈরি করা যায় না, কিন্তু Type দিয়ে সহজেই union তৈরি করা যায়।

* Function এবং Tuple টাইপ: Interface দিয়ে function বা tuple-এর মতো জটিল টাইপ নির্ধারণ করা যায় কিন্তু সীমিতভাবে। অন্যদিকে Type দিয়ে function, tuple, primitive সব ধরনের টাইপ সম্পূর্ণভাবে নির্ধারণ করা যায়।





২. TypeScript এ any, unknown এবং never এর পার্থক্যঃ 

TypeScript-এ এমন কিছু বিশেষ টাইপ আছে, যেগুলো কোডকে নিরাপদ এবং বাগমুক্ত রাখতে সাহায্য করে। তার মধ্যে any, unknown, এবং never খুব জনপ্রিয়। নিচে সহজভাবে ব্যাখ্যা করা হলো।

১. any — সবচেয়ে কম নিরাপদ টাইপ

any মানে হচ্ছে “যেকোনো কিছু”।
TypeScript কোনো রকম টাইপ-চেক ছাড়াই যেকোনো মান ব্যবহার করতে দেবে।

উদাহরণ:
let x: any = 10;
x = "hello";
x = true;
এই কারণে কোডে ভুল থাকলেও TypeScript ধরতে পারবে না।


২. unknown — নিরাপদ any

unknown মানে হল “টাইপ অজানা”, কিন্তু এখানে সরাসরি ব্যবহার করা যায় না। আগে টাইপ-চেক করতে হবে, তারপর ব্যবহার করা যাবে।

উদাহরণ:
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

* যখন ডাটার টাইপ আগে নিশ্চিত নও—তখন unknown সবচেয়ে ভালো।


৩. never — কখনোই ঘটবে না

never টাইপ সেই মানগুলোর জন্য ব্যবহৃত হয় যা কখনও ঘটবে না।

যেমন: একটি function কখনো return না করলে, বা সব ক্ষেত্রে error ছুঁড়ে দিলে।

উদাহরণ:
function throwError(message: string): never {
  throw new Error(message);
}

এটি বিশেষ টাইপ, সাধারণত error handling বা exhaustive checks-এ ব্যবহৃত হয়।