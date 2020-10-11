var urlfieldval = 'e.g. http://www.yourlink.com';
var descfieldval = 'e.g. Title of Blog Post';
var graphicfieldval = 'e.g. http://www.yourwebsite.com/yourimage.jpeg';
var twitterfieldval = 'Handle (optional)';
var twitterhashfieldval = 'Hashtag (optional)';
function sbgen() {
	var finalstring = '';
	var URL = document.getElementById('URL').value;
	var Description = document.getElementById('Description').value;
	var GraphicURL = document.getElementById('GraphicURL').value;
	var ButtonStyle = document.getElementById('bstyle').options.selectedIndex;
	var TwitterVia = document.getElementById('TwitterVia').value;
	var TwitterHash = document.getElementById('TwitterHash').value;
	var FacebookVal = '';
	var TwitterVal = '';
	var GoogleplusVal= '';
	var LinkedInVal = '';
	var PinterestVal = '';
	if(TwitterVia === twitterfieldval){
		TwitterVia='';
	}
	if(TwitterVia !== ''){
		TwitterVia='&via='+TwitterVia;
	}
	if(TwitterHash === twitterhashfieldval){
		TwitterHash='';
	}
	if(TwitterHash !== ''){
		TwitterHash='&hashtags='+TwitterHash;
	}
	if(document.getElementById('Facebook').checked){
		if (ButtonStyle === 1){
			FacebookVal='<iframe allowTransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/www.facebook.com\/plugins\/like.php?href='+URL+'&send=false&layout=box_count&show_faces=false&action=like&colorscheme=light&font=arial\" style=\"border:none;width:45px;height:61px;margin-right:10px;\"><\/iframe>';
		}
		else{
			FacebookVal='<iframe allowTransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/www.facebook.com\/plugins\/like.php?href='+URL+'&send=false&layout=button_count&show_faces=false&action=like&colorscheme=light&font=arial\" style=\"border:none;width:88px;height:20px\"><\/iframe>';
		}
	}
	if(document.getElementById('Googleplus').checked){
		if (ButtonStyle === 1){
			GoogleplusVal='<div class=\"g-plusone\" data-size=\"tall\" annotation=\"bubble\" data-href=\"'+URL+'\" style=\"width:59px;height:62px;\"><\/div><span style=\"width:10px;display:inline-block;\"><\/span><script type=\"text\/javascript\" src=\"https:\/\/apis.google.com\/js\/plusone.js\" async><\/script>';
		}
		else{
			GoogleplusVal='<div class=\"g-plusone\" data-size=\"medium\" annotation=\"bubble\" data-href=\"'+URL+'\" style=\"width:72px;height:20px;\"><\/div><script type=\"text\/javascript\" src=\"https:\/\/apis.google.com\/js\/plusone.js\" async><\/script>';
		}
	}
	if(document.getElementById('Twitter').checked){
		if (ButtonStyle === 1){
			TwitterVal='<iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/platform.twitter.com\/widgets\/tweet_button.html?url='+URL+'&text='+Description+TwitterVia+TwitterHash+'&count=vertical\" style=\"width:59px;height:62px;margin-right:10px;\"></iframe>';
		}
		else{
			TwitterVal='<iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/platform.twitter.com\/widgets\/tweet_button.html?url='+URL+'&text='+Description+TwitterVia+TwitterHash+'&count=horizontal\" style=\"width:110px;height:20px;\"></iframe>';
		}
	}
	if(document.getElementById('Linkedin').checked){
		if (ButtonStyle === 1){
			LinkedInVal='<script src=\"http:\/\/platform.linkedin.com\/in.js\" type=\"text\/javascript\"><\/script><script type=\"IN\/Share\" data-url=\"'+URL+'\" data-counter=\"top\"><\/script><span style=\"width:10px;display:inline-block;\"><\/span>';
		}
		else{
			LinkedInVal='<script src=\"http:\/\/platform.linkedin.com\/in.js\" type=\"text\/javascript\"><\/script><script type=\"IN\/Share\" data-url=\"'+URL+'\" data-counter=\"right\"><\/script>';
		}
	}
	if(document.getElementById('Pinterest').checked){
		if (ButtonStyle === 1){
			PinterestVal='<a href=\"http:\/\/pinterest.com\/pin\/create\/button\/?url='+URL+'&media='+GraphicURL+'&description='+Description+'\" class=\"pin-it-button\" count-layout=\"vertical\">Pin It<\/a><script type=\"text\/javascript\" src=\"http:\/\/assets.pinterest.com\/js\/pinit.js\"><\/script>';
		}
		else{
			PinterestVal='<a href=\"http:\/\/pinterest.com\/pin\/create\/button\/?url='+URL+'&media='+GraphicURL+'&description='+Description+'\" class=\"pin-it-button\" count-layout=\"horizontal\">Pin It<\/a><script type=\"text\/javascript\" src=\"http:\/\/assets.pinterest.com\/js\/pinit.js\"><\/script>';
		}
		if (GraphicURL === graphicfieldval || GraphicURL === ''){
			PinterestVal='';
			alert('Pinterest requires an image URL');
		}
	}
	finalstring = FacebookVal+GoogleplusVal+TwitterVal+LinkedInVal+PinterestVal;
	if(URL === urlfieldval || Description === descfieldval || URL === '' || Description === ''){
		finalstring = '';
	}
	if(finalstring === ''){
		document.getElementById('embedcode').value= 'No social media services selected, or missing required field values!';
	}
	else{
		document.getElementById('embedcode').value = finalstring;
	}
	document.getElementById('preview').innerHTML=finalstring;
}
function Clear(elem){
	if(elem.value === urlfieldval || elem.value === descfieldval || elem.value === graphicfieldval || elem.value === twitterfieldval || elem.value === twitterhashfieldval || elem.value === ""){
		elem.value='';
	}
}
function clearall(){
	document.getElementById('Facebook').checked = false;
	document.getElementById('Googleplus').checked = false;
	document.getElementById('Twitter').checked = false;
	document.getElementById('Linkedin').checked = false;
	document.getElementById('Pinterest').checked = false;
	document.getElementById('URL').value = '';
	document.getElementById('Description').value = '';
	document.getElementById('GraphicURL').value = '';
	document.getElementById('TwitterVia').value = '';
	document.getElementById('TwitterHash').value = '';
}