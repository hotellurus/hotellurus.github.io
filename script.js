$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });

    $(".dropdown-user").hover(function () {
        $(".dropdown-menu-user").slideDown('fast');
    }, function(){
        $(".dropdown-menu-user").slideUp('fast');
    });

      $("li:not(.active)").on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });

    $("#pop").on("click", function() {
        $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });

    $('#thumbnail-div img').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'border-color': 'blue'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'border-color': 'red'
            });
        },
        click: function () {
            var imageURL = $(this).attr('src');
            $('#main-img img').fadeOut(300, function () {
                $(this).attr('src', imageURL);
            }).fadeIn(300);
        }
    });

    

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });

    //$.validator.addMethod(
    //    "regex",
    //    function (value, element, regexp) {
    //        var re = new RegExp(regexp);
    //        return this.optional(element) || re.test(value);
    //    }, "Please check your input.");
});

//Validasi form contact us
function validateNama() {
    var namaTextBox = document.getElementById("txtNama");
    var nama = namaTextBox.value;

    //var namaRegEx = /[a-zA-Z]{3,5}$/;
    var namaRegEx = /\b\w{3,16}\b/;

    if (namaRegEx.test(nama)) {
        namaTextBox.style.backgroundColor = "green";
    }
    else {
        namaTextBox.style.backgroundColor = "red";
        namaTextBox.style.color = "yellow";
    }
}

function validateEmail() {
    var emailTextBox = document.getElementById("txtEmail");
    var email = emailTextBox.value;
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegEx.test(email)) {
        emailTextBox.style.backgroundColor = "green";
    }
    else {
        emailTextBox.style.backgroundColor = "red";
        emailTextBox.style.color = "yellow";
    }
}

//function validatePesan() {
//    var pesanTextBox = document.getElementById("txtKomentar");
//    var pesan = pesanTextBox.value;
//    var pesanRegEx = /[a-zA-Z]{3,}$/;

//    if (pesanRegEx.test(pesan)) {
//        pesanTextBox.style.backgroundColor = "green";
//    }
//    else {
//        pesanTextBox.style.backgroundColor = "red";
//        pesanTextBox.style.color = "yellow";
//    }
//}



