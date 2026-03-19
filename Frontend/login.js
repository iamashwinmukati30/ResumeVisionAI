document.addEventListener('DOMContentLoaded', () => {
    const loginWrapper = document.getElementById('login-wrapper');
    const signupWrapper = document.getElementById('signup-wrapper');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    const loginForm = document.getElementById('standalone-login-form');
    const signupForm = document.getElementById('standalone-signup-form');

    // Alert UI
    const showAlert = (message, type = 'error') => {
        const existingAlert = document.querySelector('.auth-alert');
        if (existingAlert) existingAlert.remove();

        const alert = document.createElement('div');
        alert.className = `auth-alert ${type}`;
        alert.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i> <span>${message}</span>`;

        const activeWrapper = !loginWrapper.classList.contains('hidden') ? loginWrapper : signupWrapper;
        activeWrapper.querySelector('.form-header').after(alert);

        setTimeout(() => alert.remove(), 4000);
    };

    // Switch Forms
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginWrapper.classList.add('hidden');
        signupWrapper.classList.remove('hidden');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupWrapper.classList.add('hidden');
        loginWrapper.classList.remove('hidden');
    });

    // URL mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'signup') {
        loginWrapper.classList.add('hidden');
        signupWrapper.classList.remove('hidden');
    }

    // =========================
    // 🔥 SIGNUP (BACKEND)
    // =========================
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = signupForm.querySelector('.auth-submit-btn');
        const name = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Creating...';

        fetch("https://ashwinm30.pythonanywhere.com/api/users//register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {

                if (data.message) {
                    showAlert("Account created successfully!", "success");

                    signupWrapper.classList.add('hidden');
                    loginWrapper.classList.remove('hidden');
                    window.location.href = "login.html";
                } else {
                    showAlert(data.error || "Signup failed");
                }

                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Get Started';
            });
    });

    // =========================
    // 🔥 LOGIN (BACKEND)
    // =========================
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log("LOGIN CLICKED ✅");

        const submitBtn = loginForm.querySelector('.auth-submit-btn');
        const email = loginForm.querySelector('input[type="email"]').value.trim().toLowerCase();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Checking...';

        fetch("https://ashwinm30.pythonanywhere.com/api/users/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
                        email: email,
                        name: data.username
                    };

                    // ✅ SAVE USER (MOST IMPORTANT)
                    localStorage.setItem("rv_currentUser", JSON.stringify(user));

                    console.log("Saved user:", localStorage.getItem("rv_currentUser"));

                    showAlert("Login successful!", "success");

                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 800);

                } else {
                    showAlert(data.error || "Invalid login");
                }

                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Sign In';
            })
            .catch(err => {
                console.error(err);
                showAlert("Server error");
            });
    });


});
