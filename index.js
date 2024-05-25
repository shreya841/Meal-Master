// ================ page loader =================================================

function pag_loader() {
    setTimeout(chal, 3000)
    function chal() {
        document.getElementById('page_loader').style.display = "none";
    }
}

// ===================== language translator function ==========================
function lang() {
    let languag = document.getElementById('language').value;
    console.log(languag)
    if (languag === "Hindi") {
        document.getElementById('Hindi_translation').style.display = "block";
    }
    else {
        document.getElementById('Hindi_translation').style.display = "none";
    }
}

// ++++++++++++++++++++++++++++ data updating ++++++++++++++++++++++++++++++
//===================As Partner Registration Form =================================
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

// ========================== As A Costumer registration form ==============

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


// ====================== Product details ===================================================

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

// ========================== some special dish ==============================================
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


// ++++++++++++++++++++++++ data fetching ++++++++++++++++++++++++++++++++++++++

// ==================== json data fatching =====================================================

let partner_stodata;
let partner_respond;
let cust_data;
var cust_respond;
let admin_data;
let admin_respond;
let rest_product_info;
let rest_product_response;
let somespecial_dish_info;
let somespecial_dish_response;

(async function () {
    // =========== partner data fatching ==================================
    partner_stodata = await fetch('http://localhost:3000/Restaurant');
    partner_respond = await partner_stodata.json();
    console.log(partner_respond)

    // =========== for customer data fatching ================================

    cust_data = await fetch('http://localhost:3000/Registration');
    cust_respond = await cust_data.json();
    console.log(cust_respond)

    // =========== for Restaurant product fatching ================================

    rest_product_info = await fetch('http://localhost:3000/Products');
    rest_product_response = await rest_product_info.json();
    console.log(rest_product_response)

    // =========== for somespecial_dish fatching ================================
    somespecial_dish_info = await fetch('http://localhost:3000/some_spacial_dish');
    somespecial_dish_response = await somespecial_dish_info.json();
    console.log(somespecial_dish_response)

})()
var useid1;
var pas1;
var usertype;
async function log_btn() {

    cust_data = await fetch('http://localhost:3000/Registration');
    cust_respond = await cust_data.json();

    partner_stodata = await fetch('http://localhost:3000/Restaurant');
    partner_respond = await partner_stodata.json();

    useid1 = document.getElementById('user_name2').value;
    pas1 = document.getElementById('password2').value;
    // let pas_1 = trim(" ");
    // let useid_1 = trim(" ");
    usertype = document.getElementById('reg_type').value;
    let useid2 = cust_respond.find(items => items.user_id);
    let pas2 = cust_respond.find(items => items.password);
    let pas3 = partner_respond.find(items => items.password);
    let useid3 = partner_respond.find(items => items.user_id);
    // console.log(pas1 === pas2)
    // console.log(pas2 === pas1)
    // console.log(useid1 === useid2)
    // console.log(useid2 === useid1)

    if (usertype === "customer") {
        // alert("welcome");
        // for (let a = 0; a <= cust_respond.length; a++) {
        if (useid1 === "") {
            alert("please enter user name")
        }
        else if (pas1 === "") {
            alert("please enter password")
        }
        else if (pas2 === pas1 && useid2 === useid1) {
            // window.open('index.html');
            window.location.href = './index.html';
            alert("welcome");
            document.getElementById('profile_pic_icon').innerHTML = cust_respond.filter(items => `<img src="${items.profile_photo_url}" alt="">`)
        }
        // else if(cust_respond.filter(items =>items.user_id === pas1 && items.password === useid1)){
        //     window.open('index.html');
        //        alert("welcome");
        //     console.log()
        // }
        // debugger;

        // }

    }

    else if (usertype === "Partner") {
        // for (let b = 0; b <= partner_respond.length; b++) {
        if (useid1 === "") {
            alert("please enter user name")
        }
        else if (pas1 === "") {
            alert("please enter password")
        }
        else if (pas3 === pas1 && useid3 === useid1) {
            // window.open('Admindashboard.html')
            window.location.href = './Admindashboard.html';
        }
        else {
            alert("username and password does not exist")
        }
        // }
    }
    else if (usertype === "none") {

        alert("Please Select Login User Type")
    }
}

// =========================== Restaurant product page =======================================

