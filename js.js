const attention_banner = document.querySelector("#c_sharp_ads");
if (attention_banner) {
    const animationDuration = 5900;
    const animationDelay = 1000;
    const repeatDelay = 100;

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