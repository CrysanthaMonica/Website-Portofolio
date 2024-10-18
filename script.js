function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const blackScreen = document.querySelector(".black-screen")
  menu.classList.toggle("open");
  menu.classList.toggle("cml-open-nav")
  icon.classList.toggle("open");
  blackScreen.classList.toggle("block")
}

// slides
let slideIndex = 0;

function showSlides(n) {
  let slides = document.querySelectorAll(".slides");
  
  if (n >= slides.length) {
    slideIndex = 0;
  } 
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Menjalankan slide pertama
showSlides(slideIndex);

// Auto slide every 5 seconds (optional)
setInterval(() => plusSlides(1), 5000);


// animasi ngetik
const texts = ["Data Enthusiast", "System Analyst", "AI Entusiast", "Machine Learning Enthusiast"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenTexts = 200; // Delay before typing the next text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

function type() {
  if (charIndex < texts[textIndex].length) {
    typedTextSpan.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, typingSpeed + 500); // Delay before typing the next word
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetweenTexts);
});



//cml project
const projectData = {
  "projects": [
    {
      "title": "Coffee Preverence Survey and Sampling",
      "desc" : "This project analyzes survey data to understand coffee consumption patterns and preferences. <br>The analysis explores various factors such as demographics, consumption frequency, and brand preferences.",
      "image": "assets/portofolio_pic/ssm.jpeg",
      "category": "data-analyst",
      "github": "https://github.com/CrysanthaMonica/Coffee-Preverence-Survey-and-Sampling",
      "liveDemo": "https://drive.google.com/file/d/1BRQ557MBjcZ4jwMMQgT_EGom7dc1fRgM/view?usp=drive_link"
    },
    {
      "title": "Poverty Factors Classification Models",
      "desc" : "This project analyzes poverty factors in Indonesia using various machine learning classification models. <br>It aims to classify regions in Indonesia into two categories—poverty and no poverty—based on the Global Multidimensional Poverty Index (MPI). <br>By utilizing several models such as Logistic Regression, KNN, Naive Bayes, Decision Tree, and Gradient Boosting, the goal is to identify the most effective model in predicting poverty rates across different regions.",
      "image": "./assets/portofolio_pic/ml.jpeg",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Poverty-Factors-Classification-Models",
      "liveDemo": "https://drive.google.com/file/d/1wkvXxY11HP6wE8CgR_GfH25c3SzmGdkQ/view?usp=drive_link"
    },
    {
      "title": "Smart Pricing Apps AI Research",
      "desc" : "The SMARTPRICINGAPP, known as A-S-A-P (As Soon As Pay), is an AI-powered application designed to assist traditional merchants by enhancing their pricing strategies through real-time negotiations and customer interactions. <br>The app aims to level the playing field for local merchants in the face of growing competition from online commerce, providing a modern toolset for effective and fair pricing.",
      "image": "./assets/portofolio_pic/ai.png",
      "category": "ai-projects",
      "github": "https://github.com/CrysanthaMonica/Smart-Pricing-Apps-AI-Research",
      "liveDemo": "https://drive.google.com/file/d/1anmixh_maD6vDqaIjEk0WDwYbZQqJpa3/view?usp=drive_link"
    },
    {
      "title": "Credit Card Complaint Dashboard",
      "desc" : "This project showcases an interactive Tableau dashboard designed to analyze credit card complaints using a dummy dataset. <br>The dashboard includes KPIs, charts, filters, and maps to allow dynamic filtering by complaint type, company response, and time periods. <br>Users can explore complaints visually through density maps, a calendar view for daily trends, and track metrics like timely responses and ongoing complaints. <br>The project demonstrates advanced Tableau techniques such as calculated fields, dual-axis charts, and rolling metrics, providing insights into developing a comprehensive analytical dashboard for complaint data.",
      "image": "./assets/portofolio_pic/credit-card-complaints-dashboard.jpeg",
      "category": "data-analyst",
      "github": "https://github.com/CrysanthaMonica/Credit-Card-Complaints-Dashboard",
      "liveDemo": "https://public.tableau.com/app/profile/crysantha.monica.lim/viz/CREADITCARDCOMPLAINTSDASHBOARD/CreditCardComplaint"
    },
    {
      "title": "Batik Image Classification Prediction",
      "desc" : "This project focuses on building and evaluating deep learning models to classify Indonesian batik motifs. <br>Indonesian batik is globally recognized as a valuable cultural heritage, and automatic recognition of batik patterns can aid both cultural preservation and creative industries.",
      "image": "./assets/portofolio_pic/dl.jpeg",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Batik-Image-Classification-Prediction",
      "liveDemo": "https://drive.google.com/file/d/16CAYvnV8piBH1KuM-kpk0iUmCDptz-sK/view?usp=drive_link"
    },
    {
      "title": "Arabica Coffee Quality Measures Analyst",
      "desc" : "This project aims to analyze the quality of Arabica coffee beans, with a focus on identifying factors that influence the aftertaste of coffee. <br>Using a dataset from Kaggle, which includes detailed attributes of coffee beans from around the world, <br>this project specifically highlights coffee produced in Ethiopia and builds a predictive model to understand the relationships between various quality measures and the aftertaste score.",
      "image": "./assets/portofolio_pic/dmv.jpeg",
      "category": "data-analyst",
      "github": "https://github.com/CrysanthaMonica/Coffee-Quality-Analyst",
      "liveDemo": "https://drive.google.com/file/d/1TTBF2TkcuXwdxHY_jJiJ6gYnhDg-CYKm/view?usp=drive_link"
    },
    {
      "title": "Wine Quality Prediction - Bayesian Methods",
      "desc" : "This project applies Bayesian statistical methods to analyze and predict the quality of wine based on its physicochemical properties. <br>The dataset consists of two variants of Portuguese wine—red and white—with 11 input features related to the chemical properties of the wine and one target variable representing the quality rating.",
      "image": "./assets/portofolio_pic/ba.jpeg",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Wine-Quality",
      "liveDemo": "https://drive.google.com/file/d/1gASJKM_9Lvcm33TiWemtDsSr6Bh35yVB/view?usp=drive_link"
    },
    {
      "title": "Customer Service Gen AI with Sentiment Model",
      "desc" : "<b>[Currently in Progress].</b><br> This project focuses on developing a customer service automation system that leverages sentiment analysis to generate context-appropriate responses based on customer queries. <br>The system detects the tone and sentiment embedded in the customer’s input (formal, informal, friendly, or assertive) and automatically generates tailored replies, improving the quality and efficiency of customer service interactions.",
      "image": "./assets/portofolio_pic/progress.png",
      "category": "ai-projects",
      "github": "https://github.com/CrysanthaMonica/Customer-Service-Gen-AI-with-Sentiment-Model",
      "liveDemo": ""
    }, 
    {
      "title": "Respiratory Disease Audio Based Machine Learning",
      "desc" : "<b>[Currently in Research Phase].</b><br> This project focuses on exploring and researching pretrained models and libraries used for audio dataset analysis. <br>The main objective is to develop a machine learning model that can classify respiratory sounds into specific respiratory diseases. By leveraging advanced audio processing techniques and pretrained models, this project aims to contribute to the medical industry's advancements in diagnosing respiratory conditions through sound classification.",
      "image": "./assets/portofolio_pic/progress.png",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Respiratory-Disease-Audio-Based-Machine-Learning",
      "liveDemo": ""
    }, 
    {
      "title": "Sales Precition for BigMart Stores",
      "desc" : "<b>[Currently Organizing Documentation].</b><br>This project involves building a predictive model to estimate product sales across multiple stores using historical sales data. <br>The aim is to understand which product and store features significantly impact sales, and how we can leverage machine learning to improve sales predictions.",
      "image": "./assets/portofolio_pic/progress.png",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Sales-Prediction",
      "liveDemo": ""
    }, 
    {
      "title": "IMDB Movies Reviews Sentiment Analyzer",
      "desc" : "<b>[Currently Organizing Documentation].</b><br>This project focuses on building a sentiment analysis model using the IMDb Movie Reviews dataset to classify movie reviews as either positive or negative. <br>The main method involves using machine learning or deep learning techniques to develop a predictive model that can accurately capture sentiment. <br>The key business objective is to help companies or movie platforms understand audience sentiment toward films, enabling better decision-making in areas such as content curation, marketing strategies, and user engagement by analyzing customer feedback in real-time.",
      "image": "./assets/portofolio_pic/progress.png",
      "category": "data-science",
      "github": "https://github.com/CrysanthaMonica/Movies-Sentiment-Analyst",
      "liveDemo": ""
    }, 
    {
      "title": "Customer Complaint Dashboard",
      "desc" : "<b>[Currently in Progress].</b><br> The project involves creating a Customer Complaint Dashboard in Tableau that visualizes and analyzes customer complaint data. <br>The dashboard utilizes parameters instead of traditional filters to enhance interactivity and usability. Key components include connecting to a CSV data source, defining key performance indicators (KPIs), visualizing complaint distribution by product type, <br>and creating dynamic charts to track complaints over time and by request type. <br>The goal is to provide valuable insights into customer feedback and improve decision-making regarding product and service enhancements.",
      "image": "./assets/portofolio_pic/progress.png",
      "category": "data-analyst",
      "github": "https://github.com/CrysanthaMonica/Customer-Complaint-Dashboard",
      "liveDemo": ""
    }, 
    {
      "title": "Water Potability Prediction - Bayesian Method",
      "desc" : "This project utilizes machine learning with a Bayesian approach to predict the potability of water in Indonesia, addressing the need for clean water as outlined in the UN's Sustainable Development Goals (SDG). <br>Using a logistic regression model and Bayesian Data Analysis, the project aims to understand the factors influencing water quality based on data from Kaggle's Water Potability dataset.",
      "image": "./assets/portofolio_pic/ba-2.jpeg",
      "category": "data-analyst",
      "github": "https://github.com/CrysanthaMonica/Water-Potability-Prediction",
      "liveDemo": "https://drive.google.com/file/d/1mijinm6jtb4bb5uNAg1OhEzB271It1Sd/view?usp=sharing"
    }
  ]
}

