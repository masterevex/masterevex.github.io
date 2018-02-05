console.log("Moikka");

const stored = window.localStorage.getItem("count");

let count = 0;

if (stored) {
    count = parseInt(stored);
} else {
    count = Math.round(7500000000 + 200000000 * Math.random());
}

window.onload = () => {
    const main = document.getElementById("main");

    main.innerText = count;

    const update = () => {
        if (Math.random() < 0.1) {
            count = count + 1;
            main.innerText = count;
        }
        if (Math.random() < 0.05) {
            count = count - 1;
            main.innerText = count;
        }
        window.localStorage.setItem("count",count);
    }

    window.setInterval(update, 100);

}

