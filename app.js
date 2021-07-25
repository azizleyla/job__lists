const headerTags = document.querySelector(".header__tags");
const container = document.querySelector(".container");
const headerContent = document.querySelector(".header__content");
const clearBtn = document.querySelector('#clear-btn')

let jobAnouncements = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    coverPhoto: "photosnap.svg",
    published: "1d ago",
    shift: "Full Time",
    place: "USA only",
    tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    isFeatured: true,
    isNew: true,
    companyName: "Photosnap",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    coverPhoto: "manage.svg",
    published: "1d ago",
    shift: "Part time",
    place: "Remote",
    tags: ["Fullstack", "Midweight", "Python", "React"],
    isFeatured: false,
    isNew: true,
    companyName: "Manage",
  },
  {
    id: 3,
    title: "Account",
    coverPhoto: "account.svg",
    published: "2d ago",
    shift: "Part Time",
    place: "USA only",
    tags: ["Frontend", "Junior", "React", "Sass", "Javascript"],
    isFeatured: false,
    isNew: true,
    companyName: "Account",
  },

  {
    id: 4,
    title: "Junior Frontend Developer",
    coverPhoto: "myhome.svg",
    published: "2d ago",
    shift: "Contract",
    place: "USA only",
    tags: ["Frontend", "Junior", "Css", "Javascript"],
    isFeatured: false,
    isNew: false,
    companyName: "MyHome",
  },
  {
    id: 5,
    title: "Loop Studios",
    coverPhoto: "loop-studios.svg",
    published: "1w ago",
    shift: "Contract",
    place: "USA only",
    tags: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
    isFeatured: false,
    isNew: false,
    companyName: "Software Engineer",
  },

  {
    id: 6,
    title: "Junior Backend Developer",
    coverPhoto: "faceit.svg",
    published: "2w ago",
    shift: "Full Time",
    place: "UK only",
    tags: ["Backend", "Junior", "Ruby", "Ror"],
    isFeatured: false,
    isNew: false,
    companyName: "FaceIt",
  },
  {
    id: 7,
    title: "Junior Developer",
    coverPhoto: "shortly.svg",
    published: "2w ago",
    shift: "Full Time",
    place: "Worldwide",
    tags: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
    isFeatured: false,
    isNew: false,
    companyName: "Shortly",
  },

  {
    id: 8,
    title: "Junior Frontend Developer",
    coverPhoto: "insure.svg",
    published: "2w ago",
    shift: "Full Time",
    place: "USA only",
    tags: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
    isFeatured: false,
    isNew: false,
    companyName: "Insure",
  },
  {
    id: 9,
    title: "Full Stack Engineer",
    coverPhoto: "eyecam-co.svg",
    published: "3w ago",
    shift: "Full Time",
    place: "Worlwide",
    tags: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
    isFeatured: false,
    isNew: false,
    companyName: "Eyecam Co.",
  },
  {
    id: 10,
    title: "Full Stack Engineer",
    coverPhoto: "the-air-filter-company.svg",
    published: "1ma ago",
    shift: "Full Time",
    place: "Worlwide",
    tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    isFeatured: false,
    isNew: false,
    companyName: "The Air Filter Company",
  },
];

let selectedTags = [];

function updateUI(jobAnouncements) {
  container.innerHTML = "";

  jobAnouncements.forEach((announcement) => {
    const {
      title,
      coverPhoto,
      published,
      shift,
      place,
      tags,
      isFeatured,
      isNew,
      companyName,
      id,
    } = announcement;
    let taghtml = "";
    tags.forEach((tag) => {
      taghtml = taghtml + `<span class="job-card__tag">${tag}</span>`;
    });

    const jobCardElement = document.createElement("div");
    jobCardElement.setAttribute(
      "class",
      `job-card ${isNew && isFeatured ? "job-card--left" : ""}`
    );
    jobCardElement.innerHTML = `

    <div class="job-card__cover">
      <img src="./images/${coverPhoto}" alt="" />
    </div>
    <div class="job-card__desrcription">
      <div class="job-card__description-top">
        <span class="job-card__company-name">${companyName}</span>
    ${isNew
        ? `<span class="job-card__badge job-card__badge--new">New</span>`
        : ""
      }
    ${isFeatured
        ? ` <span class="job-card__badge job-card__badge--featured" > Featured</span >`
        : ""
      }
      </div>

      <p class="job-card__title">${title}</p>
      <div class="job-card__description-bottom">
        <span class="job-card__published">${published}</span>
        <span class="job-card__shift">${shift}</span>
        <span class="job-card__location">${place}</span>
      </div>
    </div>
      <div class="job-card__tags">
        ${taghtml}
      </div>

      `;

    container.appendChild(jobCardElement);
  });
}

container.addEventListener("click", function (e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("job-card__tag")) {
    if (selectedTags.includes(clickedElement.textContent)) {
      selectedTags = selectedTags;
    } else {
      selectedTags.push(clickedElement.textContent);
    }
    showSelectedTags(selectedTags);
    filteredJobsByTags(selectedTags, jobAnouncements);

  }
});

function showSelectedTags(selectedTags) {
  headerTags.innerHTML = "";
  if (!selectedTags.length) {
    headerContent.classList.remove("show");
  } else {
    headerContent.classList.add("show");
    selectedTags.forEach((selectedTag) => {
      const button = document.createElement("button");
      button.setAttribute("class", "job-card__tag job-card__tag--delete");
      button.innerHTML = `
      <span>${selectedTag}</span>
      <i class="fas fa-times delete"></i>
      `;
      headerTags.append(button);
    });
  }
}
//delete tag function

function deleteTag(e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains('delete')) {
    selectedTags = selectedTags.filter(selectedTag => selectedTag !== e.target.previousElementSibling.textContent);
    showSelectedTags(selectedTags)
    filteredJobsByTags(selectedTags, jobAnouncements)
  }
}




function filteredJobsByTags(selectedTags, jobAnouncements) {

  let filteredAnouncements;
  filteredAnouncements = jobAnouncements.filter((announcement) =>
    selectedTags.every((selectedTag) => announcement.tags.includes(selectedTag))
  );
  updateUI(filteredAnouncements)
}




function clearAllTags() {
  selectedTags = [];
  showSelectedTags(selectedTags);
  updateUI(jobAnouncements)
  headerContent.classList.remove('show')
}
function eventHandler() {
  clearBtn.addEventListener('click', clearAllTags);
  headerTags.addEventListener('click', deleteTag);
}
eventHandler();


window.addEventListener("DOMContentLoaded", updateUI(jobAnouncements));
