class Contact
{
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

class User
{
    constructor(fName = "", lName = "", username = "", email = "", password = "")
    {
        this.fName = fName;
        this.lName = lName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}




//KYLE JAMES
//100704048
//2020-03-06
"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

       let pageName = name.substring(1, name.length - 5);

       switch(pageName)
        {
            case "index":
               DisplayHomePageContent();
                break;
            case "products":
                DisplayProductsContent();
                break;
            case "services":
                DisplayServicesContent();
                break;
            case "about":
                DisplayAboutContent();
                break;
            case "contact":
                DisplayContactContent();
                break;
            case "projects":
                DisplayProjectsContent();
                break;
            case "login":
                DisplayLoginContent();
                break;
            case "register":
                DisplayRegisterContent();
                break;
            default:
                console.error("Landed in a page that is not defined");
                break;
        }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        document.getElementById("home").className = "nav-item active";
        /* $("button").click(()=>{
            location.href = "projects.html";
        }); */

        document.title = "WEBD6201 - Home";

        let progressbar = $( "#progressBar" ).progressbar({
            value: 37
          });

        console.log(progressbar);

        $("#projectsButton").click(function(){
            $(this).fadeOut(3000, "linear", ()=>{
                $(this).fadeIn(1000, "linear", ()=>{
                    location.href = "projects.html";
                });
            });
        });
    }

    function DisplayProductsContent()
    {
        document.title = "WEBD6201 - Products";
    }

    function DisplayServicesContent()
    {
        document.title = "WEBD6201 - Services";
    }

    function DisplayAboutContent()
    {
        document.title = "WEBD6201 - About Us";
    }

    function DisplayContactContent()
    {
        document.title = "WEBD6201 - Contact Us";
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $("#errorMessage").hide();
        }

        function validateInput(selector, condition, errorMessage)
        {
            if(condition)
            {
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            }
            else
            {
                $("#errorMessage").hide();
                $(selector).css("border", "1px solid #ced4da");
            }
        }

        $("#errorMessage").hide();
        $("#contactName").select();

        // Contact Name Events
        $("#contactName").blur((e)=>
        {
            validateInput("#contactName",( $("#contactName").val().length < 2),"Contact Name is Too Short");
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        // Email Events
        $("#emailAddress").blur((e)=>
        {
            validateInput("#emailAddress",($("#emailAddress").val().length < 8) || (!$("#emailAddress").val().includes("@")),"Invalid Email Address");
        });

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        // Contact Number Events
        $("#contactNumber").blur((e)=>
        {
            let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber",( !phonePattern.test(phoneNumber)),"Invalid Contact Number");
        });

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        // Contact Message Events
        $("#contactMessage").blur((e)=>
        {
            validateInput("#contactMessage",( $("#contactMessage").val().length < 2 ),"Contact Message Too Short");
        });

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });


