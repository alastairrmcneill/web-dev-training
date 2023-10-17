wordList = [
  'About', 'Alert', 'Argue', 'Beach',
  'Above', 'Alike', 'Arise', 'Began',
  'Abuse', 'Alive', 'Array', 'Begin',
  'Actor', 'Allow', 'Aside', 'Begun',
  'Acute', 'Alone', 'Asset', 'Being',
  'Admit', 'Along', 'Audio', 'Below',
  'Adopt', 'Alter', 'Audit', 'Bench',
  'Adult', 'Among', 'Avoid', 'Billy',
  'After', 'Anger', 'Award', 'Birth',
  'Again', 'Angle', 'Aware', 'Black',
  'Agent', 'Angry', 'Badly', 'Blame',
  'Agree', 'Apart', 'Baker', 'Blind',
  'Ahead', 'Apple', 'Bases', 'Block',
  'Alarm', 'Apply', 'Basic', 'Blood',
  'Album', 'Arena', 'Basis', 'Board',
  'Boost', 'Buyer', 'China', 'Cover',
  'Booth', 'Cable', 'Chose', 'Craft',
  'Bound', 'Calif', 'Civil', 'Crash',
  'Brain', 'Carry', 'Claim', 'Cream',
  'Brand', 'Catch', 'Class', 'Crime',
  'Bread', 'Cause', 'Clean', 'Cross',
  'Break', 'Chain', 'Clear', 'Crowd',
  'Breed', 'Chair', 'Click', 'Crown',
  'Brief', 'Chart', 'Clock', 'Curve',
  'Bring', 'Chase', 'Close', 'Cycle',
  'Broad', 'Cheap', 'Coach', 'Daily',
  'Broke', 'Check', 'Coast', 'Dance',
  'Brown', 'Chest', 'Could', 'Dated',
  'Build', 'Chief', 'Count', 'Dealt',
  'Built', 'Child', 'Court', 'Death',
  'Debut', 'Entry', 'Forth', 'Group',
  'Delay', 'Equal', 'Forty', 'Grown',
  'Depth', 'Error', 'Forum', 'Guard',
  'Doing', 'Event', 'Found', 'Guess',
  'Doubt', 'Every', 'Frame', 'Guest',
  'Dozen', 'Exact', 'Frank', 'Guide',
  'Draft', 'Exist', 'Fraud', 'Happy',
  'Drama', 'Extra', 'Fresh', 'Harry',
  'Drawn', 'Faith', 'Front', 'Heart',
  'Dream', 'False', 'Fruit', 'Heavy',
  'Dress', 'Fault', 'Fully', 'Hence',
  'Drill', 'Fibre', 'Funny', 'Night',
  'Drink', 'Field', 'Giant', 'Horse',
  'Drive', 'Fifth', 'Given', 'Hotel',
  'Drove', 'Fifty', 'Glass', 'House',
  'Dying', 'Fight', 'Globe', 'Human',
  'Eager', 'Final', 'Going', 'Ideal',
  'Early', 'First', 'Grace', 'Image',
  'Earth', 'Fixed', 'Grade', 'Index',
  'Eight', 'Flash', 'Grand', 'Inner',
  'Elite', 'Fleet', 'Grant', 'Input',
  'Empty', 'Floor', 'Grass', 'Issue',
  'Enemy', 'Fluid', 'Great', 'Irony',
  'Enjoy', 'Focus', 'Green', 'Juice',
  'Enter', 'Force', 'Gross', 'Joint',
  'Judge', 'Metal', 'Media', 'Newly',
  'Known', 'Local', 'Might', 'Noise',
  'Label', 'Logic', 'Minor', 'North',
  'Large', 'Loose', 'Minus', 'Noted',
  'Laser', 'Lower', 'Mixed', 'Novel',
  'Later', 'Lucky', 'Model', 'Nurse',
  'Laugh', 'Lunch', 'Money', 'Occur',
  'Layer', 'Lying', 'Month', 'Ocean',
  'Learn', 'Magic', 'Moral', 'Offer',
  'Lease', 'Major', 'Motor', 'Often',
  'Least', 'Maker', 'Mount', 'Order',
  'Leave', 'March', 'Mouse', 'Other',
  'Legal', 'Music', 'Mouth', 'Ought',
  'Level', 'Match', 'Movie', 'Paint',
  'Light', 'Mayor', 'Needs', 'Paper',
  'Limit', 'Meant', 'Never', 'Party',
  'Peace', 'Power', 'Radio', 'Round',
  'Panel', 'Press', 'Raise', 'Route',
  'Phase', 'Price', 'Range', 'Royal',
  'Phone', 'Pride', 'Rapid', 'Rural',
  'Photo', 'Prime', 'Ratio', 'Scale',
  'Piece', 'Print', 'Reach', 'Scene',
  'Pilot', 'Prior', 'Ready', 'Scope',
  'Pitch', 'Prize', 'Refer', 'Score',
  'Place', 'Proof', 'Right', 'Sense',
  'Plain', 'Proud', 'Rival', 'Serve',
  'Plane', 'Prove', 'River', 'Seven',
  'Plant', 'Queen', 'Quick', 'Shall',
  'Plate', 'Sixth', 'Stand', 'Shape',
  'Point', 'Quiet', 'Roman', 'Share',
  'Pound', 'Quite', 'Rough', 'Sharp',
  'Sheet', 'Spare', 'Style', 'Times',
  'Shelf', 'Speak', 'Sugar', 'Tired',
  'Shell', 'Speed', 'Suite', 'Title',
  'Shift', 'Spend', 'Super', 'Today',
  'Shirt', 'Spent', 'Sweet', 'Topic',
  'Shock', 'Split', 'Table', 'Total',
  'Shoot', 'Spoke', 'Taken', 'Touch',
  'Short', 'Sport', 'Taste', 'Tough',
  'Shown', 'Staff', 'Taxes', 'Tower',
  'Sight', 'Stage', 'Teach', 'Track',
  'Since', 'Stake', 'Teeth', 'Trade',
  'Sixty', 'Start', 'Texas', 'Treat',
  'Sized', 'State', 'Thank', 'Trend',
  'Skill', 'Steam', 'Theft', 'Trial',
  'Sleep', 'Steel', 'Their', 'Tried',
  'Slide', 'Stick', 'Theme', 'Tries',
  'Small', 'Still', 'There', 'Truck',
  'Smart', 'Stock', 'These', 'Truly',
  'Smile', 'Stone', 'Thick', 'Trust',
  'Smith', 'Stood', 'Thing', 'Truth',
  'Smoke', 'Store', 'Think', 'Twice',
  'Solid', 'Storm', 'Third', 'Under',
  'Solve', 'Story', 'Those', 'Undue',
  'Sorry', 'Strip', 'Three', 'Union',
  'Sound', 'Stuck', 'Threw', 'Unity',
  'South', 'Study', 'Throw', 'Until',
  'Space', 'Stuff', 'Tight', 'Upper',
  'Upset', 'Whole', 'Waste', 'Wound',
  'Urban', 'Whose', 'Watch', 'Write',
  'Usage', 'Woman', 'Water', 'Wrong',
  'Usual', 'Train', 'Wheel', 'Wrote',
  'Valid', 'World', 'Where', 'Yield',
  'Value', 'Worry', 'Which', 'Young',
  'Video', 'Worse', 'While', 'Youth',
  'Virus', 'Worst', 'White', 'Worth',
  'Visit', 'Would', 'Vital', 'Voice',

];

