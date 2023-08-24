const getSumBtn = document.createElement("button");
const item=document.querySelectorAll('.item');
const price=document.querySelectorAll('.price');


getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let totalPrice=0;
	price.forEach(priceElement=>{
		totalPrice+=parseInt(priceElement.textContent);
	});
    const row=document.createElement('tr');
	const totalPriceCell=document.createElement('td');
	totalPriceCell.textContent="totalPrice";
	totalPriceCell.colspan=1;

	const totalPriceAmountCell=document.createElement('td');
	totalPriceAmountCell.textContent=totalPrice;

	row.appendChild(totalPriceCell);
	row.appendChild(totalPriceAmountCell);

	const tableBody=document.querySelector('table');
	tableBody.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

