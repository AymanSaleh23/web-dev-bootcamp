z(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.querySelectorAll('.validated-form');

        forms.forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated'); // Ensure this is added
            }, false);
        });
    }, false);
})();
