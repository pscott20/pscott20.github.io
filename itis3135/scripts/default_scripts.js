window.onload = function() 
{
  document.getElementById("testButton").onclick = scriptTest;
}

function scriptTest() 
{
  alert("Script is Running");
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("calculators-dropdown-options").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.calculators-dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("calculators-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

