const selectEl = document.querySelector("select");
const content = document.querySelector(".content");
const text = document.querySelector(".text");
const changeColorBtn = document.querySelector("button");

// color lists
const colorList = [
  "780C28",
  "FCE7C8",
  "5C7285",
  "B82132",
  "CAE0BC",
  "B1C29E",
  "818C78",
  "D2665A",
  "6E8E59",
  "F0A04B",
  "E2E0C8",
  "EFB036",
  "48A6A7",
  "23486A",
  "1D1616",
  "727D73",
  "123524",
  "C30E59",
  "638C6D",
  "2E5077",
  "213555",
  "D39D55",
  "F72C5B",
  "7E1891",
  "1B1833",
  "89A8B2",
  "1F4529",
  "3D3BF3",
];

let selectValue = "hex";

// Change the color when the button is clicked.
changeColorBtn.addEventListener("click", () => {
  const chooseIdxColor = Math.floor(Math.random() * colorList.length);

  // Return the content to the user
  showContent(chooseIdxColor);

  // Change the selectValue when the select menu value changes and return the content
  selectEl.addEventListener("change", (e) => {
    selectValue = e.target.value;
    showContent(chooseIdxColor);
  });
});

// Return the content that matches the condition
function showContent(chooseIdxColor) {
  if (selectValue == "hex") {
    showHexContent(chooseIdxColor);
  } else {
    showRgbContent(chooseIdxColor);
  }
}

// Return only the content in hex format.
function showHexContent(colorIdx) {
  content.style.background = `#${colorList[colorIdx]}`;
  text.textContent = `#${colorList[colorIdx]}`;
}

// Return only the content in rgb format.
function showRgbContent(colorIdx) {
  content.style.background = hexToRgb(colorList[colorIdx]);
  text.textContent = hexToRgb(colorList[colorIdx]);
  console.log(hexToRgb(colorList[colorIdx]));
}

// Convert the color from hex format to RGB format
function hexToRgb(hex) {
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
