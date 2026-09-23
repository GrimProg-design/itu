const numerator = [
    "Fatima",
    "Gulina",
    "Abdulaziz",
    "Asel"
];

const denominator = [
    "Ilia",
    "Dastan",
    "Aidana",
    "Ruslan",
    "Dair"
];


// ----------------------------------------
// РАСПИСАНИЕ ЧИСЛИТЕЛЬНОЙ НЕДЕЛИ
// ----------------------------------------

const numeralSchedule = {

    monday: {
        10: "-",
        11: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        13: "Web-программирование (Лекция)",
        15: "Web-программирование (Лабораторная)",
        16: "-"
    },

    tuesday: {
        10: "-",
        11: "-",
        13: "Программирование на JAVA, Android, iOS (Лабораторная)",
        15: "Программирование на JAVA, Android, iOS (Лабораторная)",
        16: "-"
    },

    wednesday: {
        10: "-",
        11: "-",
        13: "Безопасность и Жизнедеятельность (Лекция)",
        15: "-",
        16: "-"
    },

    thursday: {
        10: "-",
        11: "Распределенные системы управления (лекция)",
        13: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        15: "-",
        16: "-"
    },

    friday: {
        10: "-",
        11: "-",
        13: "Программирование на JAVA, Android, iOS (Лекция)",
        15: "Программирование на JAVA, Android, iOS (Лекция)",
        16: "-"
    },

    saturday: {
        10: "-",
        11: "-",
        13: "-",
        15: "-",
        16: "-"
    }
};


// ----------------------------------------
// РАСПИСАНИЕ ЗНАМЕНАТЕЛЬНОЙ НЕДЕЛИ
// ----------------------------------------

const significantSchedule = {

    monday: {
        10: "-",
        11: "Схематехника и программирование микроконтроллерных систем (Лекция)",
        13: "Web-программирование (Лекция)",
        15: "Web-программирование (Лабораторная)",
        16: "-"
    },

    tuesday: {
        10: "Распределенные системы управления (лабораторная)",
        11: "Распределенные системы управления (лабораторная)",
        13: "-",
        15: "-",
        16: "-"
    },

    wednesday: {
        10: "-",
        11: "-",
        13: "Безопасность и Жизнедеятельность (Лекция)",
        15: "-",
        16: "-"
    },

    thursday: {
        10: "Безопасность и жизнедеятельность (лабораторная)",
        11: "Распределенные системы управления (лекция)",
        13: "Схематехника и программирование микроконтроллерных систем (Лабораторная)",
        15: "-",
        16: "-"
    },

    friday: {
        10: "-",
        11: "-",
        13: "Программирование на JAVA, Android, iOS (Лекция)",
        15: "Программирование на JAVA, Android, iOS (Лекция)",
        16: "-"
    },

    saturday: {
        10: "-",
        11: "-",
        13: "-",
        15: "-",
        16: "-"
    }
};


// ----------------------------------------
// ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ
// ----------------------------------------

let currentUser = null;
let currentWeek = null;


// ----------------------------------------
// ОПРЕДЕЛЯЕМ ГРУППУ ЧЕЛОВЕКА
// ----------------------------------------

function findUser(name) {

    const normalizedName = name.trim().toLowerCase();

    const numeratorUser = numerator.find(
        user => user.toLowerCase() === normalizedName
    );

    if (numeratorUser) {
        return {
            name: numeratorUser,
            week: "numerator"
        };
    }


    const denominatorUser = denominator.find(
        user => user.toLowerCase() === normalizedName
    );

    if (denominatorUser) {
        return {
            name: denominatorUser,
            week: "denominator"
        };
    }


    return null;
}


// ----------------------------------------
// СПРАШИВАЕМ ИМЯ
// ----------------------------------------

function askUser() {

    let user = null;

    while (!user) {

        const name = prompt(
            "Введите ваше имя:\n\n" +
            "Fatima, Gulina, Abdulaziz, Asel\n" +
            "Ilia, Dastan, Aidana, Ruslan, Dair"
        );


        // Если пользователь нажал "Отмена"
        if (name === null) {
            return;
        }


        user = findUser(name);


        if (!user) {
            alert(
                "Такого имени нет в списке.\n" +
                "Попробуйте ввести имя еще раз."
            );
        }
    }


    currentUser = user.name;
    currentWeek = user.week;


    showUserInfo();
    showSchedule("all");
}


// ----------------------------------------
// ПОКАЗЫВАЕМ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ
// ----------------------------------------

function showUserInfo() {

    const userInfo = document.getElementById("user_info");

    const weekName =
        currentWeek === "numerator"
            ? "числительная неделя"
            : "знаменательная неделя";


    userInfo.textContent =
        `Пользователь: ${currentUser} | ${weekName}`;
}


// ----------------------------------------
// ПОЛУЧАЕМ РАСПИСАНИЕ ТЕКУЩЕГО ЧЕЛОВЕКА
// ----------------------------------------

function getCurrentSchedule() {

    if (currentWeek === "numerator") {
        return numeralSchedule;
    }

    return significantSchedule;
}


// ----------------------------------------
// СОЗДАЕМ РАСПИСАНИЕ
// ----------------------------------------

function showSchedule(day) {

    const content = document.querySelector(".content");

    content.innerHTML = "";


    if (day === "all") {

        const schedule = getCurrentSchedule();

        Object.keys(schedule).forEach(dayName => {

            createDaySchedule(
                dayName,
                schedule[dayName]
            );

        });

        document.getElementById("schedule_day").textContent =
            "Расписание на неделю";

        return;
    }


    const schedule = getCurrentSchedule();

    createDaySchedule(
        day,
        schedule[day]
    );


    const dayNames = {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота"
    };


    document.getElementById("schedule_day").textContent =
        `Расписание на ${dayNames[day]}`;
}


// ----------------------------------------
// СОЗДАЕМ ОДИН ДЕНЬ
// ----------------------------------------

function createDaySchedule(day, schedule) {

    const content = document.querySelector(".content");


    const dayBlock = document.createElement("div");

    dayBlock.classList.add("day");


    const title = document.createElement("h2");

    const dayNames = {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота"
    };


    title.textContent = dayNames[day];

    dayBlock.appendChild(title);


    const times = [
        ["10:00 / 11:20", 10],
        ["11:30 / 12:50", 11],
        ["13:00 / 14:20", 13],
        ["15:00 / 16:20", 15],
        ["16:30 / 17:50", 16]
    ];


    times.forEach(([time, lessonTime]) => {

        const string = document.createElement("div");

        string.classList.add("string");


        const timeElement = document.createElement("div");

        timeElement.classList.add("time");

        timeElement.textContent = time;


        const subject = document.createElement("div");

        subject.classList.add("subject");

        subject.textContent = schedule[lessonTime];


        string.appendChild(timeElement);
        string.appendChild(subject);


        dayBlock.appendChild(string);
    });


    content.appendChild(dayBlock);
}


// ----------------------------------------
// НАВИГАЦИЯ
// ----------------------------------------

function initNavigation() {

    const buttons = document.querySelectorAll(".btn");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const day = button.dataset.day;

            showSchedule(day);

        });

    });
}


// ----------------------------------------
// СМЕНА ПОЛЬЗОВАТЕЛЯ
// ----------------------------------------

function initUserChange() {

    const button = document.getElementById("change_user");


    button.addEventListener("click", () => {

        askUser();

    });
}


// ----------------------------------------
// ЗАПУСК
// ----------------------------------------

function main() {

    initNavigation();

    initUserChange();

    askUser();

}

main();