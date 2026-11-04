
/* =================================
   GLOBAL RESET
================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =================================
   BASE STYLING
================================= */

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.7;
    background-color: #f4f6f8;
    color: #333;
}


/* =================================
   HEADER
================================= */

.site-header {
    background-color: #1e3a8a;
    color: white;
    padding: 65px 20px;
    text-align: center;
}

.header-content {
    max-width: 1000px;
    margin: auto;
}

.site-header h1 {
    font-size: 2.5rem;
    letter-spacing: 1px;
}

.site-header p {
    margin-top: 10px;
    font-size: 1.1rem;
    color: #dbeafe;
}


/* =================================
   MAIN LAYOUT
================================= */

main {
    max-width: 1100px;
    margin: 55px auto;
    padding: 0 25px;
}

.section {
    margin-bottom: 65px;
}

.section h2 {
    color: #1e3a8a;
    font-size: 1.7rem;
    margin-bottom: 22px;
    padding-left: 12px;
    border-left: 5px solid #f97316;
}

.section > p {
    max-width: 900px;
}


/* =================================
   PROJECTS LAYOUT
================================= */

.projects-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
    align-items: stretch;
}


/* =================================
   PROJECT CARDS
================================= */

.project-card {
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease,
                box-shadow 0.3s ease;

    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.project-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.project-card h3 {
    color: #1e3a8a;
    font-size: 1.2rem;
    line-height: 1.4;
    margin-bottom: 14px;
}

.project-card p {
    margin-bottom: 18px;
}

.project-card h4 {
    color: #1e3a8a;
    margin-bottom: 8px;
}

.project-card ul {
    padding-left: 22px;
    margin-bottom: 22px;
}

.project-card li {
    margin-bottom: 5px;
}


/* =================================
   PROJECT SCREENSHOTS
================================= */

.project-image-container {
    width: 100%;
    height: 230px;
    overflow: hidden;
    background-color: #e5e7eb;
}

.project-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s ease;
}

.project-card:hover .project-image {
    transform: scale(1.03);
}


/* =================================
   PROJECT LABEL
================================= */

.project-label {
    display: inline-block;
    align-self: flex-start;
    background-color: #fff1e8;
    color: #c2410c;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 12px;
}


/* =================================
   PROJECT LINKS
================================= */

.project-link {
    display: inline-block;
    align-self: flex-start;
    margin-top: auto;
    padding-top: 10px;
    color: #f97316;
    font-weight: bold;
    text-decoration: none;
}

.project-link:hover {
    color: #c2410c;
    text-decoration: underline;
}


/* =================================
   CONTACT
================================= */

.contact-details {
    margin-top: 18px;
}

.contact-details p {
    margin-bottom: 10px;
}

a {
    color: #f97316;
    font-weight: 600;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}


/* =================================
   FOOTER
================================= */

footer {
    background-color: #1e3a8a;
    color: white;
    text-align: center;
    padding: 25px 15px;
    margin-top: 50px;
}


/* =================================
   RESPONSIVE DESIGN
================================= */

@media (max-width: 768px) {

    .site-header {
        padding: 45px 15px;
    }

    .site-header h1 {
        font-size: 2rem;
    }

    main {
        margin: 35px auto;
        padding: 0 18px;
    }

    .projects-container {
        grid-template-columns: 1fr;
    }

    .project-image-container {
        height: 210px;
    }

    .section h2 {
        font-size: 1.45rem;
    }
}