async function rest() {
    rest_product_info = await fetch('http://localhost:3000/Products');
    rest_product_response = await rest_product_info.json();
    let food_inform = document.getElementById("citybyprod");
    food_inform.innerHTML = rest_product_response.map(items => `
<div id="dish_info-box">
    <div id="dish_img"><img src="${items.product_img}" alt=""></div>
    <label id="offer">${items.discount}&nbsp; OFF</label>
    <div id="prod_detail">
        <div id="foodname">
          <div id="food_name">${items.product_name}</div>
          <div id="restaurant">${items.restaurant_name}</div>
        </div>
        <div id="food_div">
            <div id="rating">${items.prod_rating}&nbsp;&nbsp;<i class="fa-solid fa-star"></i></div>
            <div id="Price">Rs &nbsp;${items.product_price}For one</div>
            <div id="time">${items.uploading_time}&nbsp;Min</div>
        </div>
    </div>
    <hr>
    <div id="safety_meas">Follows all Max Safety measures to ensure your fool is Safe</div>
 </div>
 `).join(" ");

    // ===================== some special dish option =========================================

    somespecial_dish_info = await fetch('http://localhost:3000/some_spacial_dish');
    somespecial_dish_response = await somespecial_dish_info.json();

    let specialdish = document.getElementById("show_differ_dishes");
    specialdish.innerHTML = somespecial_dish_response.map(items1 => `
    <div id="show_differ_dishes_templet">
        <div id="show_differ_dishes_imgbox">
        <img src="${items1.specialdish_image}" alt="">
        </div>
        <div id="show_differ_dishes_name">${items1.specialdish_name}</div>
    </div>
`).join(" ")

};

// =================== some special dish next privious ==============================================
// let arg = 0;
let nextprivious_value = 0;
function next_btn() {
    if (nextprivious_value === 0) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-400px";
        document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 1) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-800px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left-0.6"
    }
    else if (nextprivious_value === 2) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-1200px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 3) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-1600px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 4) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-2000px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }

    else if (nextprivious_value === 5) {
        document.getElementById('show_differ_dishes_templet').style.marginLeft = "-2400px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }

    // else if (nextprivious_value <= 5) {
    //     nextprivious_value === 0;
    // }
    ++nextprivious_value;
}

function privious_btn() {
    // nextprivious_value = 0;
    if (nextprivious_value === 0) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-400px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 1) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-800px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left-0.6"
    }
    else if (nextprivious_value === 2) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-1200px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 3) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-1600px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }
    else if (nextprivious_value === 4) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-2000px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }

    else if (nextprivious_value === 5) {
        document.getElementById('show_differ_dishes_templet').style.marginRight = "-2400px";
        // document.getElementById('show_differ_dishes_templet').style.transition = "left, 0.6"
    }

    // else if (nextprivious_value <= 5) {
    //     nextprivious_value === 0;
    // }
    --nextprivious_value;
}


// ++++++++++++++++++ data filtering ++++++++++++++++++++++++++++++++++++++++

// ============================= admin deskboad section for js ==================================================
// let argu;

// async function restaurent(argu) {
//     // =============== BHOPAL =========================
//     console.log(argu)
//     // let rest_product_inf;
//     // let rest_product_response1;
//     if (argu === "1") {
//         // window.location.href = './restaurant_product.html';
//       let  rest_product_in = await fetch('http://localhost:3000/Products');
//        let rest_product_response1 = await rest_product_in.json();
//         let bhopfilt = rest_product_response1.filter(items => items.restaurant_city_name === 'Bhopal');
//         document.getElementById('citybyprod').innerHTML = bhopfilt.map(items => `
//         <div id="dish_info-box">
//             <div id="dish_img"><img src="${items.product_img}" alt=""></div>
//             <label id="offer">${items.discount}&nbsp; OFF</label>
//             <div id="prod_detail">
//                 <div id="foodname">
//                   <div id="food_name">${items.product_name}</div>
//                   <div id="restaurant">${items.restaurant_name}</div>
//                 </div>
//                 <div id="food_div">
//                     <div id="rating">${items.prod_rating}&nbsp;&nbsp;<i class="fa-solid fa-star"></i></div>
//                     <div id="Price">Rs &nbsp;${items.product_price}For one</div>
//                     <div id="time">${items.uploading_time}&nbsp;Min</div>
//                 </div>
//             </div>
//             <hr>
//             <div id="safety_meas">Follows all Max Safety measures to ensure your fool is Safe</div>
//          </div>
//          `).join(" ");
//     }

//     // ================= INDORE ======================

//     else if (argu === "2") {
//         rest_product_inf = await fetch('http://localhost:3000/Products');
//         rest_product_response1 = await rest_product_inf.json();
//         let indorefilt = rest_product_response1.filter(items => items.restaurant_city_name === "Indore");
//         window.location.href = './restaurant_product.html';
//         document.getElementById('citybyprod').innerHTML = indorefilt.map(items => `
//         <div id="dish_info-box">
//             <div id="dish_img"><img src="${items.product_img}" alt=""></div>
//             <label id="offer">${items.discount}&nbsp; OFF</label>
//             <div id="prod_detail">
//                 <div id="foodname">
//                   <div id="food_name">${items.product_name}</div>
//                   <div id="restaurant">${items.restaurant_name}</div>
//                 </div>
//                 <div id="food_div">
//                     <div id="rating">${items.prod_rating}&nbsp;&nbsp;<i class="fa-solid fa-star"></i></div>
//                     <div id="Price">Rs &nbsp;${items.product_price}For one</div>
//                     <div id="time">${items.uploading_time}&nbsp;Min</div>
//                 </div>
//             </div>
//             <hr>
//             <div id="safety_meas">Follows all Max Safety measures to ensure your fool is Safe</div>
//          </div>
//          `).join(" ");

//     }
// }
