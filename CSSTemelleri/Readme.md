# Seçici Türleri

| Seçici Türü     | İşlevi                                                       |
| --------------- | ------------------------------------------------------------ |
| Komut           | Tek bir HTML komutunu seçer.                                 |
| Grup            | Birden fazla HTML komutunu seçer.                            |
| *               | Tüm HTML komutlarini seçer.                                  |
| #id             | Belli bir #id değerine sahip komutu seçer.                   |
| .class          | Belli bir .class değerine sahip komutlari seçer .            |
| Komut.class     | Belli bir .class degerine sahip belli bir Komut’u seçer.     |
| Pseudo-class    | Belli bir duruma sahip HTML komutunu seçer.                  |
| Pseudo-elements | Bir elemanin belli bir kismini secmeye yarayan seçiçilerdir. |
| Özellik         | Belli bir özellige sahip HTML komutunu seçer.                |

### Temel Seçici Ornekleri

| Seçici{CSS Kodu}  | Açiklama                                                  |
| ----------------- | --------------------------------------------------------- |
| *                 | Her şey seçilecek.                                        |
| p                 | p tagi seçilecek.                                         |
| #ilk              | id degeri #ilk olan seçilecek.                            |
| .son              | class degeri .son olan secilecek.                         |
| h1.egik           | class degeri .egik olan h1 etiketleri secilecek.          |
| p strong          | p tag igindeki tüm strong taglari secilecek.              |
| nav #buton        | nav tagi içinde id degeri #buton tüm elemanlar seçilecek. |
| h1,h2,h3,h4,h5,h6 | h1-h6 arasi tüm taglar secilecek.                         |

### Karmasik Secici Ornekleri

| Seçici{CSS Kodu}   | Açiklama                                                                            |
| ------------------ | ----------------------------------------------------------------------------------- |
| .banner p          | class degeri banner olan eleman icindeki p tagi secilcek.                           |
| div>p              | ebeveyni div olan tüm p taglari secilecek.                                          |
| menu ul li         | class degeri menu olan eleman içinde bulunan ul taginin içindeki li tagını seçer    |
| nav.menu li        | nav tag icinde bulunan ve class degeri menu olan eleman igindeki li tagi secilecek. |
| body>p:first-child | body tag icindeki ilk paragraf (ilk cocuk eleman).                                  |
| body>p:last-child  | body tagı icindeki son paragraf (son gocuk eleman).                                 |
| :active            | Aktif elemani sec                                                                   |
| :after             | Sonraki elemani seç                                                                 |

### Link ve Ozellik Seciciler

| Seçici{CSS Kodu}    | Açiklama                                           |
| ------------------- | -------------------------------------------------- |
| a:link              | henüz ziyaret edilmemis linkleri seçer.            |
| a:visited           | ziyaret edilmis linkleri secger.                   |
| a:focus             | klavye ile etkinlestirilmis linkleri seçer.        |
| a:hover             | uzerinde fare olan linkleri seçer.                 |
| input[type]         | <input> içinde type özelligine sahip olanlari seç. |
| input[type=“text”]  | <input> icinde type özelligi text olanlari seç.    |
| img [title~=“kedi”] | <img> tagindaki title özelligi kedi olanlari seç.  |

### Kısmi Seciciler

| Seçici{CSS Kodu} | Açiklama            | Örnek Kod                                               |
| ---------------- | ------------------- | ------------------------------------------------------- |
| ::first-line     | ilk satir.          | p::first-line {color: red}                              |
| ::first-letter   | ilk harf.           | p::first-letter {color: #ff0000; font-size: xx-large; } |
| ::before         | Onceki              | h1::before { content: url(smiley.gif); }                |
| ::after          | Sonraki             | h2::after { content: url(smiley.gif); }                 |
| ::marker         | Liste madde imi     | ::marker { color: red; font-size: 23px; }               |
| ::selection      | Secilen nesne rengi | ::selection { color: red; background: yellow; }         |

### Paragraf İşlemleri

| Özellikler      | Alabilecegi Degerler                          | Açıklama                                                          |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------- |
| Font-family     | Times, Courier, Verdana,                      | Yazitipi                                                          |
| color           | renkadi, #rrggbb, rgb(rrr,ggg,bbb)            | Metin boyutunu degistirir. 1 em=16 px                             |
| font-size,      | smaller, small, medium, large, larger, px, em | Metinlerin daha ince, normal ya da kalin gésterir.                |
| font-weight     | lighter, normal, bold, bolder                 | Metinlerin normal ya da egik gériinmesini saglar.                 |
| font-style      | normal, italic                                | Metinlerin kiigiik harf boyutlarinda ama biiyiik harf             |
| font-variant    | normal, smal-caps                             | karakterleri ile goriinmesini saglar.                             |
| text-transform  | none, lowercase, uppercase,capitalize         | Metinleri biiyiik harfe veya kücük harfe cevirmeye yarar.         |
| text-decoration | none, underline, overline, line-through       | Metinlerin altini, istiiniéi veya Gzerini gizmek igin kullanilir. |
| letter-spacing  | normal, em                                    | Harfler arasindaki mesafe                                         |
| word-spacing    | normal, em                                    | Kelimeler arasindaki mesafe                                       |

### Metin İşlemleri

| Ozellik         | Alabilecegi Degerler         | Açıklama                                                              |
| --------------- | ---------------------------- | --------------------------------------------------------------------- |
| text-indent     | em, px                       | Paragrafin ilk satirdaki girintisini ayarlar.                         |
| ateqer-1 (1-40) | left, right, center, justify | Paragrafin sola, saga ortaya veya her iki kenara yaslanmasini saglar. |
| line-height     | em, px                       | Paragraftaki satirlar arasindaki mesafeyi ayarlar.                    |

### Listeleme İşlemleri

* none (madde imi yok)
* disk (daire)
* circle (ember)
* square (kare)
* decimal (numara)
* lower-alpha (kiigiik harf , a,b,c)
* lower-greek (yunanca kiiciik harf)
* lower-latin (latince kiigtk harf,a,b,c,)
* lower-roman (kiigiik roma rakami,i,ii,iii,iv)
* upper-alpha (biiyiik harf,A,B,C)
* upper-greek (yunanca biiyiik harf)
* upper-latin (latince biiyuk harf,A,B,C)
* upper-roman (biuyiik roma rakami,|, II, II,IV)
* url(“resim”) (madde imi yerine resim goriintilenir)

### Kutu Kenarları

| Ozellik      | Alabilecegi Degerler                                              | Açıklama                    |
| ------------ | ----------------------------------------------------------------- | --------------------------- |
| border-style | none, solid, dotted, dashed, double, groove, ridge, inset, outset | Kenar cizgi tipini belirler |
| border-width | px, thin, medium, thick                                           | Cizgi kalinligint ayarlar.  |
| border-color | renk_adi, #rrggbb, rgb(rrr,ggg,bbb)                               | Kenarlik rengini belirler.  |


![Kutular İçin Düzen](./Ekran%20görüntüsü%202023-12-23%20230315.png)
