

function Customer_reg() {
    let profile_pic1 = document.getElementById('Profile_pic1').value;
    let fname1 = document.getElementById('fname1').value;
    let user_name1 = document.getElementById('user_name1').value;
    let number1 = document.getElementById('number1').value;
    let pass1 = document.getElementById('password1').value;
    let cpass1 = document.getElementById('cpassword1').value;
    let country1 = document.getElementById('country1').value;
    let state1 = document.getElementById('state1').value;
    let city1 = document.getElementById('city1').value;
    if (profile_pic1 === "") {
        document.getElementById('Profile_pic1').style.borderColor = "red";
    }
    else if (fname1 === "") {
        document.getElementById('Profile_pic1').style.borderColor = "green";
        document.getElementById('fname1').style.borderColor = "red";
    }
    else if (user_name1 === "") {
        document.getElementById('Profile_pic1').style.borderColor = "green";
        document.getElementById('fname1').style.borderColor = "green";
        document.getElementById('user_name1').style.borderColor = "red";
    }
    else if (number1 === "") {
        document.getElementById('fname1').style.borderColor = "green";
        document.getElementById('Profile_pic1').style.borderColor = "green";
        document.getElementById('user_name1').style.borderColor = "green";
        document.getElementById('number1').style.borderColor = "red";
    }
    else if (number1.length === "10") {
        document.getElementById('fname1').style.borderColor = "green";
        document.getElementById('Profile_pic1').style.borderColor = "green";
        document.getElementById('user_name1').style.borderColor = "green";
        document.getElementById('number1').style.borderColor = "red";
    }
    else if (pass1 === "") {
        document.getElementById('user_name1').style.borderColor = "green";
        document.getElementById('Profile_pic1').style.borderColor = "green";
        document.getElementById('number1').style.borderColor = "green";
        document.getElementById('password1').style.borderColor = "red";
    }
    else if (cpass1 === "") {
        document.getElementById('number1').style.borderColor = "green";
        document.getElementById('user_name1').style.borderColor = "green";
        document.getElementById('fname1').style.borderColor = "green";
        document.getElementById('password1').style.borderColor = "green";
        document.getElementById('cpassword1').style.borderColor = "red";
    }
    else if (pass1 === cpass1 && number1.length === "10") {
        let Costumerobj = {
            profile_photo_url: profile_pic1,
            names: fname1,
            user_id: user_name1,
            mobile_number: number1,
            password: pass1,
            confirm_password: cpass1,
            country_name: country1,
            state_name: state1,
            city_name: city1,
        };
        fetch('http://localhost:3000/Registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Costumerobj)
        }).then(alert("Your Registration is Successful"))
    }
}

