const images = document.querySelectorAll('section img');
const defaultImageSrc = 'image/daitai.png'; // 共通のデフォルト画像

images.forEach(image => {
  image.addEventListener('dblclick', () => {
    // 現在の画像がデフォルトならアクティブ画像に変更
    if (image.src.includes(defaultImageSrc)) {
      image.src = image.dataset.activeSrc; // data-active-src の値に変更
    } else {
      // 現在アクティブ画像ならデフォルト画像に戻す
      image.src = defaultImageSrc;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".m-cards");

  let currentCard = 1;

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove("prev", "current", "next");

      if (index === currentCard - 1) {
        card.classList.add("prev");
      } else if (index === currentCard) {
        card.classList.add("current");
      } else if (index === currentCard + 1) {
        card.classList.add("next");
      }
    });
  }

  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const cardWidth = cards[0].offsetWidth;
    currentCard = Math.round(scrollLeft / cardWidth);
    updateCards();
  });

  updateCards();
});
