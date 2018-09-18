(function() {
    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    function validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    function sendInnerHide(sel) {
        document.querySelector(sel).classList.add("hid");
    }
    function sendInnerReveal(sel) {
        document.querySelector(sel).classList.remove("hid");
    }

    function setFailedButton() {
        document.querySelector("#send").classList.add("failed");
    }
    function resetFailedButton() {
        document.querySelector("#send").classList.remove("failed");
    }

    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
        }).map(function(k) {
            if(elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            }else if(elements[k].length > 0){
                return elements[k].item(0).name;
            }
        }).filter(function(item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function(name){
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(formData);
        return formData;
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var data = getFormData(form);         // get the values submitted in the form

        /* OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
          return false;
        }
        */
        const sub = document.querySelector("#send");
        const subText = {
            setup: function() {
                document.querySelector("#send").innerHTML = "<span id='send_inner'><span class='hid' id='send_inner-message1'>Message&nbsp;</span><span id='send_inner-sen'>Sen</span><span class='hid' id='send_inner-t'>t</span><span class='hid' id='send_inner-faile'>Faile</span><span id='send_inner-d'>d</span><span class='hid' id='send_inner-ing'>ing<span>.</span><span>.</span><span>.</span></span><span id='send_inner-message2'>&nbsp;Message</span><span class='hid' id='send_inner-check'></span></span>"
            },
            sending: function() {
                sendInnerHide("#send_inner-message2");
                sendInnerReveal("#send_inner-ing");
            },
            sent: function() {
                sendInnerReveal("#send_inner-message1");
                sendInnerHide("#send_inner-ing");
                sendInnerHide("#send_inner-d");
                sendInnerReveal("#send_inner-t");
                sendInnerReveal("#send_inner-check");
                enableForm();
            },
            error: function() {
                sendInnerHide("#send_inner-sen");
                sendInnerHide("#send_inner-ing");
                sendInnerReveal("#send_inner-message1");
                sendInnerReveal("#send_inner-faile");
                setFailedButton();
            },
            resetForm: function() {
                form.reset();
            }
        };

        if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
            var emailEl = form.querySelector("#email");
            var invalidEmail = form.querySelector('#email-underline');
            var emailError = form.querySelector("#email-error");
            if (invalidEmail) {
                emailEl.focus();
                invalidEmail.classList.add("error");
                emailError.style.maxHeight = "11px";
                return false;
            }
        } else {
            disableAllButtons(form);
            subText.setup();
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {

                if ( xhr.readyState == 4 ) {
                    if ( xhr.status == 200 ) {
                        subText.resetForm();
                        subText.sent();
                    } else {
                        subText.error();
                        //error(xhr, xhr.status);
                    }
                }

                return;
            };

            xhr.onerror = function () {
                subText.error();
            };

            // url encode form data for sending as post data
            var encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            subText.sending();
            xhr.send(encoded);
        }
    }

    function loaded() {
        console.log("Contact form submission handler loaded successfully.");
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function resetEmailWarning() {
        document.querySelector('#email-underline').classList.remove("error");
        document.querySelector("#email-error").removeAttribute("style");
    }

    document.querySelector("#email").addEventListener("change", resetEmailWarning, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();