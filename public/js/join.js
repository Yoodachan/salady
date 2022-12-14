//인풋 변수
var u_name = document.getElementById("u_name");
var u_id = document.getElementById("u_id");
let pwd = document.getElementById("pwd");
let re_pwd = document.getElementById("re_pwd");
let mobile = document.getElementById("mobile");
let birth = document.getElementById("birth");

let ps_code = document.getElementById("ps_code");
let addr1 = document.getElementById("addr1");
let addr2 = document.getElementById("addr2");
let addr3 = document.getElementById("addr3");

let apply_all = document.getElementById("apply_all");

let apply_priv = document.getElementById("apply_priv");
let apply_medie = document.getElementById("apply_medie");
let apply_age = document.getElementById("apply_age");
let apply_marketing = document.getElementById("apply_marketing");
let apply_marketing_hidden = document.getElementById('apply_marketing_hidden');

// 이름
var u_name_reg = /^[가-힣]{2,20}$/;
var d_name = document.getElementById("d_name");

let name_check = false;

// 아이디
var u_id_reg = regExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var d_id = document.getElementById("d_id");

let id_check = false;

// 비밀번호
var pwd_reg = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,24}$/;
var d_pwd = document.getElementById("d_pwd");

let pwd_check = false;

// 비밀번호 확인
var d_re_pwd = document.getElementById("d_re_pwd");

let re_pwd_check = false;

// 모바일
var mobile_reg = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/;
var d_mobile = document.getElementById("d_mobile");

let mobile_check = false;

// 생년월일
var birth_reg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
var d_birth = document.getElementById("d_birth");

let birth_check = false;

// 주소
let addr_check = false;
var d_addr3 = document.getElementById("d_addr3");

// 버튼 포커스
var postal_btn = document.getElementById("postal_btn");


//이름

//이름 미 작성시 실시간으로 하단 텍스트 생성
var name_text_wrap = document.getElementById("name_text_wrap");
let name_text = document.createElement('p');
//chap1. p태그를 변수에 저장

u_name.addEventListener('input', 
function name_text_on () {
    if(!u_name_reg.test(u_name.value) ) {
        u_name.classList.remove('n_border');
        u_name.classList.add('err_border');
        name_text.innerText = "이름을 양식에 맞게 작성 해주세요";
        //chap2. 저장된 p태그에 텍스트 작성
        name_text_wrap.appendChild(name_text);
        //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
        name_text.classList.remove('clear_txt');
        name_text.classList.add('err_txt');
        name_check = false;
    } 
    else {
        u_name.classList.remove('err_border');
        u_name.classList.add('n_border');
        name_text.innerText = "이름이 정상이네요";
        name_text_wrap.appendChild(name_text);
        name_text.classList.remove('err_txt');
        name_text.classList.add('clear_txt');
        name_check = true;
    }
}
) 
//이름 정상 작성후 마우스 넘기면 텍스트 사라짐 
u_name.addEventListener('change',
function name_text_out() {
    if(u_name_reg.test(u_name.value)) {
        name_text_wrap.removeChild(name_text);
    //   name_check = false;
   } 
    else {
        // name_check = true;
    }
}
) ;
//이름 삭제 버튼 on/off
u_name.addEventListener('input',
function name_button_on () {
    if (u_name.value) {
        d_name.classList.remove('off_view');
        d_name.classList.add('on_view');
    }
    else {
        d_name.classList.add('off_view');
        d_name.classList.remove('on_view');
    }
})

//이름 삭제 버튼 기능

d_name.addEventListener('click',
function name_button_off () {
    u_name.value = ""
    name_text.classList.remove('clear_txt');
    name_text.classList.add('err_txt');
    u_name.classList.remove('n_border');
    u_name.classList.add('err_border');
    d_name.classList.remove('on_view');
    d_name.classList.add('off_view');
    name_text.innerText = "이름은 필수 정보입니다.";
    name_text_wrap.appendChild(name_text)

    name_check = false;
}
);

// 아이디

let id_text_wrap = document.getElementById("id_text_wrap");
let id_text = document.createElement('p');

