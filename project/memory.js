function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

var items = [
						"Source Born", "Atom IDE", "Gadu Gadu","SAP",
						"Crystals", "MS Office","Kindertap", "Adobe Reader",
						"Python","Tableau", "Jira", "Chrome"
					];

var cart = [];

var itemCounter = 0;

var c0 = document.getElementById('c1');
var c1 = document.getElementById('c2');
var c2 = document.getElementById('c3');
var c3 = document.getElementById('c4');

var c4 = document.getElementById('c5');
var c5 = document.getElementById('c6');
var c6 = document.getElementById('c7');
var c7 = document.getElementById('c8');

var c8 = document.getElementById('c9');
var c9 = document.getElementById('c10');
var c10 = document.getElementById('c11');
var c11 = document.getElementById('c12');

var order = document.getElementById('order-button');



function orderItem(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');

	if (opacityValue != 0.5)
	{
		$('#c'+nr).css('opacity','0.5');
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');
		$('.order-ul').append('<li id="item'+nr+'">Item Nr '+items[nr-1]+' will be installed once approved by your Supervisor.</li>');
		itemCounter++;
		$('.order').html('Items selected: '+itemCounter);
		cart.push(items[nr-1]);
	}
	else
	{
		$('#c'+nr).css('opacity','1');
		$('#c'+nr).addClass('card');
		$('#c'+nr).removeClass('cardA');
		$('#item'+nr).remove();
		itemCounter--;
		$('.order').html('Items selected: '+itemCounter);
		removeA(cart, items[nr-1]);
	}

	if (itemCounter == 0){
		$("#order-button").hide()
	}
	else {
		$("#order-button").show()
	}

};

function orderCart(itemCounter){
	if (itemCounter == 0){
		alert("No item selected.");
	}
	else{
		alert("Following items ordered: " + cart);
	}
};

c0.addEventListener("click", function() { orderItem(1); });
c1.addEventListener("click", function() { orderItem(2); });
c2.addEventListener("click", function() { orderItem(3); });
c3.addEventListener("click", function() { orderItem(4); });

c4.addEventListener("click", function() { orderItem(5); });
c5.addEventListener("click", function() { orderItem(6); });
c6.addEventListener("click", function() { orderItem(7); });
c7.addEventListener("click", function() { orderItem(8); });

c8.addEventListener("click", function() { orderItem(9); });
c9.addEventListener("click", function() { orderItem(10); });
c10.addEventListener("click", function() { orderItem(11); });
c11.addEventListener("click", function() { orderItem(12); });

order.addEventListener("click", function() { orderCart(itemCounter); });

window.addEventListener('load', (event) => {
	$("#order-button").hide();
});