        $("#contactForm").submit  ((e)=>
        {
            if(document.getElementById("contactForm").checkValidity() == false)
            {
                e.preventDefault();
                e.stopPropagation();
                console.log("form not valid");
            }

            
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayProjectsContent()
    {
        document.title = "WEBD6201 - Projects";
    }

    function DisplayLoginContent()
    {
        document.title = "WEBD6201 - Login";
        document.getElementById("submitButton").addEventListener("click", InsertUsername, true);

        $("#loginForm").submit  ((e)=>
        {
           
            e.preventDefault();
            e.stopPropagation();
            $("#loginForm")[0].reset();
            $("#login").hide();
            $("#logout").show();
        });

    }

    function DisplayRegisterContent()
    {
        document.title = "WEBD6201 - Register";
        CreateDiv();
        document.getElementById("FirstName").addEventListener("change", CheckNames, true);
        document.getElementById("lastName").addEventListener("change", CheckNames, true);
        document.getElementById("emailAddress").addEventListener("change", CheckEmail, true);
        document.getElementById("password").addEventListener("change", CheckPassword, true);
        document.getElementById("confirmPassword").addEventListener("change", CheckPassword, true);
        document.getElementById("submitButton").setAttribute("type", "button");
        document.getElementById("submitButton").addEventListener("click", AddNewUser, true);
    }
    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }

    function InsertUsername()
    {
        if((document.getElementById("contactName").value != "") && (document.getElementById("password").value != ""))
        {
            if(!document.getElementById("username"))
            {
                var item = document.createElement("li");
                item.setAttribute("id", "username");
                item.setAttribute("class", "nav-item");
                item.innerHTML = "<a class=\"nav-link\"><i class=\"fas fa-user-circle\"></i>" +  document.getElementById("contactName").value + "</a>";
                document.getElementById("contact").parentNode.insertBefore(item, document.getElementById("logout"));
            }
        }
    }

    function CreateDiv()
    {
        var item = document.createElement("div");
        item.setAttribute("id", "ErrorMessage");
        item.setAttribute("visible", "false");
        document.getElementById("registerForm").appendChild(item);
        var fName = document.createElement("p");
        fName.setAttribute("id", "fNameChecker");
        document.getElementById("ErrorMessage").appendChild(fName);
        var lName = document.createElement("p");
        lName.setAttribute("id", "lNameChecker");
        document.getElementById("ErrorMessage").appendChild(lName);
        var emailLen = document.createElement("p");
        emailLen.setAttribute("id", "emailCheckerLength");
        document.getElementById("ErrorMessage").appendChild(emailLen);
        var emailSym = document.createElement("p");
        emailSym.setAttribute("id", "emailCheckerSymbol");
        document.getElementById("ErrorMessage").appendChild(emailSym);
        var pass = document.createElement("p");
        pass.setAttribute("id", "passwordChecker");
        document.getElementById("ErrorMessage").appendChild(pass);
        var passConf = document.createElement("p");
        passConf.setAttribute("id", "passwordConfirmationChecker");
        document.getElementById("ErrorMessage").appendChild(passConf);
        var passMissmatch = document.createElement("p");
        passMissmatch.setAttribute("id", "passwordMissmatchChecker");
        document.getElementById("ErrorMessage").appendChild(passMissmatch);
    }

    function CheckNames()
    {
        if(document.getElementById("FirstName").value != "")
        {
            if(document.getElementById("FirstName").value.length < 2)
            {
                document.getElementById("fNameChecker").innerText = "First name is too short.";
                document.getElementById("ErrorMessage").setAttribute("visible","true");
            }
            if(document.getElementById("FirstName").value.length >= 2)
            {
                document.getElementById("fNameChecker").innerText = "";
            }
        }
        if(document.getElementById("lastName").value != "")
        {
            if(document.getElementById("lastName").value.length < 2)
            {
                document.getElementById("lNameChecker").innerText = "Last name is too short."
                document.getElementById("ErrorMessage").setAttribute("visible", "true");
            }
            if(document.getElementById("lastName").value.length >= 2)
            {
                document.getElementById("lNameChecker").innerText = "";
            }
        }
        CheckIfErrorMessageNeedsToBeHidden();
    }

    function CheckEmail()
    {
        if(document.getElementById("emailAddress").value.length < 8)
        {
            document.getElementById("emailCheckerLength").innerText = "Email is too short. (min. 8 characters)";
            document.getElementById("ErrorMessage").setAttribute("visible", "true");
        }
        if(document.getElementById("emailAddress").value.length >= 8)
        {
            document.getElementById("emailCheckerLength").innerText = "";
        }
        if(!document.getElementById("emailAddress").value.includes("@"))
        {
            document.getElementById("emailCheckerSymbol").innerText = "Email does not contain '@'.";
            document.getElementById("ErrorMessage").setAttribute("visible", "true");
        }
        if(document.getElementById("emailAddress").value.includes("@"))
        {
            document.getElementById("emailCheckerSymbol").innerText = "";
        }
        CheckIfErrorMessageNeedsToBeHidden();
    }

    function CheckPassword()
    {
        if(document.getElementById("password").value.length < 6)
        {
            document.getElementById("passwordChecker").innerText = "Password is too short. (min. 6 characters)";
            document.getElementById("ErrorMessage").setAttribute("visible", "true");
        }
        if(document.getElementById("password").value.length >= 6)
        {
            document.getElementById("passwordChecker").innerText = "";
        }
        if(document.getElementById("confirmPassword").value.length < 6)
        {
            document.getElementById("passwordConfirmationChecker").innerText = "Confirmation Password is too short. (min. 6 characters)";
            document.getElementById("ErrorMessage").setAttribute("visible", "true");
        }
        if(document.getElementById("confirmPassword").value.length >= 6)
        {
            document.getElementById("passwordConfirmationChecker").innerText = "";
        }
        if((document.getElementById("password").value != document.getElementById("confirmPassword").value) && (document.getElementById("passwordChecker").innerText == "" && document.getElementById("passwordConfirmationChecker").innerText == ""))
        {
            document.getElementById("passwordMissmatchChecker").innerText = "Passwords don't match.";
            document.getElementById("ErrorMessage").setAttribute("visible", "true");
        }
        if((document.getElementById("password").value == document.getElementById("confirmPassword").value) && (document.getElementById("passwordChecker").innerText == "" && document.getElementById("passwordConfirmationChecker").innerText == ""))
        {
            document.getElementById("passwordMissmatchChecker").innerText = "";
        }
        CheckIfErrorMessageNeedsToBeHidden();
    }

    function CheckIfErrorMessageNeedsToBeHidden()
    {  
        if(document.getElementById("fNameChecker").innerText == "" && document.getElementById("lNameChecker").innerText == "" && document.getElementById("emailCheckerLength").innerText == "" && document.getElementById("emailCheckerSymbol").innerText == "" && document.getElementById("passwordChecker").innerText == "" && document.getElementById("passwordConfirmationChecker").innerText == "" && document.getElementById("passwordMissmatchChecker").innerText == "")
        {
            document.getElementById("ErrorMessage").setAttribute("visible", "false");
        }
    }

    function AddNewUser()
    {
        var newUser = new User(document.getElementById("FirstName").value, document.getElementById("lastName").value, document.getElementById("emailAddress").value.substring(0, document.getElementById("emailAddress").value.indexOf("@")), document.getElementById("emailAddress").value, document.getElementById("password").value);
        console.log(newUser);
        document.getElementById("registerForm").reset();
    }
    
    window.addEventListener("load", Start);
})(app || (app = {}));

