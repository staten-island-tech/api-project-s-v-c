

const DOMStrings = {
    input: document.getElementById("pic-form"),
    name: document.getElementById("pic-theme"),
    displayTags: document.querySelector(".pic-name-size"),
    displayImage1: document.querySelector(".display-image-1-def"),
    displayImage2: document.querySelector(".display-image-2-def"),
    displayImage3: document.querySelector(".display-image-3-front"),
    displayImage4: document.querySelector(".display-image-4-back"),
    displayImage5: document.querySelector(".display-image-5-back"),
    displayImage6: document.querySelector(".display-image-6-back"),
    type: document.querySelector(".theme"),
    displayNum: document.querySelector(".pic-num")
  };
  
  DOMStrings.input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".nes-btn").click();
    }
  });
  
  const test = async function() {
    DOMStrings.input.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        const result = await fetch(
          `https://pixabay.com/api/?key=14126776-18dcabd6729abfe85d2740e3e&q=${DOMStrings.name.value}&image_type=photo`
        );
        const data = await result.json();
        //console.log(data);
  
        const displayPic = function (data) {
          DOMStrings.displayTags.innerText = data.hits[0].tags; 
          DOMStrings.displayNum.innerText = data.hits[0].likes;
          DOMStrings.displayImage1.src = data.hits[0].largeImageURL;
          DOMStrings.displayImage2.src = data.hits[1].largeImageURL;
          DOMStrings.displayImage3.src = data.hits[2].largeImageURL;
          DOMStrings.displayImage4.src = data.hits[3].largeImageURL;
          DOMStrings.displayImage5.src = data.hits[4].largeImageURL;
          DOMStrings.displayImage6.src = data.hits[5].largeImageURL;
          DOMStrings.type.textContent = data.hits.map(hits => hits[0].imageWidth); //check
          //console.log(data.hits[0].largeImageURL);
        };
        displayPic(data);
        DOMStrings.name.value = "";
      } catch (err) {
        console.log(err);
      }
    });
  }
  
  document.getElementById("pic-submit").addEventListener("submit", function (e) {

    if (DOMStrings.name.value === '') {
       alert("Please input something!"); 
    } else {
      DOMStrings.displayTags.innerText = 'tags:' + data.hits[0].tags;
      DOMStrings.displayNum.innerText = 'Number of Likes:' + data.hits[0].likes;
      DOMStrings.displayImage1.src = data.hits[0].largeImageURL;
      DOMStrings.displayImage2.src = data.hits[1].largeImageURL;
      DOMStrings.displayImage3.src = data.hits[2].largeImageURL;
      DOMStrings.displayImage4.src = data.hits[3].largeImageURL;
      DOMStrings.displayImage3.src = data.hits[4].largeImageURL;
      DOMStrings.displayImage4.src = data.hits[5].largeImageURL;
      DOMStrings.type.textContent = data.hits.map(hits => hits[0].imageWidth);
    }
  });
  
  
  // $('DOMStrings.name.value').spellCheckInDialog()
  
  test();