// ========================= admin deskboard ==============================
let admin_data1;
let admin_respond1;
let admin_data2;
let admin_respond2;
let admin_data3;
let admin_respond3;
let admin_data4;
let admin_respond4;
(async function () {
    //  ============ partner data ==========================
    admin_data1 = await fetch('http://localhost:3000/Restaurant');
    admin_respond1 = await admin_data1.json();
    console.log(admin_respond1)

    // ================= customer data ========================

    admin_data2 = await fetch('http://localhost:3000/Registration');
    admin_respond2 = await admin_data2.json();
    console.log(admin_respond2)

    // ===================== option manu data =================== 
    admin_data3 = await fetch('http://localhost:3000/some_spacial_dish');
    admin_respond3 = await admin_data3.json();
    console.log(admin_respond3)

    // ====================== restaurant update dishes data ================

    admin_data4 = await fetch('http://localhost:3000/Products');
    admin_respond4 = await admin_data4.json();
    console.log(admin_respond4)

    // ========================= admin deskboard option ========================

    let start = 0;
    let start1 = 0;
    let start2 = 0;
    setInterval(run1, 700);
    function run1() {
        if (start <= admin_respond1.length) {
            let a = document.getElementById('total_partner');
            a.innerHTML = start;
            start++;
        }
        else {
            clearInterval();
        }
    }
    setInterval(run2, 700);
    function run2() {
        if (start1 <= admin_respond2.length) {
            let a1 = document.getElementById('total_customer');
            a1.innerHTML = start1;
            start1++;
        }
    }

    setInterval(run3, 50);
    function run3() {
        if (start2 <= 80) {
            let a2 = document.getElementById('total');
            a2.innerHTML = start2;
            start2++;
        }
    }

    // ============== admindeskboard record section =========================
    //  ============ partner record ===================
    let part_recorddesk_data = admin_respond1.map(item => `
 <table id="parn_data_table">
        <tr>
            <td id="col-1"><img src="${item.profile_photo_url}" alt="" id="part_prof_img"></td>
            <td id="col-2">${item.names}</td>
            <td id="col-3">${item.user_id}</td>
            <td id="col-4">${item.mobile_number}</td>
            <td id="col-5">${item.Restaurant_name}</td>
            <td id="col-6">${item.country_name}</td>
            <td id="col-7">${item.password}</td>
            <td id="col-8">${item.city_name}<br>${item.state_name}</td>
            <td id="col-9">${item.shop_address}</td>
            <td id="col-10"><button onclick="updata(${item.id})">update</button></td>
            <td id="col-11"><button onclick="remove(${item.id})">delete</button></td>
        </tr>
    </table>
 `).join(" ")
    document.getElementById('partner_rectable_slider').innerHTML = part_recorddesk_data;

    //  =================== customer record ===============

    let cust_recorddesk_data = admin_respond2.map(item => `
 <table id="cust_data_table">
        <tr>
            <td id="col-1"><img src="${item.profile_photo_url}" alt="" id="part_prof_img"></td>
            <td id="col-2">${item.names}</td>
            <td id="col-3">${item.user_id}</td>
            <td id="col-4">${item.mobile_number}</td>
            <td id="col-7">${item.password}</td>
            <td id="col-6">${item.country_name}</td>
            <td id="col-8">${item.city_name}<br>${item.state_name}</td>
            <td id="col-10"><button onclick="updata1(${item.id})">update</button></td>
            <td id="col-11"><button onclick="remove1(${item.id})">delete</button></td>
        </tr>
    </table>
 `).join(" ")
    document.getElementById('customer_rectable_slider').innerHTML = cust_recorddesk_data;

    // ============================= option manu data table ================

    let optdish_inserdesk_data = admin_respond3.map(item => `
        <table id="option_manu_dish_table">
           <tr>
              <td id="dish_image"><img src="${item.specialdish_image}" alt=""></td>
              <td id="dish_name">${item.specialdish_name}</td>
              <td id="dish_updata"><button onclick="opdish_update(${item.id})">Update</button></td>
              <td id="dish_delete"><button onclick="opdish_delete(${item.id})">Delete</button></td>
          </tr>
        </table>
    `).join(" ")
    document.getElementById('option_manu_dish-box').innerHTML = optdish_inserdesk_data;

    // ==================== restaurant manu data table ===========================

    let restdish_inserdesk_data = admin_respond4.map(item => `
    <table id="rest_dish-box_table">
    <tr>
        <td id="colu-1"><img src="${item.product_img}" alt=""></td>
        <td id="colu-2">${item.product_name}</td>
        <td id="colu-3">${item.discount}</td>
        <td id="colu-4">${item.restaurant_city_name}</td>
        <td id="colu-5">${item.restaurant_name}</td>
        <td id="colu-6">${item.prod_rating}</td>
        <td id="colu-7">${item.product_price}</td>
        <td id="colu-8">${item.uploading_time}</td>
        <td id="colu-9"><button onclick="dishupdate(${item.id})">Update</button></td>
        <td id="colu-10"><button onclick="dishdelete(${item.id})">Delete</button></td>
    </tr>
</table>
    `).join(" ")
    document.getElementById('rest_dish-box').innerHTML = restdish_inserdesk_data;

})()

// ==================== Admin aside navbar function ========================

