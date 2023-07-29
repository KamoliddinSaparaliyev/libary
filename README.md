# libary-server
Kutubxona uchun tizim
API
ADMINS

POST /login
Adminlar login qilishi uchun API
Adminlar username hamda password bilan login qiladi
Jwt Token qaytarish kerak
Token 24 soat uchun berilsin

POST /admins + TOKEN
Yangi admin qo’shish uchun API
Yangi adminni faqatgina super admin qo’sha oladi
Super admin qo’shilmaydi, u bitta bo’ladi

GET /admins + TOKEN
Adminlarni ro’yxatini olish uchun API
Search qilish (?q=Palon) full_name ga ko’ra bo’lsin
 Sort qilish (?sort[by]=palon&sort[order]=desc) full_name yoki usernamega ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[is_deleted]=true) is_deleted, is_super maydonlariga ko’ra

GET /admins/:id + TOKEN
Bitta adminni ko’rish uchun API

PATCH /admins/:id + TOKEN + SUPER
Adminning ma’lumotini tahrirlash uchun API
Faqat full_name, username, password, maydonlarini tahrirlash mumkin
Faqat super admin uchun

PATCH /admins/me+ TOKEN
Adminning o’zining ma’lumotini tahrirlash uchun API
Faqat full_name, username, password, maydonlarini tahrirlash mumkin
Tepadagi APIga ham hozirgi API uchun ham bitta service ishlatish kerak, edit-admin.js

DELETE /admins/:id + TOKEN + SUPER
Adminning o’chirish uchun API
Faqat super admingina o’chira oladi
Super admin o’zini o’chira olmaydi
Soft delete tadbiq qilinishi kerak, is_deleted: true
Lekin o’chirilgan adminlar ham get APIlarga ko’rinishi kerak


BORROWERS
POST /borrowers + TOKEN
Kitobxon qo’shish uchun API
phone maydoni unikal bo’lishi kerak

GET /borrowers + TOKEN
Kitobxonlar ro’yxatini olish uchun API
Search qilish (?q=Palon) full_name,  ga ko’ra bo’lsin
 Sort qilish (?sort[by]=palon&sort[order]=desc) full_name yoki phonega ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[is_deleted]=true) is_deleted maydonlariga ko’ra

GET /borrowers/:id + TOKEN
Bitta kitobxonni ko’rish uchun API

PATCH /borrowers/:id + TOKEN
Kitobxonning ma’lumotini tahrirlash uchun API

DELETE /borrowers/:id + TOKEN
Kitobxonni o’chirish uchun API
Soft delete tadbiq qilinishi kerak, is_deleted: true
Lekin o’chirilgan kitobxonlar ham get APIlarga ko’rinishi kerak

PUBLISHERS
POST /publishers + TOKEN
Nashriyot qo’shish uchun API

GET /publishers + TOKEN
Nashriyotlar ro’yxatini olish uchun API
Search qilish (?q=Palon) name,  ga ko’ra bo’lsin
 Sort qilish (?sort[by]=palon&sort[order]=desc) name  ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[is_deleted]=true) is_deleted maydonlariga ko’ra

GET /publishers/:id + TOKEN
Bitta nashriyotni ko’rish uchun API

PATCH /publishers/:id + TOKEN
Nashriyotning ma’lumotini tahrirlash uchun API

DELETE /publishers/:id + TOKEN
Nashriyotni o’chirish uchun API
Soft delete tadbiq qilinishi kerak, is_deleted: true
Lekin o’chirilgan nashriyotlar ham get APIlarga ko’rinishi kerak



AUTHORS
POST /authors + TOKEN
Muallif qo’shish uchun API

GET /authors + TOKEN
Mualliflar ro’yxatini olish uchun API
Search qilish (?q=Palon) name,  ga ko’ra bo’lsin
 Sort qilish (?sort[by]=palon&sort[order]=desc) name  ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[is_deleted]=true) is_deleted maydonlariga ko’ra

GET /authors/:id + TOKEN
Bitta muallif ko’rish uchun API

PATCH /authors/:id + TOKEN
Muallifning ma’lumotini tahrirlash uchun API

DELETE /authors/:id + TOKEN
Muallifni o’chirish uchun API
Soft delete tadbiq qilinishi kerak, is_deleted: true
Lekin o’chirilgan mualliflar ham get APIlarga ko’rinishi kerak
BOOKS
POST /books + TOKEN
Kitob qo’shish uchun API
GET /books + TOKEN
Kitoblar ro’yxatini olish uchun API
Search qilish (?q=Palon)title,  ga ko’ra bo’lsin
Sort qilish (?sort[by]=copies&sort[order]=desc) copiesga  ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[is_deleted]=true) is_deleted, publisher, author maydonlariga ko’ra

GET /books/:id + TOKEN
Bitta kitobni ko’rish uchun API
Pupulate publisher, author

PATCH /books/:id + TOKEN
Kitobning ma’lumotini tahrirlash uchun API

DELETE /books/:id + TOKEN
Kitobni o’chirish uchun API
Soft delete tadbiq qilinishi kerak, is_deleted: true
Lekin o’chirilgan kitoblar ham get APIlarga ko’rinishi kerak


LOANS
POST /loan + TOKEN
Ijaraga olingan kitob ma’lumotlarini tizimga kiritish
Berilgan sana (out_date) ni  bodyda yubormaydi default now
Olib kelish kerak bo’lgan sana, kitob maximal 2 oyga berib turiladi
Qaysi admin qaysi kitobni qaysi kitobxonga ijaraga berdi,
Kitobxon qaytarishi kerak bo’lgan, vaqti o’tib ketgan kitobi bo’lsa, boshqa kitobni ijaraga ola olmasligi kerak
Kitobxon bir vaqtning o’zida qaytarish vaqti kelmagan bo’lsa ham, 10 tadan ortiq kitob olishi mumkin emas.
GET /loans + TOKEN
Ijaraga olingan kitoblar ro’yxatini olish uchun API
 Sort qilish (?sort[by]=palon&sort[order]=desc) out_date, due_date ga ko’ra
Paginatsiya qilish kerak, page infoni ham qo’shib qaytarish kerak
Filterlash (filters[book]=1234) admin, va book maydonlariga ko’ra

GET /loans/:id + TOKEN
Bitta ijarani ko’rish uchun API
Populate book -> book.author, book.publisher, admin, borrower
