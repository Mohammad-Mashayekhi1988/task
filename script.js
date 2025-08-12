document.querySelectorAll('.dropBtn').forEach((btn) => {
  const content = btn.nextElementSibling; 

  btn.addEventListener('click', (e) => {
//    close all menu
    document.querySelectorAll('.dropContent').forEach((c) => {
      if (c !== content) c.style.display = 'none';
    });

    // close/open menu
    content.style.display = content.style.display === 'block' ? 'none' : 'block';

    e.stopPropagation(); 
  });
});

// close menu click out
document.addEventListener('click', () => {
  document.querySelectorAll('.dropContent').forEach((c) => (c.style.display = 'none'));
});





  const btn = document.getElementById('menubtn');
    const menu = document.getElementById('dropdown');

    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });