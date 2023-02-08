const navMobile = document.getElementById('navmobile');

function openMobileMenu() {
  navMobile.style.display = 'block';
}

function closeMobileMenu() {
  navMobile.style.display = 'none';
}

openMobileMenu();
closeMobileMenu();

const speakers = [
  {
    image: 'image/speaker1.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Stephanie Walter',
    position: 'Senior Project Lead, Team Member Experience, Marketing',
    company: 'The Chick-fil-A Together Fund',
    rank: '1',
  },
  {
    image: 'image/speaker2.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Atila Fassina',
    position: 'Vice President of Design Innovation',
    company: 'PepsiCo',
    rank: '2',
  },
  {
    image: 'image/speaker3.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Brad Frost',
    position: 'Innovation Lead, Design Strategist',
    company: 'Google',
    rank: '3',
  },
  {
    image: 'image/speaker4.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Elliot Jay Stocks',
    position: 'Head of Ecosystem and Trend Scouting',
    company: 'Nokia',
    rank: '4',
  },
  {
    image: 'image/speaker5.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Vitaly Friedman',
    position: 'Director Marketing & Talent Solutions',
    company: 'LinkedIn',
    rank: '5',
  },
  {
    image: 'image/speaker6.jpg',
    image_alt: 'first speaker',
    image1: './image/speaker-back.png',
    image1_alt: 'speaker checker',
    name: 'Remi Parmentier',
    position: 'Senior Design and Business Innovation Strategist',
    company: 'Blue Cross Blue Shield Innovation Lab',
    rank: '6',
  },
];
function spks() {
  if (window.innerWidth <= 768) {
    let click = false;
    document.getElementById('speakers-container').innerHTML = '';
    for (let i = 0; i < speakers.length; i += 1) {
      if (i < 2) {
        document.getElementById(
          'speakers-container',
        ).innerHTML += `<article class="speaker-details">
            <div class="thumbnail">
              <img class="spk-bck1" src="${speakers[i].image}" alt="${speakers[i].image_alt}" />
               <img class="spk-bck" src="${speakers[i].image1}" alt="${speakers[i].image1_alt}"/>
            </div>
            <div class="speakinfo">
              <div class="name">
                <h4>${speakers[i].name}</h4>
              </div>
              <div class="position">
                <p class="sub-position">${speakers[i].position}</p>
              </div>
              <hr class="slin">
              <div class="company">
                <p>${speakers[i].company}</p>
              </div>
            </div>
          </article>`;
      }
    }

    document.getElementById('more-button').addEventListener('click', () => {
      document.getElementById('speakers-container').innerHTML = '';
      if (click === false) {
        for (let i = 0; i < speakers.length; i += 1) {
          document.getElementById(
            'speakers-container',
          ).innerHTML += `<article class="speaker-details">
            <div class="thumbnail">
              <img class="spk-bck1" src="${speakers[i].image}" alt="${speakers[i].image_alt}" />
               <img class="spk-bck" src="${speakers[i].image1}" alt="${speakers[i].image1_alt}"/>
            </div>
            <div class="speakinfo">
              <div class="name">
                <h4>${speakers[i].name}</h4>
              </div>
              <div class="position">
                <p class="sub-position">${speakers[i].position}</p>
              </div>
              <hr class="slin">
              <div class="company">
                <p>${speakers[i].company}</p>
              </div>
            </div>
          </article>`;
        }
        click = true;
      } else {
        document.getElementById('speakers-container').innerHTML = '';
        for (let i = 0; i < speakers.length; i += 1) {
          if (i < 2) {
            document.getElementById(
              'speakers-container',
            ).innerHTML += `<article class="speaker-details">
            <div class="thumbnail">
              <img class="spk-bck1" src="${speakers[i].image}" alt="${speakers[i].image_alt}" />
               <img class="spk-bck" src="${speakers[i].image1}" alt="${speakers[i].image1_alt}"/>
            </div>
            <div class="speakinfo">
              <div class="name">
                <h4>${speakers[i].name}</h4>
              </div>
              <div class="position">
                <p class="sub-position">${speakers[i].position}</p>
              </div>
              <hr class="slin">
              <div class="company">
                <p>${speakers[i].company}</p>
              </div>
            </div>
          </article>`;
          }
        }
        click = false;
      }
    });
  } else {
    document.getElementById('speakers-container').innerHTML = '';
    for (let i = 0; i < speakers.length; i += 1) {
      document.getElementById(
        'speakers-container',
      ).innerHTML += `<article class="speaker-details">
            <div class="thumbnail">
              <img class="spk-bck1" src="${speakers[i].image}" alt="${speakers[i].image_alt}" />
               <img class="spk-bck" src="${speakers[i].image1}" alt="${speakers[i].image1_alt}"/>
            </div>
            <div class="speakinfo">
              <div class="name">
                <h4>${speakers[i].name}</h4>
              </div>
              <div class="position">
                <p class="sub-position">${speakers[i].position}</p>
              </div>
              <hr class="slin">
              <div class="company">
                <p>${speakers[i].company}</p>
              </div>
            </div>
          </article>`;
    }
  }
}
window.addEventListener('load', spks);
window.addEventListener('resize', spks);
