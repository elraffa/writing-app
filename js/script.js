const form = document.getElementById('form-select');

// Count Words
function countWords(val, e) {
  let textArray = val.split(' ');
  let wordCount = document.querySelector('.' + e);
  wordCount.innerHTML = textArray.length;
}

// Submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = document.querySelector('#text');
  let heading = document.getElementById('heading').value;
  let intro = document.getElementById('intro').value;
  let sectionHeading = document.getElementById('section-heading').value;
  let sectionDescription = document.getElementById('section-description').value;
  let poi1Title = document.getElementById('poi1-title').value;
  let poi1Description = document.getElementById('poi1-description').value;
  let poi2Title = document.getElementById('poi2-title').value;
  let poi2Description = document.getElementById('poi2-description').value;
  let poi3Title = document.getElementById('poi3-title').value;
  let poi3Description = document.getElementById('poi3-description').value;
  let resto1Title = document.getElementById('resto1-title').value;
  let resto1Description = document.getElementById('resto1-description').value;
  let resto2Title = document.getElementById('resto2-title').value;
  let resto2Description = document.getElementById('resto2-description').value;
  let hotelTitle = document.getElementById('hotel-title').value;
  let hotelDescription = document.getElementById('hotel-description').value;

  // Add text to Div
  text.innerHTML = `<h2>Tu texto: </h2><br>${heading} <br><br> ${intro} <br><br> ${sectionHeading} <br><br> ${sectionDescription} <br><br> ${poi1Title} <br><br> ${poi1Description} <br><br> ${poi2Title} <br><br> ${poi2Description} <br><br> ${poi3Title} <br><br> ${poi3Description} <br><br> ${resto1Title} <br><br> ${resto1Description} <br><br> ${resto2Title} <br><br> ${resto2Description} <br><br> ${hotelTitle} <br><br> ${hotelDescription}`;
  console.log(text);
});

// Reset form
form.addEventListener('reset', () => {
  text.innerHTML = '';
});