u_id.addEventListener('input', 
function id_text_on () {
    if(!u_id_reg.test(u_id.value) ) {
        u_id.classList.remove('n_border');
        u_id.classList.add('err_border');
        id_text.innerText = "아이디를 양식에 맞게 작성 해주세요";
        //chap2. 저장된 p태그에 텍스트 작성
        id_text_wrap.appendChild(id_text);
        //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
        id_text.classList.remove('clear_txt');
        id_text.classList.add('err_txt');
        id_check = false;
    } 
    else {
        u_id.classList.remove('err_border');
        u_id.classList.add('n_border');
        id_text.innerText = "아이디가 정상이네요";
        id_text_wrap.appendChild(id_text);
        id_text.classList.remove('err_txt');
        id_text.classList.add('clear_txt');
        id_check = true;
    }
}
) 
//아이디 정상 작성후 마우스 넘기면 텍스트 사라짐 
u_id.addEventListener('change',
function id_text_out() {
    if(u_id_reg.test(u_id.value)) {
        id_text_wrap.removeChild(id_text);
   } 
}
) ;
//아이디 삭제 버튼 on/off
u_id.addEventListener('input',
function name_button_on () {
    if (u_id.value) {
        d_id.classList.remove('off_view');
        d_id.classList.add('on_view');
    }
    else {
        d_id.classList.add('off_view');
        d_id.classList.remove('on_view');
    }
})

//아이디 삭제 버튼 기능

d_id.addEventListener('click',
function id_button_off () {
    u_id.value = ""
    id_text.classList.remove('clear_txt');
    id_text.classList.add('err_txt');
    u_id.classList.remove('n_border');
    u_id.classList.add('err_border');
    d_id.classList.remove('on_view');
    d_id.classList.add('off_view');
    id_text.innerText = "아이디는 필수 정보입니다.";
    id_text_wrap.appendChild(id_text)

    id_check = false;
}
);


//비밀번호

let pwd_text_wrap = document.getElementById("pwd_text_wrap");
let pwd_text = document.createElement('p');

// chap1. p태그를 변수에 저장
pwd.addEventListener('input', 
function pwd_text_on () {
    if(!pwd_reg.test(pwd.value) ) {
            pwd.classList.remove('n_border');
            pwd.classList.add('err_border');
            pwd_text.innerText = "비밀번호를 양식에 맞게 작성 해주세요";
            //chap2. 저장된 p태그에 텍스트 작성
            pwd_text_wrap.appendChild(pwd_text);
            //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
            pwd_text.classList.remove('clear_txt');
            pwd_text.classList.add('err_txt');
            pwd_check = false;
    } 

    else {
        pwd.classList.remove('err_border');
        pwd.classList.add('n_border');
        pwd_text.innerText = "비밀번호가 정상이네요";
        pwd_text_wrap.appendChild(pwd_text);
        pwd_text.classList.remove('err_txt');
        pwd_text.classList.add('clear_txt');
        pwd_check = true;
    }
}
);



pwd.addEventListener('input', 
function pwd_text_on () {
    if(re_pwd.value && (re_pwd.value != pwd.value)  ) {
        re_pwd.classList.remove('n_border');
        re_pwd.classList.add('err_border');
        re_pwd_text.innerText = "비밀번호 확인을 양식에 맞게 작성 해주세요";
        //chap2. 저장된 p태그에 텍스트 작성
        re_pwd_text_wrap.appendChild(re_pwd_text);
        //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
        re_pwd_text.classList.remove('clear_txt');
        re_pwd_text.classList.add('err_txt');
        re_pwd_check = false;
    }
    else if (re_pwd.value && (re_pwd.value == pwd.value)) {
        re_pwd.classList.remove('err_border');
        re_pwd.classList.add('n_border');
        re_pwd_text_wrap.appendChild(re_pwd_text);
        re_pwd_text.classList.remove('err_txt');
        re_pwd_text.classList.add('clear_txt');
        re_pwd_text_wrap.removeChild(re_pwd_text);
        re_pwd_check = true;
    } 
}
);



pwd.addEventListener('change',
function pwd_text_out() {
    if(pwd_reg.test(pwd.value)) {
        pwd_text_wrap.removeChild(pwd_text);
    //   name_check = false;
   } 
    else {
        // name_check = true;
    }
}
);

pwd.addEventListener('input',
function pwd_button_on () {
    if (pwd.value) {
        d_pwd.classList.remove('off_view');
        d_pwd.classList.add('on_view');
    }
    else {
        d_pwd.classList.add('off_view');
        d_pwd.classList.remove('on_view');
    }
});

