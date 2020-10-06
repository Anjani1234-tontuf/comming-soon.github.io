console.log('keyword generator');


var create_url = function(keyword){
	STRING_URL = 'https://www.woolworths.com.au/shop/search/products?searchTerm=' + keyword;
	$("#generatedUrls").append(STRING_URL + '<br>');
};

//add checker for double spaces.

var replace_space_in_keyword = function(keyword){
    keyword = keyword.replace(" ", "%20");
    var checker = keyword.includes(" ");
	    if (checker === true){
	    	replace_space_in_keyword(keyword);
		} else {
			create_url(keyword);
		}
};

var trim_each_keyword = function(keyword){
	keyword = keyword.trim();
	replace_space_in_keyword(keyword);
};

var clean_up_array = function(keyword_array){
	keyword_array.map(trim_each_keyword);
};

var keyword_str_to_array = function(userInput){
    userInput = userInput.split(",");
    clean_up_array(userInput);
};

var generateKeyword = function() {
	$("#generatedUrls").empty();
	keyword_str_to_array(document.getElementById("keywordString").value);
};

var resetPage = function() {
	$("#generatedUrls").empty();
    document.getElementById("keywordString").value = "";
};

$("#resetButton").click(function(){
    resetPage();
});


