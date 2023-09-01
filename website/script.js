// Array of works
var works = [
  { src: 'Images/crystal butterfly small.png', title: 'Crystal Butterfly', description: 'Flying through the sky' },
  { src: 'Images/LIBERTY!.png', title: 'LIBERTY!', description: 'Lady Liberty in all her glory, created for a streetwear clothing brand.' },
  { src: 'Images/gateway 2.png', title: 'Doorway', description: 'A doorway into another world.' },
  { src: 'Images/distracted driving.png', title: 'Distracted Driving', description: 'Made for a school promoting awareness for distracted driving.' },
  { src: 'Images/skely v5.png', title: 'Star Gazing', description: 'A graphic I made for a streetwear clothing brand.' },
  { src: 'Images/FASTV2!.png', title: 'FAST!', description: 'A graphic I was commissioned to create.' },
  { src: 'Images/angel.png', title: 'Fallen', description: 'Fallen Angel Streetwear Graphic.' },
  { src: 'Images/red wave.png', title: 'TSUNAMI!', description: 'Flowing.' }
];

// Function to generate works
function generateWorks() {
  var container = document.getElementById('works-container');

  works.forEach(function (work) {
    var col = document.createElement('div');
    col.className = 'col-md-6';

    var workCard = document.createElement('div');
    workCard.className = 'work-card';
    workCard.onclick = function () { enlargeImage(work.src); };

    var workImageContainer = document.createElement('div');
    workImageContainer.className = 'work-image-container';

    var workImage = document.createElement('img');
    workImage.src = work.src;
    workImage.alt = work.title;
    workImage.className = 'work-image';

    workImageContainer.appendChild(workImage);

    var workDescription = document.createElement('div');
    workDescription.className = 'work-description';

    var title = document.createElement('h5');
    title.textContent = work.title;

    var description = document.createElement('p');
    description.textContent = work.description;

    workDescription.appendChild(title);
    workDescription.appendChild(description);

    workCard.appendChild(workImageContainer);
    workCard.appendChild(workDescription);

    col.appendChild(workCard);

    container.appendChild(col);
  });
}

function enlargeImage(src) {
  var modal = document.getElementById("enlarged-image-modal");
  var modalImg = document.getElementById("enlarged-image");
  modal.style.display = "block"; /* Show modal */
  modalImg.src = src;
}

function closeImage() {
  var modal = document.getElementById("enlarged-image-modal");
  modal.style.display = "none"; /* Hide modal */
}


function closeModalOnLoad() {
  var modal = document.getElementById("enlarged-image-modal");
  modal.style.display = "none";
}

// Call the function on page load
closeModalOnLoad();
generateWorks();
