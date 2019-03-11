"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = (login) => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};


const addLogin = (allLogins, login) => {
  if (isLoginValid(login)) {
    if (isLoginUnique(logins, login)) {
      allLogins.push(login);
      console.log('Логин успешно добавлен!');
    } else {
      console.log('Такой логин уже используется!');
    }
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};


addLogin(logins, 'Ajax'); 
addLogin(logins, 'robotGoogles');
addLogin(logins, 'jqueryisextremelyfast');


console.log(logins);
