// All cost functions..

function plus180(costInput) {
  const costText = document.getElementById(costInput);
  const costNumber = parseInt(costText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  costText.innerText = costNumber + 180;
  totalPriceText.innerText = totalPriceNumber + 180;
  grandTotalText.innerText = totalPriceNumber + 180;
}

function minus180(costInput) {
  const costText = document.getElementById(costInput);
  const costNumber = parseInt(costText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  costText.innerText = costNumber - 180;
  totalPriceText.innerText = totalPriceNumber - 180;
  grandTotalText.innerText = totalPriceNumber - 180;
}

function calculateElseCost(costInput) {
  const costText = document.getElementById(costInput);
  const costNumber = parseInt(costText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  costText.innerText = costNumber;
  totalPriceText.innerText = totalPriceNumber;
  grandTotalText.innerText = totalPriceNumber;
}

//  for memory

document.getElementById("8-um").addEventListener("click", function () {
  const memoryCostText = document.getElementById("memory-cost");
  const memoryCostNumber = parseInt(memoryCostText.innerText);

  if (memoryCostNumber > 0) {
    minus180("memory-cost");
  } else {
    calculateElseCost("memory-cost");
  }
});

document.getElementById("16-um").addEventListener("click", function () {
  const memoryCostText = document.getElementById("memory-cost");
  const memoryCostNumber = parseInt(memoryCostText.innerText);
  if (memoryCostNumber == 0) {
    plus180("memory-cost");
  }
});

// for storage

document.getElementById("256-gb-ssd").addEventListener("click", function () {
  const storageCostText = document.getElementById("storage-cost");
  const storageCostNumber = parseInt(storageCostText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  if (storageCostNumber == 100) {
    storageCostText.innerText = storageCostNumber - 100;
    totalPriceText.innerText = totalPriceNumber - 100;
    grandTotalText.innerText = totalPriceNumber - 100;
  } else if (storageCostNumber == 180) {
    minus180("storage-cost");
  } else {
    calculateElseCost("storage-cost");
  }
});

document.getElementById("512-gb-ssd").addEventListener("click", function () {
  const storageCostText = document.getElementById("storage-cost");
  const storageCostNumber = parseInt(storageCostText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  if (storageCostNumber == 0) {
    storageCostText.innerText = storageCostNumber + 100;
    totalPriceText.innerText = totalPriceNumber + 100;
    grandTotalText.innerText = totalPriceNumber + 100;
  } else if (storageCostNumber == 180) {
    storageCostText.innerText = storageCostNumber - 80;
    totalPriceText.innerText = totalPriceNumber - 80;
    grandTotalText.innerText = totalPriceNumber - 80;
  } else {
    calculateElseCost("storage-cost");
  }
});

document.getElementById("1-tb-ssd").addEventListener("click", function () {
  const storageCostText = document.getElementById("storage-cost");
  const storageCostNumber = parseInt(storageCostText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  if (storageCostNumber == 0) {
    plus180("storage-cost");
  } else if (storageCostNumber == 100) {
    storageCostText.innerText = storageCostNumber + 80;
    totalPriceText.innerText = totalPriceNumber + 80;
    grandTotalText.innerText = totalPriceNumber + 80;
  } else {
    calculateElseCost("storage-cost");
  }
});

// for delivery cost

document.getElementById("friday-25").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-cost");
  const deliveryCostNumber = parseInt(deliveryCostText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  if (deliveryCostNumber > 0) {
    deliveryCostText.innerText = deliveryCostNumber - 20;
    totalPriceText.innerText = totalPriceNumber - 20;
    grandTotalText.innerText = totalPriceNumber - 20;
  } else {
    calculateElseCost("delivery-cost");
  }
});

document.getElementById("friday-21").addEventListener("click", function () {
  const deliveryCostText = document.getElementById("delivery-cost");
  const deliveryCostNumber = parseInt(deliveryCostText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);

  if (deliveryCostNumber == 0) {
    deliveryCostText.innerText = deliveryCostNumber + 20;
    totalPriceText.innerText = totalPriceNumber + 20;
    grandTotalText.innerText = totalPriceNumber + 20;
  }
});

// promo code check

document.getElementById("promo-button").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-input");
  const totalPriceText = document.getElementById("total-price");
  const totalPriceNumber = parseInt(totalPriceText.innerText);
  const grandTotalText = document.getElementById("grand-total");

  if (promoInput.value == "stevekaku") {
    grandTotalText.innerText = totalPriceNumber * (80 / 100);
    promoInput.value = "";
  }
});
