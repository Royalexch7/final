var num = 10000;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/${num}.png`, // Background (image path or hex color).
  fg: `Images/logo.png`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
