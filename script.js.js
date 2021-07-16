const headerTags = document.querySelector('.header__tags');
const container = document.querySelector('.container');
const headerContent = document.querySelector('.header__content');

let jobAnouncements = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    coverPhoto: 'photosnap.svg',
    published: '1d ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
    isFeatured: true,
    isNew: true,
    companyName: 'Photosnap'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    coverPhoto: 'manage.svg',
    published: '1d ago',
    shift: 'Part time',
    place: 'Remote',
    tags: ['Fullstack', 'Midweight', 'Python', 'React'],
    isFeatured: false,
    isNew: true,
    companyName: 'Manage'
  },
  {
    id: 3,
    title: 'Account',
    coverPhoto: 'account.svg',
    published: '2d ago',
    shift: 'Part Time',
    place: 'USA only',
    tags: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
    isFeatured: false,
    isNew: true,
    companyName: 'Account'
  },

  {
    id: 4,
    title: 'Junior Frontend Developer',
    coverPhoto: 'myhome.svg',
    published: '2d ago',
    shift: 'Contract',
    place: 'USA only',
    tags: ['Frontend', 'Junior', 'Css', 'Javascript'],
    isFeatured: false,
    isNew: false,
    companyName: 'MyHome'
  },
  {
    id: 5,
    title: 'Loop Studios',
    coverPhoto: 'loop-studios.svg',
    published: '1w ago',
    shift: 'Contract',
    place: 'USA only',
    tags: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
    isFeatured: false,
    isNew: false,
    companyName: 'Software Engineer'
  },

  {
    id: 6,
    title: 'Junior Backend Developer',
    coverPhoto: 'faceit.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'UK only',
    tags: ['Backend', 'Junior', 'Ruby', 'Ror'],
    isFeatured: false,
    isNew: false,
    companyName: 'FaceIt'
  },
  {
    id: 7,
    title: 'Junior Developer',
    coverPhoto: 'shortly.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'Worldwide',
    tags: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
    isFeatured: false,
    isNew: false,
    companyName: 'Shortly'
  },

  {
    id: 8,
    title: 'Junior Frontend Developer',
    coverPhoto: 'insure.svg',
    published: '2w ago',
    shift: 'Full Time',
    place: 'USA only',
    tags: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
    isFeatured: false,
    isNew: false,
    companyName: 'Insure'
  },
  {
    id: 9,
    title: 'Full Stack Engineer',
    coverPhoto: 'eyecam-co.svg',
    published: '3w ago',
    shift: 'Full Time',
    place: 'Worlwide',
    tags: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
    isFeatured: false,
    isNew: false,
    companyName: 'Eyecam Co.'
  },
  {
    id: 10,
    title: 'Full Stack Engineer',
    coverPhoto: 'the-air-filter-company.svg',
    published: '1ma ago',
    shift: 'Full Time',
    place: 'Worlwide',
    tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    isFeatured: false,
    isNew: false,
    companyName: 'The Air Filter Company'
  }
];

let selectedTags = [];

// jobAnouncements.forEach((jobsAnouncement, index) => {
//   jobsAnouncement.id = index + 1;
// })

function updateUI(jobAnouncements) {
  container.innerHTML = '';

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
      id
    } = announcement;
    let taghtml = '';
    tags.forEach((tag) => {
      taghtml = taghtml + `<span class="job-card__tag">${tag}</span>`;
    });

    const jobCardElement = document.createElement('div');
    jobCardElement.setAttribute(
      'class',
      `job-card ${isNew && isFeatured ? 'job-card--left' : ''}`
    );
    jobCardElement.innerHTML = `

    <div class="job-card__cover">
      <img src="./images/${coverPhoto}" alt="" />
    </div>
    <div class="job-card__desrcription">
      <div class="job-card__description-top">
        <span class="job-card__company-name">${companyName}</span>
    ${
      isNew
        ? `<span class="job-card__badge job-card__badge--new">New</span>`
        : ''
    }
    ${
      isFeatured
        ? ` <span class="job-card__badge job-card__badge--featured" > Featured</span >`
        : ''
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

  // container.querySelectorAll('.job-card__tag').forEach(tag => {

  //   tag.addEventListener('click', function (e) {
  //     headerContent.classList.add('show')
  //     const div = document.createElement('div');
  //     div.setAttribute('class', "job-card__tags1")
  //     div.innerHTML = `
  //     <span class="job-card__tag">${tag.textContent}<i class ="fas fa-times close">X</i></span>
  //     `
  //     if (!headerTags.textContent.includes(tag.textContent)) {
  //       headerTags.append(div)
  //     }
  //     let filteredData = jobAnouncements.filter(jobsAnouncement => jobsAnouncement.tags.includes(tag.textContent));
  //     updateUI(filteredData)
  //   })

  // })
}

