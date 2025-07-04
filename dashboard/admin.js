let menuData = JSON.parse(localStorage.getItem('menuData')) || [];

function renderMenu() {
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = '';
  menuData.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name} - Rp ${item.price}</span>
      <button onclick="editMenu(${index})">Edit</button>
      <button onclick="deleteMenu(${index})">Hapus</button>
    `;
    menuList.appendChild(li);
  });
}

function addMenu(event) {
  event.preventDefault();
  const name = document.getElementById('menuName').value;
  const price = document.getElementById('menuPrice').value;
  const image = document.getElementById('menuImage').value;

  menuData.push({ name, price, image });
  localStorage.setItem('menuData', JSON.stringify(menuData));
  renderMenu();
  document.getElementById('menuForm').reset();
}

function editMenu(index) {
  const item = menuData[index];
  document.getElementById('menuName').value = item.name;
  document.getElementById('menuPrice').value = item.price;
  document.getElementById('menuImage').value = item.image;
  deleteMenu(index);
}

function deleteMenu(index) {
  menuData.splice(index, 1);
  localStorage.setItem('menuData', JSON.stringify(menuData));
  renderMenu();
}

document.getElementById('menuForm').addEventListener('submit', addMenu);
renderMenu();
