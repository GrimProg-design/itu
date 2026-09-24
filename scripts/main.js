const users = {
    Fatima: {
        group: 2
    },

    Gulina: {
        group: 2
    },

    Abdulaziz: {
        group: 2
    },

    Asel: {
        group: 2
    },

    Muslim: {
        group: 2
    },

    Zaure: {
        group:2
    },

    Guldana: {
        group:2
    },

    Dair: {
        group: 2
    },

    Sabina: {
        group: 2
    },

    Sogdiana: {
        group: 2
    },


    Ilia: {
        group: 1
    },

    Dastan: {
        group: 1
    },

    Aidana: {
        group: 1
    },

    Ruslan: {
        group: 1
    },

    Polina: {
        group: 1
    },

    Medina: {
        group: 1
    },

    Daniel: {
        group: 1
    },

    Eldos: {
        group:1
    },

    Nurbol: {
        group: 1
    },

    Denislam: {
        group: 1
    },

    Mirad: {
        group: 1
    },

    Radin: {
        group: 1
    },

    Bactubeck: {
        group: 1
    }
};

const NUMERATOR_START_DATE = "2026-09-28";

const dayNames = {
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота"
};

const lessonTimes = [
    {
        key: 10,
        time: "10:00 — 11:20"
    },

    {
        key: 11,
        time: "11:30 — 12:50"
    },

    {
        key: 13,
        time: "13:00 — 14:20"
    },

    {
        key: 15,
        time: "15:00 — 16:20"
    },

    {
        key: 16,
        time: "16:30 — 17:50"
    }
];

