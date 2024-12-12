let menuItems = {
  coffee: { name: "Coffee", price: 150, quantity: 0 },
  chai: { name: "Chai", price: 60, quantity: 0 },
  samosa: { name: "Samosa", price: 50, quantity: 0 },
  icecream: { name: "Ice Cream", price: 450, quantity: 0 },
  zingerburger: { name: "Zinger Burger", price: 250, quantity: 0 },
  zingershawarma: { name: "Zinger Shawarma", price: 250, quantity: 0 },
  chickencheese: { name: "Chicken Cheese Shawarma/Burger", price: 350, quantity: 0 },
  frieswithspecialsauce: { name: "Fries with Special Sauce", price: 200, quantity: 0 },
  pasta: { name: "Pasta", price: 600, quantity: 0 },
  dipsauce: { name: "Dip Sauce", price: 40, quantity: 0 },
};

const tablebody = document.getElementById("table-body");


function updateTable() {
  tablebody.innerHTML = "";
  for (const key in menuItems) {
    const item = menuItems[key];
    if (item.quantity > 0) {
      tablebody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
        </tr>
      `;
    }
  }
}


for (const key in menuItems) {
  document.getElementById(key).addEventListener("keyup", function () {
    const quantity = parseInt(this.value) || 0;
    menuItems[key].quantity = quantity;
    updateTable();
  });
}


document.getElementById("fullname").addEventListener("keyup", function () {
  name = document.getElementById("fullname").value;
  document.getElementById("customer-name").innerHTML = name;
  //   console.log(name);
});

document.getElementById("table-no").addEventListener("keyup", function () {
  //   TableNo = this.value;
  document.getElementById("customer-table").innerHTML = this.value;
  //   console.log(TableNo);
});

document
  .getElementById("transaction-method")
  .addEventListener("change", function () {
    document.getElementById("transaction-method2").innerHTML = this.value;
  });

document.getElementById("coffee").addEventListener("keyup", function () {
  const coffeeQuantity = this.value;
  tablebody.innerHTML += updateRow("Coffee", Coffe_price, coffeeQuantity);
});

document.getElementById("chai").addEventListener("keyup", function () {
  const chaiQuantity = this.value;
  tablebody.innerHTML += updateRow("Chai", Chai_price, chaiQuantity);
});

document.getElementById("samosa").addEventListener("keyup", function () {
  const samosaQuantity = this.value;
  tablebody.innerHTML += updateRow("Samosa", Samosa_price, samosaQuantity);
});

document.getElementById("ice-cream").addEventListener("keyup", function () {
  const icecreamQuantity = this.value;
  tablebody.innerHTML += updateRow("Ice Cream", Icecream_price, icecreamQuantity);
});

document.getElementById("zingerburger").addEventListener("keyup", function () {
  const zingerQuantity = this.value;
  tablebody.innerHTML += updateRow("Zinger Burger", Zingerburger_price, zingerQuantity);
});

document.getElementById("zingershwarma").addEventListener("keyup", function () {
  const shawarmaQuantity = this.value;
  tablebody.innerHTML += updateRow("Zinger Shawarma", Zingershwarma_price, shawarmaQuantity);
});

document.getElementById("chickencheezshwarmaburger").addEventListener("keyup", function () {
  const burgerQuantity = this.value;
  tablebody.innerHTML += updateRow(
    "Chicken Cheese Shawarma Burger",
    Chickencheezshwarmaburger_price,
    burgerQuantity
  );
});

document.getElementById("frieswithspecialsauce").addEventListener("keyup", function () {
  const friesQuantity = this.value;
  tablebody.innerHTML += updateRow("Fries with Special Sauce", frieswithspecialsauce_price, friesQuantity);
});

document.getElementById("pasta").addEventListener("keyup", function () {
  const pastaQuantity = this.value;
  tablebody.innerHTML += updateRow("Pasta", pasta_price, pastaQuantity);
});

document.getElementById("dipsauce").addEventListener("keyup", function () {
  const dipsQuantity = this.value;
  tablebody.innerHTML += updateRow("Dip Sauce", Dipsauce_price, dipsQuantity);
});

function calculateTotal() {
  let totalAmount = 0;
  for (const key in menuItems) {
    const item = menuItems[key];
    totalAmount += item.price * item.quantity;
  }
  const amountElements = document.querySelectorAll("#amount");
  amountElements.forEach((element) => {
    element.innerHTML = totalAmount;
  });
}

function updateTable() {
  tablebody.innerHTML = "";
  for (const key in menuItems) {
    const item = menuItems[key];
    if (item.quantity > 0) {
      tablebody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
        </tr>
      `;
    }
  }
  calculateTotal();
}

function calculateTotal() {
  let totalAmount = 0;
  for (const key in menuItems) {
    const item = menuItems[key];
    totalAmount += item.price * item.quantity;
  }
  const amountElements = document.querySelectorAll("#amount");
  amountElements.forEach((element) => {
    element.innerHTML = totalAmount;
  });
}

function updateTable() {
  tablebody.innerHTML = "";
  for (const key in menuItems) {
    const item = menuItems[key];
    if (item.quantity > 0) {
      tablebody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
        </tr>
      `;
    }
  }
  calculateTotal();
}

function calculateTotal() {
  let totalAmount = 0;
  for (const key in menuItems) {
    const item = menuItems[key];
    totalAmount += item.price * item.quantity;
  }
  document.getElementById("amount").innerText = totalAmount;
}

for (const key in menuItems) {
  document.getElementById(key).addEventListener("keyup", function () {
    const quantity = parseInt(this.value) || 0;
    menuItems[key].quantity = quantity;
    updateTable();
  });
}

function printBill() {
  const customerName = document.getElementById("fullname").value;
  const tableNumber = document.getElementById("table-no").value;
  const transactionMethod = document.getElementById("transaction-method").value;
  const totalAmount = document.getElementById("amount").innerText;

  let billContent = `
    <h2>Bill</h2>
    <p><strong>Customer Name:</strong> ${customerName}</p>
    <p><strong>Table No:</strong> ${tableNumber}</p>
    <p><strong>Transaction Method:</strong> ${transactionMethod}</p>
    <table border="1" style="width: 100%; margin-top: 20px; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>`;

  for (const key in menuItems) {
    const item = menuItems[key];
    if (item.quantity > 0) {
      billContent += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
        </tr>
      `;
    }
  }

  billContent += `
      </tbody>
    </table>
    <p><strong>Total Amount: RS ${totalAmount}</strong></p>
  `;

  const newWindow = window.open('', '', 'height=500, width=800');
  newWindow.document.write('<html><head><title>Bill</title></head><body>');
  newWindow.document.write(billContent);
  newWindow.document.write('</body></html>');
  newWindow.document.close();
  newWindow.print();
}

document.querySelector(".btn").addEventListener("click", printBill);