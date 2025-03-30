(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const banner = document.querySelector(".banner");
        const closeButton = document.querySelector(".banner__close");
        closeButton.addEventListener("click", (function() {
            banner.classList.add("banner--hide");
        }));
    }));
    window["FLS"] = true;
})();