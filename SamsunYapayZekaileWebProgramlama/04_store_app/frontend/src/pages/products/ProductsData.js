const products = [
    {
      id: 1,
      name: "Asus Computer",
      price: 30000,
      imageUrl: "/images/1.jpg",
      comments: [
        { id: 1, productId: 1, text: "Harika bir bilgisayar!" },
        { id: 2, productId: 1, text: "Performansı çok iyi." },
        { id: 3, productId: 1, text: "Çok hızlı ve sessiz çalışıyor." },
        { id: 4, productId: 1, text: "Görüntü kalitesi muazzam." },
        { id: 5, productId: 1, text: "Fiyat performansı harika." },
      ],
    },
    {
      id: 2,
      name: "MSI Computer",
      price: 25000,
      imageUrl: "/images/2.jpg",
      comments: [
        { id: 6, productId: 2, text: "Çok şık tasarım." },
        { id: 7, productId: 2, text: "Oyun performansı harika." },
        { id: 8, productId: 2, text: "RGB aydınlatma çok güzel." },
        { id: 9, productId: 2, text: "Soğutma sistemi çok etkili." },
        { id: 10, productId: 2, text: "Fiyatına göre mükemmel." },
      ],
    },
    {
      id: 3,
      name: "Acer Computer",
      price: 18000,
      imageUrl: "/images/3.jpg",
      comments: [
        { id: 11, productId: 3, text: "Fiyat performans canavarı." },
        { id: 12, productId: 3, text: "Hafif ve taşınabilir." },
        { id: 13, productId: 3, text: "Güçlü batarya ömrü." },
        { id: 14, productId: 3, text: "Güzel bir mat ekran." },
        { id: 15, productId: 3, text: "Geniş depolama alanı." },
      ],
    },
    {
      id: 4,
      name: "Fare",
      price: 320,
      imageUrl: "/images/4.jpg",
      comments: [
        { id: 16, productId: 4, text: "Ergonomik tasarım." },
        { id: 17, productId: 4, text: "Hassas sensör." },
        { id: 18, productId: 4, text: "Yüksek tepki hızı." },
        { id: 19, productId: 4, text: "Tuş hissiyatı çok iyi." },
        { id: 20, productId: 4, text: "Fiyatına göre kaliteli." },
      ],
    },
    {
      id: 5,
      name: "Apple Computer",
      price: 50000,
      imageUrl: "/images/5.jpg",
      comments: [
        { id: 21, productId: 5, text: "MacOS kullanımı harika." },
        { id: 22, productId: 5, text: "Yüksek performans." },
        { id: 23, productId: 5, text: "Dayanıklı ve şık tasarım." },
        { id: 24, productId: 5, text: "Retina ekran kalitesi muazzam." },
        { id: 25, productId: 5, text: "Uzun pil ömrü." },
      ],
    },
  ];
  
  export { products };  