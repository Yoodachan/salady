

const product = document.querySelectorAll('.product');
const product_before = document.querySelectorAll('.product_before');
const product_after = document.querySelectorAll('.product_after');

const product_name = document.querySelectorAll('.product_name');
const product_global = document.querySelectorAll('.product_global');

product.forEach( (e,i) => {
	e.addEventListener('mouseenter', function () {
		product_name[i].classList.remove('name_off')
		product_name[i].classList.add('name_off')

	})
	// e.addEventListener('mouseleave')
})