function deskboardfun() {
    window.location.reload();
    document.getElementById('deskboard_section').style.display = "block";
    document.getElementById('record_section').style.display = "none";
    document.getElementById('insert_section').style.display = "none";
    document.getElementById('analisis_section').style.display = "none";
    document.getElementById('about_section').style.display = "none";
    document.getElementById('setting_section').style.display = "none";
}

function recordfun() {
    document.getElementById('deskboard_section').style.display = "none";
    document.getElementById('record_section').style.display = "block";
    document.getElementById('insert_section').style.display = "none";
    document.getElementById('analisis_section').style.display = "none";
    document.getElementById('about_section').style.display = "none";
    document.getElementById('setting_section').style.display = "none";
}

function insertfun() {
    document.getElementById('deskboard_section').style.display = "none";
    document.getElementById('record_section').style.display = "none";
    document.getElementById('insert_section').style.display = "block";
    document.getElementById('analisis_section').style.display = "none";
    document.getElementById('about_section').style.display = "none";
    document.getElementById('setting_section').style.display = "none";
}
function analysisfun() {
    document.getElementById('deskboard_section').style.display = "none";
    document.getElementById('record_section').style.display = "none";
    document.getElementById('insert_section').style.display = "none";
    document.getElementById('analisis_section').style.display = "block";
    document.getElementById('about_section').style.display = "none";
    document.getElementById('setting_section').style.display = "none";
}
function aboutfun() {
    document.getElementById('deskboard_section').style.display = "none";
    document.getElementById('record_section').style.display = "none";
    document.getElementById('insert_section').style.display = "none";
    document.getElementById('analisis_section').style.display = "none";
    document.getElementById('about_section').style.display = "block";
    document.getElementById('setting_section').style.display = "none";
}
function settingfun() {
    document.getElementById('deskboard_section').style.display = "none";
    document.getElementById('record_section').style.display = "none";
    document.getElementById('insert_section').style.display = "none";
    document.getElementById('analisis_section').style.display = "none";
    document.getElementById('about_section').style.display = "none";
    document.getElementById('setting_section').style.display = "block";
}
// function logoutfun(){

// }

// ==================== Starting partner update add and delete function ================================
//====== PARTNER UPDATE ==============
let partregistdate_id;
function updata(id) {
    partregistdate_id = id;
    document.getElementById('partner_regis_box').style.display = "block";
};
function partner_update() {
    let profile_pic = document.getElementById('Profile_pic').value;
    let fname = document.getElementById('fname').value;
    let user_name = document.getElementById('user_name').value;
    let number = document.getElementById('number').value;
    let shopname = document.getElementById('Shopname').value;
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('cpassword').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let regist_no = document.getElementById('rest_regis_no').value;
    let bestdish_name = document.getElementById('dish_name').value;
    let address = document.getElementById('rest_address').value;

    let partnerobj = {
        profile_photo_url: profile_pic,
        names: fname,
        user_id: user_name,
        mobile_number: number,
        Restaurant_name: shopname,
        password: pass,
        confirm_password: cpass,
        country_name: country,
        state_name: state,
        city_name: city,
        registration_number: regist_no,
        Best_dish_of_shop: bestdish_name,
        shop_address: address
    };
    fetch(`http://localhost:3000/Restaurant/${partregistdate_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partnerobj)
    }).then(alert("Your Registration is Successful"))
}
//============ PARTENER DELETE ==================
function remove(id) {
    partregistdate_id = id;
    fetch(`http://localhost:3000/Restaurant/${partregistdate_id}`, {
        method: "DELETE"
    }).then(window.confirm("Are you sure to delete"))
    //    console.log(delet())
}
//=========== partner NEW add data ======================

