async function init() {
  // Register icon click event to open our panel
  await miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({
      url: "https://raw.githubusercontent.com/Benitodilorenzo/MiroBoardAgent/main/index.html"
    });
  });
}

// Initialize the app
init();
