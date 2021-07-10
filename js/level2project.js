let admins = [];
let gotten_status = localStorage.getItem('login_status')

if (gotten_status !=  null) {
    document.getElementById("signin_btn").hidden = true;
    document.getElementById("logout_btn").hidden = false;
}

function add_admin() {
    let add_name = document.getElementById('na_me').value
    let add_username = document.getElementById('user_name').value
    let add_email = document.getElementById('e_mail').value
    let add_password = document.getElementById('pass_word').value
    let data = {name: add_name, username: add_username, email: add_email, password: add_password}
    
    if (add_name == '' && add_username == '' && add_email == '' && add_password == '') {
        alert("empty field")
        return;
    }
    
    // document.getElementById("moda").style.display="block"
    admins.push(data)
    store(admins)
    
    window.location.href = "home.html"
}

function disappear() {
    document.getElementById("moda").style.display="none";
}

function store(arr){
    let saved_input = JSON.stringify(arr)
    localStorage.setItem('admin_data', saved_input)
    console.log(saved_input)
}

function check_cart_count() {
    setInterval( function(){
        let count = localStorage.getItem('cart')
        count = JSON.parse(count)
        count = count != null ? count.length : '';
        document.getElementById('cart_count').innerText = count
    }, 1000)
}
check_cart_count()

    function get_data() {
        let getdata = localStorage.getItem('admin_data')
        if(getdata == null){
            return
        }
        getdata = JSON.parse(getdata)
        admins = getdata
        console.log(admins)

    }
    get_data()

    function myBurger(x) {
        x.classList.toggle("change");
    }

function logOut(){
    localStorage.removeItem('login_status')
    localStorage.removeItem('user')
    window.location.assign ('home.html')
}

function validation(){
    let reg=/^[_]{0,1}[A-Za-z0-9]{2,15}[@]{1}[a-z]{3,7}[.]{1}[a-z]{3}$/
    let add_email = document.getElementById('e_mail').value
    let valid = reg.test(add_email)
    if (valid==true) {
        disp.innerHTML='Email valid' 
    }else{
        disp.innerHTML=' Enter valid email'
    }
    console.log(valid)
}

