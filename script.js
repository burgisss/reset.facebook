const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    login();
  }
});

function login(){
  let name = nameInput.value.trim();
  if(name === ""){
    alert("ENTER NAME");
    return;
  }

  document.getElementById("loginPage").style.display = "none";
  document.getElementById("birthdayPage").style.display = "block";

  document.getElementById("birthdayName").innerText = `Happy Birthday ${name}`;

  startConfetti();
}

function startConfetti(){
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];
  for(let i=0;i<150;i++){
    confetti.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      size:5+Math.random()*5,
      speed:2+Math.random()*3,
      color:"hsl("+Math.random()*360+",100%,50%)"
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(p=>{
      ctx.fillStyle=p.color;
      ctx.fillRect(p.x,p.y,p.size,p.size);
      p.y += p.speed;
      if(p.y>canvas.height){
        p.y=0;
        p.x=Math.random()*canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }

  animate();
}