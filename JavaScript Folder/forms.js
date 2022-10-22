function showData()
  {
    var people = document.getElementById("passenger").value;
    var dest = document.getElementById("destination").value;
  
     var destcost = 0
    if (dest == "Denver" || dest == "Houston")
    {
      var destcost = 300
    }
    
    else
    {
      var destcost = 400
    }

    
    document.getElementById("p1").innerHTML = "Travel package for " +people+ " at " +dest;
    document.getElementById("p2").innerHTML = "Projected cost " +people * destcost+ " dollars.";
   
  }

function display()
        {
          var x = document.getElementById("cname").value;
          alert("Booking successful "+x);
        }