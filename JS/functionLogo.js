const logo_s = document.querySelector(".logo_s")
const logo_b = document.querySelector(".logo_b")

logo_s?.addEventListener("click", () => {
    logo_s?.classList.toggle("hidden");
    logo_b?.classList.remove("hidden");
})

logo_b?.addEventListener("click", () => {
    logo_s?.classList.remove("hidden");
    logo_b?.classList.toggle("hidden");
})