updateUI(jobAnouncements);

container.addEventListener('click', function (e) {
  const targetElement = e.target;
  if (targetElement.classList.contains('job-card__tag')) {
    if (selectedTags.includes(targetElement.textContent)) {
      const filteredSelectedTags = selectedTags.filter((item) => {
        return item !== targetElement.textContent;
      });
      selectedTags = filteredSelectedTags;
    } else {
      console.log('add');
      selectedTags.push(targetElement.textContent);
    }
    showSelectedTags(selectedTags);
    const anouncements = filterJobAnouncements(
      selectedTags,
      jobAnouncements
    );
    updateUI(anouncements);
  }
});

function showSelectedTags(selectedTags) {
  headerTags.innerHTML = '';
  if (!selectedTags.length) {
    return headerContent.classList.remove('show');
  }
  selectedTags.forEach((selectedTag) => {
    const span = document.createElement('span');
    span.textContent = selectedTag;
    headerTags.append(span);
  });
  headerContent.classList.add('show');
}

function filterJobAnouncements(selectedTags, anouncements) {
  let filteredAnouncements 

  // selectegTags
  // anouncements
  // anouncement.tags

  // selectedTags.forEach((tag) => {});

  // anouncements.forEach((anouncement) => {
  //   anouncement.tags.every((tag) => {
  //     //  return selectedTags.forEach(selectedTag=>{
  //     //   return
  //     //   })
  //   });
  // });
  // anouncements.every((anouncement) => {
  //   return anouncement.tags.every((tag) => {
  //     return selectedTags.every();
  //   });
  // });

  /*  {
    id: 10,
    title: 'Full Stack Engineer',
    coverPhoto: 'the-air-filter-company.svg',
    published: '1ma ago',
    shift: 'Full Time',
    place: 'Worlwide',
    tags: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    isFeatured: false,
    isNew: false,
    companyName: 'The Air Filter Company'
  } */

  // anouncements.forEach((item) => {
  //   if (
  //     item.tags.every((item2) =>
  //       selectedTags.every((arr2item) => item.tags.includes(arr2item))
  //     )
  //   ) {
  //     newAnouncements.push(item);
  //   }
  // });

  // newAnouncements = anouncements.filter((item) => {
  //   return item.tags.every((item2) =>
  //     selectedTags.every((arr2item) => item.tags.includes(arr2item))
  //   );
  // });

  filteredAnouncements = anouncements.filter((anouncement) => {
    return selectedTags.every((selectedTag) =>
      anouncement.tags.includes(selectedTag)
    );
  });

  // console.log(newAnouncements);
  return filteredAnouncements;
}

//clear all

// const clearBtn = document.querySelector('#btn');

// clearBtn.addEventListener('click', function () {
//   headerTags.textContent = ""
//   headerContent.classList.remove('show');
//   updateUI(jobAnouncements)
// })

// let filteredTag = []

// headerTags.addEventListener('click', function (e) {

//   if (e.target.classList.contains('close')) {

//     e.target.parentElement.remove();

//   }
//   headerTags.querySelectorAll('.job-card__tag').forEach(tag => {

//     filteredTag = jobAnouncements.filter(x => x.tags.includes(tag.textContent));
//     updateUI(filteredTag)

//   })

// })

// const movie = [{ title: "The Green Mile" }];
// movie.push({ title: "Five feet apart" });

// console.log(movie);

// const name = "Leyla";
// console.log(name.toUpperCase());//LEYLA
// console.log(name);//leyla

// const a = [];
// const b = a.push(1, 2)//
// console.log(a);//1 2

// let firstName = 'book';
// firstName[0] = 'c';
// console.log(firstName);

// let book = "The Green Mile";
// book = "Five feet apart";

// const arr = [{ arrr: [5, 6] }, { arrr: [1, 2, 3, 5, 6] }];

// const arr2 = [2, 4];

// const newArr = [];

// arr.forEach((item) => {
//   if (
//     item.arrr.every((item2) => arr2.every((arr2item) => item2 > arr2item))
//   ) {
//     newArr.push(item);
//   }
// });

const objs = [{ nums: [4, 4, 5, 6] }, { nums: [7, 4, 5, 6] }];
const conditionArr = [3, 4];
const emptyArr = [];

objs.forEach((obj) => {
  if (
    obj.nums.every((num) =>
      conditionArr.every((conditionItem) => num >= conditionItem)
    )
  ) {
    emptyArr.push(obj);
  }
});