d_pwd.addEventListener('click',
function pwd_button_off () {
    pwd.value = ""
    pwd_text.classList.remove('clear_txt');
    pwd_text.classList.add('err_txt');
    pwd.classList.remove('n_border');
    pwd.classList.add('err_border');
    d_pwd.classList.remove('on_view');
    d_pwd.classList.add('off_view');
    pwd_text.innerText = "비밀번호는 필수 정보입니다.";
    pwd_text_wrap.appendChild(pwd_text);

    pwd_check = false;
}
);

// 비밀번호 확인

let re_pwd_text_wrap = document.getElementById("re_pwd_text_wrap");
let re_pwd_text = document.createElement('p');



// var re_pwd_len = re_pwd.value.length;



//chap1. p태그를 변수에 저장
// v1. 같거나 같지 않을시 검사
re_pwd.addEventListener('input', 
function re_pwd_text_on () {
    if ( re_pwd.value != pwd.value ) {
        re_pwd.classList.remove('n_border');
        re_pwd.classList.add('err_border');
        re_pwd_text.innerText = "비밀번호 확인을 양식에 맞게 작성 해주세요";
        //chap2. 저장된 p태그에 텍스트 작성
        re_pwd_text_wrap.appendChild(re_pwd_text);
        //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
        re_pwd_text.classList.remove('clear_txt');
        re_pwd_text.classList.add('err_txt');
        re_pwd_check = false;
    } 
    else {
        re_pwd.classList.remove('err_border');
        re_pwd.classList.add('n_border');
        re_pwd_text.innerText = "비밀번호 확인이 정상이네요";
        re_pwd_text_wrap.appendChild(re_pwd_text);
        re_pwd_text.classList.remove('err_txt');
        re_pwd_text.classList.add('clear_txt');
        re_pwd_check = true;
    }
}
);

// v2. 같거나 같지 않을시 검사
// 공백이나 조건이 맞지 않을시
re_pwd.addEventListener('input', 
function re_pwd_text_on () {
    if ( !pwd_reg.test(pwd.value) ) {
            re_pwd.classList.remove('n_border');
            re_pwd.classList.add('err_border');
            re_pwd_text.innerText = "비밀번호 확인을 양식에 맞게 작성 해주세요";
            //chap2. 저장된 p태그에 텍스트 작성
            re_pwd_text_wrap.appendChild(re_pwd_text);
            //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
            re_pwd_text.classList.remove('clear_txt');
            re_pwd_text.classList.add('err_txt');
            re_pwd_check = false;
    } 
}
);


re_pwd.addEventListener('change',
function re_pwd_text_out() {
    if ( re_pwd.value == pwd.value  ) {
        re_pwd_text_wrap.removeChild(re_pwd_text);
    //   name_check = false;
   } 
    else {
        // name_check = true;
    }
}
);

re_pwd.addEventListener('input',
function re_pwd_button_on () {
    if (re_pwd.value) {
        d_re_pwd.classList.remove('off_view');
        d_re_pwd.classList.add('on_view');
    }
    else {
        d_re_pwd.classList.add('off_view');
        d_re_pwd.classList.remove('on_view');
    }
});

d_re_pwd.addEventListener('click',
function re_pwd_button_off () {
    re_pwd.value = ""
    re_pwd_text.classList.remove('clear_txt');
    re_pwd_text.classList.add('err_txt');
    re_pwd.classList.remove('n_border');
    re_pwd.classList.add('err_border');
    d_re_pwd.classList.remove('on_view');
    d_re_pwd.classList.add('off_view');
    re_pwd_text.innerText = "비밀번호 확인은 필수 정보입니다.";
    re_pwd_text_wrap.appendChild(re_pwd_text);

    re_pwd_check = false;
}
);


// 연락처
let mobile_text_wrap = document.getElementById("mobile_text_wrap");
let mobile_text = document.createElement('p');

