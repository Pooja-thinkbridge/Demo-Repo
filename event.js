function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
      }
      let ph = document.forms["myForm"]["phone"].value;
      if (ph == "") {
          alert("Mob No must be filled out");
          return false;
        }
        let msg = document.forms["myForm"]["message"].value;
        if (msg == "") {
            alert("Message must be filled out");
            return false;
          }
  
  }


  function func()
  {
      var fname = document.getElementById("name").value;
      document.getElementById("demo").innerHTML= "Welcome "+fname;

  }

  function upper()
  {
      msg = document.getElementById("message");
      msg.value = msg.value.toUpperCase();
  }

  document.getElementById("head").addEventListener("mouseover", over);
  document.getElementById("head").addEventListener("mouseout",mouseOut);

  function over()
  {
      document.getElementById("head").style.color="red";
  }

  function mouseOut() {
    document.getElementById("head").style.color = "black";
  }

  document.getElementById("name").addEventListener("focus",focus);

  function focus()
  {
      document.getElementById("name").style.backgroundColor="pink";
  }

  document.getElementById("btn").addEventListener("mouseleave",btn)

  function btn()
  {
      document.getElementById("btn").style.backgroundColor="lightblue";
  }

  document.getElementById("email").addEventListener("mouseenter",enter);
function enter()
{
    document.getElementById("email").style.backgroundColor="pink";   
}