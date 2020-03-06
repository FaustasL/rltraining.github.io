	const buttonsDiv = document.querySelector('buttons');
	
	var CCOUNT = 1200;
    
    var t, count, x=1, y=0;
    
    function cddisplay() {
        // displays time in span
		var minutes = parseInt(count/60);
		var seconds = parseInt(count%60);
		if(seconds < 10)
			seconds = "0"+seconds;
        document.getElementById('timespan').innerHTML = minutes + ":" + seconds;
    };
    
    function countdown() {
		remove('start');
		display('stop');
		display('reset');
		remove('next');
		
        // starts countdown
        cddisplay();
        if (count == 0 && y == 1) {
            remove('next');
			remove('stop');
			remove('reset');
			display('back');
			document.getElementById('timespan').innerHTML = "DONE";
        } else if (count == 0) {
			display('next');
			remove('stop');
			remove('reset');
		} else {
            count--;
            t = setTimeout("countdown()", 1000);
        }
    };
	
	function display(e){
		document.getElementById(e).style.display = 'inline';
	}
	
	function remove(e){
		document.getElementById(e).style.display = 'none';
	}
    
    function cdpause() {
		remove('next');
		remove('stop');
		display('start');
        // pauses countdown
        clearTimeout(t);
    };
    
    function cdreset() {
		remove('next');
		remove('stop');
		display('start')
		remove('reset');
        // resets countdown
        cdpause();
        count = CCOUNT;
        cddisplay();
    };
	
	function cdresetchanged() {
		remove('next');
		remove('stop');
		display('start')
		remove('reset');
        // resets countdown
        cdpause();
        cddisplay();
	}
	
	function next(){
		x++;
		if(x == 2) {
			document.getElementById('step-nr').innerHTML = "Step 2";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Hit the ball on the sides while it is bouncing (bounce dribble)";
			document.getElementById('map').innerHTML = "<b>Map:</b> FREE PLAY";
			document.getElementById('duration').innerHTML = "<b>Duration:</b> 5 minutes";
			count = 300;
			cdresetchanged();
		}
		if(x == 3) {
			document.getElementById('step-nr').innerHTML = "Step 3";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Dribble the ball and try to flick it into the goal";
			count = 300;
			cdresetchanged();
			y = 1;
		}
	}
	
	
	
	
	
	
	
	
	
	
	