"use strict";

const TelegramBot = require('node-telegram-bot-api');
const token = '/*-------------Bu yerga Botingizni tokenini joylang-------------*/';

const words = {
  "salom": `Salom! Sizga qanday yordam berishim mumkin?`,
  "Salom": `Salom! Sizga qanday yordam berishim mumkin?`,
  "nima yangiliklar": "Hamdardman, sizga nima haqida ma'lumot berishim mumkin?",
  "rahmat": "Arzimaydi!",
  "ha bor":"unda savolingizni bering",
  "Assalomu alaykum":"Va alyku assalom",
  "assalomu alaykum":"Va alyku assalom",
  "Va alyku assalom":"Assalomu alaykum",
  "xayr": "Xayr yaxshi qoling",
  "yaxshi": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "qanday": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "yordam": "Biror savol bormi?",
  "mol":"zing molsan",
  "kimsiz":"men dasturchi botman",
  "siz kimsiz":"men dasturchi botman",
  "sen kimsan":"men dasturchi botman",
  "kimsan":"men dasturchi botman",
  "ahmoq":"o'zing ahmoqsan",
  "dangasa":"o'zing dangasasan bo'lmasa ha deb telegram titkilamasdan ishingni qil",
  "it":"sen ko'ppakmisan unda",
  "dovdir":"o'zingsan dovdir",
  "qo'y":"o'zing qo'ysan",
  "qanday":"shunday",
  "shunday":"qanday",
  "kim":"siz",
  "nima qilyapsiz":"😂 siz bilan yozishyapmanku",
  "nima qilyapsan":"😂 siz bilan yozishyapmanku",
  "cho'chqa":"o'zing cho'chqasan",
  "sizni kim yaratgan":"meni dasturchi yaratgan, lekin aynan kimligini ayta olmayman",
  "sizni qaysi dasturlash tilida yaratishgan":"men HTML, JavaScript, NodeJs dasturlash tillarida yaratilganman, meni dasturchi yaratgan",
  "Siz qaysi dasturlash tilida yaratilgansiz":"men HTML, JavaScript, NodeJs dasturlash tillarida yaratilganman, meni dasturchi yaratgan", 
  "siz qaysi dasturlash tilida yaratilgansiz":"men HTML, JavaScript, NodeJs dasturlash tillarida yaratilganman, meni dasturchi yaratgan", 
  "siz nima qila olasiz":"menga dasturchilik bo'yicha savollaringiz bo'lsa bering, men javob berishga harakat qilaman undan siz meni guruhlarga qo'shsangiz men siz bilan suhbatlashishim mumkin",
  "eshak":"o'zingsan eshak",
  "eshak miyya":"tovuq miyya",
  "tovuq miyya":"eshak miyya",
  "manqa":"o'zingsan manqa",
  "garang":"o'zing garangsan",
  "jinni":"o'zing jinnisan",
  "tupoy":"o'zing tupoysan",
  "tentak":"o'zing tentaksan",
  "ahmoq":"o'zing ahmoqsan",
  "kalamush":"o'zing kalamushsan",
  "mol":"o'zing molsan",
  "kal":"o'zing kalsan",
  "oshqovoq":"unda sen tovuq miyyasan",
  "qora negir":"tullak",
  "maymun":"shimpanze",
  "baqa":"qurbaqa",
  "qurbaqa":"baqa",
  "bot":"o'zing botsan",
  "oting nima":"mening ismim dasturchi bot",
  "otingiz nima":"mening ismim dasturchi bot",
  "ismingiz nima":"mening ismim dasturchi bot siznikichi",
  "isming nima":"mening ismim dasturchi bot", 
  "Bot":"o'zing botsan",
  "menga jsda telegram bot kerak":`
  "use strict";
// Uzbekcha Telegram bot yaratish
const TelegramBot = require('node-telegram-bot-api');
const token = "<------O'zingizni botingizni tokenini joylang------>";

// Uzbekcha so'zlar va javoblar
const words = {
  "salom": "Salom! Sizga qanday yordam berishim mumkin?",
  "Salom": "Salom! Sizga qanday yordam berishim mumkin?"
  "nima yangiliklar": "Hamdardman, sizga nima haqida ma'lumot berishim mumkin?",
  "rahmat": "Arzimaydi!",
  "ha bor":"unda savolingizni bering",
  "Assalomu alaykum":"Va alyku assalom",
  "assalomu alaykum":"Va alyku assalom",
  "Va alyku assalom":"Assalomu alaykum",
  "xayr": "Xayr yaxshi qoling",
  "yaxshi": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "qanday": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "yordam": "Biror savol bormi?",
  "mol":"zing molsan",
  // yana savollar va javoblar qo'shing
};

// Botni yaratish
const bot = new TelegramBot(token, {polling: true});

// Botning ishlash logikasi
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();
  const firstName = msg.from.first_name;
  if (message in words) {
    bot.sendMessage(chatId, words[message]);
  } else {
    bot.sendMessage(chatId, 'Assalomu alaykum siz ushbu botga hush kelibsiz !');
  }
});`,
  "menga jsda telegram chatbot kerak":`
  "use strict";
// Uzbekcha Telegram bot yaratish
const TelegramBot = require('node-telegram-bot-api');
const token = "<------O'zingizni botingizni tokenini joylang------>";

// Uzbekcha so'zlar va javoblar
const words = {
  "salom": "Salom! Sizga qanday yordam berishim mumkin?",
  "Salom": "Salom! Sizga qanday yordam berishim mumkin?"
  "nima yangiliklar": "Hamdardman, sizga nima haqida ma'lumot berishim mumkin?",
  "rahmat": "Arzimaydi!",
  "ha bor":"unda savolingizni bering",
  "Assalomu alaykum":"Va alyku assalom",
  "assalomu alaykum":"Va alyku assalom",
  "Va alyku assalom":"Assalomu alaykum",
  "xayr": "Xayr yaxshi qoling",
  "yaxshi": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "qanday": "Yaxshi, sizga qanday yordam berishim mumkin?",
  "yordam": "Biror savol bormi?",
  "mol":"zing molsan",
  // yana savollar va javoblar qo'shing
};

// Botni yaratish
const bot = new TelegramBot(token, {polling: true});

// Botning ishlash logikasi
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();
  const firstName = msg.from.first_name;
  if (message in words) {
    bot.sendMessage(chatId, words[message]);
  } else {
    bot.sendMessage(chatId, 'Assalomu alaykum siz ushbu botga hush kelibsiz !');
  }
}); // keyin botingizni token degan joyiga o'zingizni tokeningizni joylashtiring va terminalda node bot.js yani js faylingizni kiritib enter tugmasini bosing va botingiz ishlaydi`,

  "kimsiz":"salom Men dasturchi botman, agarda sizning dasturlash bo'yicha savollaringiz bo'lsa savolingizga javob berishim mumkin, undan tashqari meni guruhlarga qo'shib meni admin qilsangiz, siz bilan suhbatlashishim mumkin",
  "kimsan":"salom Men dasturchi botman, agarda sizning dasturlash bo'yicha savollaringiz bo'lsa savolingizga javob berishim mumkin, undan tashqari meni guruhlarga qo'shib meni admin qilsangiz, siz bilan suhbatlashishim mumkin",
  "backend nima":"Backend, yoki back-end, veb-sayt yoki dastur ishlab chiqarish chiqishning server tomonidagi qismi sifatida ma'nosini anglatadi. Bu, frontendning qarshisidagi qismi bo'lib, yordam bilan server o'ziga tegishli ma'lumot almashishni boshqaradi. Backend dastur server tomonidan boshqarishda dasturiy ta'minotchilar tillaridan, ma'lumotlar bazasini boshqarish, ma'lumotlarni saqlash, ma'lumotlarni qayta ishlash, bilan ma'lumot almashish va boshqarishni amalga oshirish uchun ishlaydi. Ular server nazoratidagi logika va boshqaruvni ta'minlashda muhim rol o'ynaydilar. Backend dasturchilar, dasturlash tillari sifatida Python, Java, Ruby, PHP, Node.js va boshqalaridan ketkazishadi.",
  "frontend nima":"Frontend, yoki front-end, veb-sayt yoki dastur ishlab chiqarishni kuzatishdagi qismi sifatida ma'nosini anglatadi. Bu, bo'yicha o'zaro amalda qo'llaniladigan interfeysni va tasviriy dizaynni dizaynni o'z ichiga oladi. Frontend, CSS and JavaScript kabi dasturlash tillaridan, sifatli tozalash va ishlab chiqarishni ta'minlash uchun ishlaydi. Ular veb-sayt yoki dasturning tasviri ko'rinishi, javob beruvchi bo'lishi va foydalanuvchiga qulay bo'lishini ta'minlashga e'tibor qaratishadi.",
  ".NET nima":".NET - Microsoft tomonidan ishlab chiqilgan dasturiy ta'minot tizimi bo'lib, u ilovalarni yaratish va ishga tushirish uchun platformani ta'minlaydi. U oldindan tuzilgan kodlarning katta kutubxonasini va ishlab chiquvchilarga turli platformalar, jumladan Windows, macOS va Linux uchun ilovalar yaratish imkonini beruvchi ish vaqti muhitini o'z ichiga oladi. .NET ramkasi C#, Visual Basic.NET va F# kabi bir nechta dasturlash tillarini qo'llab-quvvatlaydi. U ilovalarni ishlab chiqishni soddalashtiradigan va samaradorlikni oshiradigan umumiy kutubxonalar va vositalar to'plamini taqdim etadi. .NET Frameworkning ba'zi asosiy komponentlari quyidagilardan iborat: Common Language Runtime (CLR): CLR .NET ilovalari uchun ijro muhitidir. U xotirani boshqarish, istisnolardan foydalanish va xavfsizlik kabi xizmatlarni taqdim etadi. Asosiy sinf kutubxonasi (BCL): BCL bu .NET ilovalari uchun umumiy funksionallikni ta'minlovchi qayta foydalanish mumkin bo'lgan sinflar, interfeyslar va qiymat turlari to'plamidir. U fayllarni kiritish-chiqarish, tarmoq, ma'lumotlar bazasiga kirish va boshqalar uchun sinflarni o'z ichiga oladi. Language Integrated Query (LINQ): LINQ - bu ishlab chiquvchilarga ma'lumotlar bazalari, XML va to'plamlar kabi turli manbalardan ma'lumotlarni birlashtirilgan sintaksis yordamida so'rash va boshqarish imkonini beruvchi til kengaytmalari to'plami. ASP.NET: ASP.NET veb-ishlab chiqish tizimi bo'lib, ishlab chiquvchilarga dinamik veb-ilovalar va xizmatlarni yaratish imkonini beradi. U server tomoni boshqaruvlari, autentifikatsiya va ma'lumotlarga kirish kabi xususiyatlarni o'z ichiga oladi. Windows Presentation Foundation (WPF): WPF - bu Windows ilovalarida boy foydalanuvchi interfeyslarini yaratish uchun grafik quyi tizim. U ilg'or grafik va multimediya imkoniyatlariga ega ish stoli ilovalarini yaratish uchun moslashuvchan va kuchli asosni taqdim etadi. Xamarin: Xamarin - bu o'zaro platformalarni ishlab chiqish tizimi bo'lib, u ishlab chiquvchilarga .NET va C#-dan foydalangan holda iOS, Android va Windows uchun mahalliy mobil ilovalar yaratish imkonini beradi. Umuman olganda, .NET ramkasi ish stoli dasturiy ta'minotidan veb va mobil ilovalargacha bo'lgan keng doiradagi ilovalarni ishlab chiqish uchun keng qamrovli va ko'p qirrali platformani taqdim etadi. U rivojlanishni soddalashtiradigan va samaradorlikni oshiradigan boy vositalar, kutubxonalar va ramkalarni taklif etadi.",
  ".Net nima":".NET - Microsoft tomonidan ishlab chiqilgan dasturiy ta'minot tizimi bo'lib, u ilovalarni yaratish va ishga tushirish uchun platformani ta'minlaydi. U oldindan tuzilgan kodlarning katta kutubxonasini va ishlab chiquvchilarga turli platformalar, jumladan Windows, macOS va Linux uchun ilovalar yaratish imkonini beruvchi ish vaqti muhitini o'z ichiga oladi. .NET ramkasi C#, Visual Basic.NET va F# kabi bir nechta dasturlash tillarini qo'llab-quvvatlaydi. U ilovalarni ishlab chiqishni soddalashtiradigan va samaradorlikni oshiradigan umumiy kutubxonalar va vositalar to'plamini taqdim etadi. .NET Frameworkning ba'zi asosiy komponentlari quyidagilardan iborat: Common Language Runtime (CLR): CLR .NET ilovalari uchun ijro muhitidir. U xotirani boshqarish, istisnolardan foydalanish va xavfsizlik kabi xizmatlarni taqdim etadi. Asosiy sinf kutubxonasi (BCL): BCL bu .NET ilovalari uchun umumiy funksionallikni ta'minlovchi qayta foydalanish mumkin bo'lgan sinflar, interfeyslar va qiymat turlari to'plamidir. U fayllarni kiritish-chiqarish, tarmoq, ma'lumotlar bazasiga kirish va boshqalar uchun sinflarni o'z ichiga oladi. Language Integrated Query (LINQ): LINQ - bu ishlab chiquvchilarga ma'lumotlar bazalari, XML va to'plamlar kabi turli manbalardan ma'lumotlarni birlashtirilgan sintaksis yordamida so'rash va boshqarish imkonini beruvchi til kengaytmalari to'plami. ASP.NET: ASP.NET veb-ishlab chiqish tizimi bo'lib, ishlab chiquvchilarga dinamik veb-ilovalar va xizmatlarni yaratish imkonini beradi. U server tomoni boshqaruvlari, autentifikatsiya va ma'lumotlarga kirish kabi xususiyatlarni o'z ichiga oladi. Windows Presentation Foundation (WPF): WPF - bu Windows ilovalarida boy foydalanuvchi interfeyslarini yaratish uchun grafik quyi tizim. U ilg'or grafik va multimediya imkoniyatlariga ega ish stoli ilovalarini yaratish uchun moslashuvchan va kuchli asosni taqdim etadi. Xamarin: Xamarin - bu o'zaro platformalarni ishlab chiqish tizimi bo'lib, u ishlab chiquvchilarga .NET va C#-dan foydalangan holda iOS, Android va Windows uchun mahalliy mobil ilovalar yaratish imkonini beradi. Umuman olganda, .NET ramkasi ish stoli dasturiy ta'minotidan veb va mobil ilovalargacha bo'lgan keng doiradagi ilovalarni ishlab chiqish uchun keng qamrovli va ko'p qirrali platformani taqdim etadi. U rivojlanishni soddalashtiradigan va samaradorlikni oshiradigan boy vositalar, kutubxonalar va ramkalarni taklif etadi.",
  ".NET nima":".NET - Microsoft tomonidan ishlab chiqilgan dasturiy ta'minot tizimi bo'lib, u ilovalarni yaratish va ishga tushirish uchun platformani ta'minlaydi. U oldindan tuzilgan kodlarning katta kutubxonasini va ishlab chiquvchilarga turli platformalar, jumladan Windows, macOS va Linux uchun ilovalar yaratish imkonini beruvchi ish vaqti muhitini o'z ichiga oladi. .NET ramkasi C#, Visual Basic.NET va F# kabi bir nechta dasturlash tillarini qo'llab-quvvatlaydi. U ilovalarni ishlab chiqishni soddalashtiradigan va samaradorlikni oshiradigan umumiy kutubxonalar va vositalar to'plamini taqdim etadi. .NET Frameworkning ba'zi asosiy komponentlari quyidagilardan iborat: Common Language Runtime (CLR): CLR .NET ilovalari uchun ijro muhitidir. U xotirani boshqarish, istisnolardan foydalanish va xavfsizlik kabi xizmatlarni taqdim etadi. Asosiy sinf kutubxonasi (BCL): BCL bu .NET ilovalari uchun umumiy funksionallikni ta'minlovchi qayta foydalanish mumkin bo'lgan sinflar, interfeyslar va qiymat turlari to'plamidir. U fayllarni kiritish-chiqarish, tarmoq, ma'lumotlar bazasiga kirish va boshqalar uchun sinflarni o'z ichiga oladi. Language Integrated Query (LINQ): LINQ - bu ishlab chiquvchilarga ma'lumotlar bazalari, XML va to'plamlar kabi turli manbalardan ma'lumotlarni birlashtirilgan sintaksis yordamida so'rash va boshqarish imkonini beruvchi til kengaytmalari to'plami. ASP.NET: ASP.NET veb-ishlab chiqish tizimi bo'lib, ishlab chiquvchilarga dinamik veb-ilovalar va xizmatlarni yaratish imkonini beradi. U server tomoni boshqaruvlari, autentifikatsiya va ma'lumotlarga kirish kabi xususiyatlarni o'z ichiga oladi. Windows Presentation Foundation (WPF): WPF - bu Windows ilovalarida boy foydalanuvchi interfeyslarini yaratish uchun grafik quyi tizim. U ilg'or grafik va multimediya imkoniyatlariga ega ish stoli ilovalarini yaratish uchun moslashuvchan va kuchli asosni taqdim etadi. Xamarin: Xamarin - bu o'zaro platformalarni ishlab chiqish tizimi bo'lib, u ishlab chiquvchilarga .NET va C#-dan foydalangan holda iOS, Android va Windows uchun mahalliy mobil ilovalar yaratish imkonini beradi. Umuman olganda, .NET ramkasi ish stoli dasturiy ta'minotidan veb va mobil ilovalargacha bo'lgan keng doiradagi ilovalarni ishlab chiqish uchun keng qamrovli va ko'p qirrali platformani taqdim etadi. U rivojlanishni soddalashtiradigan va samaradorlikni oshiradigan boy vositalar, kutubxonalar va ramkalarni taklif etadi.",
  "dodnet nima":".NET - Microsoft tomonidan ishlab chiqilgan dasturiy ta'minot tizimi bo'lib, u ilovalarni yaratish va ishga tushirish uchun platformani ta'minlaydi. U oldindan tuzilgan kodlarning katta kutubxonasini va ishlab chiquvchilarga turli platformalar, jumladan Windows, macOS va Linux uchun ilovalar yaratish imkonini beruvchi ish vaqti muhitini o'z ichiga oladi. .NET ramkasi C#, Visual Basic.NET va F# kabi bir nechta dasturlash tillarini qo'llab-quvvatlaydi. U ilovalarni ishlab chiqishni soddalashtiradigan va samaradorlikni oshiradigan umumiy kutubxonalar va vositalar to'plamini taqdim etadi. .NET Frameworkning ba'zi asosiy komponentlari quyidagilardan iborat: Common Language Runtime (CLR): CLR .NET ilovalari uchun ijro muhitidir. U xotirani boshqarish, istisnolardan foydalanish va xavfsizlik kabi xizmatlarni taqdim etadi. Asosiy sinf kutubxonasi (BCL): BCL bu .NET ilovalari uchun umumiy funksionallikni ta'minlovchi qayta foydalanish mumkin bo'lgan sinflar, interfeyslar va qiymat turlari to'plamidir. U fayllarni kiritish-chiqarish, tarmoq, ma'lumotlar bazasiga kirish va boshqalar uchun sinflarni o'z ichiga oladi. Language Integrated Query (LINQ): LINQ - bu ishlab chiquvchilarga ma'lumotlar bazalari, XML va to'plamlar kabi turli manbalardan ma'lumotlarni birlashtirilgan sintaksis yordamida so'rash va boshqarish imkonini beruvchi til kengaytmalari to'plami. ASP.NET: ASP.NET veb-ishlab chiqish tizimi bo'lib, ishlab chiquvchilarga dinamik veb-ilovalar va xizmatlarni yaratish imkonini beradi. U server tomoni boshqaruvlari, autentifikatsiya va ma'lumotlarga kirish kabi xususiyatlarni o'z ichiga oladi. Windows Presentation Foundation (WPF): WPF - bu Windows ilovalarida boy foydalanuvchi interfeyslarini yaratish uchun grafik quyi tizim. U ilg'or grafik va multimediya imkoniyatlariga ega ish stoli ilovalarini yaratish uchun moslashuvchan va kuchli asosni taqdim etadi. Xamarin: Xamarin - bu o'zaro platformalarni ishlab chiqish tizimi bo'lib, u ishlab chiquvchilarga .NET va C#-dan foydalangan holda iOS, Android va Windows uchun mahalliy mobil ilovalar yaratish imkonini beradi. Umuman olganda, .NET ramkasi ish stoli dasturiy ta'minotidan veb va mobil ilovalargacha bo'lgan keng doiradagi ilovalarni ishlab chiqish uchun keng qamrovli va ko'p qirrali platformani taqdim etadi. U rivojlanishni soddalashtiradigan va samaradorlikni oshiradigan boy vositalar, kutubxonalar va ramkalarni taklif etadi.",
  "dodNet nima":".NET - Microsoft tomonidan ishlab chiqilgan dasturiy ta'minot tizimi bo'lib, u ilovalarni yaratish va ishga tushirish uchun platformani ta'minlaydi. U oldindan tuzilgan kodlarning katta kutubxonasini va ishlab chiquvchilarga turli platformalar, jumladan Windows, macOS va Linux uchun ilovalar yaratish imkonini beruvchi ish vaqti muhitini o'z ichiga oladi. .NET ramkasi C#, Visual Basic.NET va F# kabi bir nechta dasturlash tillarini qo'llab-quvvatlaydi. U ilovalarni ishlab chiqishni soddalashtiradigan va samaradorlikni oshiradigan umumiy kutubxonalar va vositalar to'plamini taqdim etadi. .NET Frameworkning ba'zi asosiy komponentlari quyidagilardan iborat: Common Language Runtime (CLR): CLR .NET ilovalari uchun ijro muhitidir. U xotirani boshqarish, istisnolardan foydalanish va xavfsizlik kabi xizmatlarni taqdim etadi. Asosiy sinf kutubxonasi (BCL): BCL bu .NET ilovalari uchun umumiy funksionallikni ta'minlovchi qayta foydalanish mumkin bo'lgan sinflar, interfeyslar va qiymat turlari to'plamidir. U fayllarni kiritish-chiqarish, tarmoq, ma'lumotlar bazasiga kirish va boshqalar uchun sinflarni o'z ichiga oladi. Language Integrated Query (LINQ): LINQ - bu ishlab chiquvchilarga ma'lumotlar bazalari, XML va to'plamlar kabi turli manbalardan ma'lumotlarni birlashtirilgan sintaksis yordamida so'rash va boshqarish imkonini beruvchi til kengaytmalari to'plami. ASP.NET: ASP.NET veb-ishlab chiqish tizimi bo'lib, ishlab chiquvchilarga dinamik veb-ilovalar va xizmatlarni yaratish imkonini beradi. U server tomoni boshqaruvlari, autentifikatsiya va ma'lumotlarga kirish kabi xususiyatlarni o'z ichiga oladi. Windows Presentation Foundation (WPF): WPF - bu Windows ilovalarida boy foydalanuvchi interfeyslarini yaratish uchun grafik quyi tizim. U ilg'or grafik va multimediya imkoniyatlariga ega ish stoli ilovalarini yaratish uchun moslashuvchan va kuchli asosni taqdim etadi. Xamarin: Xamarin - bu o'zaro platformalarni ishlab chiqish tizimi bo'lib, u ishlab chiquvchilarga .NET va C#-dan foydalangan holda iOS, Android va Windows uchun mahalliy mobil ilovalar yaratish imkonini beradi. Umuman olganda, .NET ramkasi ish stoli dasturiy ta'minotidan veb va mobil ilovalargacha bo'lgan keng doiradagi ilovalarni ishlab chiqish uchun keng qamrovli va ko'p qirrali platformani taqdim etadi. U rivojlanishni soddalashtiradigan va samaradorlikni oshiradigan boy vositalar, kutubxonalar va ramkalarni taklif etadi.",
  "c++ nima":"C++ - bu 1980-yillarning boshida Bjarne Stroustrup tomonidan ishlab chiqilgan dasturlash tili. Bu C dasturlash tilining kengaytmasi bo'lib, dasturiy ta'minot dasturlari, tizim dasturlari, o'yinlarni ishlab chiqish va boshqalarni ishlab chiqishda keng qo'llaniladi. C++ o'zining samaradorligi, ishlashi va moslashuvchanligi bilan mashhur. U protsessual va ob'ektga yo'naltirilgan dasturlash paradigmalarini qo'llab-quvvatlaydi, bu ishlab chiquvchilarga kodni tuzilgan va modulli tarzda yozishga imkon beradi. Shuningdek, u sinflar, meros, polimorfizm, andozalar va istisnolardan foydalanish kabi xususiyatlarni taqdim etadi. C++ kompilyatsiya qilingan til bo'lib, uni amalga oshirishdan oldin dastlabki kodni mashina kodiga kompilyatsiya qilish zarurligini bildiradi. U turli xil operatsion tizimlar bilan mos keladi va ish stoli, mobil va o'rnatilgan tizimlar uchun ilovalarni ishlab chiqish uchun ishlatilishi mumkin. C++ yordamida yaratilgan ba'zi mashhur ilovalar va ramkalar qatoriga Windows operatsion tizimi, Microsoft Office to'plami, Adobe Photoshop, Mozilla Firefox va Unreal Engine o'yinlarini ishlab chiqish platformasi kiradi. Umuman olganda, C++ kuchli va ko'p qirrali dasturlash tili bo'lib, u turli sohalarda yuqori unumli dasturiy ilovalarni ishlab chiqish uchun keng qo'llaniladi.",
  "c# nima":"C# ('C sharp' deb talaffuz qilinadi) - 2000-yillarning boshida Microsoft tomonidan ishlab chiqilgan dasturlash tili. Bu zamonaviy, ob'ektga yo'naltirilgan til bo'lib, .NET ramkasining bir qismidir. C# oddiy, samarali va xavfsiz bo'lishi uchun yaratilgan bo'lib, uni ish stoli, veb va mobil ilovalarni o'z ichiga olgan keng doiradagi ilovalarni ishlab chiqish uchun mashhur qiladi. C# C++ va Java kabi boshqa dasturlash tillari bilan o'xshashliklarga ega, ammo u o'ziga xos xususiyatlarga ham ega. U mustahkam va ishonchli kod yozishda yordam beradigan axlat yig'ish, turdagi xavfsizlik va istisnolardan foydalanish kabi xususiyatlarni qo'llab-quvvatlaydi. C# shuningdek, generics, LINQ (Language Integrated Query) va asinxron dasturlash uchun asinxron/kutish kabi ilg'or xususiyatlarni o'z ichiga oladi. C# asosan .NET ramkasidan foydalangan holda Windows ilovalarini ishlab chiqish uchun ishlatiladi, lekin u Xamarin yoki .NET Core kabi ramkalar yordamida o'zaro platformalarni ishlab chiqish uchun ham ishlatilishi mumkin. U korporativ dasturiy ta'minotni ishlab chiqishda, o'yinlarni ishlab chiqishda (Unity bilan) va veb-ishlab chiqishda (ASP.NET bilan) keng qo'llaniladi. C# keng va faol hamjamiyatga ega, ya'ni ishlab chiquvchilarga yordam berish uchun juda ko'p resurslar, kutubxonalar va ramkalar mavjud. U kuchli va foydalanuvchilarga qulay ishlab chiqish muhitini ta'minlovchi boy vositalar to'plamiga va Visual Studio kabi integratsiyalashgan ishlab chiqish muhitlariga (IDE) ega. Umuman olganda, C# ko'p qirrali va kuchli dasturlash tili bo'lib, u Microsoft platformasida turli xil ilovalarni ishlab chiqish uchun keng qo'llaniladi.",
  "bootstrap nima":"Bootstrap - bu sezgir va birinchi mobil veb-saytlarni ishlab chiqish uchun ishlatiladigan mashhur ochiq manbali front-end ramka. U osongina sozlanishi va veb-loyihalarga birlashtirilishi mumkin bo'lgan CSS va JavaScript komponentlari to'plamini taqdim etadi. Bootstrap ishlab chiquvchilarga minimal kuch sarflagan holda izchil va vizual jozibali veb-sahifalarni yaratishga yordam beradi, chunki u sezgir dizayn va brauzerlararo muvofiqlik jihatlariga g'amxo'rlik qiladi. Shuningdek, u osonlik bilan amalga oshirilishi mumkin bo'lgan panjara tizimi, tipografiya, shakllar, tugmalar, navigatsiya paneli va boshqa UI komponentlarini taklif etadi.",
  "Bootstrap nima":"Bootstrap - bu sezgir va birinchi mobil veb-saytlarni ishlab chiqish uchun ishlatiladigan mashhur ochiq manbali front-end ramka. U osongina sozlanishi va veb-loyihalarga birlashtirilishi mumkin bo'lgan CSS va JavaScript komponentlari to'plamini taqdim etadi. Bootstrap ishlab chiquvchilarga minimal kuch sarflagan holda izchil va vizual jozibali veb-sahifalarni yaratishga yordam beradi, chunki u sezgir dizayn va brauzerlararo muvofiqlik jihatlariga g'amxo'rlik qiladi. Shuningdek, u osonlik bilan amalga oshirilishi mumkin bo'lgan panjara tizimi, tipografiya, shakllar, tugmalar, navigatsiya paneli va boshqa UI komponentlarini taklif etadi.",
  "c nima":"C umumiy maqsadli dasturlash tili bo'lib, 1970-yillarning boshlarida Bell Laboratoriyasida Dennis Ritchi tomonidan ishlab chiqilgan. Bu apparat va xotira resurslari ustidan yuqori darajadagi nazoratni ta'minlovchi past darajadagi til bo'lib, uni tizimni dasturlash hamda samarali va ishlash uchun muhim bo'lgan ilovalarni ishlab chiqish uchun qulay qiladi. C o'zining soddaligi, samaradorligi va ko'chmaligi bilan mashhur. U kichik kalit so'zlar to'plamiga va minimalist sintaksisga ega, bu uni o'rganish va tushunishni nisbatan osonlashtiradi. C dasturlari odatda mashina kodiga kompilyatsiya qilinadi, bu esa ularni tarjima yoki virtual mashinalarga ehtiyoj sezmasdan to'g'ridan-to'g'ri maqsadli uskunada ishlashga imkon beradi. C turli sohalarda, jumladan, operatsion tizimlarda, o'rnatilgan tizimlarda, o'yinlarni ishlab chiqishda va yuqori unumli hisoblashda keng qo'llaniladi. Bu ishlab chiquvchilarga samarali va optimallashtirilgan kod yozish imkonini beruvchi xotira va apparat resurslariga past darajadagi kirishni ta'minlaydi. C shuningdek, protsessual dasturlashni qo'llab-quvvatlaydi, bu esa ishlab chiquvchilarga kodni qayta ishlatish va texnik xizmat ko'rsatishni yaxshilash uchun kodni funksiya va modullarga ajratish imkonini beradi. Past darajadagi til bo'lishiga qaramay, C boshqa ko'plab dasturlash tillarining rivojlanishiga ta'sir ko'rsatdi, jumladan C++, Java va C#. U bugungi kunda ham keng qo'llaniladi va tizimli dasturlash va ishlash uchun muhim ilovalar uchun muhim til bo'lib qolmoqda.",
  "pascal nima":`Pascal dasturlash tili, 1970-yillarda Niklaus Wirth tomonidan ishlab chiqarilgan, og'irlikli dasturlash tillaridan biridir. Pascal, o'rganishga moslashtirilgan, oson sintaksisga ega bo'lgan va o'qish-yozish uchun qulay bo'lgan bir dasturlash tili. Uning asosiy maqsadi o'rgatish va o'qitish uchun ishlab chiqarish bo'lib, o'quvchilar uchun dasturlash asoslarini o'rganish uchun juda qulaydir. Pascal, o'zining sintaksis va qo'llanmalariga ega bo'lgan bir nechta variantlarga ega bo'lgan, masalan, Turbo Pascal, Delphi va Free Pascal kabi. Pascal, asosan o'quvchilar va yangi dasturchilar uchun tavsiya qiling, lekin hozirgi kunda keng tarqalgan dasturlash tillari, masalan, Java va Python, Pascalga nisbatan ko'p foydalanuvchilarga ega.`,
  "Pascal nima":`Pascal dasturlash tili, 1970-yillarda Niklaus Wirth tomonidan ishlab chiqarilgan, og'irlikli dasturlash tillaridan biridir. Pascal, o'rganishga moslashtirilgan, oson sintaksisga ega bo'lgan va o'qish-yozish uchun qulay bo'lgan bir dasturlash tili. Uning asosiy maqsadi o'rgatish va o'qitish uchun ishlab chiqarish bo'lib, o'quvchilar uchun dasturlash asoslarini o'rganish uchun juda qulaydir. Pascal, o'zining sintaksis va qo'llanmalariga ega bo'lgan bir nechta variantlarga ega bo'lgan, masalan, Turbo Pascal, Delphi va Free Pascal kabi. Pascal, asosan o'quvchilar va yangi dasturchilar uchun tavsiya qiling, lekin hozirgi kunda keng tarqalgan dasturlash tillari, masalan, Java va Python, Pascalga nisbatan ko'p foydalanuvchilarga ega.`,
  "java nima":"Java keng qo'llaniladigan dasturlash tili bo'lib, u 1990-yillarning o'rtalarida Sun Microsystems (hozirda Oraclega tegishli) tomonidan ishlab chiqilgan. Bu umumiy maqsadli, ob'ektga yo'naltirilgan til bo'lib, platformadan mustaqil bo'lishi uchun yaratilgan, ya'ni Java dasturlari Java virtual mashinasi (JVM) o'rnatilgan har qanday operatsion tizim yoki qurilmada ishlashi mumkin. Java o'zining 'bir marta yoz, istalgan joyda ishga tushirish' tamoyili bilan mashhur bo'lib, ishlab chiquvchilarga kodni bir marta yozish va uni qayta kompilyatsiya qilmasdan bir nechta platformalarda joylashtirish imkonini beradi. U juda ko'p qirrali va keng ko'lamli ilovalarni, jumladan ish stoli dasturiy ta'minotini, veb-ilovalarni, mobil ilovalarni, korporativ tizimlarni va boshqalarni ishlab chiqish uchun ishlatilishi mumkin. Java-da ishlab chiquvchilarga mustahkam va kengaytiriladigan ilovalarni yaratishni osonlashtiradigan boy kutubxonalar va ramkalar to'plami mavjud. U xavfsizlikka katta e'tibor beradi, xotirani boshqarish, istisnolarni qayta ishlash va axlatni avtomatik yig'ish uchun o'rnatilgan xususiyatlarga ega. Java shuningdek, ishlab chiquvchilarga bir vaqtning o'zida bir nechta vazifalarni bajarishi mumkin bo'lgan bir vaqtning o'zida dasturlarni yozish imkonini beruvchi ko'p ish zarralarini qo'llab-quvvatlaydi. Umuman olganda, Java soddaligi, portativligi va keng jamoatchilik yordami tufayli ishlab chiquvchilar uchun mashhur tanlovdir. U turli sohalarda keng qo'llaniladi va rivojlanishni tezlashtiradigan va samaraliroq qiladigan asboblar va ramkalarning katta ekotizimiga ega.",
  "sql nima":"SQL Strukturaviy so'rovlar tilini anglatadi. Bu relyatsion ma'lumotlar bazalarini boshqarish va manipulyatsiya qilish uchun ishlatiladigan dasturlash tili. SQL foydalanuvchilarga ma'lumotlarni samarali saqlash va olish uchun ma'lumotlar bazalarini yaratish, o'zgartirish va so'rash imkonini beradi. U ma'lumotlar bazalari bilan o'zaro ishlashning standartlashtirilgan usulini ta'minlaydi va ko'pgina relyatsion ma'lumotlar bazasini boshqarish tizimlari (RDBMS) tomonidan qo'llab-quvvatlanadi. SQL ma'lumotlar bazasida jadvallar yaratish, jadvallar o'rtasidagi munosabatlarni aniqlash, ma'lumotlarni kiritish, yangilash va o'chirish, so'rovlar yordamida ma'lumotlarni olish kabi turli operatsiyalarni bajarish uchun ishlatiladi. U filtrlash, saralash, bir nechta jadvallarni birlashtirish, ma'lumotlarni yig'ish va hisob-kitoblarni amalga oshirish kabi keng ko'lamli operatsiyalarni qo'llab-quvvatlaydi. SQL deklarativ tildir, ya'ni foydalanuvchilar nimaga erishmoqchi ekanligini aniqlaydilar va ma'lumotlar bazasini boshqarish tizimi so'rovni bajarishning eng samarali usulini belgilaydi. U veb-ishlab chiqish, ma'lumotlarni tahlil qilish va relyatsion ma'lumotlar bazalari bilan ishlashni o'z ichiga olgan boshqa ilovalarda keng qo'llaniladi.",
  "mongodb nima":"MongoDB mashhur ochiq manbali NoSQL ma'lumotlar bazasini boshqarish tizimi bo'lib, u katta hajmdagi tuzilmagan ma'lumotlarni saqlash va boshqarish uchun mo'ljallangan bo'lib, uni turli xil ma'lumotlar turlari va murakkab ma'lumotlar modellari bilan ishlashga moslashtiradi. MongoDB hujjatga yo'naltirilgan ma'lumotlar modelidan foydalanadi, bu erda ma'lumotlar moslashuvchan, JSONga o'xshash hujjatlarda saqlanadi. U gorizontal masshtablash uchun yuqori miqyoslilik, yuqori mavjudlik va avtomatik parchalanish imkonini beradi. MongoDB shuningdek, ma'lumotlarni samarali so'rash va tahlil qilish uchun indekslash, replikatsiya va yig'ish ramkasi kabi turli funktsiyalarni qo'llab-quvvatlaydi.",
  "xml nima":"XML kengaytiriladigan belgilash tilini anglatadi. Bu tizimlashtirilgan formatda ma'lumotlarni saqlash va tashish uchun ishlatiladigan belgilash tili. XML ushbu elementlar haqida qo'shimcha ma'lumot berish uchun elementlar va atributlarni aniqlash uchun teglardan foydalanadi. U turli tizimlar va ilovalar o'rtasida ma'lumotlar almashinuvi uchun keng qo'llaniladi.",
  "php nima":"PHP (Hypertext Preprocessor) - bu veb-ishlab chiqish uchun ishlatiladigan mashhur server tomonidagi skript tili. U dinamik veb-sahifalar va veb-ilovalarni yaratish uchun keng qo'llaniladi. PHP haqida ba'zi asosiy fikrlar: 1. Maqsad: PHP asosan veb-ishlab chiqish uchun mo'ljallangan. U PHP kodini to'g'ridan-to'g'ri HTML-ga joylashtirish imkonini beradi, bu esa veb-sahifalarda dinamik kontent yaratish imkonini beradi. 2. Sintaksis: PHP kodi <?php ?> teglar. Bu erkin yozilgan til, ya'ni o'zgaruvchilar turlarini aniq e'lon qilish shart emas. PHP shuningdek, turli vazifalar uchun o'rnatilgan funksiyalar va kutubxonalarning keng doirasini qo'llab-quvvatlaydi. 3. Xususiyatlar: PHP ma'lumotlar bazasini integratsiyalashuvi, shakllar bilan ishlash, fayllarni manipulyatsiya qilish, sessiyalarni boshqarish va boshqalarni o'z ichiga olgan boy funksiyalar to'plamini taklif etadi. U MySQL, PostgreSQL va SQLite kabi turli ma'lumotlar bazalarini qo'llab-quvvatlaydi. 4. Server tomoni: PHP server tomonida bajariladi, ya'ni natijada HTML mijoz brauzeriga yuborilgunga qadar PHP kodi veb-serverda qayta ishlanadi. Bu dinamik kontent yaratish va ma'lumotlar bazalari bilan o'zaro ishlash imkonini beradi. 5. Kross-platforma: PHP o'zaro platforma tili bo'lib, Windows, macOS, Linux kabi turli xil operatsion tizimlar hamda Apache va Nginx kabi turli veb-serverlar bilan mos keladi. 6. Hamjamiyat va ramkalar: PHP keng va faol hamjamiyatga ega bo'lib, keng ko'lamli hujjatlar, o'quv qo'llanmalar va yordam beradi. Shuningdek, veb-ilovalarni yaratish uchun qo'shimcha vositalar va funksiyalarni taklif qiluvchi Laravel, Symfony va CodeIgniter kabi ko'plab mashhur PHP ramkalar mavjud. 7. Integratsiya: PHP HTML, CSS, JavaScript va XML kabi boshqa texnologiyalar bilan osongina integratsiyalanishi mumkin. Shuningdek, u tashqi xizmatlar va API bilan ham bog'lanishi mumkin. PHP soddaligi, ko'p qirraliligi va keng jamoatchilik tomonidan qo'llab-quvvatlanishi tufayli veb-ishlab chiqish sanoatida keng qo'llaniladi. U butun dunyo bo'ylab ko'plab veb-saytlar, kontentni boshqarish tizimlari (CMS), elektron tijorat platformalari va veb-ilovalarni quvvatlaydi.",
  "json nima":"JSON (JavaScript Object Notation) keng qo'llaniladigan ma'lumotlarni almashish formatidir. Bu ma'lumotlarni uzatish va saqlash uchun engil va odam o'qiy oladigan formatdir. JSON haqida ba'zi asosiy fikrlar: 1. Tuzilishi: JSON ma'lumotlari kalit-qiymat juftligi formatida tashkil etilgan. U ob'ektlar, massivlar va ibtidoiy ma'lumotlar turlaridan iborat. 2. Ma'lumotlar turlari: JSON qatorlar, raqamlar, mantiqiy qiymatlar, null, massivlar va ob'ektlar kabi bir nechta ma'lumotlar turlarini qo'llab-quvvatlaydi. JSON-dagi ob'ektlar jingalak qavslar ({}) ichiga olinadi va bir nechta kalit-qiymat juftlarini o'z ichiga oladi. Massivlar kvadrat qavslar () ichiga olinadi va ular bir nechta qiymatlarni saqlashi mumkin. 3. Sintaksis: JSON sintaksisi JavaScript obyekt sintaksisiga o'xshaydi. Kalitlar har doim satr bo'lib, ularni tegishli qiymatlaridan ajratib turadigan ikkita nuqta (:) qo'yiladi. Bir nechta kalit-qiymat juftlari vergul (,) bilan ajratiladi. JSON qiymatlari qatorlar (ikki tirnoq ichiga olingan), raqamlar, mantiqiy qiymatlar, null, massivlar yoki ichki o'rnatilgan obyektlar bo'lishi mumkin. 4. Foydalanish: JSON odatda server va veb-ilova o'rtasida ma'lumotlarni uzatish uchun ishlatiladi. Bundan tashqari, u konfiguratsiya fayllari, ma'lumotlar bazalarida ma'lumotlarni saqlash va turli dasturlash tillari o'rtasida ma'lumot almashish uchun ishlatiladi. 5. Moslik: JSON dasturlash tillari va platformalar tomonidan keng qo'llab-quvvatlanadi. Ko'pgina dasturlash tillarida JSON ma'lumotlarini tahlil qilish va yaratish oson, bu esa ma'lumotlar almashinuvi uchun mashhur tanlovdir. 6. Afzalliklari: JSON yengil, odamlar uchun o'qish va yozish oson, mashinalar uchun esa tahlil qilish va yaratishda samarali. Shuningdek, u tildan mustaqil bo'lib, uni turli tizimlar o'rtasida o'zaro ishlashga moslashtiradi. Umuman olganda, JSON malumotlarni taqdim etish va almashishning moslashuvchan va samarali usulini taqdim etadi va bu uni zamonaviy veb-ishlab chiqish va malumotlar integratsiyasi stsenariylarida mashhur tanlovga aylantiradi.",
  "scss nima":`SASS (Syntactically Awesome Style Sheets) - bu ishlab chiquvchilarga yanada dinamik va kuchli uslublar jadvallarini yozish imkonini beruvchi CSS protsessoridir. SASS katta va murakkab uslublar jadvallarini yozish va saqlashni osonlashtiradigan o'zgaruvchilar, funksiyalar va ichki o'rnatilgan selektorlar kabi xususiyatlarni qo'shish orqali CSS imkoniyatlarini kengaytiradi.
  SASS dan foydalanishning asosiy afzalliklaridan biri uning o'zgaruvchilardan foydalanish qobiliyatidir. SASS-dagi o'zgaruvchilar ishlab chiquvchilarga uslublar jadvalida qayta ishlatilishi mumkin bo'lgan qiymatni saqlashga imkon beradi. Bu shuni anglatadiki, agar qiymatni o'zgartirish kerak bo'lsa, uni butun uslublar jadvalini qidirishdan ko'ra, faqat bitta joyda o'zgartirish kerak. Bu, ayniqsa, katta va murakkab uslublar jadvallari uchun ko'p vaqt va kuchni tejash imkonini beradi.
  SASS shuningdek, ishlab chiquvchilarga murakkab hisob-kitoblar va qiymatlar bo'yicha operatsiyalarni bajarish uchun ishlatilishi mumkin bo'lgan funktsiyalardan foydalanishga imkon beradi. Masalan, fon rangiga qarab matn rangini hisoblash yoki ekran o'lchamiga avtomatik moslashuvchi grid tizimini yaratish funksiyasidan foydalanish mumkin.`,
  "Salom":"ismingiz nima",
  "css nima":"CSS qisqartmasi kaskadli uslublar jadvallarini bildiradi. Bu HTML hujjatlarining taqdimoti va tartibini tavsiflash uchun ishlatiladigan uslublar jadvali tili. CSS HTML elementlariga uslublarni qo'llash orqali veb-sahifalarning ko'rinishini boshqarish imkonini beradi. CSS yordamida siz ranglar, shriftlar, o'lchamlar, intervallar, hoshiyalar, fon va boshqalar kabi turli xususiyatlarni belgilashingiz mumkin. Bu uslublar alohida elementlarga qo'llanilishi yoki bir vaqtning o'zida bir nechta elementlarga ta'sir qilish uchun global miqyosda qo'llanilishi mumkin. CSS selektorlar yordamida HTML elementlarini tanlash va ushbu elementlarga uslublarni qo'llash orqali ishlaydi. Selektorlar elementlarni teg nomi, sinfi, identifikatori yoki boshqa atributlari bo'yicha belgilashlari mumkin. Bu sizga turli elementlarga turli uslublarni qo'llash yoki elementlar guruhi uchun mos uslublarni yaratish imkonini beradi. CSS veb-sahifa tuzilishi va mazmunini uning taqdimotidan ajratishning kuchli va moslashuvchan usulini taqdim etadi. CSS-dan foydalanib, asosiy HTML kodini o'zgartirmasdan veb-sayt ko'rinishini osongina o'zgartirishingiz mumkin.",
  "html nima":`HTML Hypertext Markup Language degan ma'noni anglatadi. Bu veb-sahifalar va ilovalar yaratish uchun ishlatiladigan standart belgilash tilidir. HTML kontentni tuzish va veb-sahifaning tartibi va ko'rinishini aniqlash uchun teglar to'plamidan foydalanadi:

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> </title><link rel="stylesheet" href="style.css">
  </head>
  <body>
      <script src="bot.js"></script>
  </body>
  </html>

   Bu teglar burchakli qavslar (<>) ichiga olinadi va HTML hujjatiga joylashtiriladi. HTML sarlavhalar, paragraflar, ro'yxatlar, rasmlar, havolalar, jadvallar, shakllar va boshqalar kabi elementlardan foydalangan holda veb-sahifa tuzilishini aniqlash imkonini beradi. Har bir HTML elementi muayyan maqsadga xizmat qiladi va tashqi ko'rinishini boshqarish uchun CSS (Cascading Style Sheets) yordamida uslublanishi mumkin. Veb-brauzerlar HTML kodini sharhlaydi va shunga mos ravishda veb-sahifani ko'rsatadi. HTML veb-saytlar yaratish uchun asosiy texnologiya bo'lib, ko'pincha interaktiv va dinamik veb-sahifalarni yaratish uchun CSS va JavaScript bilan birgalikda ishlatiladi.`,
   "html":`HTML Hypertext Markup Language degan ma'noni anglatadi. Bu veb-sahifalar va ilovalar yaratish uchun ishlatiladigan standart belgilash tilidir. HTML kontentni tuzish va veb-sahifaning tartibi va ko'rinishini aniqlash uchun teglar to'plamidan foydalanadi:

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
    <link rel="stylesheet" href="style.css">
   </head>
   <body>
    <h1>Hello world</h1>
    <p>lorem ipsum dolor sit amet</p>
       <script src="bot.js"></script>
   </body>
   </html>
   Bu teglar burchakli qavslar (<>) ichiga olinadi va HTML hujjatiga joylashtiriladi. HTML sarlavhalar, paragraflar, ro'yxatlar, rasmlar, havolalar, jadvallar, shakllar va boshqalar kabi elementlardan foydalangan holda veb-sahifa tuzilishini aniqlash imkonini beradi. Har bir HTML elementi muayyan maqsadga xizmat qiladi va tashqi ko'rinishini boshqarish uchun CSS (Cascading Style Sheets) yordamida uslublanishi mumkin. Veb-brauzerlar HTML kodini sharhlaydi va shunga mos ravishda veb-sahifani ko'rsatadi. HTML veb-saytlar yaratish uchun asosiy texnologiya bo'lib, ko'pincha interaktiv va dinamik veb-sahifalarni yaratish uchun CSS va JavaScript bilan birgalikda ishlatiladi.`,
  "HackerRank nima":"HackerRank mashhur onlayn platforma bo'lib, dasturchilarga kodlash ko'nikmalarini oshirish uchun kodlash muammolari va tanlovlarini taqdim etadi. Amaliyot va baholash uchun keng doiradagi dasturlash tillari va domenlarini taklif etadi. Foydalanuvchilar kodlash muammolarini hal qilishlari, tanlovlarda ishtirok etishlari va hatto platforma orqali ishga ariza topshirishlari mumkin. Bu dasturlash mahoratingizni oshirish va texnik intervyularga tayyorlanish uchun ajoyib manba.",
  "hackerrank nima":"HackerRank mashhur onlayn platforma bo'lib, dasturchilarga kodlash ko'nikmalarini oshirish uchun kodlash muammolari va tanlovlarini taqdim etadi. Amaliyot va baholash uchun keng doiradagi dasturlash tillari va domenlarini taklif etadi. Foydalanuvchilar kodlash muammolarini hal qilishlari, tanlovlarda ishtirok etishlari va hatto platforma orqali ishga ariza topshirishlari mumkin. Bu dasturlash mahoratingizni oshirish va texnik intervyularga tayyorlanish uchun ajoyib manba.",
  "Hackerrank nima":"HackerRank mashhur onlayn platforma bo'lib, dasturchilarga kodlash ko'nikmalarini oshirish uchun kodlash muammolari va tanlovlarini taqdim etadi. Amaliyot va baholash uchun keng doiradagi dasturlash tillari va domenlarini taklif etadi. Foydalanuvchilar kodlash muammolarini hal qilishlari, tanlovlarda ishtirok etishlari va hatto platforma orqali ishga ariza topshirishlari mumkin. Bu dasturlash mahoratingizni oshirish va texnik intervyularga tayyorlanish uchun ajoyib manba.",
  "TypeScript nima":`TypeScript JavaScript tilining o'rnatilgan versiyasidir. TypeScript, JavaScript sintaksisini o'z ichiga oladi va unga qo'shimcha funktsiyalar qo'shadi. TypeScript, JavaScript kodini va boshqarishni osonlashtirish va xatoni yaxshilaydi. TypeScript, static tip berishni beradi, ya'ni o'zgaruvchilar va funktsiyalar uchun tipni foydalanish mumkin. Bu, kodni to'g'ri va xato yo'qolishini osonlashtirish va kodni va tahlil qilish jarayonini soddalashtirish. TypeScript kutubxonalari, sotib olingan kutubxonalarga ham ega bo'lib, JavaScript-ni saqlab qolgan kutubxonalarga, JavaScript-ni saqlashga ruxsat beriladi. Bu, TypeScriptni ishga tushirilgan loyihalar uchun yaxshi bir tanlov qiladi. TypeScript, Microsoft tomonidan ishlab chiqarilgan va katta jamoalar tomonidan quvvatlanadi. Uning yuqori darajadagi kutubxonalari va o'zaro faoliyat mavjud. Bundan, TypeScript, JavaScript tilining barcha qismlarini saqlaydi, standartlariga, ECMAScript ham mos keladi. Bu TypeScriptni Javaga o'girishni osonlashtirish va mavjud JavaScript kodini TypeScriptga o'tkazishni ham osonlashtirish. Bundan tashqari, TypeScript, Visual Studio Code, Sublime Text, WebStorm va boshqariladigan muharrirlar tomonidan kuchli qo'llab-lanadi.`,
  "typescript nima":`TypeScript JavaScript tilining o'rnatilgan versiyasidir. TypeScript, JavaScript sintaksisini o'z ichiga oladi va unga qo'shimcha funktsiyalar qo'shadi. TypeScript, JavaScript kodini va boshqarishni osonlashtirish va xatoni yaxshilaydi. TypeScript, static tip berishni beradi, ya'ni o'zgaruvchilar va funktsiyalar uchun tipni foydalanish mumkin. Bu, kodni to'g'ri va xato yo'qolishini osonlashtirish va kodni va tahlil qilish jarayonini soddalashtirish. TypeScript kutubxonalari, sotib olingan kutubxonalarga ham ega bo'lib, JavaScript-ni saqlab qolgan kutubxonalarga, JavaScript-ni saqlashga ruxsat beriladi. Bu, TypeScriptni ishga tushirilgan loyihalar uchun yaxshi bir tanlov qiladi. TypeScript, Microsoft tomonidan ishlab chiqarilgan va katta jamoalar tomonidan quvvatlanadi. Uning yuqori darajadagi kutubxonalari va o'zaro faoliyat mavjud. Bundan, TypeScript, JavaScript tilining barcha qismlarini saqlaydi, standartlariga, ECMAScript ham mos keladi. Bu TypeScriptni Javaga o'girishni osonlashtirish va mavjud JavaScript kodini TypeScriptga o'tkazishni ham osonlashtirish. Bundan tashqari, TypeScript, Visual Studio Code, Sublime Text, WebStorm va boshqariladigan muharrirlar tomonidan kuchli qo'llab-lanadi.`,
  "nodejs nima":"Node.js ochiq manbali, server tomonidagi JavaScript ish vaqti muhiti bo'lib, ishlab chiquvchilarga kengaytiriladigan va yuqori unumli ilovalar yaratish imkonini beradi. U hodisaga asoslangan, bloklanmaydigan kiritish-chiqarish modelidan foydalanadi, bu esa uni bir vaqtda so'rovlarni boshqarishda samarali qiladi. Node.js odatda veb-serverlar, real vaqtda ilovalar va tarmoq vositalarini yaratish uchun ishlatiladi.",
  "jsda forLoop nima":"JavaScript-da for sikli - bu belgilangan shart asosida kodlar blokini qayta-qayta bajarish imkonini beruvchi boshqaruv oqimi bayonoti. U odatda elementlar to'plamini takrorlamoqchi bo'lganingizda yoki vazifani ma'lum bir necha marta bajarmoqchi bo'lsangiz ishlatiladi. JavaScript-dagi for siklining asosiy sintaksisi quyidagicha: for (initialization; condition; increment/decrement) { } Initialization qismi hisoblagich o'zgaruvchini ishga tushiradigan joy bo'lib, odatda var i = 0 bilan belgilanadi, bu sikl uchun boshlang'ich nuqtani belgilaydi. condition qismi tsiklning har bir iteratsiyasidan oldin tekshiriladigan shartdir. Agar shart true deb baholansa, tsikl davom etadi; agar u false deb baholansa, tsikl tugaydi. increment/decrement qismi har bir iteratsiyadan keyin hisoblagich o'zgaruvchisini yangilash uchun ishlatiladi. Masalan, i++ hisoblagichni 1 ga oshiradi, i-- esa hisoblagichni 1 ga kamaytiradi. {} jingalak qavslar ichida shart false bo'lguncha takror-takror bajariladigan kodni joylashtirishingiz mumkin. Mana, 1 dan 5 gacha raqamlarni chop etadigan for tsikliga misol: for (var i = 1; i <= 5; i++) { console.log(i); } Chiqish: 1 2 3 4 5 for tsikli JavaScript-dagi kuchli konstruksiya bo'lib, u sizga takrorlanuvchi vazifalarni samarali bajarish va ma'lumotlar tuzilmalarini takrorlash imkonini beradi.",
  "jsda rekursiya nima":"JavaScript-dagi rekursiya - bu dasturlash texnikasi bo'lib, unda funktsiya ma'lum bir shart bajarilmaguncha o'zini qayta-qayta chaqiradi. Boshqacha qilib aytganda, bu muammolarni bir xil muammoning kichikroq, soddaroq versiyalariga bo'lish orqali hal qilish usulidir. Rekursiv funksiya odatda ikkita qismdan iborat: asosiy va rekursiv holat. Asosiy holat funktsiya o'zini chaqirishni to'xtatadigan va qiymatni qaytaradigan shartni belgilaydi. Rekursiv holat funksiyaning o'zgartirilgan kiritish bilan o'zini chaqiradigan qismini belgilaydi. Mana, sonning faktorialini hisoblash uchun rekursiv funksiyaning oddiy misoli: function factorial(n) { // Base case if (n === 0) { return 1;} return n * factorial(n - 1);} console.log(factorial(5)); // Output: 120' 'Ushbu misolda faktorial funksiyasi asosiy registrga yetguncha (n === 0) kichikroq qiymat bilan (n - 1) chaqiradi. ), shu nuqtada u 1-ni qaytaradi. Keyin funktsiya faktorialni hisoblash uchun qiymatlarni ko'paytirib, rekursiv qo'ng'iroqlarni 'bo'shatadi'.' Rekursiya muayyan turdagi muammolarni echishning kuchli usuli bo'lishi mumkin, ammo cheksiz rekursiyadan qochish uchun oxir-oqibat asosiy holatga erishilishini ta'minlash muhimdir.' 'const nima':'const - JavaScript-da o'zgaruvchilarni e'lon qilish uchun ishlatiladigan yana bir kalit so'z. Bu 'doimiy' ning qisqartmasi.  O'zgaruvchini const bilan e'lon qilganingizda, bu o'zgaruvchi ishga tushirilgandan so'ng uni yangi qiymatga qayta tayinlash mumkin emasligini bildiradi. Boshqacha qilib aytganda, u faqat o'qish uchun mo'ljallangan o'zgaruvchini yaratadi. Masalan, agar siz const x = 5; o'zgaruvchisini e'lon qilsangiz, keyinroq x = 10; ni bajara olmaysiz, chunki u xatoga yo'l qo'yadi. const o'zgaruvchilari ham xuddi let bilan e'lon qilingan o'zgaruvchilar kabi bloklangan. Bu ularga faqat o'zlari e'lon qilingan blokda kirish mumkinligini anglatadi. O'zgaruvchilar uchun const dan foydalanish yaxshi amaliyot bo'lib, siz o'zingiz bilgan o'zgaruvchilarni qayta tayinlash shart emas, chunki bu kodingizni yanada mustahkamroq va mulohaza yuritishni osonlashtiradi.",
  "var bilan let ning farqi nimada":"var va let o'rtasidagi asosiy farq ularning qo'llanishidir.  var funksiya doirasiga ega, ya'ni var bilan e'lon qilingan o'zgaruvchiga blok doirasidan qat'i nazar, u e'lon qilingan butun funksiya doirasida kirish mumkin. let esa bloklangan. Bu let bilan e'lon qilingan o'zgaruvchiga faqat o'zi e'lon qilingan blokda (masalan, tsikl yoki if operatorida) kirish mumkinligini anglatadi. Bundan tashqari, let keyinroq qayta tayinlanishi mumkin bo'lgan o'zgaruvchilarni e'lon qilish imkonini beradi, var esa bir xil doiradagi o'zgaruvchilarni qayta e'lon qilish va qayta tayinlash imkonini beradi.  Odatda zamonaviy JavaScript-da var o'rniga let dan foydalanish tavsiya etiladi, chunki bu o'zgaruvchan yuk ko'tarish va qamrovning maqsadsiz ifloslanishi bilan bog'liq ayrim muammolarni oldini olishga yordam beradi.", 
  "Js nima":"JS JavaScript-ni anglatadi. Bu front-end va backend veb-ishlab chiqish uchun ishlatiladigan mashhur dasturlash tili. JavaScript ishlab chiquvchilarga veb-saytlarga interaktiv elementlar, dinamik tarkib va funksionallikni qo'shish imkonini beradi. U asosan foydalanuvchining veb-brauzerida ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi, lekin u Node.js kabi ramkalar yordamida server tomonida ham ishlatilishi mumkin. JavaScript o'zining ko'p qirraliligi bilan mashhur, chunki undan turli maqsadlarda, jumladan, veb-ilovalar yaratish, mobil ilovalar yaratish, o'yinlar ishlab chiqish va hatto apparat qurilmalarini boshqarishda foydalanish mumkin.",
  "Js":"JS JavaScript-ni anglatadi. Bu front-end va backend veb-ishlab chiqish uchun ishlatiladigan mashhur dasturlash tili. JavaScript ishlab chiquvchilarga veb-saytlarga interaktiv elementlar, dinamik tarkib va funksionallikni qo'shish imkonini beradi. U asosan foydalanuvchining veb-brauzerida ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi, lekin u Node.js kabi ramkalar yordamida server tomonida ham ishlatilishi mumkin. JavaScript o'zining ko'p qirraliligi bilan mashhur, chunki undan turli maqsadlarda, jumladan, veb-ilovalar yaratish, mobil ilovalar yaratish, o'yinlar ishlab chiqish va hatto apparat qurilmalarini boshqarishda foydalanish mumkin.",
  "js":"JS JavaScript-ni anglatadi. Bu front-end va backend veb-ishlab chiqish uchun ishlatiladigan mashhur dasturlash tili. JavaScript ishlab chiquvchilarga veb-saytlarga interaktiv elementlar, dinamik tarkib va funksionallikni qo'shish imkonini beradi. U asosan foydalanuvchining veb-brauzerida ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi, lekin u Node.js kabi ramkalar yordamida server tomonida ham ishlatilishi mumkin. JavaScript o'zining ko'p qirraliligi bilan mashhur, chunki undan turli maqsadlarda, jumladan, veb-ilovalar yaratish, mobil ilovalar yaratish, o'yinlar ishlab chiqish va hatto apparat qurilmalarini boshqarishda foydalanish mumkin.",
  "js nima":"JS JavaScript-ni anglatadi. Bu front-end va backend veb-ishlab chiqish uchun ishlatiladigan mashhur dasturlash tili. JavaScript ishlab chiquvchilarga veb-saytlarga interaktiv elementlar, dinamik tarkib va funksionallikni qo'shish imkonini beradi. U asosan foydalanuvchining veb-brauzerida ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi, lekin u Node.js kabi ramkalar yordamida server tomonida ham ishlatilishi mumkin. JavaScript o'zining ko'p qirraliligi bilan mashhur, chunki undan turli maqsadlarda, jumladan, veb-ilovalar yaratish, mobil ilovalar yaratish, o'yinlar ishlab chiqish va hatto apparat qurilmalarini boshqarishda foydalanish mumkin.",
  "reactjs nima":`ReactJS JavaScriptsi kutubxonasi bo'lib, frontend dasturlash uchun. Bu, Facebook tomonidan ishlab chiqarish va ochiq manbali dasturlash kutubxonasi. ReactJS, veb-saytlarni va ilovalarni yaratishda komponentlar asosida ishlashga imkon beradi. ReactJS, Virtual DOM (Virtual Document Object Model) konseptini qo'llab- qabul qilish. Bu, saytning UI (User Interface) operatsiyasini o'z ichiga olgan virtual bir modeldir. ReactJS, Virtual DOM orqali foydalanuvchining interaksiyalari va ma'lumot o'zgarishlarini kuzatib boradi va faqat o'zgarishlarni real DOMga (Document Object Model) qo'shish uchun minimal ishlar bilan yangilanishni ta'minlash. Bu, saytning yozishning jarayonini qayta va ishlab chiqarish jarayonini soddalashtirish. ReactJS, komponentlar orqali saytlarni qilishga imkon beradi. Har bir komponent, o'zining o' tugmalari va xususiyatlari bilan o'zini ifodalaydi. Bu, kodni qayta ishlashni osonlashtirish va qayta ishlash uchun kodni minimalizatsiya qilishga imkon beradi. ReactJS, yuqori samarali to'liqlik, yaxshi tashkilot kutubxonasi integratsiyasi va keng qo'lga olingan jamlanmalar (libraries) bilan birga ishlab chiqarish jarayonini soddalashtirish. Bu, birlashtirishda komponent komponenti mavjud emas, ma'lumotlarni boshqarish va interaktivlikni oshirish uchun kuchli yordam taqdim etiladi. ReactJS, katta kompaniyalardan kichik startaplarga qadar`,
  "qanaqa dasturlash tillari bor":`Dasturlash tillari turli xil bo'lishi mumkin. Ba'zi umumiy dasturlash tillari kasalliklardir: Python: Python dunyodagi eng mashhur dasturlash tillaridan biridir. Uning oddiy sintaksi va kuchli chiqarilgan kutubxonalari bor. Java: Java ham mashhur dasturlash tili. Uning sintaksi oson va yaxshi hujjatlari bor. C++: C++ yuqori amaliy dasturlash tili. Uning sintaksi qiyin bo'lishi mumkin, lekin va yuqori harakat kuchga ega. JavaScript: JavaScript veb-saytlar uchun dasturlash tili bo'yicha. Uni sintaksi oson va uni brauzerda yozish mumkin. Ruby: Ruby oson sintaksisiga ega bo'lgan dasturlash tili. Uning sintaksi Python bilan o'xshash. PHP veb-saytlar uchun dasturlash tili mumkin. Uni sintaksi oson va brauzerda tuzatish mumkin. Swift: Swift iOS va macOS dasturlari uchun dasturlash tilini o'rganish. Uning sintaksi oson va kuchli kutubxonalari bor. Bu faqat ba'zi dasturlash tillarining misollaridir. Boshqa tillar ham mavjud bo'lishi mumkin.`,
  "dasturlash degani nima degani":`Dasturlash, kompyuterlarga buyruqlar berish orqali foydalanish, kompyuterlarni boshqarish jarayonidir. Dasturlash, bir dastur tili yordamida kompyuterlarga buyruqlar berish va ularga ma'lumotlarni ishlashni aytadi. Bu buyurtmalar, dastur tili dasturiy ta'minot dasturlari orqali amalga oshirish. Dasturlash, bir nechta mahsulot uchun dasturlash tillari yordamida dasturlash. Bu tillar, dasturlashning o'zaro farqlanishlari va sayohat sohalariga qarab tanlanadi. Dasturlash tillari, Python, Java, JavaScript, C++, C#, Ruby kabi bir nechta tillardan iborat bo'lib, har biri o'zining xususiyatlari va yuklash sohalariga ega. Dasturlash tillari yordamida veb-dasturlar, mobil ilovalar, o'yinlar, ma'lumotlar tahlili, ishlab chiqarish va boshqa ko'plab bajariladi.`,
  "vuejs nima":`Vue.js - keng ko'lamli interfeyslarga ega progressiv JavaScript ramkasi. Bunga erishish uchun uni ilovani to'ldirish uchun ham ishlatishingiz mumkin. Vue.js lagan, moslashuvchan va ishlatish uchun qulay, u mening dasturimda juda mashhur. Vue.js koristi deklarativni pristup za definisanje interfejsa, koristeći HTML baziran shablon sintaksu. Bu ma'lumotlardan interfejsu va obrnutoni avtomatik ravishda aks ettiradigan yo'lni yaratish uchun foydalanishingiz mumkin degan ma'noni anglatadi. Vue.js ning barcha xususiyatlari moduldir. Vue.js qo'shimcha komponentlar, koje bu samostalne va mogu se ponovo koristiti. Ovo olakšava organizaciju va održavanje koda. Vue.js shuningdek, funksionallikni ta'minlash uchun ishlatilishi mumkin bo'lgan keng qamrovli ma'lumotlar bazasi va kutubxonani yaratish qobiliyatiga ega. Bu sizga Vue CLI loyihasining yangi versiyasini yaratish va uni disk raskadrovka qilish uchun Vue Devtools-dan foydalanish imkonini beradi. Vue.js zamonaviy JavaScript ramkasi bo'lib, u ham samarali interfeysga ega.`,
  "express.js nima":`Express.js Node.js kabi minimalistik veb-ramkadir. Prža jednostavnu va moslashuvchan arxitekturada veb-aplika va API-ja izgradnju. Express.js Node.js asosidagi mashhur veb-ramka bo'lib, bu yerda ham mavjud. Express.js minimal bo'lishi va bir xil osnovne funkcionalnosti, dok ostavlja prostor za dodavanje dodatnih funkcionalnosti putem middleware-a bilan ta'minlash uchun mo'ljallangan. O'rta dasturda radio funksiyasi mavjud bo'lib, u turli yo'llar bilan, jumladan, radio funksiyasini dasturlashda ham ishlatilishi mumkin, shuning uchun u rutiranje, authentic, logovanje va još mnogo toga. Express.js sof intuitiv va intuitiv yondashuvga asoslangan va shuning uchun foydalanish juda oson. Podržava različite HTTP usuli, shuningdek, GET, POST, PUT, DELETE va qo'shimcha manipulyatsiya va to'lovlarni o'z ichiga oladi. Express.js va Node.js uchun minimalist veb-ramka va API-ja veb-ilovasi.`,
  "next.js nima":`Next.js zamonaviy veb-ilovalar uchun javob beruvchi JavaScript ramkasidir. React.js kutubxonasi server tomonida renderlash (SSR), statik sayt yaratish (SSG) va podatakani oldindan olishni o'z ichiga olgan funksional funksiyaga ega. Next.js ham juda yuqori unumdor tuzilishga ega, lekin u ham serverdagi umumiy server va HTML mavjud emas. Bu shuni anglatadiki, siz ko'proq SEO natijalari va yaxshi natijalarga erishishingiz mumkin. Keyingi.js-a quyidagi xususiyatlarning har biri statistik usulda yaratilishi mumkin. Bunga erishish uchun siz HTML statistikasidan foydalanmasdan ma'lumot yaratishingiz mumkin, shuning uchun siz statistika va delove aplikacija koji se retko menjaju ko'rishingiz mumkin. Next.js-da, shuningdek, oldindan olinadigan podataka mavjud, shuning uchun uni ishlatishdan oldin server sifatida ishlatish mumkin. Ovo omogućava brže učitavanje podataka va bolje korisničko iskustvo. Next.js shuningdek, funksionallikni ta'minlash uchun ishlatilishi mumkin bo'lgan keng qamrovli ma'lumotlar bazasi va kutubxonani yaratish qobiliyatiga ega. Siz uni disk raskadrovka qilish uchun Next.js CLI loyihasi va Next.js Devtools dan ham foydalanishingiz mumkin. Next.js JavaScript-ni qayta faollashtirish uchun server tomonida renderlash, statik sayt yaratish va podatakalarni oldindan yuklab olish uchun foydalidir. Boshqa tomondan, siz yaxshiroq ishlashga ega bo'lasiz, undan ham yaxshiroq ishlash.`,
  "phyton nima":"Python oddiy va o'qilishi mumkinligi bilan mashhur yuqori darajadagi mashhur dasturlash tilidir. U turli maqsadlarda, jumladan, veb-ishlab chiqish, ma'lumotlarni tahlil qilish, sun'iy intellekt, ilmiy hisoblash va avtomatlashtirish uchun keng qo'llaniladi. Python o'zining toza sintaksisi bilan kodning o'qilishiga urg'u beradi, bu yangi boshlanuvchilar uchun o'rganish va tushunishni osonlashtiradi. U katta standart kutubxona va uchinchi tomon paketlarining keng ekotizimiga ega bo'lib, u juda ko'p qirrali va keng ko'lamli ilovalar uchun mos keladi.",
  "javascript nima":"JS JavaScript-ni anglatadi. Bu front-end va backend veb-ishlab chiqish uchun ishlatiladigan mashhur dasturlash tili. JavaScript ishlab chiquvchilarga veb-saytlarga interaktiv elementlar, dinamik tarkib va funksionallikni qo'shish imkonini beradi. U asosan foydalanuvchining veb-brauzerida ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi, lekin u Node.js kabi ramkalar yordamida server tomonida ham ishlatilishi mumkin. JavaScript o'zining ko'p qirraliligi bilan mashhur, chunki undan turli maqsadlarda, jumladan, veb-ilovalar yaratish, mobil ilovalar yaratish, o'yinlar ishlab chiqish va hatto apparat qurilmalarini boshqarishda foydalanish mumkin.",
  "sizning ismingiz nima": "Men ismim Dasturchibot bot. Sizning ismingiz men bilmayman lekin sizga yordam berishim mumkin.",
  "standard": "Kechirasiz, men hozircha faqat standart so'zlarni tushunmayman. Iltimos, boshqa so'zlar bilan urinib ko'ring.",
  "npx":"NPX 5.2.0 versiyasidan boshlab NPM (Node Package Manager) bilan birga kelgan vositadir. U Node.js paketlarini global yoki mahalliy miqyosda o'rnatmasdan to'g'ridan-to'g'ri bajarish uchun ishlatiladi. NPX bilan siz NPM reestrida nashr etilgan buyruq qatori vositalari va bajariladigan fayllarni aniq o'rnatmasdan ishga tushirishingiz mumkin. Bu sizga paketlarning ma'lum versiyalarini, hatto ular tizimingizda o'rnatilmagan bo'lsa ham, bajarishga imkon beradi. NPX shuningdek, bir xil paketning turli versiyalarini alohida ishga tushirish usulini taqdim etadi, bu esa uni ishlab chiqish va sinov maqsadlarida foydali qiladi.",
  "npx nima":"NPX 5.2.0 versiyasidan boshlab NPM (Node Package Manager) bilan birga kelgan vositadir. U Node.js paketlarini global yoki mahalliy miqyosda o'rnatmasdan to'g'ridan-to'g'ri bajarish uchun ishlatiladi. NPX bilan siz NPM reestrida nashr etilgan buyruq qatori vositalari va bajariladigan fayllarni aniq o'rnatmasdan ishga tushirishingiz mumkin. Bu sizga paketlarning ma'lum versiyalarini, hatto ular tizimingizda o'rnatilmagan bo'lsa ham, bajarishga imkon beradi. NPX shuningdek, bir xil paketning turli versiyalarini alohida ishga tushirish usulini taqdim etadi, bu esa uni ishlab chiqish va sinov maqsadlarida foydali qiladi.",
  "Npx nima":"NPX 5.2.0 versiyasidan boshlab NPM (Node Package Manager) bilan birga kelgan vositadir. U Node.js paketlarini global yoki mahalliy miqyosda o'rnatmasdan to'g'ridan-to'g'ri bajarish uchun ishlatiladi. NPX bilan siz NPM reestrida nashr etilgan buyruq qatori vositalari va bajariladigan fayllarni aniq o'rnatmasdan ishga tushirishingiz mumkin. Bu sizga paketlarning ma'lum versiyalarini, hatto ular tizimingizda o'rnatilmagan bo'lsa ham, bajarishga imkon beradi. NPX shuningdek, bir xil paketning turli versiyalarini alohida ishga tushirish usulini taqdim etadi, bu esa uni ishlab chiqish va sinov maqsadlarida foydali qiladi.",
  "Npm nima":"NPM tugun paketi menejerini anglatadi. Bu JavaScript uchun paket menejeri va Node.js uchun standart paket menejeri. NPM ishlab chiquvchilarga qayta foydalanish mumkin bo'lgan JavaScript kod paketlarini osongina o'rnatish, boshqarish va almashish imkonini beradi. U JavaScript-ni ishlab chiqishni yaxshilash va soddalashtirish uchun ishlatilishi mumkin bo'lgan ochiq manbali kutubxonalar va vositalarning keng ekotizimiga kirishni ta'minlaydi. NPM yordamida siz paketlarni osongina o'rnatishingiz, bog'liqliklarni boshqarishingiz va loyihalaringizda paketlarni yangilashingiz mumkin. Shuningdek, u paketga oid turli vazifalarni bajarish uchun buyruq qatori interfeysini (CLI) taqdim etadi.",
  "npm":"NPM tugun paketi menejerini anglatadi. Bu JavaScript uchun paket menejeri va Node.js uchun standart paket menejeri. NPM ishlab chiquvchilarga qayta foydalanish mumkin bo'lgan JavaScript kod paketlarini osongina o'rnatish, boshqarish va almashish imkonini beradi. U JavaScript-ni ishlab chiqishni yaxshilash va soddalashtirish uchun ishlatilishi mumkin bo'lgan ochiq manbali kutubxonalar va vositalarning keng ekotizimiga kirishni ta'minlaydi. NPM yordamida siz paketlarni osongina o'rnatishingiz, bog'liqliklarni boshqarishingiz va loyihalaringizda paketlarni yangilashingiz mumkin. Shuningdek, u paketga oid turli vazifalarni bajarish uchun buyruq qatori interfeysini (CLI) taqdim etadi.",
  "npm nima":"NPM tugun paketi menejerini anglatadi. Bu JavaScript uchun paket menejeri va Node.js uchun standart paket menejeri. NPM ishlab chiquvchilarga qayta foydalanish mumkin bo'lgan JavaScript kod paketlarini osongina o'rnatish, boshqarish va almashish imkonini beradi. U JavaScript-ni ishlab chiqishni yaxshilash va soddalashtirish uchun ishlatilishi mumkin bo'lgan ochiq manbali kutubxonalar va vositalarning keng ekotizimiga kirishni ta'minlaydi. NPM yordamida siz paketlarni osongina o'rnatishingiz, bog'liqliklarni boshqarishingiz va loyihalaringizda paketlarni yangilashingiz mumkin. Shuningdek, u paketga oid turli vazifalarni bajarish uchun buyruq qatori interfeysini (CLI) taqdim etadi.",
  "Jsx nima":"JSX JavaScript XML degan ma'noni anglatadi. Bu JavaScript-ning sintaksisi kengaytmasi bo'lib, JavaScript-da HTML-ga o'xshash kod yozish imkonini beradi. JSX odatda React kabi kutubxonalarda UI komponentlarining tuzilishi va tartibini aniqlash uchun ishlatiladi. U deklarativ va komponentlarga asoslangan kodlarni yozish usulini taqdim etadi, bu esa murakkab foydalanuvchi interfeyslarini yaratish va boshqarishni osonlashtiradi. JSX kodi brauzerda bajarilishidan oldin oddiy JavaScript kodiga kompilyatsiya qilinadi.",
  "jsx":"JSX JavaScript XML degan ma'noni anglatadi. Bu JavaScript-ning sintaksisi kengaytmasi bo'lib, JavaScript-da HTML-ga o'xshash kod yozish imkonini beradi. JSX odatda React kabi kutubxonalarda UI komponentlarining tuzilishi va tartibini aniqlash uchun ishlatiladi. U deklarativ va komponentlarga asoslangan kodlarni yozish usulini taqdim etadi, bu esa murakkab foydalanuvchi interfeyslarini yaratish va boshqarishni osonlashtiradi. JSX kodi brauzerda bajarilishidan oldin oddiy JavaScript kodiga kompilyatsiya qilinadi.",
  "jsx nima":"JSX JavaScript XML degan ma'noni anglatadi. Bu JavaScript-ning sintaksisi kengaytmasi bo'lib, JavaScript-da HTML-ga o'xshash kod yozish imkonini beradi. JSX odatda React kabi kutubxonalarda UI komponentlarining tuzilishi va tartibini aniqlash uchun ishlatiladi. U deklarativ va komponentlarga asoslangan kodlarni yozish usulini taqdim etadi, bu esa murakkab foydalanuvchi interfeyslarini yaratish va boshqarishni osonlashtiradi. JSX kodi brauzerda bajarilishidan oldin oddiy JavaScript kodiga kompilyatsiya qilinadi.",
  "menga jsda tugmali telegram bot kerak":`
  const TelegramBot = require('node-telegram-bot-api');

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });
  
  // Listen for /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Send a button with a callback data
    bot.sendMessage(chatId, 'Click the button to see a picture:', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Show Picture',
              callback_data: 'show_picture'
            }
          ]
        ]
      }
    });
  });
  
  // Listen for button click event
  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
  
    // Check the callback data
    if (query.data === 'show_picture') {
      // Send a photo
      bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-sZ9Ee94g2Bw15PJG5qBWJgust1CNJiW1g&usqp=CAU', { caption: 'Here is the picture!' });
    }
  });
  
  `,
  "menga jsda tugmali telegram bot qilib ber":`
  const TelegramBot = require('node-telegram-bot-api');

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });
  
  // Listen for /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Send a button with a callback data
    bot.sendMessage(chatId, 'Click the button to see a picture:', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Show Picture',
              callback_data: 'show_picture'
            }
          ]
        ]
      }
    });
  });
  
  // Listen for button click event
  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
  
    // Check the callback data
    if (query.data === 'show_picture') {
      // Send a photo
      bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-sZ9Ee94g2Bw15PJG5qBWJgust1CNJiW1g&usqp=CAU', { caption: 'Here is the picture!' });
    }
  });
  
  `,
  "menga jsda tugmali bot kerak":`
  const TelegramBot = require('node-telegram-bot-api');

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });
  
  // Listen for /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Send a button with a callback data
    bot.sendMessage(chatId, 'Click the button to see a picture:', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Show Picture',
              callback_data: 'show_picture'
            }
          ]
        ]
      }
    });
  });
  
  // Listen for button click event
  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
  
    // Check the callback data
    if (query.data === 'show_picture') {
      // Send a photo
      bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-sZ9Ee94g2Bw15PJG5qBWJgust1CNJiW1g&usqp=CAU', { caption: 'Here is the picture!' });
    }
  });
`,

};


const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();
  const firstName = msg.from.first_name;
  if (message in words) {
    bot.sendMessage(chatId, words[message]);
  }else{
    bot.sendMessage(chatId,`Assalomu alaykum hurmatli : ${firstName}, siz ushbu botga hush kelibsiz !`)
  }

});

