
//zalgo html color fader by Brenly github.com/brenly
//I made this to teach myself javascript! I already knew other languages and wanted to branch out!
//most of the code is in a single function because i'm rusty! apologies!
// vertical fade doesn't work. the olors work but the zalgo compresses similar to the problem with early versions of the project possibly use text tag? other color methods?

var zalgo_up = [ /* up */
  '\u030d', /*     ̍     */
  '\u030e', /*     ̎     */
  '\u0304', /*     ̄     */
  '\u0305', /*     ̅     */
  '\u033f', /*     ̿     */
  '\u0311', /*     ̑     */
  '\u0306', /*     ̆     */
  '\u0310', /*     ̐     */
  '\u0352', /*     ͒     */
  '\u0357', /*     ͗     */
  '\u0351', /*     ͑     */
  '\u0307', /*     ̇     */
  '\u0308', /*     ̈     */
  '\u030a', /*     ̊     */
  '\u0342', /*     ͂     */
  '\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */
  '\u034a', /*     ͊     */
  '\u034b', /*     ͋     */
  '\u034c', /*     ͌     */
  '\u0303', /*     ̃     */
  '\u0302', /*     ̂     */
  '\u030c', /*     ̌     */
  '\u0350', /*     ͐     */
  '\u0300', /*     ̀     */
  '\u0301', /*     ́     */
  '\u030b', /*     ̋     */
  '\u030f', /*     ̏     */
  '\u0312', /*     ̒     */
  '\u0313', /*     ̓     */
  '\u0314', /*     ̔     */
  '\u033d', /*     ̽     */
  '\u0309', /*     ̉     */
  '\u0363', /*     ͣ     */
  '\u0364', /*     ͤ     */
  '\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */
  '\u0367', /*     ͧ     */
  '\u0368', /*     ͨ     */
  '\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */
  '\u036b', /*     ͫ     */
  '\u036c', /*     ͬ     */
  '\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */
  '\u036f', /*     ͯ     */
  '\u033e', /*     ̾     */
  '\u035b', /*     ͛     */
  '\u0346', /*     ͆     */
  '\u031a'  /*     ̚     */
];
var zalgo_down = [ /* down */
  '\u0316', /*     ̖     */
  '\u0317', /*     ̗     */
  '\u0318', /*     ̘     */
  '\u0319', /*     ̙     */
  '\u031c', /*     ̜     */
  '\u031d', /*     ̝     */
  '\u031e', /*     ̞     */
  '\u031f', /*     ̟     */
  '\u0320', /*     ̠     */
  '\u0324', /*     ̤     */
  '\u0325', /*     ̥     */
  '\u0326', /*     ̦     */
  '\u0329', /*     ̩     */
  '\u032a', /*     ̪     */
  '\u032b', /*     ̫     */
  '\u032c', /*     ̬     */
  '\u032d', /*     ̭     */
  '\u032e', /*     ̮     */
  '\u032f', /*     ̯     */
  '\u0330', /*     ̰     */
  '\u0331', /*     ̱     */
  '\u0332', /*     ̲     */
  '\u0333', /*     ̳     */
  '\u0339', /*     ̹     */
  '\u033a', /*     ̺     */
  '\u033b', /*     ̻     */
  '\u033c', /*     ̼     */
  '\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */
  '\u0348', /*     ͈     */
  '\u0349', /*     ͉     */
  '\u034d', /*     ͍     */
  '\u034e', /*     ͎     */
  '\u0353', /*     ͓     */
  '\u0354', /*     ͔     */
  '\u0355', /*     ͕     */
  '\u0356', /*     ͖     */
  '\u0359', /*     ͙     */
  '\u035a', /*     ͚     */
  '\u0323'  /*     ̣     */
];
var zalgo_mid = [ /* mid */
  '\u0315', /*     ̕     */
  '\u031b', /*     ̛     */
  '\u0340', /*     ̀     */
  '\u0341', /*     ́     */
  '\u0358', /*     ͘     */
  '\u0321', /*     ̡     */
  '\u0322', /*     ̢     */
  '\u0327', /*     ̧     */
  '\u0328', /*     ̨     */
  '\u0334', /*     ̴     */
  '\u0335', /*     ̵     */
  '\u0336', /*     ̶     */
  '\u034f', /*     ͏     */
  '\u035c', /*     ͜     */
  '\u035d', /*     ͝     */
  '\u035e', /*     ͞     */
  '\u035f', /*     ͟     */
  '\u0360', /*     ͠     */
  '\u0362', /*     ͢     */
  '\u0338', /*     ̸     */
  '\u0337', /*     ̷      */
  '\u0361', /*     ͡     */
  '\u0489' /*     ҉_     */
];

