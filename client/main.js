async function init() {
  const scanButton = document.getElementById('scan');
  const output = document.getElementById('output');

  // Set up scan button to fetch board items
  scanButton.addEventListener('click', async () => {
    const items = await miro.board.get({ type: ['sticky_note', 'shape', 'text'] });
    const simple = items.map(item => ({
      id: item.id,
      x: item.x,
      y: item.y,
      content: item.content
    }));
    output.textContent = JSON.stringify(simple, null, 2);
  });

  // Register icon click event to open the panel
  await miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({
      url: 'https://raw.githubusercontent.com/Benitodilorenzo/MiroBoardAgent/main/client/index.html'
    });
  });
}

miro.onReady(() => {
  init();
});
