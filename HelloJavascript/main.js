function show(s) {
    s = s || ":-)";
    document.querySelector(".show").insertAdjacentHTML("beforeend", `<p>${s}</p>`);
}
