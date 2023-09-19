document.addEventListener("DOMContentLoaded", () => {
  const dogImageElement = document.getElementById("dog-image");
  const fetchButton = document.getElementById("fetch-button");

  const fetchRandomDogImage = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
              const imageUrl = data.message;
              dogImageElement.src = imageUrl;
          })
          .catch((error) => {
              console.error("Error fetching dog image:", error);
          });
  };

  fetchRandomDogImage();

  fetchButton.addEventListener("click", () => {
      fetchRandomDogImage();
  });
});


function validateFullName() {
  const fullName = document.getElementById('fullName').value;
  const fullNameError = document.getElementById('fullNameError');
  if (/^[a-zA-Z\s]{3,}$/.test(fullName)) {
      fullNameError.textContent = '';
      return true;
  } else {
      fullNameError.textContent = 'Full Name must contain at least 3 alphabetic characters.';
      return false;
  }
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)) {
      emailError.textContent = '';
      return true;
  } else {
      emailError.textContent = 'Invalid email address format.';
      return false;
  }
}

function validatecomment() {
  const comment = document.getElementById('comment').value;
  const commentError = document.getElementById('commentError');
  if (/^[a-zA-Z\s]{10,}$/.test(comment)) {
      commentError.textContent = '';
      return true;
  } else {
      commentError.textContent = 'Comment must contain at least 10 alphabetic characters.';
      return false;
  }
}

function enableSubmitButton() {
  const formIsValid = validateFullName() && validateEmail() && validatecomment();
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = !formIsValid;
}

document.getElementById('fullName').addEventListener('input', validateFullName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('comment').addEventListener('input', validatecomment);

document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault(); 
  enableSubmitButton(); 
});

document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-button");
    const dogDetailsDiv = document.getElementById("dog-details");

    fetchButton.addEventListener("click", () => {
        fetch("dogs.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                displayDogDetails(data);
            })
            .catch((error) => {
                console.error("Failed to fetch dog data: " + error);
            });
    });

    function displayDogDetails(data) {
        dogDetailsDiv.innerHTML = "";

        const ul = document.createElement("ul");

        data.forEach((dog) => {
            const li = document.createElement("li");
            li.textContent = `Breed: ${dog.breed}, Color: ${dog.color}, Country: ${dog.country}`;
            ul.appendChild(li);
        });

        dogDetailsDiv.appendChild(ul);
    }
});

const fs = require('fs');
const { parseString } = require('xml2js');
const { transform } = require('fast-xslt');

const xmlData = fs.readFileSync('dogs.xml', 'utf-8');
const xsltStylesheet = fs.readFileSync('dogs.xsl', 'utf-8');

parseString(xmlData, (err, result) => {
  if (err) {
    console.error('Error parsing XML data:', err);
    return;
  }

  const transformedHtml = transform(xsltStylesheet, result);
  console.log(transformedHtml);
});