//typical javascript rand function
function rand(max) {
  return Math.floor(Math.random() * max);
}

function custom_background_display () {
  var custom_background_color = document.getElementById("custom_background_display").value;
  console.log(custom_background_color);
  document.getElementById("output_colorized").style.backgroundColor = custom_background_color;
}

/* OLD FUNCTION HEADER FOR SAFEKEEPING
function he_comes(iText, zalgo_opt_mini, zalgo_opt_normal, zalgo_up, zalgo_down, zalgo_mid, color1, color2, colormid) {*/

function he_comes() {
  //obtain source text...
  //possibly broken feature...
  var iText = document.getElementById("iText").value;
  var plain_output = '';
  var colorized_output = '';
  var html_output = '';

  //these 3 lines wipe the output boxes with each new click
  document.getElementById("output_zalgo").innerHTML = "";
  document.getElementById("output_colorized").innerHTML = "";
  document.getElementById("output_html").innerHTML = "";

  //in future rewrites, write this to pass integers of maximums rather than just true/false values
  var zalgo_opt_mini = document.getElementById("zalgo_opt_mini").checked;
  var zalgo_opt_normal = document.getElementById("zalgo_opt_normal").checked;
  var zalgo_opt_maxi = document.getElementById("zalgo_opt_maxi").checked;
  var horizontal_fade = document.getElementById("horizontal_fade").checked;
  var vertical_fade = document.getElementById("vertical_fade").checked;
  var up_opt = document.getElementById("up_opt").checked;
  var down_opt = document.getElementById("down_opt").checked;
  var mid_opt = document.getElementById("mid_opt").checked;
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  //custom mid color yes/no?
  var colormid = document.getElementById("colormid").checked;
  var custom_middle_color_value = document.getElementById("custom_middle_color_value").value;
  var char_temp;
  var static_vertical_axis;
  var rand_num_up;
  var static_num_up;
  var rand_num_mid;
  var static_num_mid;
  var rand_num_down;
  var static_num_down;
  var color1_array = [0, 0, 0];
  var color2_array = [0, 0, 0];
  var colorsteps_array = [0, 0, 0];
  //console.log(color1);
  //console.log(color2);

  //convert hexadecimal to RGB 255 using parseInt library
  color1_array[0] = parseInt(color1.substring(1, 3), 16);
  color1_array[1] = parseInt(color1.substring(3, 5), 16);
  color1_array[2] = parseInt(color1.substring(5, 7), 16);

  color2_array[0] = parseInt(color2.substring(1, 3), 16);
  color2_array[1] = parseInt(color2.substring(3, 5), 16);
  color2_array[2] = parseInt(color2.substring(5, 7), 16);

  //calculate the differences in RGB values. negative numbers are fine! it will just decrement rather than increment when doing the fade calc.
  if (horizontal_fade == true) {
    for (var i = 0; i < 3; i++) {
      colorsteps_array[i] = color1_array[i] - color2_array[i];
      //console.log(colorsteps_array);
      colorsteps_array[i] = colorsteps_array[i] / iText.length;
      //console.log(colorsteps_array);
    }
  }

  //console.log(color1_array);
  //console.log(color2_array);
  //console.log(colorsteps_array);
  //this is for vertical color fades. this was the easiest solution to just set a y axis maximum and fade according to that dimension regardless of the number of characters. i feel it creates cleaner results visually
  if (zalgo_opt_mini == true) {
    static_num_up = 4;
    static_num_mid = 2;
    static_num_down = 4;
    static_vertical_axis = 5;
  } else if (zalgo_opt_normal == true) {
    static_num_up = 7;
    static_num_mid = 3;
    static_num_down = 7;
    static_vertical_axis = 8;
  } else //maxi
  {
    static_num_up = 19;
    static_num_mid = 5;
    static_num_down = 19;
    static_vertical_axis = 20;
  }

  if (vertical_fade == true) {
    for (var i = 0; i < 3; i++) {
      colorsteps_array[i] = color1_array[i] - color2_array[i];
      //console.log(colorsteps_array);
      colorsteps_array[i] = colorsteps_array[i] / static_vertical_axis;
      //console.log(colorsteps_array);
    }
  }

  //a previous version of this code put each character as it was generated directly into the output boxes. this resulted in the zalgo text appearing compressed. the work around was to generate an output buffer string and pass the entire string to the display box at once.

  for (var i = 0; i < iText.length; i++) {
    if (vertical_fade == true) {
      //refresh color1_array
      var color1 = document.getElementById("color1").value;
      //convert hexadecimal to RGB 255 using parseInt library
      color1_array[0] = parseInt(color1.substring(1, 3), 16);
      color1_array[1] = parseInt(color1.substring(3, 5), 16);
      color1_array[2] = parseInt(color1.substring(5, 7), 16);
    }
    //random reroll for each step horizontally. to create variations
    if (zalgo_opt_mini == true) {
      rand_num_up = rand(4);
      rand_num_mid = rand(2);
      rand_num_down = rand(4);
    } else if (zalgo_opt_normal == true) {
      rand_num_up = rand(12) / 2 + 1;
      rand_num_mid = rand(6) / 2;
      rand_num_down = rand(12) / 2 + 1;
    } else //maxi
    {
      rand_num_up = rand(64) / 4 + 3;
      rand_num_mid = rand(16) / 4 + 1;
      rand_num_down = rand(64) / 4 + 3;
    }

    if (horizontal_fade == true) {
      //this was not writen as a loop on purpose.
      colorized_output += '<span style="color:rgb(';
      color1_array[0] -= colorsteps_array[0];
      colorized_output += Math.round(color1_array[0]);
      colorized_output += ", ";
      color1_array[1] -= colorsteps_array[1];
      colorized_output += Math.round(color1_array[1]);
      colorized_output += ", ";
      color1_array[2] -= colorsteps_array[2];
      colorized_output += Math.round(color1_array[2]);
      colorized_output += ');">';
    }
    //console.log(colormid);
    if (vertical_fade == true) {
      colorized_output += '<span style="color:rgb(';
      colorized_output += Math.round(color1_array[0]);
      colorized_output += ", ";
      colorized_output += Math.round(color1_array[1]);
      colorized_output += ", ";
      colorized_output += Math.round(color1_array[2]);
      colorized_output += ');">';
    }
    //CUSTOM PLAINTEXT
    if (colormid == true) {
      console.log("custom middle color launched!");
      colorized_output += '<span style="color:';
      colorized_output += custom_middle_color_value;
      colorized_output += ';">';
    }

    //add normal plain character..
    plain_output += iText.charAt(i);
    colorized_output += iText.charAt(i);

    if (colormid == true) {
      colorized_output += "</span>";
    }
    if (vertical_fade == true) {
      colorized_output += "</span>";
    }


    if (up_opt == true) {
      if (vertical_fade == true){ //reset color 1 before beginning zalgo print loop...
        var color1 = document.getElementById("color1").value;
            color1_array[0] = parseInt(color1.substring(1, 3), 16);
      color1_array[1] = parseInt(color1.substring(3, 5), 16);
      color1_array[2] = parseInt(color1.substring(5, 7), 16);
      }
      for (var j = 0; j < rand_num_up; j++) {
        if (vertical_fade == true) {
          colorized_output += '<span style="color:rgb(';
          color1_array[0] -= colorsteps_array[0];
          colorized_output += Math.round(color1_array[0]);
          colorized_output += ", ";
          color1_array[1] -= colorsteps_array[1];
          colorized_output += Math.round(color1_array[1]);
          colorized_output += ", ";
          color1_array[2] -= colorsteps_array[2];
          colorized_output += Math.round(color1_array[2]);
          colorized_output += ');">';
        }
        char_temp = zalgo_up[Math.floor(Math.random() * zalgo_up.length)];
        plain_output += char_temp;
        colorized_output += char_temp;
        //console.log(char_temp);
        if (vertical_fade == true) {
          colorized_output += "</span>";
        }
      }
    }
    if (mid_opt == true) {
            if (vertical_fade == true){ //reset color1 before beginning zalgo print loop...
        var color1 = document.getElementById("color1").value;
            color1_array[0] = parseInt(color1.substring(1, 3), 16);
      color1_array[1] = parseInt(color1.substring(3, 5), 16);
      color1_array[2] = parseInt(color1.substring(5, 7), 16);
      }
      for (var j = 0; j < rand_num_mid; j++) {
        if (vertical_fade == true) {
          colorized_output += '<span style="color:rgb(';
          color1_array[0] -= colorsteps_array[0];
          colorized_output += Math.round(color1_array[0]);
          colorized_output += ", ";
          color1_array[1] -= colorsteps_array[1];
          colorized_output += Math.round(color1_array[1]);
          colorized_output += ", ";
          color1_array[2] -= colorsteps_array[2];
          colorized_output += Math.round(color1_array[2]);
          colorized_output += ');">';
        }
        char_temp = zalgo_mid[Math.floor(Math.random() * zalgo_mid.length)];
        plain_output += char_temp;
        colorized_output += char_temp;
        if (vertical_fade == true) {
          colorized_output += "</span>";
        }
      }
    }
    if (down_opt == true) {
            if (vertical_fade == true){ //reset color1 before beginning zalgo print loop...
        var color1 = document.getElementById("color1").value;
            color1_array[0] = parseInt(color1.substring(1, 3), 16);
      color1_array[1] = parseInt(color1.substring(3, 5), 16);
      color1_array[2] = parseInt(color1.substring(5, 7), 16);
      }
      for (var j = 0; j < rand_num_down; j++) {
        if (vertical_fade == true) {
          colorized_output += '<span style="color:rgb(';
          color1_array[0] -= colorsteps_array[0];
          colorized_output += Math.round(color1_array[0]);
          colorized_output += ", ";
          color1_array[1] -= colorsteps_array[1];
          colorized_output += Math.round(color1_array[1]);
          colorized_output += ", ";
          color1_array[2] -= colorsteps_array[2];
          colorized_output += Math.round(color1_array[2]);
          colorized_output += ');">';
        }
        char_temp = zalgo_down[Math.floor(Math.random() * zalgo_down.length)];
        plain_output += char_temp;
        colorized_output += char_temp;
        if (vertical_fade == true) {
          colorized_output += "</span>";
        }
      }
    }
    if (horizontal_fade == true) {
      //console.log("horizontal fade code activate!");
      colorized_output += "</span>";
    }
  }
  document.getElementById("output_zalgo").insertAdjacentHTML('beforeend', plain_output);
  document.getElementById("output_colorized").insertAdjacentHTML('beforeend', colorized_output);
  document.getElementById("output_html").insertAdjacentHTML('beforeend', colorized_output);
  return;
}
