async function init() {
  const scanButton = document.getElementById('scan');
  const output = document.getElementById('output');
  const chat = document.getElementById('chat');

  scanButton.addEventListener('click', async () => {
    // Fetch sticky notes, shapes, and text items on the board
    const items = await miro.board.get({ type: ['sticky_note', 'shape', 'text'] });
    // Transform to simple objects to display
    const simple = items.map(item => ({
      id: item.id,
      x: item.x,
      y: item.y,
      content: item.content
    }));
    output.textContent = JSON.stringify(simple, null, 2);

    // Display a hello message in the chat area
    chat.textContent = 'Hello from Miro Board Agent!';
  });
}

init();