function renderProjects(category) {
  const container = document.getElementById('project-container')
  

  container.classList.add('slide-out')
  
  setTimeout(() => {

    container.innerHTML = ''
    const filteredProjects = category === 'all' ? projectData.projects : projectData.projects.filter(project => project.category === category)

  
    filteredProjects.forEach(project => {
      const projectHTML = `
        <div class="cml-article-container">
          <div class="">
            <img src="${project.image}" alt="${project.title}" class="cml-project-img" />
          </div>
          <h2 class="cml-project-title">${project.title}</h2>
          <p class="cml-project-desc">${project.desc}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cml-project-chevron">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div class="btn-container cml-project-btn-container">
            <button class="btn btn-color-2 project-btn cml-secondary-button" onclick="location.href='${project.github}'">Link</button>
            <button class="btn btn-color-2 project-btn cml-primary-button" onclick="location.href='${project.liveDemo}'">View</button>
          </div>
        </div>
      `
      container.innerHTML += projectHTML
    })
    

    document.querySelectorAll('.cml-project-chevron').forEach(chevron => {
      chevron.addEventListener('click', (event) => {
        const chevronIcon = event.currentTarget
        const description = chevronIcon.previousElementSibling

        chevronIcon.classList.toggle('rotate-180')
        description.classList.toggle('hidden') 
      })
    })


    container.classList.remove('slide-out')
    container.classList.add('slide-in')
    

    setTimeout(() => {
      container.classList.remove('slide-in')
    }, 500) 
  }, 500)
}


function openTab(tabName) {
  renderProjects(tabName)

  const tablinks = document.getElementsByClassName("tab-link")
  for (let i = 0 ;i < tablinks.length ;i++) {
    tablinks[i].classList.remove("active")
  }

  const clickedTab = Array.from(tablinks).find(link => link.innerText.toLowerCase().replace(' ', '-') === tabName)
  if (clickedTab) {
    clickedTab.classList.add("active")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  openTab('all') 
})


// cml on load animation
window.onload = function() {
  const nav = document.querySelector('nav')
  nav.style.animation = "slideDown 0.8s ease forwards"
}

