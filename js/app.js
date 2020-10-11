((d) => {
  let clickCount = 0;
  let textCount = 0;
  let billboardBackground = d.getElementById("billboard");
  let billboardText = d.getElementById("slogan");

  let body = d.body;
  let hue = 50;
  let saturation = 50;
  let lightness = 50;

  // This is the test JSON file in the form of a basic array of strings.
  // This was used to test the code and has been replaced by an API request.
  // In production I would remove code artefacts like this one.

  const testJSON = [
    "Pay someone a compliment",
    "Draw a picture for someone you love",
    "Don't be ashamed to use your own ideas",
    "Treat yourself once in a while",
    "Look at the order not the structure",
  ];

  //   billboardText.addEventListener("click", () => {
  //   let randomNumber = Math.floor(Math.random() * 11);
  //   textCount = (textCount + randomNumber) % testJSON.length;
  //   let newText = testJSON[textCount];
  //   billboardText.innerHTML = `${newText}`;
  // });


  billboardBackground.addEventListener("click", () => {
    clickCount += 50;
    hue = Math.round(clickCount);
    let hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    body.style.backgroundColor = `${hsl}`;
  });


// This is our API request.


  billboardText.addEventListener("click", () => {
    // let randomNumber = Math.floor(Math.random() * 11);
    // textCount = (textCount + randomNumber) % testJSON.length;

    fetch('https://api.adviceslip.com/advice')
    .then(response => {
      return response.json()
    })
    .then(data => {
      billboardText.innerHTML = `${data.slip.advice}`;
    })
    .catch(err => {
      console.log("Oh my, there are some errors.");
    });

  });

})(document);
