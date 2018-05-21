//////-----------MENU-BUTTON--------///////
var button = document.querySelector(".menu-icon")
var button_icon = document.querySelectorAll(".menu-icon span");
var new_col_2 = document.querySelector("#change-col-2");
var new_col_10 = document.querySelector("#change-col-10");
$(document).ready(function () {
    $(".nav-menu li ").click(function () {


        if ((new_col_2.className == "new-col-2") && (new_col_10.className == "new-col-10")) {
            new_col_2.className = "";
            new_col_2.classList.add('col-3');
            new_col_2.classList.add('new-col-3');
            new_col_10.className = "";
            new_col_10.classList.add('col-9');
            new_col_10.classList.add('new-col-9');
            button_icon[0].style.transform = "rotateZ(40deg)";
            button_icon[0].style.opacity = "1";
            button_icon[0].style.transitions = "0.4s ease";

            button_icon[1].style.transform = "rotateZ(0deg)";
            button_icon[1].style.opacity = "0";
            button_icon[1].style.transitions = "0.4s ease";

            button_icon[2].style.transform = "rotateZ(-40deg)";
            button_icon[2].style.opacity = "1";
            button_icon[2].style.transitions = "0.4s ease";


        }
        $(this).find(".nav-a").toggleClass("bg-chance");
        $(this).find(".dropdown-menus ").slideToggle("slow");
    });

});

button.addEventListener("click", function animation() {
    if ((new_col_2.className != "new-col-2") && (new_col_10.className != "new-col-10")) {
        console.log("new-col-2 add olundu")
        new_col_2.classList = "new-col-2";
        new_col_10.classList = "new-col-10";
        button_icon[0].style.transform = "translateY(-10px) rotateZ(0deg)";
        button_icon[0].style.opacity = "1";
        button_icon[0].style.transitions = "0.4s ease";

        button_icon[1].style.transform = "translateY(0px) rotateZ(0deg)";
        button_icon[1].style.opacity = "1";
        button_icon[1].style.transitions = "0.4s ease";

        button_icon[2].style.transform = "translateY(10px) rotateZ(0deg)";
        button_icon[2].style.opacity = "1";
        button_icon[2].style.transitions = "0.4s ease";
        $(".nav-menu .dropdown-menus").css("display", "none");
    }
    else {
        new_col_2.className = "";
        new_col_2.classList.add('col-3');
        new_col_2.classList.add('new-col-3');
        new_col_10.className = "";
        new_col_10.classList.add('col-9');
        new_col_10.classList.add('new-col-9');
        button_icon[0].style.transform = "rotateZ(40deg)";
        button_icon[0].style.opacity = "1";
        button_icon[0].style.transitions = "0.4s ease";

        button_icon[1].style.transform = "rotateZ(0deg)";
        button_icon[1].style.opacity = "0";
        button_icon[1].style.transitions = "0.4s ease";

        button_icon[2].style.transform = "rotateZ(-40deg)";
        button_icon[2].style.opacity = "1";
        button_icon[0].style.transitions = "0.4s ease";
    }
})

//////-----------MENU-BUTTON--------///////
////-----DROP-MENU-----//////
$(document).ready(function () {
    $(".navbar-top li ").click(function () {
        $(this).find(".dropdown-menus ").slideToggle("slow");


    });
});
////-----DROP-MENU-----//////
////-------------Checkbox-------///////
$(document).ready(function () {
    $(".checkbox").click(function (e) {

        if ($(this).find("i").hasClass("fa-check") == false) {
            $(this).append('<i class="fas fa-check"></i>');

            if ($(this).hasClass("br-l-rose")) {
                $(this).css("background-color", "#e31e62");
            }
            else if ($(this).hasClass("br-l-blue")) {
                $(this).css("background-color", "#00bdd5");
            }
            else if ($(this).hasClass("br-l-green")) {
                $(this).css("background-color", "#13b42b");
            }
            else if ($(this).hasClass("br-l-dk-blue")) {
                $(this).css("background-color", "#209ca9");
            }
            else if ($(this).hasClass("br-l-violet")) {
                $(this).css("background-color", "#7863a0");
            }
            else if ($(this).hasClass("br-l-org")) {
                $(this).css("background-color", "#ec531f");
            }
            $(this).parent().find(".label").addClass("line");

        }
        else if ($(this).find("i").hasClass("fa-check") == true) {
            $(this).find(".fa-check").remove();

            $(this).parent().find(".line").removeClass();
            $(this).next().addClass("label");
            $(this).css("background-color", "transparent")
        }

    });
});
////-------------Checkbox-------///////

/////////------Modals------//////
$(document).ready(function () {
    $(".btn-tooltips").click(function () {
        if ($(this).hasClass("lg") == true) {
            $(this).closest("body").find(".absolute.lg").css("display", "block");
        }
        if ($(this).hasClass("df") == true) {
            $(this).closest("body").find(".absolute.df").css("display", "block");
        }
        if ($(this).hasClass("sm") == true) {
            $(this).closest("body").find(".absolute.sm").css("display", "block");
        }
        $(this).find(".absolute ").slideToggle("slow");
    });
});

$(document).ready(function () {
    $(".btn-close").click(function () {
        $(this).closest(".absolute").css("display", "none");

    });
    $(".modals-element i").click(function () {
        $(this).closest(".absolute").css("display", "none");

    });
    $(".overlay").click(function () {
        $(this).closest(".absolute").css("display", "none");

    });
    $(document).keyup(function (e) {

        if (e.keyCode == 27) {
            $(".absolute").css("display", "none");
        }

    });

});
/////////------Modals------//////

//////--------Radio-button-------///////////
$(document).ready(function () {
    $(".custom-content .right .custom-checkbox .radio").click(function chechbox_radio() {
        $(".custom-content .right .custom-checkbox .radio").find("i").remove();
        $(this).append('<i class="fas fa-circle"></i>');
        if ($(this).hasClass("br-l-rose")) {
            console.log((this))
            $(this).css("color", "#e31e62");
            $(this).css("border-color", "#e31e62");
        }
        else if ($(this).hasClass("br-l-blue")) {
            $(this).css("color", "#00bdd5");
            $(this).css("border-color", "#00bdd5");
        }
        else if ($(this).hasClass("br-l-green")) {
            $(this).css("color", "#13b42b");
            $(this).css("border-color", "#13b42b");
        }
        else if ($(this).hasClass("br-l-dk-blue")) {
            $(this).css("color", "#209ca9");
            $(this).css("border-color", "#209ca9");
        }
        else if ($(this).hasClass("br-l-violet")) {
            $(this).css("color", "#7863a0");
            $(this).css("border-color", "#7863a0");
        }
        else if ($(this).hasClass("br-l-org")) {
            $(this).css("color", "#ec531f");
            $(this).css("border-color", "#ec531f");
        }
    })

    
});

//////--------Radio-button-------///////////


///////-------PLUGIN-------////////
$(document).ready(function () {

    $('#calendar').dcalendar();

});
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});
$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})
///////-------PLUGIN-------////////