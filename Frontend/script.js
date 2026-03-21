document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener('click', () => {

            navMenu.classList.toggle('active');

            const icon = mobileMenuBtn.querySelector('i');

            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // Modals Logic — only activate if modal elements are in the DOM
    const authModal = document.getElementById('auth-modal');
    const modalClose = document.getElementById('modal-close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    const navLoginBtn = document.getElementById('nav-login-btn');
    const navSignupBtn = document.getElementById('nav-signup-btn');

    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    const openModal = (type) => {
        if (!authModal) return;
        authModal.classList.add('active');
        if (type === 'login') {
            if (loginForm) loginForm.classList.remove('hidden');
            if (signupForm) signupForm.classList.add('hidden');
        } else {
            if (signupForm) signupForm.classList.remove('hidden');
            if (loginForm) loginForm.classList.add('hidden');
        }
        // close mobile menu if open
        navMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    };

    const closeModal = () => {
        if (authModal) authModal.classList.remove('active');
    };

    // These buttons now link to login.html — only attach modal listeners if they are actual buttons
    if (navLoginBtn && navLoginBtn.tagName === 'BUTTON') {
        navLoginBtn.addEventListener('click', () => openModal('login'));
    }
    if (navSignupBtn && navSignupBtn.tagName === 'BUTTON') {
        navSignupBtn.addEventListener('click', () => openModal('signup'));
    }

    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('signup');
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                closeModal();
            }
        });
    }

    // User Session State Management
    const navAuthButtons = document.getElementById('nav-auth-buttons');
    const navUserProfile = document.getElementById('nav-user-profile');
    const currentUserName = document.getElementById('current-user-name');
    const navLogoutBtn = document.getElementById('nav-logout-btn');

    const handleLoginSuccess = (user) => {
        if (navAuthButtons) navAuthButtons.style.display = 'none';
        if (navUserProfile) navUserProfile.classList.remove('hidden');
        if (currentUserName) currentUserName.innerText = user.name || user.email || "User";
    };

    const checkSession = () => {
        const userJson = localStorage.getItem('rv_currentUser');
        if (userJson) {
            const user = JSON.parse(userJson);
            handleLoginSuccess(user);
            return user;
        }
        return null;
    };

    // Initialize session
    checkSession();

    if (navLogoutBtn) {
        navLogoutBtn.addEventListener('click', () => {
            localStorage.removeItem('rv_currentUser');
            if (navUserProfile) navUserProfile.classList.add('hidden');
            if (navAuthButtons) navAuthButtons.style.display = 'flex';
            window.location.reload(); // Refresh to reset state
        });
    }

    // Custom Smooth Scrolling Engine with Easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            // Close mobile menu if open during scroll request
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            // Subtract navbar height for offset (approx 80px)
            const offsetPosition = targetPosition - 100;
            const startPosition = window.scrollY;
            const distance = offsetPosition - startPosition;
            // Luxurious 1.2s duration
            const duration = 1200;
            let start = null;

            // Optional styling state on body while traversing
            document.body.style.pointerEvents = 'none';

            // Easing function: easeInOutQuart for a slow-fast-slow cinematic feel
            const easeInOutQuart = time => time < 0.5 ? 8 * time * time * time * time : 1 - Math.pow(-2 * time + 2, 4) / 2;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    document.body.style.pointerEvents = 'auto';

                    // Trigger custom highlight visual for the resulting block
                    // Only apply if it's not the hero section since that's jarring
                    if (targetId !== '#hero') {
                        targetElement.classList.add('highlight-target');
                        setTimeout(() => {
                            targetElement.classList.remove('highlight-target');
                        }, 1200);
                    }
                }
            }

            requestAnimationFrame(animation);
        });
    });

    // Scroll reveal animation
    const fadeSections = document.querySelectorAll('.feature-card, .step, .upload-container, .section-title');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeSections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Futuristic Background Particles
    const particlesContainer = document.getElementById('particles');
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomize size, position, and duration
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 5 + 5;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    setInterval(createParticle, 300);

    // AI Scanner Animation Controller
    const scannerLine = document.getElementById('scanner-line');
    const keywords = document.querySelectorAll('.keyword');
    const scanScore = document.getElementById('scan-score');
    const scanText = document.getElementById('scan-text');

    function runScanner() {
        // Reset
        keywords.forEach(k => k.classList.remove('active'));
        scanScore.innerText = '0';
        scanText.innerText = 'AI Scanning...';

        // Scanner Line sweep
        scannerLine.style.transition = 'none';
        scannerLine.style.top = '0%';

        setTimeout(() => {
            scannerLine.style.transition = 'top 3s ease-in-out';
            scannerLine.style.top = '100%';
        }, 50);

        // Keywords appearance mapped to delay attributes
        keywords.forEach(k => {
            const delay = parseInt(k.getAttribute('data-delay') || '1000');
            setTimeout(() => {
                k.classList.add('active');
            }, delay);
        });

        // Score interpolation
        let score = 0;
        const targetScore = 92;
        const interval = setInterval(() => {
            score += Math.floor(Math.random() * 3) + 1;
            if (score >= targetScore) {
                score = targetScore;
                clearInterval(interval);
                scanText.innerText = 'Analysis Complete';
                scanText.style.color = '#27c93f';
                setTimeout(runScanner, 4000); // Loop the entire sequence
            }
            scanScore.innerText = score.toString();
        }, 40);
    }

    setTimeout(runScanner, 1000);

    // Feature Cards Mouse Tracking (for glow effect)
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // File Upload Drag & Drop Configuration
    const uploadBox = document.getElementById('upload-box');
    const fileInput = document.getElementById('file-input');
    const uploadContentDefault = document.getElementById('upload-content-default');
    const uploadText = document.getElementById('upload-text');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadSubtext = document.getElementById('upload-subtext');

    // Success State Elements
    const uploadSuccessMsg = document.getElementById('upload-success-msg');
    const uploadedFilename = document.getElementById('uploaded-filename');
    const scanProgressFill = document.getElementById('scan-progress-fill');
    const scanStatusText = document.getElementById('scan-status-text');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadBox.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadBox.addEventListener(eventName, () => {
            uploadBox.classList.add('dragover');
            if (uploadText) uploadText.innerText = "Drop it now!";
            if (uploadSubtext) uploadSubtext.style.opacity = '0';
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadBox.addEventListener(eventName, () => {
            uploadBox.classList.remove('dragover');
            if (uploadText) uploadText.innerText = "Drag & Drop your resume here";
            if (uploadSubtext) uploadSubtext.style.opacity = '1';
        }, false);
    });

    uploadBox.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', function () {
        if (this.files) {
            handleFiles(this.files);
        }
    });

    function handleFiles(files) {
        // Restriction: Must be logged in to upload
        const user = JSON.parse(localStorage.getItem('rv_currentUser'));

        if (!user || !user.id) {
            if (uploadText) {
                uploadText.innerText = "Please Login to Upload";
                uploadText.style.color = "#ffdd57";
            }
            if (uploadIcon) {
                uploadIcon.className = "fa-solid fa-lock upload-icon";
                uploadIcon.style.color = "#ffdd57";
            }
            // Optional: Scroll to top or open login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
            return;
        }

        if (files.length > 0) {
            const fileName = files[0].name;

            // Validate extension
            const validExts = ['.pdf', '.doc', '.docx'];
            const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
            if (!validExts.includes(fileExt)) {
                if (uploadText) {
                    uploadText.innerText = "Invalid format. Try PDF or DOCX.";
                    uploadText.style.color = "#ff5f56";
                }
                if (uploadIcon) {
                    uploadIcon.className = "fa-solid fa-circle-xmark upload-icon";
                    uploadIcon.style.color = "#ff5f56";
                }
                setTimeout(() => {
                    if (uploadText) {
                        uploadText.innerText = "Drag & Drop your resume here";
                        uploadText.style.color = "";
                    }
                    if (uploadIcon) {
                        uploadIcon.className = "fa-solid fa-cloud-arrow-up upload-icon";
                        uploadIcon.style.color = "";
                    }
                }, 3000);
                return;
            }

            // Transform UI to "success / loading" state
            startAnalysis(files[0]);
        }
    }

    function simulateScanProgress() {
        let progress = 0;
        if (scanProgressFill) scanProgressFill.style.width = '0%';
        if (scanStatusText) scanStatusText.innerText = "Extracting text from document...";

        const interval = setInterval(() => {
            progress += Math.random() * 8;
            if (progress > 100) progress = 100;

            if (scanProgressFill) scanProgressFill.style.width = `${progress}%`;

            // Update status text based on progress
            if (progress > 30 && progress < 60) {
                if (scanStatusText) scanStatusText.innerText = "Analyzing keywords & ML matching...";
            } else if (progress >= 60 && progress < 90) {
                if (scanStatusText) scanStatusText.innerText = "Generating ATS compatibility score...";
            } else if (progress === 100) {
                clearInterval(interval);
                if (scanStatusText) {
                    scanStatusText.innerText = "Analysis Complete!";
                    scanStatusText.style.color = "#27c93f";
                }

                // Show Page Transition Overlay after a short delay
                setTimeout(() => {
                    const pageLoader = document.getElementById('page-loader');
                    if (pageLoader) pageLoader.classList.add('active');

                    // Redirect after transition animation
                    setTimeout(() => {
                        document.addEventListener('DOMContentLoaded', () => {
                            // Navbar scroll effect
                            const navbar = document.getElementById('navbar');
                            window.addEventListener('scroll', () => {
                                if (window.scrollY > 50) {
                                    navbar.classList.add('scrolled');
                                } else {
                                    navbar.classList.remove('scrolled');
                                }
                            });

                            // Mobile Menu Toggle
                            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                            const navMenu = document.getElementById('nav-menu');

                            mobileMenuBtn.addEventListener('click', () => {
                                navMenu.classList.toggle('active');
                                const icon = mobileMenuBtn.querySelector('i');
                                if (navMenu.classList.contains('active')) {
                                    icon.classList.remove('fa-bars');
                                    icon.classList.add('fa-xmark');
                                } else {
                                    icon.classList.remove('fa-xmark');
                                    icon.classList.add('fa-bars');
                                }
                            });

                            // Close mobile menu when a link is clicked
                            document.querySelectorAll('.nav-links a').forEach(link => {
                                link.addEventListener('click', () => {
                                    navMenu.classList.remove('active');
                                    mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
                                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                                });
                            });

                            // Modals Logic — only activate if modal elements are in the DOM
                            const authModal = document.getElementById('auth-modal');
                            const modalClose = document.getElementById('modal-close');
                            const loginForm = document.getElementById('login-form');
                            const signupForm = document.getElementById('signup-form');

                            const navLoginBtn = document.getElementById('nav-login-btn');
                            const navSignupBtn = document.getElementById('nav-signup-btn');

                            const switchToSignup = document.getElementById('switch-to-signup');
                            const switchToLogin = document.getElementById('switch-to-login');

                            const openModal = (type) => {
                                if (!authModal) return;
                                authModal.classList.add('active');
                                if (type === 'login') {
                                    if (loginForm) loginForm.classList.remove('hidden');
                                    if (signupForm) signupForm.classList.add('hidden');
                                } else {
                                    if (signupForm) signupForm.classList.remove('hidden');
                                    if (loginForm) loginForm.classList.add('hidden');
                                }
                                // close mobile menu if open
                                navMenu.classList.remove('active');
                                mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
                                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                            };

                            const closeModal = () => {
                                if (authModal) authModal.classList.remove('active');
                            };

                            // These buttons now link to login.html — only attach modal listeners if they are actual buttons
                            if (navLoginBtn && navLoginBtn.tagName === 'BUTTON') {
                                navLoginBtn.addEventListener('click', () => openModal('login'));
                            }
                            if (navSignupBtn && navSignupBtn.tagName === 'BUTTON') {
                                navSignupBtn.addEventListener('click', () => openModal('signup'));
                            }

                            if (switchToSignup) {
                                switchToSignup.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    openModal('signup');
                                });
                            }

                            if (switchToLogin) {
                                switchToLogin.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    openModal('login');
                                });
                            }

                            if (modalClose) modalClose.addEventListener('click', closeModal);
                            if (authModal) {
                                authModal.addEventListener('click', (e) => {
                                    if (e.target === authModal) {
                                        closeModal();
                                    }
                                });
                            }

                            // User Session State Management
                            const navAuthButtons = document.getElementById('nav-auth-buttons');
                            const navUserProfile = document.getElementById('nav-user-profile');
                            const currentUserName = document.getElementById('current-user-name');
                            const navLogoutBtn = document.getElementById('nav-logout-btn');

                            const handleLoginSuccess = (user) => {
                                if (navAuthButtons) navAuthButtons.style.display = 'none';
                                if (navUserProfile) navUserProfile.classList.remove('hidden');
                                if (currentUserName) currentUserName.innerText = user.name || "User";
                            };

                            const checkSession = () => {
                                const userJson = localStorage.getItem('rv_currentUser');
                                if (userJson) {
                                    const user = JSON.parse(userJson);
                                    handleLoginSuccess(user);
                                    return user;
                                }
                                return null;
                            };

                            // Initialize session
                            checkSession();

                            if (navLogoutBtn) {
                                navLogoutBtn.addEventListener('click', () => {
                                    localStorage.removeItem('rv_currentUser');
                                    if (navUserProfile) navUserProfile.classList.add('hidden');
                                    if (navAuthButtons) navAuthButtons.style.display = 'flex';
                                    window.location.reload(); // Refresh to reset state
                                });
                            }

                            // Form Submission Logic
                            const handleFormSubmit = (formId, btnText, successText) => {
                                const formContainer = document.getElementById(formId);
                                const form = formContainer ? formContainer.querySelector('form') : null;
                                if (!form) return;

                                form.addEventListener('submit', (e) => {
                                    e.preventDefault();
                                    const submitBtn = form.querySelector('button[type="submit"]');

                                    // Extract data
                                    const emailInput = form.querySelector('input[type="email"]');
                                    const passwordInput = form.querySelector('input[type="password"]');
                                    const nameInput = form.querySelector('input[type="text"]'); // Only in signup

                                    const email = emailInput ? emailInput.value : '';
                                    const password = passwordInput ? passwordInput.value : '';
                                    const name = nameInput ? nameInput.value : '';

                                    // Mock Loading State
                                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
                                    submitBtn.disabled = true;
                                    submitBtn.style.opacity = '0.7';

                                    setTimeout(() => {
                                        if (formId === 'stastandalone-signup-form') {

                                            fetch("https://ashwinm30.pythonanywhere.com/api/users/register/", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({
                                                    username: name,
                                                    email: email,
                                                    password: password
                                                })
                                            })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data.message) {
                                                        alert("Account created successfully!");
                                                    } else {
                                                        alert(data.error || "Signup failed");
                                                    }

                                                });

                                        }
                                        else if (formId === 'standalone-login-form') {

                                            fetch("https://ashwinm30.pythonanywhere.com/api/users/login/", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({
                                                    email: email,
                                                    password: password
                                                })
                                            })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data.user_id) {

                                                        const user = {
                                                            id: data.user_id,
                                                            name: email,
                                                            email: email
                                                        };


                                                        localStorage.setItem("rv_currentUser", JSON.stringify(user));

                                                        handleLoginSuccess(user);

                                                        // Success State
                                                        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${successText}`;
                                                        submitBtn.style.background = '#27c93f';
                                                        submitBtn.style.color = 'white';
                                                        submitBtn.style.borderColor = '#27c93f';
                                                    } else {
                                                        alert("Invalid login credentials");
                                                    }

                                                }).catch(err => {
                                                    console.log((err));
                                                })


                                        }





                                        // Close Modal
                                        setTimeout(() => {
                                            closeModal();
                                            // Reset form back to default
                                            setTimeout(() => {
                                                form.reset();
                                                submitBtn.innerHTML = btnText;
                                                submitBtn.disabled = false;
                                                submitBtn.style.opacity = '1';
                                                submitBtn.style.background = '';
                                                submitBtn.style.borderColor = '';

                                                // If it was a signup, maybe shift to login or just refresh?
                                                if (formId === 'signup-form') {
                                                    // Switch to login modal
                                                    openModal('login');
                                                }
                                            }, 400);
                                        }, 1000);
                                    }, 1000);
                                });
                            };

                            handleFormSubmit('standalone-login-form', 'Login', 'Logged In!');
                            handleFormSubmit('standalone-signup-form', 'Sign Up', 'Account Created!');

                            // Custom Smooth Scrolling Engine with Easing
                            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                anchor.addEventListener('click', function (e) {
                                    const targetId = this.getAttribute('href');
                                    if (targetId === '#') return;

                                    const targetElement = document.querySelector(targetId);
                                    if (!targetElement) return;

                                    e.preventDefault();

                                    // Close mobile menu if open during scroll request
                                    if (navMenu.classList.contains('active')) {
                                        navMenu.classList.remove('active');
                                        mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
                                        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                                    }

                                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                                    // Subtract navbar height for offset (approx 80px)
                                    const offsetPosition = targetPosition - 100;
                                    const startPosition = window.scrollY;
                                    const distance = offsetPosition - startPosition;
                                    // Luxurious 1.2s duration
                                    const duration = 1200;
                                    let start = null;

                                    // Optional styling state on body while traversing
                                    document.body.style.pointerEvents = 'none';

                                    // Easing function: easeInOutQuart for a slow-fast-slow cinematic feel
                                    const easeInOutQuart = time => time < 0.5 ? 8 * time * time * time * time : 1 - Math.pow(-2 * time + 2, 4) / 2;

                                    function animation(currentTime) {
                                        if (start === null) start = currentTime;
                                        const timeElapsed = currentTime - start;
                                        const progress = Math.min(timeElapsed / duration, 1);

                                        window.scrollTo(0, startPosition + distance * easeInOutQuart(progress));

                                        if (timeElapsed < duration) {
                                            requestAnimationFrame(animation);
                                        } else {
                                            document.body.style.pointerEvents = 'auto';

                                            // Trigger custom highlight visual for the resulting block
                                            // Only apply if it's not the hero section since that's jarring
                                            if (targetId !== '#hero') {
                                                targetElement.classList.add('highlight-target');
                                                setTimeout(() => {
                                                    targetElement.classList.remove('highlight-target');
                                                }, 1200);
                                            }
                                        }
                                    }

                                    requestAnimationFrame(animation);
                                });
                            });

                            // Scroll reveal animation
                            const fadeSections = document.querySelectorAll('.feature-card, .step, .upload-container, .section-title');

                            const observerOptions = {
                                root: null,
                                rootMargin: '0px',
                                threshold: 0.1
                            };

                            const observer = new IntersectionObserver((entries, observer) => {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                        entry.target.classList.add('is-visible');
                                        observer.unobserve(entry.target);
                                    }
                                });
                            }, observerOptions);

                            fadeSections.forEach(section => {
                                section.classList.add('fade-in-section');
                                observer.observe(section);
                            });

                            // Futuristic Background Particles
                            const particlesContainer = document.getElementById('particles');
                            function createParticle() {
                                const particle = document.createElement('div');
                                particle.classList.add('particle');

                                // Randomize size, position, and duration
                                const size = Math.random() * 6 + 2;
                                particle.style.width = `${size}px`;
                                particle.style.height = `${size}px`;
                                particle.style.left = `${Math.random() * 100}%`;

                                const duration = Math.random() * 5 + 5;
                                particle.style.animationDuration = `${duration}s`;

                                particlesContainer.appendChild(particle);

                                setTimeout(() => {
                                    particle.remove();
                                }, duration * 1000);
                            }
                            setInterval(createParticle, 300);

                            // AI Scanner Animation Controller
                            const scannerLine = document.getElementById('scanner-line');
                            const keywords = document.querySelectorAll('.keyword');
                            const scanScore = document.getElementById('scan-score');
                            const scanText = document.getElementById('scan-text');

                            function runScanner() {
                                // Reset
                                keywords.forEach(k => k.classList.remove('active'));
                                scanScore.innerText = '0';
                                scanText.innerText = 'AI Scanning...';

                                // Scanner Line sweep
                                scannerLine.style.transition = 'none';
                                scannerLine.style.top = '0%';

                                setTimeout(() => {
                                    scannerLine.style.transition = 'top 3s ease-in-out';
                                    scannerLine.style.top = '100%';
                                }, 50);

                                // Keywords appearance mapped to delay attributes
                                keywords.forEach(k => {
                                    const delay = parseInt(k.getAttribute('data-delay') || '1000');
                                    setTimeout(() => {
                                        k.classList.add('active');
                                    }, delay);
                                });

                                // Score interpolation
                                let score = 0;
                                const targetScore = 92;
                                const interval = setInterval(() => {
                                    score += Math.floor(Math.random() * 3) + 1;
                                    if (score >= targetScore) {
                                        score = targetScore;
                                        clearInterval(interval);
                                        scanText.innerText = 'Analysis Complete';
                                        scanText.style.color = '#27c93f';
                                        setTimeout(runScanner, 4000); // Loop the entire sequence
                                    }
                                    scanScore.innerText = score.toString();
                                }, 40);
                            }

                            setTimeout(runScanner, 1000);



                            // Feature Cards Mouse Tracking (for glow effect)
                            const featureCards = document.querySelectorAll('.feature-card');
                            featureCards.forEach(card => {
                                card.addEventListener('mousemove', (e) => {
                                    const rect = card.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;

                                    card.style.setProperty('--mouse-x', `${x}px`);
                                    card.style.setProperty('--mouse-y', `${y}px`);
                                });
                            });

                            // File Upload Drag & Drop Configuration
                            const uploadBox = document.getElementById('upload-box');
                            const fileInput = document.getElementById('file-input');
                            const uploadContentDefault = document.getElementById('upload-content-default');
                            const uploadText = document.getElementById('upload-text');
                            const uploadIcon = document.getElementById('upload-icon');
                            const uploadSubtext = document.getElementById('upload-subtext');

                            // Success State Elements
                            const uploadSuccessMsg = document.getElementById('upload-success-msg');
                            const uploadedFilename = document.getElementById('uploaded-filename');
                            const scanProgressFill = document.getElementById('scan-progress-fill');
                            const scanStatusText = document.getElementById('scan-status-text');

                            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                                uploadBox.addEventListener(eventName, preventDefaults, false);
                            });

                            function preventDefaults(e) {
                                e.preventDefault();
                                e.stopPropagation();
                            }

                            ['dragenter', 'dragover'].forEach(eventName => {
                                uploadBox.addEventListener(eventName, () => {
                                    uploadBox.classList.add('dragover');
                                    if (uploadText) uploadText.innerText = "Drop it now!";
                                    if (uploadSubtext) uploadSubtext.style.opacity = '0';
                                }, false);
                            });

                            ['dragleave', 'drop'].forEach(eventName => {
                                uploadBox.addEventListener(eventName, () => {
                                    uploadBox.classList.remove('dragover');
                                    if (uploadText) uploadText.innerText = "Drag & Drop your resume here";
                                    if (uploadSubtext) uploadSubtext.style.opacity = '1';
                                }, false);
                            });

                            uploadBox.addEventListener('drop', (e) => {
                                const dt = e.dataTransfer;
                                const files = dt.files;
                                handleFiles(files);
                            });

                            fileInput.addEventListener('change', function () {
                                if (this.files) {
                                    handleFiles(this.files);
                                }
                            });

                            function handleFiles(files) {
                                // Restriction: Must be logged in to upload
                                const user = JSON.parse(localStorage.getItem('rv_currentUser'));
                                console.log("User from localStorage:", user);

                                if (!user || !user.id) {
                                    if (uploadText) {
                                        uploadText.innerText = "Please Login to Upload";
                                        uploadText.style.color = "#ffdd57";
                                    }
                                    if (uploadIcon) {
                                        uploadIcon.className = "fa-solid fa-lock upload-icon";
                                        uploadIcon.style.color = "#ffdd57";
                                    }
                                    // Optional: Scroll to top or open login
                                    setTimeout(() => {
                                        window.location.href = 'login.html';
                                    }, 1500);
                                    return;
                                }

                                if (files.length > 0) {
                                    const fileName = files[0].name;

                                    // Validate extension
                                    const validExts = ['.pdf', '.doc', '.docx'];
                                    const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
                                    if (!validExts.includes(fileExt)) {
                                        if (uploadText) {
                                            uploadText.innerText = "Invalid format. Try PDF or DOCX.";
                                            uploadText.style.color = "#ff5f56";
                                        }
                                        if (uploadIcon) {
                                            uploadIcon.className = "fa-solid fa-circle-xmark upload-icon";
                                            uploadIcon.style.color = "#ff5f56";
                                        }
                                        setTimeout(() => {
                                            if (uploadText) {
                                                uploadText.innerText = "Drag & Drop your resume here";
                                                uploadText.style.color = "";
                                            }
                                            if (uploadIcon) {
                                                uploadIcon.className = "fa-solid fa-cloud-arrow-up upload-icon";
                                                uploadIcon.style.color = "";
                                            }
                                        }, 3000);
                                        return;
                                    }

                                    // Transform UI to "success / loading" state
                                    startAnalysis(files[0]);
                                }
                            }

                            function simulateScanProgress() {
                                let progress = 0;
                                if (scanProgressFill) scanProgressFill.style.width = '0%';
                                if (scanStatusText) scanStatusText.innerText = "Extracting text from document...";

                                const interval = setInterval(() => {
                                    progress += Math.random() * 8;
                                    if (progress > 100) progress = 100;

                                    if (scanProgressFill) scanProgressFill.style.width = `${progress}%`;

                                    // Update status text based on progress
                                    if (progress > 30 && progress < 60) {
                                        if (scanStatusText) scanStatusText.innerText = "Analyzing keywords & ML matching...";
                                    } else if (progress >= 60 && progress < 90) {
                                        if (scanStatusText) scanStatusText.innerText = "Generating ATS compatibility score...";
                                    } else if (progress === 100) {
                                        clearInterval(interval);
                                        if (scanStatusText) {
                                            scanStatusText.innerText = "Analysis Complete!";
                                            scanStatusText.style.color = "#27c93f";
                                        }

                                        // Show Page Transition Overlay after a short delay
                                        setTimeout(() => {
                                            const pageLoader = document.getElementById('page-loader');
                                            if (pageLoader) pageLoader.classList.add('active');

                                            // Redirect after transition animation
                                            setTimeout(() => {
                                                window.location.href = 'results.html';
                                            }, 2000);
                                        }, 1000);
                                    }
                                }, 300);
                            }

                            const btnDemo = document.getElementById('btn-demo');
                            if (btnDemo) {
                                btnDemo.addEventListener('click', (e) => {
                                    e.preventDefault();

                                    // Scroll to upload section
                                    const uploadSection = document.getElementById('upload');
                                    if (uploadSection) {
                                        const targetPosition = uploadSection.getBoundingClientRect().top + window.scrollY - 100;
                                        window.scrollTo({
                                            top: targetPosition,
                                            behavior: 'smooth'
                                        });
                                    }

                                    // Simulate demo upload after short scroll delay
                                    setTimeout(() => {

                                        // fake result for demo
                                        localStorage.setItem("demo_result", JSON.stringify({
                                            score: 85,
                                            skills: ["Python", "Django", "SQL"],
                                            suggestions: [
                                                "Add more technical skills",
                                                "Improve project descriptions",
                                                "Use action verbs"
                                            ],

                                        }));

                                        window.location.href = "results.html?demo=true";

                                    }, 800);
                                });
                            }

                            async function startAnalysis(file) {

                                const currentUser = JSON.parse(localStorage.getItem("rv_currentUser"));

                                if (!currentUser) {
                                    alert("Please login first");
                                    return;
                                }

                                const formData = new FormData();

                                formData.append("resume", file);
                                formData.append("user_id", currentUser.id);

                                const response = await fetch(`https://ashwinm30.pythonanywhere.com/api/resume/upload/`, {
                                    method: "POST",
                                    body: formData
                                });

                                const data = await response.json();

                                window.location.href = `results.html?resume_id=${data.resume_id}`;
                            }
                        });

                    }, 2000);
                }, 1000);
            }
        }, 300);
    }

    const btnDemo = document.getElementById('btn-demo');
    if (btnDemo) {
        btnDemo.addEventListener('click', (e) => {
            e.preventDefault();

            // Scroll to upload section
            const uploadSection = document.getElementById('upload');
            if (uploadSection) {
                const targetPosition = uploadSection.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Simulate demo upload after short scroll delay
            setTimeout(() => {

                // fake result for demo
                localStorage.setItem("demo_result", JSON.stringify({
                    score: 85,
                    skills: ["Python", "Django", "SQL"],
                    suggestions: [
                        "Add more technical skills",
                        "Improve project descriptions",
                        "Use action verbs"
                    ]
                }));

                window.location.href = "results.html?demo=true";

            }, 800);
        });
    }

    async function startAnalysis(file) {

        const currentUser = JSON.parse(localStorage.getItem("rv_currentUser"));

        document.getElementById("upload-content-default").classList.add("hidden");
        document.getElementById("upload-success-msg").classList.remove("hidden");

        document.getElementById("uploaded-filename").innerText = file.name;

        const progressBar = document.getElementById("scan-progress-fill");
        const statusText = document.getElementById("scan-status-text");

        let progress = 0;
        progressBar.style.width = "0%";
        progressBar.style.background = ""; // Reset in case of prior errors
        progressBar.style.boxShadow = "";

        const updateStatusText = (currentProgress) => {
            if (currentProgress < 30) {
                statusText.innerText = "Extracting text from resume...";
            } else if (currentProgress < 60) {
                statusText.innerText = "Analyzing skills and keywords...";
            } else if (currentProgress < 100) {
                statusText.innerText = "Calculating ATS score...";
            } else {
                statusText.innerText = "Analysis Complete ✅";
                statusText.style.color = "#27c93f";
            }
        };

        updateStatusText(0);

        // 🎯 SMOOTH PROGRESS LOOP
        const interval = setInterval(() => {
            // Gradually increment progress, slowing down near 95%
            const increment = Math.max(0.2, (95 - progress) * 0.05);
            progress += increment;

            if (progress >= 95) {
                progress = 95;
            }

            progressBar.style.width = progress + "%";
            updateStatusText(progress);
        }, 300);

        if (!currentUser) {
            clearInterval(interval);
            alert("Please login first");
            // Reset UI slightly
            document.getElementById("upload-content-default").classList.remove("hidden");
            document.getElementById("upload-success-msg").classList.add("hidden");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);
        formData.append("user_id", currentUser.id);

        try {
            const response = await fetch(`https://ashwinm30.pythonanywhere.com/api/resume/upload/`, {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            clearInterval(interval);

            if (data.resume_id) {
                // ✅ COMPLETE BAR
                progress = 100;
                progressBar.style.width = "100%";
                updateStatusText(progress);

                // Wait ~1 second before redirecting
                setTimeout(() => {
                    window.location.href = `results.html?resume_id=${data.resume_id}`;
                }, 1000);
            } else {
                statusText.innerText = "Upload failed. " + (data.error || "Please try again.");
                statusText.style.color = "#ff5f56";
                progressBar.style.background = "linear-gradient(90deg, #ff5f56, #e63946)";
                progressBar.style.boxShadow = "0 0 15px rgba(255, 95, 86, 0.5)";
            }

        } catch (err) {
            console.error(err);
            clearInterval(interval);
            statusText.innerText = "Server error. Please try again.";
            statusText.style.color = "#ff5f56";
            progressBar.style.background = "linear-gradient(90deg, #ff5f56, #e63946)";
            progressBar.style.boxShadow = "0 0 15px rgba(255, 95, 86, 0.5)";
        }
    }
});
