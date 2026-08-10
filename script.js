/* =====================================================
   TECHNOVA - PREMIUM JAVASCRIPT
===================================================== */


/* =====================================================
   WAIT FOR PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navMenu =
        document.querySelector(".nav-menu");


    if (mobileMenu && navMenu) {

        mobileMenu.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {

                mobileMenu.innerHTML = "✕";

            } else {

                mobileMenu.innerHTML = "☰";

            }

        });


        /* Close menu after clicking normal link */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                mobileMenu.innerHTML = "☰";

            });

        });

    }



    /* =================================================
       MOBILE DROPDOWN
    ================================================= */

    const dropdown =
        document.querySelector(".dropdown");

    const dropdownButton =
        document.querySelector(".dropdown-btn");


    if (dropdown && dropdownButton) {

        dropdownButton.addEventListener("click", function (event) {

            /* Only activate on mobile */

            if (window.innerWidth <= 800) {

                event.preventDefault();

                dropdown.classList.toggle("active");

            }

        });

    }



    /* =================================================
       FAQ ACCORDION
    ================================================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.parentElement;


            /* Close other FAQ items */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    if (item !== currentItem) {

                        item.classList.remove("active");

                    }

                });


            /* Toggle current item */

            currentItem.classList.toggle("active");

        });

    });



    /* =================================================
       PORTFOLIO FILTER
    ================================================= */

    const filterButtons =
        document.querySelectorAll(".portfolio-filter");

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");


    if (
        filterButtons.length > 0 &&
        portfolioCards.length > 0
    ) {

        filterButtons.forEach(function (button) {

            button.addEventListener("click", function () {


                /* Remove active class */

                filterButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                /* Add active class */

                button.classList.add("active");


                const filter =
                    button.getAttribute("data-filter");


                portfolioCards.forEach(function (card) {

                    const category =
                        card.getAttribute("data-category");


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove("hidden");

                    } else {

                        card.classList.add("hidden");

                    }

                });

            });

        });

    }



    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add("show");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    /* Run once when page loads */

    revealOnScroll();



    /* =================================================
       ANIMATED COUNTERS
    ================================================= */

    const counters =
        document.querySelectorAll(".counter");


    let counterStarted = false;


    function startCounters() {

        if (counterStarted) {

            return;

        }


        const counterSection =
            document.querySelector(".counter-section");


        if (!counterSection) {

            return;

        }


        const sectionTop =
            counterSection.getBoundingClientRect().top;


        if (
            sectionTop <
            window.innerHeight - 100
        ) {

            counterStarted = true;


            counters.forEach(function (counter) {

                const target =
                    parseInt(
                        counter.getAttribute(
                            "data-target"
                        )
                    );


                let current = 0;


                const duration = 1800;

                const increment =
                    target /
                    (duration / 20);


                const updateCounter =
                    setInterval(function () {

                        current += increment;


                        if (current >= target) {

                            current = target;

                            clearInterval(
                                updateCounter
                            );

                        }


                        counter.innerText =
                            Math.floor(current);

                    }, 20);

            });

        }

    }


    window.addEventListener(
        "scroll",
        startCounters
    );


    startCounters();



    /* =================================================
       CONTACT FORM → WHATSAPP
    ================================================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* Get values */

                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const business =
                    document
                        .getElementById("business")
                        ?.value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                const service =
                    document
                        .getElementById("service")
                        ?.value
                        .trim();


                const budget =
                    document
                        .getElementById("budget")
                        ?.value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();



                /* Build WhatsApp message */

                const whatsappMessage =

                    "Hello TechNova! 👋\n\n" +

                    "*New Project Enquiry*\n\n" +

                    "👤 Name: " +
                    name +
                    "\n" +

                    "🏢 Business: " +
                    (business || "Not provided") +
                    "\n" +

                    "📞 Phone: " +
                    phone +
                    "\n" +

                    "📧 Email: " +
                    (email || "Not provided") +
                    "\n" +

                    "💻 Service: " +
                    service +
                    "\n" +

                    "💰 Budget: " +
                    (budget || "Not provided") +
                    "\n\n" +

                    "📝 Project Details:\n" +

                    message +
                    "\n\n" +

                    "Sent from TechNova Website.";



                /* Encode message */

                const encodedMessage =
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* TechNova WhatsApp number */

                const whatsappURL =
                    "https://wa.me/917840034574?text=" +
                    encodedMessage;


                /* Open WhatsApp */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }

            }
        );

    });



    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    navigationLinks.forEach(function (link) {

        const linkPage =
            link
                .getAttribute("href")
                ?.split("/")
                .pop();


        if (
            linkPage === currentPage &&
            !link.getAttribute("target")
        ) {

            link.classList.add("active");

        }

    });



    /* =================================================
       HEADER SHADOW ON SCROLL
    ================================================= */

    const header =
        document.querySelector(".header");


    function headerScroll() {

        if (!header) {

            return;

        }


        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 30px rgba(15,23,42,0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        headerScroll
    );


    headerScroll();



    /* =================================================
       CLOSE MOBILE MENU WHEN RESIZING
    ================================================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 800 &&
                navMenu
            ) {

                navMenu.classList.remove(
                    "active"
                );


                if (mobileMenu) {

                    mobileMenu.innerHTML =
                        "☰";

                }

            }

        }
    );


});