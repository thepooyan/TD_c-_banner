const attention_banner = document.querySelector("#c_sharp_ads");
if (attention_banner) {
    const animationDuration = 9000;
    const animationDelay = 2000;
    const repeatDelay = 500;

    const repeatAnimation = () => {
        attention_banner.querySelectorAll("*").forEach((el) => {
            el.style.animation = "none";
        });
        setTimeout(() => {
            attention_banner.querySelectorAll("*").forEach((el) => {
                el.style.animation = "";
            });
        }, repeatDelay)
    }

    window.r = repeatAnimation
    setInterval(() => {
        repeatAnimation()
    }, animationDuration + animationDelay);
}