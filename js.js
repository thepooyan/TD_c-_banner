const attention_banner = document.querySelector("#c_sharp_ads");
if (attention_banner) {
    const animationDuration = 5900;
    const animationDelay = 1000;
    const repeatDelay = 100;

    const effects = attention_banner.querySelectorAll(".js-effect")
    const text1 = attention_banner.querySelector(".js-text1")
    const text2 = attention_banner.querySelector(".js-text2")
    const table = attention_banner.querySelector(".js-table")
    const key = attention_banner.querySelector(".js-key")

    let is_llm = false

    const llm_banner = {
        text1: "اولین دوره LLM",
        text2: "مهندسی LLM، RAG و هوش مصنوعی مولد",
        effect: "LLM",
        table: "https://tahlildadeh.com/Content/images/newBanner/left-brain.webp",
        key: "https://tahlildadeh.com/Content/images/newBanner/right-brain.webp",
        classname: "llm"
    }
    const default_banner = {
        text1: text1.innerText,
        text2: text2.innerText,
        effect: effects[0].innerText,
        table: table.src,
        key: key.src,
        classname: attention_banner.className
    }

    const applyBanner = banner => {
        effects.forEach(e => e.innerText = banner.effect);
        text1.innerText = banner.text1;
        text2.innerText = banner.text2;
        table.src = banner.table;
        key.src = banner.key;
        attention_banner.className = banner.classname
    }

    const disableAnimations = () => {
        attention_banner.querySelectorAll("*").forEach((el) => {
            el.style.animation = "none";
        });
    }
    const enableAnimations = () => {
        attention_banner.querySelectorAll("*").forEach((el) => {
            el.style.animation = "";
        });
    }

    setInterval(() => {
        let new_banner = is_llm ? default_banner : llm_banner;
        disableAnimations()
        applyBanner(new_banner)
        setTimeout(() => {
            enableAnimations()
        }, repeatDelay)
        is_llm = !is_llm;
    }, animationDuration + animationDelay);
}