const schedule = {
    numerator: {
        group1: {
            monday: {
                10: "-",
                11: "Схематехника и программирование микроконтроллерных систем (Лекция) 2/333",
                13: "Web-программирование (Лекция) 2/333",
                15: "-",
                16: "-"
            },

            tuesday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лабораторная) 2/426",
                15: "Программирование на JAVA, Android, iOS (Лабораторная) 2/426",
                16: "-"
            },

            wednesday: {
                10: "-",
                11: "-",
                13: "Безопасность и Жизнедеятельность (Лекция) 2/616",
                15: "Web-программирование (Лабораторная) 2/437",
                16: "-"
            },

            thursday: {
                10: "Безопасность жизнедеятельности (Лабораторная) 2/527",
                11: "Распределенные системы управления (Лекция) 2/333",
                13: "-",
                15: "-",
                16: "-"
            },

            friday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лекция) 2/333",
                15: "Цифровые технологии в управлении (Лекция) 2/333",
                16: "-"
            },

            saturday: {
                10: "-",
                11: "-",
                13: "Цифровые технологии в управлении (Лабораторная) УЦ. НИАРС",
                15: "Цифровые технологии в управлении (Лабораторная) УЦ. НИАРС",
                16: "-"
            }
        },

        group2: {

            monday: {
                10: "-",
                11: "Схематехника и программирование микроконтроллерных систем (Лекция) 2/333",
                13: "Web-программирование (Лекция) 2/333",
                15: "Web-программирование (Лабораторная) 2/437",
                16: "-"
            },

            tuesday: {
                10: "Распределенные системы управления (Лабораторная) 2/437",
                11: "Распределенные системы управления (Лабораторная) 2/437",
                13: "-",
                15: "-",
                16: "-"
            },

            wednesday: {
                10: "-",
                11: "-",
                13: "Безопасность и Жизнедеятельность (Лекция) 2/616",
                15: "-",
                16: "-"
            },

            thursday: {
                10: "-",
                11: "Распределенные системы управления (Лекция) 2/333",
                13: "Схематехника и программирование микроконтроллерных систем (Лабораторная) 2/426",
                15: "Схематехника и программирование микроконтроллерных систем (Лабораторная) 2/426",
                16: "-"
            },

            friday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лекция) 2/333",
                15: "Цифровые технологии в управлении (Лекция) 2/333",
                16: "Безопасность жизнедеятельности (Практика) 2/537"
            },

            saturday: {
                10: "-",
                11: "-",
                13: "-",
                15: "-",
                16: "-"
            }
        }
    },

    denominator: {
        group1: {
            monday: {
                10: "-",
                11: "Схематехника и программирование микроконтроллерных систем (Лекция) 2/333",
                13: "Web-программирование (Лекция) 2/333",
                15: "Web-программирование (Лабораторная) 2/437",
                16: "-"
            },

            tuesday: {
                10: "Распределенные системы управления (Лабораторная) 2/437",
                11: "Распределенные системы управления (Лабораторная) 2/437",
                13: "-",
                15: "-",
                16: "-"
            },

            wednesday: {
                10: "-",
                11: "-",
                13: "Безопасность и Жизнедеятельность (Лекция) 2/616",
                15: "-",
                16: "-"
            },

            thursday: {
                10: "-",
                11: "Распределенные системы управления (Лекция) 2/333",
                13: "Схематехника и программирование микроконтроллерных систем (Лабораторная) 2/426",
                15: "Схематехника и программирование микроконтроллерных систем (Лабораторная) 2/426",
                16: "-"
            },

            friday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лекция) 2/333",
                15: "Цифровые технологии в управлении (Лекция) 2/333",
                16: "Безопасность жизнедеятельности (Практика) 2/537"
            },

            saturday: {
                10: "-",
                11: "-",
                13: "-",
                15: "-",
                16: "-"
            }
        },

        group2: {

            monday: {
                10: "-",
                11: "Схематехника и программирование микроконтроллерных систем (Лекция) 2/333",
                13: "Web-программирование (Лекция) 2/333",
                15: "-",
                16: "-"
            },

            tuesday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лабораторная) 2/426",
                15: "Программирование на JAVA, Android, iOS (Лабораторная) 2/426",
                16: "-"
            },

            wednesday: {
                10: "-",
                11: "-",
                13: "Безопасность и Жизнедеятельность (Лекция) 2/616",
                15: "Web-программирование (Лабораторная) 2/437",
                16: "-"
            },

            thursday: {
                10: "Безопасность и жизнедеятельность (Лабораторная) 2/527",
                11: "Распределенные системы управления (Лекция) 2/333",
                13: "-",
                15: "-",
                16: "-"
            },

            friday: {
                10: "-",
                11: "-",
                13: "Программирование на JAVA, Android, iOS (Лекция) 2/333",
                15: "Цифровые технологии в управлении (Лекция) 2/333",
                16: "-"
            },

            saturday: {
                10: "-",
                11: "-",
                13: "Цифровые технологии в управлении (Лабораторная) УЦ. НИАРС",
                15: "Цифровые технологии в управлении (Лабораторная) УЦ. НИАРС",
                16: "-"
            }
        }
    }
};
// Просто для прогрузки GitHub Pages
let currentUser = null;
let currentGroup = null;
let currentWeek = null;

function findUser(name) {
    const normalizedName = name.trim().toLowerCase();

    const userName = Object.keys(users).find(
            user => user.toLowerCase() === normalizedName
        );

    if (!userName) {
        return null;
    }

    return {
        name: userName,
        group: users[userName].group
    };
}

function getCurrentWeek() {
    const startDate = new Date(NUMERATOR_START_DATE);
    const today = new Date();
    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const difference = today.getTime() - startDate.getTime();

    const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const weeks = Math.floor(days / 7);

    if (weeks % 2 === 0) {
        return "numerator";
    }
    return "denominator";
}

function getWeekName(week) {
    if (week === "numerator") {
        return "Числительная неделя";
    }

    return "Знаменательная неделя";
}