function add_partner() {
    document.getElementById('regist_udbtn').style.display = "none";
    document.getElementById('regist_btn').style.display = "block";
    document.getElementById('partner_regis_box').style.display = "block";
}
function partner_reg() {
    let profile_pic = document.getElementById('Profile_pic').value;
    let fname = document.getElementById('fname').value;
    let user_name = document.getElementById('user_name').value;
    let number = document.getElementById('number').value;
    let shopname = document.getElementById('Shopname').value;
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('cpassword').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let regist_no = document.getElementById('rest_regis_no').value;
    let bestdish_name = document.getElementById('dish_name').value;
    let address = document.getElementById('rest_address').value;

    let partnerobj = {
        profile_photo_url: profile_pic,
        names: fname,
        user_id: user_name,
        mobile_number: number,
        Restaurant_name: shopname,
        password: pass,
        confirm_password: cpass,
        country_name: country,
        state_name: state,
        city_name: city,
        registration_number: regist_no,
        Best_dish_of_shop: bestdish_name,
        shop_address: address
    };
    fetch('http://localhost:3000/Restaurant', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partnerobj)
    }).then(alert("Your Registration is Successful"))
}

// ========== partner registration tab close =============
function close_tab() {
    document.getElementById('partner_regis_box').style.display = "none";
    document.getElementById('customer_regist_form').style.display = "none";
    document.getElementById('optdish_update_box').style.display = "none";
    document.getElementById('restdish_update_box').style.display = "none";
}

// =============== End partner update add and delete function ====================================================

// ========== Start customer update add and delete function =================

// ========= add customer ====================
function add_customer() {
    document.getElementById('customer_regist_form').style.display = "block";
}
function Customer_reg() {
    let profile_pic1 = document.getElementById('Profile_pic1').value;
    let fname1 = document.getElementById('fname1').value;
    let user_name1 = document.getElementById('user_name1').value;
    let number1 = document.getElementById('number1').value;
    let pass1 = document.getElementById('password1').value;
    let cpass1 = document.getElementById('cpassword1').value;
    let country1 = document.getElementById('country1').value;
    let state1 = document.getElementById('state1').value;
    let city1 = document.getElementById('city1').value;

    let Costumerobj = {
        profile_photo_url: profile_pic1,
        names: fname1,
        user_id: user_name1,
        mobile_number: number1,
        password: pass1,
        confirm_password: cpass1,
        country_name: country1,
        state_name: state1,
        city_name: city1,
    };
    fetch('http://localhost:3000/Registration', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Costumerobj)
    }).then(alert("Your Registration is Successful"))
}
// ============ update customer data ======================
let custregist_id;
function updata1(id) {
    custregist_id = id;
    document.getElementById('regist_btn1').style.display = "none";
    document.getElementById('regist_upbtn1').style.display = "block";
    document.getElementById('customer_regist_form').style.display = "block";

}
function Cust_reg_update() {
    let profile_pic1 = document.getElementById('Profile_pic1').value;
    let fname1 = document.getElementById('fname1').value;
    let user_name1 = document.getElementById('user_name1').value;
    let number1 = document.getElementById('number1').value;
    let pass1 = document.getElementById('password1').value;
    let cpass1 = document.getElementById('cpassword1').value;
    let country1 = document.getElementById('country1').value;
    let state1 = document.getElementById('state1').value;
    let city1 = document.getElementById('city1').value;

    let Costumerobj = {
        profile_photo_url: profile_pic1,
        names: fname1,
        user_id: user_name1,
        mobile_number: number1,
        password: pass1,
        confirm_password: cpass1,
        country_name: country1,
        state_name: state1,
        city_name: city1,
    };
    fetch(`http://localhost:3000/Registration/${custregist_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Costumerobj)
    }).then(alert("Your Registration is Successful"))
}

// ======== delete customer data =========================

function remove1(id) {
    custregist_id = id;
    fetch(`http://localhost:3000/Registration/${custregist_id}`, {
        method: "DELETE",
    }).then(window.confirm("Are you sure to Delete this file?"))

}
// =========== End of customer add update and delete section ===============

// ============ starting Option dish add update and delete =========================
// ============ adding of option dish =========
function add_opdish() {
    document.getElementById('optdish_update_box').style.display = "block";

}

