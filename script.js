const stars = document.querySelectorAll(".fa-star");
const emojiStip = document.querySelector(".emoji-strip");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        atualizarVotacao(index);
    });
});

function atualizarVotacao(index) {
    stars.forEach((star, i) => {
        if (i <= index) {
        star.classList.add("active");
        } else {
            star.classList.remove("active");
        }

    });

    const offset = index * 60;
  emojiStip.style.transform = `translateX(-${offset}px)`;
}