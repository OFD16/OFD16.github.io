const portfolioData = [
    {
        key: "hobilendim",
        title: "Hobilendim",
        description: "Hobilendim is e-commerce platform for hobby materials.",
        image: "assets/img/projects/hobilendim/hobilendim.png",
        category: "web,api",
        development: ["nextjs", "nodejs", "firebase", "shopier"],
        gallery: "portfolio-gallery-app",
        detailsLink: "portfolio-details.html",
        link: "https://www.hobilendim.com",
    },
    {
        key: "deslora",
        title: "Deslora",
        description: "Deslora is own startup project.",
        image: "assets/img/projects/deslora/intro.png",
        category: "app,web,api",
        development: ["react-native", "nextjs", "nodejs", "mongo"],
        gallery: "portfolio-gallery-app",
        detailsLink: "portfolio-details.html",
        link: "https://www.deslora.com",
    },
    {
        key: "mmovie",
        title: "MMovie",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/mmovie/intro.png",
        category: "app",
        development: ["flutter", "firebase"],
        gallery: "portfolio-gallery-photography",
        detailsLink: "portfolio-details.html",
        link: "https://www.youtube.com/watch?v=obfqVsJRhaY",
    },
    {
        key: "meme-app",
        title: "MemeApp",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/meme-app/intro.png",
        category: "app",
        development: ["react-native", "expo", "firebase"],
        gallery: "portfolio-gallery-web",
        detailsLink: "portfolio-details.html",
        link: "#",
    },
    {
        key: "plantist",
        title: "Plantist",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/plantist/intro.png",
        category: "app",
        development: ["flutter", "firebase"],
        gallery: "portfolio-gallery-app",
        detailsLink: "portfolio-details.html",
        link: "https://www.youtube.com/watch?v=ctOEM0bbpGo",
    },
    {
        key: "solvio-erp",
        title: "Solvio ERP (Mobile & Desktop)",
        description: "SOLVIO ERP is the first large-scale project I initially did with my friends. It consists of 3 projects: Mobile, Desktop and backend.",
        image: "assets/img/projects/solvio-erp/solvio-banner.png",
        category: "app,api",
        development: ["flutter", "firebase"],
        gallery: "portfolio-gallery-product",
        detailsLink: "portfolio-details.html",
        link: "https://www.youtube.com/watch?v=cUIE73fStfI",
    },
    {
        key: "alpha-chat",
        title: "Alpha Chat (Fiverr)",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/alpha-chat/intro.png",
        category: "app",
        development: ["flutter", "firebase"],
        gallery: "portfolio-gallery-product",
        detailsLink: "portfolio-details.html",
        link: "#",
    },
    {
        key: "etsy-analyzer",
        title: "Etsy Analyzer",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/etsy-analyzer/mockup-laptop.png",
        category: "app",
        development: ["flutter"],
        gallery: "portfolio-gallery-branding",
        detailsLink: "portfolio-details.html",
        link: "https://www.youtube.com/watch?v=gQ6gG1FE00Q",
    },
    {
        key: "tarifist",
        title: "Tarifist (C2B)",
        description: "In C2B company i worked on Tarifist project that has mobile and web site. I developed this huge project with C2B team.",
        image: "assets/img/projects/tarifist/intro.png",
        category: "app,web",
        development: ["react-native", "nextjs"],
        gallery: "portfolio-gallery-web",
        detailsLink: "portfolio-details.html",
        link: "#",
    },
    {
        key: "house-net",
        title: "HouseNet (Fiverr)",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/house-net/mockup.png",
        category: "web",
        development: ["html", "css", "js"],
        gallery: "portfolio-gallery-branding",
        detailsLink: "portfolio-details.html",
        link: "#",
    },
    {
        key: "yap-yee",
        title: "YapYee",
        description: "Lorem ipsum, dolor sit",
        image: "assets/img/projects/yap-yee/yapyee-mockup.png",
        category: "app",
        development: ["flutter"],
        gallery: "portfolio-gallery-photography",
        detailsLink: "portfolio-details.html",
        link: "#",
    },
    // Add more portfolio items here
];

const gallery = document.querySelector('.grid-container');

// Function to render portfolio items
function renderPortfolioItems(filteredData) {
    gallery.innerHTML = ''; // Clear existing items
    filteredData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('grid-item');

        // Create development images
        let developmentImages = '';
        item.development.forEach(tech => {
            developmentImages += `<img src='assets/img/services/${tech}.png' alt='${tech}' class='tech-icon' style='width: 25px; margin: 2px' />`;
        });

        galleryItem.innerHTML = `
                <a href="${item.link}" target="_blank">
                    <img class='grid-item-${index + 1}' src='${item.image}' alt='${item.title}'>
                    <p style='font-weight: 500'>${item.title}</p>
                    <p>${developmentImages}</p>
                </a>
            `;

        gallery.appendChild(galleryItem);
    });
}

// Initial render of all portfolio items
renderPortfolioItems(portfolioData);

// Handle filter buttons
const filterButtons = document.querySelectorAll('.portfolio-filters li');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter').slice(1);
        console.log("filterValue", filterValue);
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');  // Add active class to the clicked button

        // Filter the portfolio data based on the category
        const filteredItems = portfolioData.filter(item => {
            if (filterValue === '') {
                return true; // Show all items
            } else {
                return item.category.split(',').includes(filterValue); // Match category
            }
        });

        // Re-render the filtered items
        renderPortfolioItems(filteredItems);
    });
});