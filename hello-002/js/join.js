document.addEventListener("DOMContentLoaded", () => {
  const join_body = document.querySelector("section.join.body");
  const join_form = document.querySelector("form");
  const input_username = document.querySelector("input[name='username']");
  const input_password = document.querySelector("input[name='passowrd']");
  const input_re_password = document.querySelector("input[name='re-password']");
  const input_name = document.querySelector("input[name='name']");
  const input_tel = document.querySelector("input[name='tel']");
  const btn_join = document.querySelector("input[name='input-join']");

  const onValidation = () => {
    const value_username = input_username.value;
    const value_password = input_password.value;
    const value_re_password = input_re_password.value;
  };
  /*
  join(회원가입) 버튼을 클릭했을때
  1.username,password,re_password 가 입력되는지 검사하기
  2.password 와 re_password 가 일치하는지 검사하기
  */
  if (!input_username) {
    alert("아이디를 입력하세요");
    value_username.select();
    return false;
  }
  if (!input_password) {
    alert("비밀번호를 입력하세요");
    value_password.select();
    return false;
  }
  if (!input_password === input_re_password) {
    alert("비밀번호가 틀립니다 혹은 입력이 안돼었습니다.");
    value_re_password.select();
    return false;
  }
  btn_join.addEventListener("click", onValidation);
});
