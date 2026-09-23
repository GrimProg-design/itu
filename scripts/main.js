numeralSchedule = {
    "monday": {
        10: "-",
        11: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        13: "Web-программирование (Лекция)",
        15: "Web-программирование (Лабораторная)",
        16: "-"
    },

    "tuesday": {
        10: "-",
        11: "-",
        13: "Программирование на JAVA, Android, iOS (Лабораторная)",
        15: "Программирование на JAVA, Android, iOS (Лабораторная)",
        16: "-"
    },

    "wednesday": {
        10: "-",
        11: "-",
        13: "Безопасность и Жизнедеятельность (Лекция)",
        15: "-",
        16: "-"
    },

    "thursday": {
        10: "-",
        11: "Распределенные системы управления (лекция)",
        13: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        15: "-",
        16: "-"
    },

    "friday": {
        10: "-",
        11: "-",
        13: "Прграммрование на JAVA, Android, iOS (Лекция)",
        15: "Прграммрование на JAVA, Android, iOS (Лекция)",
        16: "-"
    },

    "saturday": {
        10: "-",
        11: "-",
        13: "-",
        15: "-",
        16: "-"
    },
}

significantSchedule = {
    "monday": {
        10: "-",
        11: "Схематехника и программирование микроконтроллерных систем (Лекция)",
        13: "Web-программирование (Лекция)",
        15: "Web-программирование (Лабораторная)",
        16: "-"
    },

    "tuesday": {
        10: "Распределенные системы управления (лабораторная)",
        11: "Распределенные системы управления (лабораторная)",
        13: "-",
        15: "-",
        16: "-"
    },

    "wednesday": {
        10: "-",
        11: "-",
        13: "Безопасность и Жизнедеятельность (Лекция)",
        15: "-",
        16: "-"
    },

    "thursday": {
        10: "Безопасность и жизнедеятельность (лабораторная)",
        11: "Распределенные системы управления (лекция)",
        13: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        15: "-",
        16: "-"
    },

    "friday": {
        10: "-",
        11: "-",
        13: "Прграммрование на JAVA, Android, iOS (Лекция)",
        15: "Прграммрование на JAVA, Android, iOS (Лекция)",
        16: "-"
    },

    "saturday": {
        10: "-",
        11: "-",
        13: "-",
        15: "-",
        16: "-"
    },
}

function clickButton() {
    const btn = document.querySelectorAll(".btn")
    let day = "";
    btn[0].addEventListener('click', (event) => {
        day = "monday"
    })

    btn[1].addEventListener('click', (event) => {
        day = "tuesday"
    })

    btn[2].addEventListener('click', (event) => {
        day = "wednesday"
    })

    btn[3].addEventListener('click', (event) => {
        day = "thursday"
    })

    btn[4].addEventListener('click', (event) => {
        day = "friday"
    })

    btn[5].addEventListener('click', (event) => {
        day = "saturday"
    })

    btn[6].addEventListener('click', (event) => {
        day = "all"
    })

    return day;
}

function updateDate() {
    const header = document.getElementById("schedule_day");
    const today = new Date();
    const formattedDate = today.toLocaleDateString("ru-RU");
    header.textContent = `Расписание на ${formattedDate}`;
}

function schedule(day) {
    fetch(`pages/${day}.html`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Ошибка загрузки: статус ${res.status}`);
            }
            return res.text();
        })
        .then(html => {
            const target = document.getElementById('content') || document.querySelector('.content');
            if (!target) {
                console.error("ОШИБКА: Контейнер расписания не найден!");
                return;
            }
            target.innerHTML = html;
            
            addSubject(day);
        })
        .catch(err => console.error("Детали ошибки:", err));
}

function addSubject(day) {
    const subjects = document.querySelectorAll(".subject");

    if (day in numeralSchedule) {
        subjects.forEach(subject => {
            const time = subject.dataset.time;
            if (time && numeralSchedule[day][time]) {
                subject.textContent = numeralSchedule[day][time];
            }
        });
    } else {
        console.log(`День "${day}" не найден в numeralSchedule`);
    }
}

function initNavigation() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedDay = button.dataset.day;
            
            if (selectedDay) {
                schedule(selectedDay);
            }
        });
    });
}

function main() {
    updateDate();
    initNavigation();
    schedule(clickButton());
}

main()


