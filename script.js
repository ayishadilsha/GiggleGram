// Dynamic data for wishes and quotes
const data = {
  wish: {
    birthday: {
      message: "🎂 Happy Birthday! 🎉",
      quote: "Count your life by smiles, not tears."
    },
    anniversary: {
      message: "💞 Happy Anniversary!",
      quote: "A successful marriage requires falling in love many times, always with the same person."
    },
    newyear: {
      message: "🎆 Happy New Year!",
      quote: "Cheers to a new year and another chance for us to get it right."
    },
    friendship: {
      message: "🤝 Happy Friendship Day!",
      quote: "Friendship is the golden thread that ties the heart of all the world."
    }
  },
  quote: {
    happy: {
      message: "😊 Here's a Happy Quote!",
      quote: "Happiness is not something ready-made. It comes from your own actions."
    },
    motivating: {
      message: "🚀 Motivational Boost!",
      quote: "Don't watch the clock; do what it does. Keep going."
    },
    love: {
      message: "❤️ A Love Quote for You!",
      quote: "Love is not what you say. Love is what you do."
    },
    funny: {
      message: "😂 A Funny Quote!",
      quote: "I am on a seafood diet. I see food and I eat it!"
    }
  }
};

// Handle detail page
const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const name = params.get('name');

if (type && name && data[type][name]) {
  document.getElementById('title').innerText = name.toUpperCase();
  document.getElementById('message').innerText = data[type][name].message;
  document.getElementById('quote').innerText = data[type][name].quote;
}

// --- Funny Interactive JS ---
document.querySelectorAll("button, a").forEach(element => {
  element.addEventListener("click", (e) => {
    // Create funny emoji confetti on click
    for (let i = 0; i < 10; i++) {
      let emoji = document.createElement("div");
      emoji.innerText = ["😂", "🤣", "😆", "🎉", "🤩"][Math.floor(Math.random()*5)];
      emoji.style.position = "fixed";
      emoji.style.left = (e.clientX + Math.random()*50 - 25) + "px";
      emoji.style.top = (e.clientY + Math.random()*50 - 25) + "px";
      emoji.style.fontSize = (Math.random()*20 + 20) + "px";
      emoji.style.animation = "fall 1s linear forwards";
      document.body.appendChild(emoji);
      setTimeout(()=>emoji.remove(), 1000);
    }
  });
});

// Falling emoji animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(50px);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

// Random background color change every 3 sec for fun
setInterval(()=>{
  document.body.style.background = `linear-gradient(-45deg, 
    hsl(${Math.random()*360},80%,70%), 
    hsl(${Math.random()*360},80%,70%)
  )`;
  document.body.style.backgroundSize = "400% 400%";
}, 3000);


