function add(n1=0, n2=0)
{
	if (document.getElementById("n1") !== null)
		n1 = document.getElementById("n1").value;
	if (document.getElementById("n2") !== null)
		n2 = document.getElementById("n2").value;
	var sum = parseFloat(n1) + parseFloat(n2);
	window.alert(sum);
	return sum;
}

module.exports = add;