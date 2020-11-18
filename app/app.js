
window.addEventListener("load", function(event) {
    setTimeout(function() {
        spanSwitch();
    }, 3000);
    const lang= "fr-FR"

const colors = ['#ff5ea0', '#1bce6e', '#034b75'];
	const rand = colors[Math.floor(Math.random() * colors.length)];
	const colorSwitch = document.querySelector('.jumbo article:first-of-type');
    const colorSwitch2 = document.querySelector('.jumbo');



	function spanSwitch() {

		const spanSwitcher = document.getElementById('word_switch1');
		const spanSwitcher2 = document.getElementById('word_switch2');
		const spanSwitcher3 = document.getElementById('word_switch3');
		const spanSwitcher4 = document.getElementById('word_switch4');
		const spanSwitcher5 = document.getElementById('word_switch5');
		const spanSwitcher6 = document.getElementById('word_switch6');


		if (spanSwitcher.classList.contains("span--switcher--active")) {
			spanSwitcher.classList.remove("span--switcher--active")
			spanSwitcher2.classList.add("span--switcher--active")
		} else if (spanSwitcher2.classList.contains("span--switcher--active")) {
			spanSwitcher2.classList.remove("span--switcher--active")
			spanSwitcher3.classList.add("span--switcher--active")
		} else if (spanSwitcher3.classList.contains("span--switcher--active")) {
			spanSwitcher3.classList.remove("span--switcher--active")
			spanSwitcher4.classList.add("span--switcher--active")
		} else if (spanSwitcher4.classList.contains("span--switcher--active")) {
			spanSwitcher4.classList.remove("span--switcher--active")
			spanSwitcher5.classList.add("span--switcher--active")
		} else if (spanSwitcher5.classList.contains("span--switcher--active")) {
			spanSwitcher5.classList.remove("span--switcher--active")
			spanSwitcher6.classList.add("span--switcher--active")
		} else if (spanSwitcher6.classList.contains("span--switcher--active")) {
			spanSwitcher6.classList.remove("span--switcher--active")
			spanSwitcher.classList.add("span--switcher--active")
		}

		setTimeout(spanSwitch, 1500);


	}

	colorSwitch.style.backgroundColor = rand;
    colorSwitch2.style.backgroundColor = rand;

	if (rand === '#034b75') {

		const spanSwitchers = document.querySelectorAll('main .jumbo span');
		var index = 0,
			length = spanSwitchers.length;
		for (; index < length; index++) {
			spanSwitchers[index].style.color = '#1bce6e';

		}
		const btn = document.getElementById('btn');
		btn.style.backgroundColor = '#1bce6e';


    };
    $('body').on('click', 'a[href$="#contact-btn"]', function(e) {
        e.preventDefault();
        var $modal = $('#modal--keepcontact-form');
        $modal.modal('show');
	});
	
	$('body').on('click', 'a[href$="#CGU"]', function(e) {
        e.preventDefault();
        var $modal = $('#modal--CGU');
        $modal.modal('show');
    });
    spanSwitch();


    
    // initialize mobile sidebar
    const mobileMenuBtn = document.getElementById('sidebar--toggle');
    const mobileMenuBtnClose = document.getElementById('sidebar--close');
    const mobileSidebar = document.getElementById('sidebar--mobile')
    $(mobileMenuBtn).click(function() {
        
    });
   function toggleSidebar(){
        mobileSidebar.classList.toggle("sidebar--active")
    }
    mobileMenuBtn.addEventListener("click",()=>{
           toggleSidebar();
      })
      mobileMenuBtnClose.addEventListener("click",()=>{
        toggleSidebar();
		})
	if (document.location.hash === "#CGU"){
		var $modal = $('#modal--CGU');
		$modal.modal('show');
	}

	function submitFormToAPI(e) {
		e.preventDefault();
		var URL = "#";
			 if ($("#email-input").val()=="") {
				 alert ("Please enter your email id");
				 return;
			 }
 
			 var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
			 if (!reeamil.test($("#email-input").val())) {
				 alert ("Please enter valid email address");
				 return;
			 }
 
		var email = $("#form-email-field").val();
		var message = $("#form-message-field").val();
		var data = {
		   email : email,
		   message : message
		 };
 
		$.ajax({
		  type: "POST",
		  url : "#",
		  dataType: "json",
		  crossDomain: "true",
		  contentType: "application/json; charset=utf-8",
		  data: JSON.stringify(data),
 
		  
		  success: function () {
			alert("Successfull");
			document.getElementById("contact-form").reset();
			location.reload();
		  },
		  error: function () {
			alert("UnSuccessfull");
		  }});
	  }



});