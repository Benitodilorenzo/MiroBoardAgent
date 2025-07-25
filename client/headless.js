miro.onReady(async () => {
  miro.board.ui.on('icon:click', () =>
    miro.board.ui.openPanel({
      url: 'https://raw.githubusercontent.com/Benitodilorenzo/MiroBoardAgent/main/panel/index.html',
    })
  );
});
