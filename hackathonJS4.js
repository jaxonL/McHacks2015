// JavaScript Document

$(document).ready(function(){
    $("#preu h3").click(function(){
        $("#programPreUId").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#career h3").click(function(){
        $("#programCareer").slideToggle("slow");
    });
});

function programComparePreU () {
		var comparePreU = document.forms.programPreUName.elements.programPreU.value;
		
	if (comparePreU == 1) {
		
		document.getElementById("comparison").innerHTML = " Commerce: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
        
    } 

	else if (comparePreU == 2) {
		document.getElementById("comparison").innerHTML = " Communications, Media and Studio Arts: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
    } 
	
	else if (comparePreU == 3) {
		document.getElementById("comparison").innerHTML = " Computer Science and Mathematics: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
    } 
	
	else if (comparePreU == 4) {
		document.getElementById("comparison").innerHTML = " Languages and Cultures (formerly known as Modern Languages): <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 5) {
		document.getElementById("comparison").innerHTML = " Liberal Arts: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 6) {
		document.getElementById("comparison").innerHTML = "Modern Languages and Music Double DCS: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 7) {
		document.getElementById("comparison").innerHTML = " Music: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 8) {
		document.getElementById("comparison").innerHTML = " Science: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 9) {
		document.getElementById("comparison").innerHTML = " Science and Music Double DCS: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 10) {
		document.getElementById("comparison").innerHTML = " Science and Social Science Double DCS (Commerce Option): <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (comparePreU == 11) {
		document.getElementById("comparison").innerHTML = " Social Science: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }

	else if (comparePreU == 12) {
		document.getElementById("comparison").innerHTML = " Social Science and Music Double DCS: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }

	else {
		document.getElementById("comparison").innerHTML = "Please make a selection."
	}
	
}

function programCompareCareer() {
	var compareCareer = document.forms.programCareerName.elements.programCareer.value;
	
	if (compareCareer == 1) {
		document.getElementById("comparison").innerHTML = " Animal Health Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
        
    } 

	else if (compareCareer == 2) {
		document.getElementById("comparison").innerHTML = " Architectural Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
    } 
	
	else if (compareCareer == 3) {
		document.getElementById("comparison").innerHTML = " Building Systems Engineering Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
    } 
	
	else if (compareCareer == 4) {
		document.getElementById("comparison").innerHTML = " Business Administration: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 5) {
		document.getElementById("comparison").innerHTML = " Computer Science Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 6) {
		document.getElementById("comparison").innerHTML = "Computerized Systems Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 7) {
		document.getElementById("comparison").innerHTML = " Early Childhood Education: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 8) {
		document.getElementById("comparison").innerHTML = " Environmental and Wildlife Management: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 9) {
		document.getElementById("comparison").innerHTML = " Industrial Electronics: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 10) {
		document.getElementById("comparison").innerHTML = " Nursing: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 11) {
		document.getElementById("comparison").innerHTML = " Office Systems Technology: Micropublishing and Hypermedia: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }

	else if (compareCareer == 12) {
		document.getElementById("comparison").innerHTML = " Professional Music and Song Techniques: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";

    }
	
	else if (compareCareer == 13) {
		document.getElementById("comparison").innerHTML = " Respiratory & Anaesthesia Technology: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
	}
	
	else if (compareCareer == 14) {
		document.getElementById("comparison").innerHTML = " Special Care Counselling: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam posuere mi, vel pharetra ipsum. Cras sagittis euismod erat, sed efficitur risus placerat eget. Aliquam viverra hendrerit arcu, eu interdum est imperdiet eu. Nullam efficitur semper lorem, id maximus ante blandit ac.<br/><br/>CEGEPs at which this program is offered:<br/>Nunc laoreet tristique elit eget dignissim. Nullam non massa et nisi porta pulvinar.";
	}
	
	else {
		document.getElementById("comparison").innerHTML = "Please make a selection."
	}
		}
		
function cPressPreU() {
	if (confirm("Confirm selection.") == true) {
		programComparePreU (); 

		}
		//else {
			//x = "You pressed Cancel!";
			//}
}

function cPressCare() {
	if (confirm("Confirm selection.") == true) {
		programCompareCareer ();
	}
}

