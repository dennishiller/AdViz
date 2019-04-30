
    if (loggedIn) {
        document.getElementById("mapAndList").style.display = '';

        document.getElementById("login_screen").style.display = 'none';
        $("#mapAndList").show();
    } else {
        alert(loggedIn)
        document.getElementById("login_screen").style.display = '';
        $("#login_screen").show();
    }