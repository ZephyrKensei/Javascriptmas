const calendarContainer = document.getElementById('calendar');

const items = [
    "Chocolate",
    "Candy Cane",
    "Gingerbread Man",
    "Christmas Ornament",
    "Hot Cocoa Mix",
    "Holiday Cookie",
    "Scented Candle",
    "Christmas Card",
    "Mini Puzzle",
    "Gift Voucher",
    "Festive Socks",
    "Christmas Storybook",
    "Homemade Jam",
    "Decorative Ribbon",
    "Holiday Mug",
    "Tea Sampler",
    "Christmas Playlist",
    "Snowman Kit",
    "Craft Supplies",
    "Christmas Movie",
    "Winter Scarf",
    "Personalized Ornament",
    "Board Game",
    "Photo Frame",
    "New Year's Resolution Journal"
];

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  
  let number = document.createElement('p');
  number.innerHTML = i;
  
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
  
  // Add click event listener to reveal the item
  box.addEventListener('click', function() {
    revealItem(box, i)
  })
}

// Function to reveal the item when a day is clicked
function revealItem(box, index) {
  if (!box.classList.contains('revealed')) {
    box.classList.add('revealed');
    box.innerHTML = `You revealed: ${items[index]}`;
  } else {
    box.innerHTML = "You've already revealed this item!";
  }
}