const state = {
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentCol: 0,
};

function updateGrid() {
  for (let i = 0; i < state.grid.length; i++) {
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);

      box.textContent = state.grid[i][j];
    }
  }
}

function drawBox(container, row, col, letter = "") {
  const box = document.createElement("div");
  box.className = "box";
  box.id = `box${row}${col}`;
  box.textContent = letter;
  container.appendChild(box);
  return box;
}

function drawGrid(container) {
  const grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 0; i < 6; i++) {
    for (j = 0; j < 5; j++) {
      drawBox(grid, i, j);
    }
  }
  container.appendChild(grid);
}

function registerKeyboardEvents() {
  document.body.onkeydown = (e) => {
    const key = e.key;

    if (key === "Enter") {
      if (state.currentCol === 5) {
        const word = getCurrentWord();

        if (isWordValid(word)) {
          // revealWord(word);
          console.log(word)
        }
      }
    }
    if (key === "Backspace") {
      deleteLetter();
    }
    if (isLetterKey(key)) {
      playLetter(key);
    }
    updateGrid();
  };
}

function getCurrentWord() {
  word = "";
  for (i = 0; i < state.grid[0].length; i++) {
    word += state.grid[state.currentRow][i];
  }
  return word;
}

function isWordValid(word) {
  return wordList.includes(word)
}

function isLetterKey(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function playLetter(letter) {
  if (state.currentCol === 5) return;
  state.grid[state.currentRow][state.currentCol] = letter;
  state.currentCol++;
}

function deleteLetter() {
  if (state.currentCol === 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = "";
  state.currentCol--;
}

function startup() {
  const game = document.getElementById("game");
  drawGrid(game);

  registerKeyboardEvents();

  console.log(wordList)
}

startup();