//chap1. p태그를 변수에 저장
mobile.addEventListener('input', 
function mobile_text_on () {
    if(!mobile_reg.test(mobile.value) ) {
        mobile.classList.remove('n_border');
        mobile.classList.add('err_border');
        mobile_text.innerText = "연락처를 양식에 맞게 작성 해주세요";
        //chap2. 저장된 p태그에 텍스트 작성
        mobile_text_wrap.appendChild(mobile_text);
        //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
        mobile_text.classList.remove('clear_txt');
        mobile_text.classList.add('err_txt');
        mobile_check = false;
    } 
    else {
        mobile.classList.remove('err_border');
        mobile.classList.add('n_border');
        mobile_text.innerText = "연락처가 정상이네요";
        mobile_text_wrap.appendChild(mobile_text);
        mobile_text.classList.remove('err_txt');
        mobile_text.classList.add('clear_txt');
        mobile_check = true;
    }
}
);

mobile.addEventListener('change',
function mobile_text_out() {
    if(mobile_reg.test(mobile.value)) {
        mobile_text_wrap.removeChild(mobile_text);
   } 
    else {
    }
}
);

mobile.addEventListener('input',
function mobile_button_on () {
    if (mobile.value) {
        d_mobile.classList.remove('off_view');
        d_mobile.classList.add('on_view');
    }
    else {
        d_mobile.classList.add('off_view');
        d_mobile.classList.remove('on_view');
    }
});

d_mobile.addEventListener('click',
function mobile_button_off () {
    mobile.value = ""
    mobile_text.classList.remove('clear_txt');
    mobile_text.classList.add('err_txt');
    mobile.classList.remove('n_border');
    mobile.classList.add('err_border');
    d_mobile.classList.remove('on_view');
    d_mobile.classList.add('off_view');
    mobile_text.innerText = "연락처는 필수 정보입니다.";
    mobile_text_wrap.appendChild(mobile_text);

    mobile_check = false;
}
);

// 생년월일

let birth_text_wrap = document.getElementById("birth_text_wrap");
let birth_text = document.createElement('p');

//chap1. p태그를 변수에 저장
birth.addEventListener('input', 
function birth_text_on () {
        if (!birth_reg.test(birth.value)) {
            birth.classList.remove('n_border');
            birth.classList.add('err_border');
            birth_text.innerText = "생년월일을 양식에 맞게 작성 해주세요";
            //chap2. 저장된 p태그에 텍스트 작성
            birth_text_wrap.appendChild(birth_text);
            //chap3. 부모요소에 텍스트가 저장된 변수를 자식요소로 삽입
            birth_text.classList.remove('clear_txt');
            birth_text.classList.add('err_txt');
            birth_check = false;
        }
        else {
            birth.classList.remove('err_border');
            birth.classList.add('n_border');
            birth_text.innerText = "생년월일이 정상이네요";
            birth_text_wrap.appendChild(birth_text);
            birth_text.classList.remove('err_txt');
            birth_text.classList.add('clear_txt');
            birth_check = true;
        }
    }
);

birth.addEventListener('change',
    function birth_text_out() {
        if (birth_reg.test(birth.value)) {
            birth_text_wrap.removeChild(birth_text);
            //   name_check = false;
        }
        else {
            // name_check = true;
        }
    }
);

birth.addEventListener('input',
    function birth_button_on() {
        if (birth.value) {
            d_birth.classList.remove('off_view');
            d_birth.classList.add('on_view');
        }
        else {
            d_birth.classList.add('off_view');
            d_birth.classList.remove('on_view');
        }
    });

d_birth.addEventListener('click',
    function birth_button_off() {
        birth.value = ""
        birth_text.classList.remove('clear_txt');
        birth_text.classList.add('err_txt');
        birth.classList.remove('n_border');
        birth.classList.add('err_border');
        d_birth.classList.remove('on_view');
        d_birth.classList.add('off_view');
        birth_text.innerText = "생년월일은 필수 정보입니다.";
        birth_text_wrap.appendChild(birth_text);

        birth_check = false;
    }
);

// 나머지 주소 삭제 버튼

addr3.addEventListener('input',
function addr3_button_on () {
    if (addr3.value) {
        d_addr3.classList.remove('off_view');
        d_addr3.classList.add('on_view');
    }
    else {
        d_addr3.classList.add('off_view');
        d_addr3.classList.remove('on_view');
    }
});

d_addr3.addEventListener('click',
function addr3_button_off () {
    addr3.value = ""
    d_addr3.classList.remove('on_view');
    d_addr3.classList.add('off_view');
}
);


//주소

let addr_text_wrap = document.getElementById("addr_text_wrap");
let addr_text = document.createElement('p');
let addr_on = document.querySelector('.addr_text')
// 클래스가 있으면
// (addr_on !== null) 

