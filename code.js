window.addEventListener("load", () => {
    const title = document.getElementById("title");
    if (title !== null) {
        title.addEventListener("click", e => window.scrollTo({
            top: 0,
            behavior: "smooth"
        }));
    }
});