function askUser() {
    let user = null;

    while (!user) {
        const name = prompt(
            "1 Группа: Ilia, Ruslan, Dastan, Aidana, Medina, Polina, Eldos, Nurbol, Daniel, Denislam, Radin, Mirad, Bactubeck \n \n2 группа: Fatima, Gulina, Muslim, Asel, Abdulaziz, Dair, Zaure, Guldana, Sogdiana, Sabina  \n \n Введите ваше имя:"
        );

        if (name === null) {
            return;
        }

        user = findUser(name);

        if (!user) {
            alert(
                "Такого имени нет в списке.\n\n" +
                "Проверьте написание имени."
            );
        }
    }

    currentUser = user.name;
    currentGroup = user.group;
    currentWeek = getCurrentWeek();

    localStorage.setItem(
        "scheduleUser",
        currentUser
    );

    updateUserInfo();
    showSchedule("all");
}

function updateUserInfo() {
    const userName = document.getElementById("user_name");
    const userGroup = document.getElementById("user_group");
    const userWeek = document.getElementById("user_week");
    const userAvatar = document.getElementById("user_avatar");

    userName.textContent = currentUser;

    userGroup.textContent = `Подгруппа ${currentGroup}`;


    userWeek.textContent = getWeekName(currentWeek);

    userAvatar.textContent =
        currentUser.charAt(0).toUpperCase();
}

function getUserSchedule() {
    return schedule[currentWeek][
        `group${currentGroup}`
    ];
}

function showSchedule(day) {
    const content =
        document.getElementById("content");
    content.innerHTML = "";

    if (day === "all") {
        Object.keys(dayNames).forEach(
            dayName => {
                createDaySchedule(
                    dayName,
                    getUserSchedule()[dayName]
                );
            }
        );

        document.getElementById(
            "schedule_day"
        ).textContent = "Расписание на неделю";

        return;
    }

    createDaySchedule(
        day,
        getUserSchedule()[day]
    );

    document.getElementById(
        "schedule_day"
    ).textContent =
        `Расписание на ${dayNames[day]}`;
}

function createDaySchedule(
    day,
    daySchedule
) {
    const content = document.getElementById("content");
    const dayCard = document.createElement("section");
    dayCard.className = "day";
    const dayHeader = document.createElement("div");
    dayHeader.className = "day-header";
    const title = document.createElement("h2");
    title.className = "day-title";
    title.textContent = dayNames[day];
    const badge = document.createElement("span");
    badge.className = "week-badge";
    badge.textContent = getWeekName(currentWeek);
    dayHeader.appendChild(title);
    dayHeader.appendChild(badge);
    dayCard.appendChild(dayHeader);

    lessonTimes.forEach(
        lesson => {
            const lessonElement = document.createElement("div");
            lessonElement.className = "lesson";
            const subject = daySchedule[lesson.key];
            const time = document.createElement("div");
            time.className = "lesson-time";
            time.textContent = lesson.time;
            const subjectElement = document.createElement("div");
            subjectElement.className = "lesson-subject";
            if (
                subject === "-" ||
                !subject
            ) {
                lessonElement.classList.add(
                    "empty"
                );
                subjectElement.textContent =
                    "Нет занятий";
            } else {
                subjectElement.textContent =
                    subject;
            }
            lessonElement.appendChild(time);
            lessonElement.appendChild(
                subjectElement
            );
            dayCard.appendChild(
                lessonElement
            );
        }
    );

    content.appendChild(dayCard);
}

function initNavigation() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener(
            "click",
            () => {
                const day = button.dataset.day;
                buttons.forEach(btn => {
                    btn.classList.remove(
                        "active"
                    );
                });

                button.classList.add(
                    "active"
                );

                showSchedule(day);
            }
        );
    });
}

function initChangeUser() {
    const button =
        document.getElementById(
            "change_user"
        );

    button.addEventListener(
        "click",
        () => {
            askUser();
        }
    );
}

function main() {
    initNavigation();
    initChangeUser();
    const savedUser =
        localStorage.getItem(
            "scheduleUser"
        );
    if (savedUser) {
        const user = findUser(savedUser);
        if (user) {
            currentUser = user.name;
            currentGroup = user.group;
            currentWeek = getCurrentWeek();
            updateUserInfo();
            showSchedule("all");
            return;
        }
    }
    askUser();
}

main();