// 주소팝업

postal_btn.addEventListener('click',
function addrFind() {
    new daum.Postcode({
      oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수
  
      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }
      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if(data.userSelectedType === 'R'){
      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
        extraAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if(data.buildingName !== '' && data.apartment === 'Y'){
        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if(extraAddr !== ''){
        extraAddr = ' (' + extraAddr + ')';
      }

      // 조합된 참고항목을 해당 필드에 넣는다.
      addr2.value = extraAddr;
      addr_check = true;
      } else {
        addr2.value = '';
        addr_check = true;
      }

      if ( name_check && id_check && pwd_check && re_pwd_check && mobile_check && birth_check && addr_check && apply_priv.checked && apply_medie.checked && apply_age.checked == true ) {
        join_btn.disabled = false;
        join_btn.classList.remove('sign_off');
        join_btn.classList.add('sign_on');
      } else {
        join_btn.disabled = true;
        join_btn.classList.remove('sign_on');
        join_btn.classList.add('sign_off');
      }
      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      ps_code.value = data.zonecode;
      addr1.value = addr;
      // 커서를 상세주소 필드로 이동한다.
      addr3.focus();
      }
    }).open();
  }
)



apply_all.addEventListener('click', 
//약관 전체 동의 눌렀을 시 밑에 항목들 전부 체크되게 하기
function apply_all_check () {

    // var all_check = apply_all.checked;
    if ( apply_all.checked == true ) {
        apply_priv.checked = true;
        apply_medie.checked = true;
        apply_age.checked = true;
        apply_marketing.checked = true;


    }
    else {

        apply_priv.checked = false;
        apply_medie.checked = false;
        apply_age.checked = false;
        apply_marketing.checked = false;

    }

}
);




let apply_text_wrap = document.getElementById("apply_text_wrap");
let apply_on = document.querySelector('.apply_text')

apply_priv.addEventListener('click', 
function () {
    if (apply_all.checked == true) {
        apply_all.checked = false;
    }
    else if ( apply_priv.checked && apply_medie.checked && apply_age.checked && apply_marketing.checked == true ) {
        apply_all.checked = true;
    }
    else if ((apply_on !== null) && ((apply_all.checked && apply_priv.checked) == false )) {
        apply_text_wrap.removeChild(apply_text);
        apply_text.classList.remove('err_txt');
        apply_text.classList.add('clear_txt');
    }
})

apply_medie.addEventListener('click', 
function () {
    if (apply_all.checked == true) {
        apply_all.checked = false;
    }
    else if ( apply_priv.checked && apply_medie.checked && apply_age.checked && apply_marketing.checked == true ) {
        apply_all.checked = true;
    }
    else if ((apply_on !== null) && ((apply_all.checked && apply_medie.checked) == false )) {
        apply_text_wrap.removeChild(apply_text);
        apply_text.classList.remove('err_txt');
        apply_text.classList.add('clear_txt');
    }
})

apply_age.addEventListener('click', 
function () {
    if (apply_all.checked == true) {
        apply_all.checked = false;
    }
    else if ( apply_priv.checked && apply_medie.checked && apply_age.checked && apply_marketing.checked == true ) {
        apply_all.checked = true;
    }
    else if ((apply_on !== null) && ((apply_all.checked && apply_age.checked) == false )) {
        apply_text_wrap.removeChild(apply_text);
        apply_text.classList.remove('err_txt');
        apply_text.classList.add('clear_txt');
    }
})

apply_marketing.addEventListener('click', 
function () {
    if (apply_all.checked == true) {
        apply_all.checked = false;
    }
    else if ( apply_priv.checked && apply_medie.checked && apply_age.checked && apply_marketing.checked == true ) {
        apply_all.checked = true;
    }
})

