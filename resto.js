function showAll(){
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showMain(){
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showVeg(){
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showDes(){
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showDri(){
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showAdd(){
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='none';
	}
	function showCheckout(){
		var imageContainer = document.querySelector('.checkout');
		imageContainer.style.display='block';
		var imageContainer = document.querySelector('.all');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.main');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.veg');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.des');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.dri');
		imageContainer.style.display='none';
		var imageContainer = document.querySelector('.add');
		imageContainer.style.display='none';
	}

const checkboxes = document.querySelectorAll('.checkbox');
const quantities = document.querySelectorAll('.quantity');
const totalSpan = document.getElementById('total');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', updateTotal);
  quantities[index].addEventListener('change', updateTotal);
});

function updateTotal() {
  let total = 0;
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const price = parseInt(checkbox.parentElement.querySelector('.checkbox').value);
      const quantity = parseInt(quantities[index].value);
      total += price * quantity;
    } else {
      quantities[index].value = 1;
    }
  });
  totalSpan.textContent = total;
}

function clearSelection() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  quantities.forEach((quantity) => {
    quantity.value = 1;
  });
  updateTotal();
}