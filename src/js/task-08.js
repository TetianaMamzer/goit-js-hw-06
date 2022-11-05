const refs = {
  form: document.querySelector('.login-form'),
};

const inSubmit = (e) => {
  e.preventDefault();
  const emailForm = e.target.elements.email.value;
  const passwordForm = e.target.elements.password.value;
  const submitRes = {
    email: emailForm,
    password: passwordForm,
  };

  if (submitRes.email === "") {
    alert('всі поля повинні бути заповнені!');
  } else if (submitRes.password  === "") {
    alert('всі поля повинні бути заповнені!');
  } else {
    console.log(submitRes);
    refs.form.reset();
  };
  
};

refs.form.addEventListener('submit', inSubmit);
