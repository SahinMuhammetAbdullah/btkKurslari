# CSS Seçici İlşelmleri

## Temel Seçici Ornekleri

| Seçici{CSS Kodu}       |        Açiklama|
|------------------------|-------------------|
|* "*"                   |        Her şey seçilecek.|
|* "p"                   |        p tagi seçilecek.|
|* "#ilk"                |        id degeri #ilk olan seçilecek.|
|* ".son"                |        class degeri .son olan secilecek.|
|* "h1.egik"             |        class degeri .egik olan h1 etiketleri secilecek.|
|* "p strong"            |        p tag igindeki tüm strong taglari secilecek.|
|* "nav #buton"          |        nav tagi içinde id degeri #buton tüm elemanlar seçilecek.|
|* "h1,h2,h3,h4,h5,h6"   |        h1-h6 arasi tüm taglar secilecek.|

## Karmasik Secici Ornekleri

| Seçici{CSS Kodu}       |        Açiklama|
|------------------------|-------------------|
|* ".banner p"           |        class degeri banner olan eleman icindeki p tagi secilcek.|
|* "div>p"               |        ebeveyni div olan tüm p taglari secilecek.|
|* "menu ul li"          |        class degeri menu olan eleman içinde bulunan ul taginin içindeki li tagını seçer|
|* "nav.menu li"         |        nav tag icinde bulunan ve class degeri menu olan eleman igindeki li tagi secilecek.|
|* "body>p:first-child"  |        body tag icindeki ilk paragraf (ilk cocuk eleman).|
|* "body>p:last-child"   |        body tagı icindeki son paragraf (son gocuk eleman).|
|* ":active"             |        Aktif elemani sec|
|* ":after"              |        Sonraki elemani seç|


## Link ve Ozellik Seciciler

| Seçici{CSS Kodu}       |        Açiklama|
|------------------------|-------------------|
|* "a:link"              |        henüz ziyaret edilmemis linkleri seçer.|
|* "a:visited"           |        ziyaret edilmis linkleri secger.|
|* "a:focus"             |        klavye ile etkinlestirilmis linkleri seçer.|
|* "a:hover"             |        uzerinde fare olan linkleri seçer.|
|* "input[type]"         |        <input> içinde type özelligine sahip olanlari seç.|
|* "input[type=“text”]"  |        <input> icinde type özelligi text olanlari seç.|
|* "img [title~=“kedi”]" |        <img> tagindaki title özelligi kedi olanlari seç.|

 
 

 

 

 
 
 