join_btn.addEventListener('click', () => {
    //이름//
    if( name_check == false ) {

        u_name.classList.remove('n_border');
        u_name.classList.add('err_border');
        name_text.innerText = "이름을 양식에 맞게 작성 해주세요";
        name_text_wrap.appendChild(name_text);
        name_text.classList.remove('clear_txt');
        name_text.classList.add('err_txt');

        u_name.focus ();
        return false;
    }

    //아이디//
    if( id_check == false ) {

        u_id.classList.remove('n_border');
        u_id.classList.add('err_border');
        id_text.innerText = "아이디를 양식에 맞게 작성 해주세요";
        id_text_wrap.appendChild(id_text);
        id_text.classList.remove('clear_txt');
        id_text.classList.add('err_txt');

        u_id.focus ();
        return false;
    }

    //비밀번호//
    if( pwd_check = false ) {

        pwd.classList.remove('n_border');
        pwd.classList.add('err_border');
        pwd_text.innerText = "비밀번호를 양식에 맞게 작성 해주세요";
        pwd_text_wrap.appendChild(pwd_text);
        pwd_text.classList.remove('clear_txt');
        pwd_text.classList.add('err_txt');

        pwd.focus();
        return false;
    }

    //비밀번호 확인//
    if( re_pwd_check = false ) {

        re_pwd.classList.remove('n_border');
        re_pwd.classList.add('err_border');
        re_pwd_text.innerText = "비밀번호 확인을 양식에 맞게 작성 해주세요";
        re_pwd_text_wrap.appendChild(re_pwd_text);
        re_pwd_text.classList.remove('clear_txt');
        re_pwd_text.classList.add('err_txt');

        re_pwd.focus();
        return false;
    }

    //연락처//
    if( mobile_check = false ) {

        mobile.classList.remove('n_border');
        mobile.classList.add('err_border');
        mobile_text.innerText = "연락처를 양식에 맞게 작성 해주세요";
        mobile_text_wrap.appendChild(mobile_text);
        mobile_text.classList.remove('clear_txt');
        mobile_text.classList.add('err_txt');

        mobile.focus();
        return false;
    }

    //생년월일//
    if( birth_check = false ) {

        birth.classList.remove('n_border');
        birth.classList.add('err_border');
        birth_text.innerText = "생년월일을 양식에 맞게 작성 해주세요";
        birth_text_wrap.appendChild(birth_text);
        birth_text.classList.remove('clear_txt');
        birth_text.classList.add('err_txt');

        birth.focus();
        return false;
    }

    //주소 
    if( (ps_code.value == "") && (addr_check == false) ) {
            addr_text.innerText = "주소를 작성 해주세요";
            addr_text_wrap.appendChild(addr_text);
            addr_text.classList.remove('clear_txt');
            addr_text.classList.add('err_txt');


            postal_btn.focus();
            return false;
    }
    //필수항목 동의//

    if ( !apply_priv.checked && !apply_medie.checked && !apply_age.checked ) {

        apply_text.innerText = "필수 약관에 동의 해주세요.";
        apply_text_wrap.appendChild(apply_text);
        apply_text.classList.remove('clear_txt');
        apply_text.classList.add('err_txt');

        apply_priv.focus();
        return false;
    }
    
    // 마케팅 체크 여부 확인 y/n

    if( apply_marketing.checked ) {
        apply_marketing_hidden.disabled = true;
    }
    else {
        apply_marketing.disabled = true;
        apply_marketing_hidden.disabled = false;
    }

    let join_id = u_id.value;
    let join_pwd = pwd.value;
    var p_profil = document.getElementById('p_profil');
    
        // 프사가 없으면
    // if (!(p_profil.value)) {
        firebase.auth().createUserWithEmailAndPassword( join_id,join_pwd ).then(( result )=>{
            //result = 유저정보
            console.log(result)
            console.log(result.user)
            result.user.updateProfile( {displayName : u_name.value } )
            location.href = "index.html"  
            alert(u_name.value)
        }).catch( () => {
            alert("가입 실패");
            location.href = "join.html"  
        });
    // }
        // 프사가 있으면
    // if ( p_profil.value ) {
    //     const img_file = p_profil.files[0];
    //     var storageRef = storage.ref();
    //     var upload_url = storageRef.child('image/'+ img_file.name );
    //     var upload = upload_url.put(img_file);

    //     upload .on( 'state_changed', 
    //     // 변화시 동작하는 함수 
    //     null, 
    //     //에러시 동작하는 함수
    //     (error) => {
    //     console.error('에러내역', error);
    //     }, 
    //     // 성공시 동작하는 함수
    //     () => {
    //     upload .snapshot.ref.getDownloadURL().then((url) => {
    //         const img_url = url;
    //         firebase.auth().createUserWithEmailAndPassword( join_id,join_pwd ).then(( result )=>{
    //             //result = 유저정보
    //             console.log(result)
    //             console.log(result.user)
    //             result.user.updateProfile( {
    //                 displayName : u_name.value,
    //                 photoURL : img_url
    //             } )
    //             location.href = "index.html"  
    //             alert(u_name.value)
    //         }).catch((err) => {
    //             //실패시 실행
    //             console.log(err)
    //             alert("업로드 실패")
    //         });
    //     }
    //     ).catch((err) => {
    //     //실패시 실행
    //     console.log(err)
    //     alert("업로드 실패")
    //     })
    //     }
    //     )

    // }



    

})

