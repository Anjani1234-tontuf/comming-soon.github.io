// © 2020 Asher Seiling

// Display title variable
var title_create = "";

// Main function
function generate_title(){
    const prefix_title = document.getElementById("prefix_text").value;
    const random_select_num = Math.floor(Math.random() * 4) + 1;
    var add_to_title = "";
    if(random_select_num == 1){
        add_to_title = "(As a millionare)";
    }
    else if(random_select_num == 2){
        add_to_title = "As a millionare";
    }
    else if(random_select_num == 3){
        add_to_title = "(Millionare point of view)";
    }
    else if(random_select_num == 4){
        add_to_title = "(addressing my haters)";
    }

    title_create = prefix_title + " " + add_to_title;

    // Return result
    return_res();

}


// Funciton that returns the result

function return_res(){
    document.getElementById("the_title_is").innerHTML = "The Tech Lead name for this is";
    document.getElementById("disp_result").innerHTML = title_create;
}