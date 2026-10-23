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
    const c_sharp_banner = {
        text1: "#C کلید ورود به بازار کار",
        text2: "دوره پروژه‌محور #C و ASP.NET Core",
        effect: "C#",
        table: "https://tahlildadeh.com/Content/images/newBanner/c_table.webp",
        key: "https://tahlildadeh.com/Content/images/newBanner/c_key.webp",
        classname: ""
    }

    const applyBanner = banner => {
        effects.forEach(e => e.innerText = banner.effect);
        text1.innerText = banner.text1;
        text2.innerText = banner.text2;
        table.src = banner.table;
        key.src = banner.key;
        attention_banner.className = banner.classname
    }

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

        if (is_llm) applyBanner(c_sharp_banner)
        else applyBanner(llm_banner)

        is_llm = !is_llm

        repeatAnimation()
    }, animationDuration + animationDelay);
}