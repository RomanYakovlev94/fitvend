
// function send(event, php){
//     console.log("Отправка запроса");
//     event.preventDefault ? event.preventDefault() : event.returnValue = false;
//     var req = new XMLHttpRequest();
//     req.open('POST', php, true);
//     req.onload = function() {
//         if (req.status >= 200 && req.status < 400) {
//           json = JSON.parse(this.response); // Ебанный internet explorer 11
//             console.log(json);
              
//             // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//             if (json.result == "success") {
//               // Если сообщение отправлено
//               document.getElementById("form").reset();
//               alert("Сообщение отправлено");
//             } else {
//               // Если произошла ошибка
//               alert("Ошибка. Сообщение не отправлено");
//             }
//           // Если не удалось связаться с php файлом
//         } else {alert("Ошибка сервера. Номер: "+req.status);}
//     }; 
      
//     // Если не удалось отправить запрос. Стоит блок на хостинге
//     req.onerror = function() {alert("Ошибка отправки запроса");};
//     req.send(new FormData(event.target));
// }

//inputmask
const form = document.querySelector(".footer-form");
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
//--inputmask


//validate
const validation = new JustValidate('.footer-form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите имя, минимум 2 буквы!',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          alert("Сообщение отправлено");
        }
      }
    }

    xhr.open('POST', 'send.php', true);
    xhr.send(formData);

    event.target.reset();
  });

  //---validate