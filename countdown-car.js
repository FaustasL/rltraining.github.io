	const buttonsDiv = document.querySelector('buttons');
	
	var CCOUNT = 300;
    
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
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Fly in a circle around the ball with ball cam on (without air roll)";
			cdreset();
		}
		if(x == 3) {
			document.getElementById('step-nr').innerHTML = "Step 3";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Fly in a circle around the ball with ball cam on (with air roll)";
			cdreset();
		}
		if(x == 4) {
			document.getElementById('step-nr').innerHTML = "Step 4";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Use outside boost pads as cones and fly around them in zigzag motion(without air roll)";
			cdreset();
		}
		if(x == 5) {
			document.getElementById('step-nr').innerHTML = "Step 5";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Use outside boost pads as cones and fly around them in zigzag motion(with air roll)";
			cdreset();
		}
		if(x == 6) {
			document.getElementById('step-nr').innerHTML = "Step 6";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Tear around the field doing half flips and hard recoveries";
			cdreset();
		}
		if(x == 7) {
			document.getElementById('step-nr').innerHTML = "Step 7";
			document.getElementById('descrip').innerHTML = "<b>Description:</b> Play around in the SPEED JUMP: BOOST workshop map by DMC";
			document.getElementById('map').innerHTML = "<b>Map:</b> Speed Jump: Boost - By dmc (Steam workshop)";
			document.getElementById('duration').innerHTML = "<b>Duration:</b> 20 minutes";
			count = 1200;
			cdresetchanged();
			y = 1;
		}
			
	}
	
	
	
	
	
	
	
	
	
	
	