function specialdish_update() {
    let dishoption_img = document.getElementById('product_img1').value;
    let dishoption_name = document.getElementById('product_name1').value;

    let dishoption_obj = {
        specialdish_image: dishoption_img,
        specialdish_name: dishoption_name,
    };

    fetch('http://localhost:3000/some_spacial_dish', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dishoption_obj)
    }).then(alert(" Update Successful"))
}

// ============ update of option dish =========
let opdishupdate_id;
function opdish_update(id) {
    opdishupdate_id = id;
    document.getElementById('upload_btn1').style.display = "none";
    document.getElementById('upload_upbtn1').style.display = "block";
    document.getElementById('optdish_update_box').style.display = "block";
}

function specialdish_edit() {
    let dishoption_img = document.getElementById('product_img1').value;
    let dishoption_name = document.getElementById('product_name1').value;

    let dishoption_obj = {
        specialdish_image: dishoption_img,
        specialdish_name: dishoption_name,
    };

    fetch(`http://localhost:3000/some_spacial_dish/${opdishupdate_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dishoption_obj)
    }).then(alert(" Update Successful"))
}

// ============ Delete of option dish =========
function opdish_delete(id) {
    opdishupdate_id = id;
    fetch(`http://localhost:3000/some_spacial_dish/${opdishupdate_id}`, {
        method: "DELETE",
    }).then(window.confirm("Are you sure to Delete this file?"))

}

// ============ Ending Option dish add update and delete =========================


// ============ starting restautant-meal add update and delete =========================
// ============ adding of restautant-meal =========
function add_restdish(){
    document.getElementById('restdish_update_box').style.display = "block";
}

function upload() {
    let prod_img = document.getElementById('product_img').value;
    let offer = document.getElementById('offer').value;
    let prod_name = document.getElementById('product_name').value;
    let restaurant_city = document.getElementById('shop_city_name').value;
    let Restaurant_name = document.getElementById('Restaurant_name').value;
    let rating = document.getElementById('rating').value;
    let prod_price = document.getElementById('price').value;
    let upload_time = document.getElementById('upload_time').value;

    let productobject = {
        product_img: prod_img,
        discount: offer,
        product_name: prod_name,
        restaurant_city_name: restaurant_city,
        restaurant_name: Restaurant_name,
        prod_rating: rating,
        product_price: prod_price,
        uploading_time: upload_time,
    };

    fetch('http://localhost:3000/Products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productobject)
    }).then(alert("UPDATE Successfull"))

}

// ============ update of restautant-meal =========
let restdishupdate_id;
function dishupdate(id) {
    restdishupdate_id = id;
    document.getElementById('upload_btn').style.display = "none";
    document.getElementById('upload_upbtn').style.display = "block";
    document.getElementById('restdish_update_box').style.display = "block";

}

function restdate_edit(){
    let prod_img = document.getElementById('product_img').value;
    let offer = document.getElementById('offer').value;
    let prod_name = document.getElementById('product_name').value;
    let restaurant_city = document.getElementById('shop_city_name').value;
    let Restaurant_name = document.getElementById('Restaurant_name').value;
    let rating = document.getElementById('rating').value;
    let prod_price = document.getElementById('price').value;
    let upload_time = document.getElementById('upload_time').value;

    let productobject = {
        product_img: prod_img,
        discount: offer,
        product_name: prod_name,
        restaurant_city_name: restaurant_city,
        restaurant_name: Restaurant_name,
        prod_rating: rating,
        product_price: prod_price,
        uploading_time: upload_time,
    };

    fetch(`http://localhost:3000/Products/${restdishupdate_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productobject)
    }).then(alert("UPDATE Successfull"))

}

// ============ Delete of restautant-meal =========
function dishdelete(id) {
    restdishupdate_id = id;
    fetch(`http://localhost:3000/Products/${restdishupdate_id}`, {
        method: "DELETE",
    }).then(window.confirm("Are you sure to Delete this file?"))

}


// ============ Ending restautant-meal add update and delete =========================

