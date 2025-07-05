function renderMenu() {
  fetch('menu_list.php')
    .then(res => res.json())
    .then(data => {
      const menuList = document.getElementById('menuList');
      menuList.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${item.name} - Rp ${item.price}</span>
          <button onclick="editMenu(${item.id}, '${item.name}', ${item.price}, '${item.image}')">Edit</button>
          <button onclick="deleteMenu(${item.id})">Hapus</button>
        `;
        menuList.appendChild(li);
      });
    });
}

function addMenu(e) {
  e.preventDefault();
  const formData = new FormData(document.getElementById('menuForm'));
  fetch('menu_add.php', {
    method: 'POST',
    body: formData
  }).then(() => {
    document.getElementById('menuForm').reset();
    renderMenu();
  });
}

function editMenu(id, name, price, image) {
  document.getElementById('menuName').value = name;
  document.getElementById('menuPrice').value = price;
  document.getElementById('menuImage').value = image;
  deleteMenu(id);
}

function deleteMenu(id) {
  fetch('menu_delete.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'id=' + id
  }).then(() => renderMenu());
}

document.getElementById('menuForm').addEventListener('submit', addMenu);
renderMenu();
