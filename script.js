document.addEventListener("DOMContentLoaded", () => {
    const faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const isActive = box.classList.contains("active");

            faqBoxes.forEach(item => {
                item.classList.remove("active");
                const svg = item.querySelector("svg");
                svg.style.transform = "rotate(0deg)";
            });

            if (!isActive) {
                box.classList.add("active");
                const svg = box.querySelector("svg");
                svg.style.transform = "rotate(45deg)";
            }
        });
    });

    const emailInput = document.querySelector(".hero-buttons input");
    const getStartedBtn = document.querySelector(".hero-buttons .btn-red");

    const message = document.createElement("p");
    message.style.fontSize = "14px";
    message.style.marginTop = "10px";
    message.style.textAlign = "center";
    message.style.display = "none";
    document.querySelector(".hero-buttons").appendChild(message);

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const showMessage = (text, success = false) => {
        message.textContent = text;
        message.style.color = success ? "lightgreen" : "red";
        message.style.display = "block";
    };

    getStartedBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();

        if (!email) return showMessage("Email is required");
        if (!validateEmail(email))
            return showMessage("Please enter a valid email address");

        showMessage("Welcome! Membership process started 🎉", true);
        emailInput.value = "";
    });

    emailInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") getStartedBtn.click();
    });

    const signinBtn = document.querySelector(".btn-red-sm");
    const signinModal = document.getElementById("signinModal");
    const closeSignin = document.getElementById("closeSignin");
    const signinSubmit = document.getElementById("signinSubmit");
    const signinMsg = document.getElementById("signinMsg");

    signinBtn.addEventListener("click", () => {
        signinModal.style.display = "flex";
    });

    closeSignin.addEventListener("click", () => {
        signinModal.style.display = "none";
        signinMsg.textContent = "";
    });

    signinSubmit.addEventListener("click", () => {
        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value.trim();

        if (!email || !password) {
            signinMsg.textContent = "All fields are required";
            signinMsg.style.color = "red";
            return;
        }

        if (password.length < 6) {
            signinMsg.textContent = "Password must be at least 6 characters";
            signinMsg.style.color = "red";
            return;
        }

        signinMsg.textContent = "Sign in successful ✅ (Demo)";
        signinMsg.style.color = "lightgreen";
    });

});