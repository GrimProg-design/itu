const supportList = {
    ceo: {
        name: "Илья Вавилов",
        number: "+996 708 504 677",
        desc: "По всем вопросам и предложениям, обращайтесь по этому контакту",
        status: "владелец/админ сайта"
    },

    zam: {
        name: "Юнусов Русланчик",
        number: "+996 704 789 111",
        desc: "Обещал ему что когда стану CEO он станет моим замом (теперь приносит мне печеньки с кухни)",
        status: "директор чего нибудь"
    }
}

function showSupport() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  document.getElementById('schedule_day').textContent = 'Поддержка'

  const supportCon = document.createElement("div");
  supportCon.className = 'support-con'

    Object.values(supportList).forEach((people) => {
        const card = document.createElement("section")
        card.className = 'support-people'

        card.innerHTML = `
             <div class="teacher-header">
                <h2 class="teacher-name">${people.name}</h2>
            </div>

            <div class="teacher-info">

                <div class="teacher-info-row">
                    <span class="teacher-label">Описание</span>
                    <span class="teacher-value">${people.desc}</span>
                </div>

                <div class="teacher-info-row">
                    <span class="teacher-label">Статус</span>
                    <span class="teacher-value">
                        <span class="teacher-format">${people.status}</span>
                    </span>
                </div>

                
                <div class="teacher-info-row">
                    <span class="teacher-label">Контакты</span>
                  
                    <div class="teacher-contacts">
                  
                        <a class="teacher-phone"
                           href="tel:${people.number.replace(/[^+\d]/g, "")}">
                            <span>Позвонить</span>
                        </a>
                  
                        <a class="teacher-whatsapp"
                           href="https://wa.me/${people.number.replace(/\D/g, "")}"
                           target="_blank"
                           rel="noopener noreferrer">
                            <span>WhatsApp</span>
                        </a>
                  
                    </div>
                </div>


            </div>   
        `
        supportCon.appendChild(card)
    })
    content.appendChild(supportCon)
}

export function initSupportBtn() {
    const button = document.getElementById('support-btn')

    button.addEventListener('click', (e) => {
        e.preventDefault()

        showSupport()
    })
}