// 눈알 효과

let pwd_eye_on = document.getElementById("pwd_eye_on");
let pwd_eye_off = document.getElementById("pwd_eye_off");

let re_pwd_eye_on = document.getElementById("re_pwd_eye_on");
let re_pwd_eye_off = document.getElementById("re_pwd_eye_off");


pwd_eye_on.addEventListener('click',
function () {
        // 1. 일반 눈알이 사라짐
    pwd_eye_on.classList.remove('on_view')
    pwd_eye_on.classList.add('off_view')
        // 2. 슬래시 눈알이 생김
    pwd_eye_off.classList.remove('off_view')
    pwd_eye_off.classList.add('on_view')
        // 3. 비번이 보여야함
    pwd.type = "text"
})

pwd_eye_off.addEventListener('click',
function () {
        // 1. 슬래시 눈알이 사라짐
    pwd_eye_on.classList.remove('off_view')
    pwd_eye_on.classList.add('on_view')
        // 2. 일반 눈알이 생김
    pwd_eye_off.classList.remove('on_view')
    pwd_eye_off.classList.add('off_view')
        // 3. 비번이 안보여야 함
    pwd.type = "password"
})



re_pwd_eye_on.addEventListener('click',
function () {
        // 1. 일반 눈알이 사라짐
    re_pwd_eye_on.classList.remove('on_view')
    re_pwd_eye_on.classList.add('off_view')
        // 2. 슬래시 눈알이 생김
    re_pwd_eye_off.classList.remove('off_view')
    re_pwd_eye_off.classList.add('on_view')
        // 3. 비번이 보여야함
    re_pwd.type = "text"
})

re_pwd_eye_off.addEventListener('click',
function () {
        // 1. 슬래시 눈알이 사라짐
    re_pwd_eye_on.classList.remove('off_view')
    re_pwd_eye_on.classList.add('on_view')
        // 2. 일반 눈알이 생김
    re_pwd_eye_off.classList.remove('on_view')
    re_pwd_eye_off.classList.add('off_view')
        // 3. 비번이 안보여야 함
    re_pwd.type = "password"
})

var join_form = document.getElementById("join_form");


join_form.addEventListener('input', function() {
    if ( name_check && id_check && pwd_check && re_pwd_check && mobile_check && birth_check && addr_check && apply_priv.checked && apply_medie.checked && apply_age.checked == true ) {
        join_btn.disabled = false;
        join_btn.classList.remove('sign_off');
        join_btn.classList.add('sign_on');
    }
    else {
        join_btn.disabled = true;
        join_btn.classList.remove('sign_on');
        join_btn.classList.add('sign_off');
    }
});

join_form.addEventListener('click', function() {
    if ( name_check && id_check && pwd_check && re_pwd_check && mobile_check && birth_check && addr_check && apply_priv.checked && apply_medie.checked && apply_age.checked == true ) {
        join_btn.disabled = false;
        join_btn.classList.remove('sign_off');
        join_btn.classList.add('sign_on');
    }
    else {
        join_btn.disabled = true;
        join_btn.classList.remove('sign_on');
        join_btn.classList.add('sign_off');
    }
});

join_form.addEventListener('change', function() {
    if ( name_check && id_check && pwd_check && re_pwd_check && mobile_check && birth_check && addr_check && apply_priv.checked && apply_medie.checked && apply_age.checked == true ) {
    // if ( pwd_check && re_pwd_check  == true ) {
        join_btn.disabled = false;
        join_btn.classList.remove('sign_off');
        join_btn.classList.add('sign_on');
    }
    else {
        join_btn.disabled = true;
        join_btn.classList.remove('sign_on');
        join_btn.classList.add('sign_off');
    }
});


