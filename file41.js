function makepayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment has been processed");
      resolve();
    }, 1000);
  });
}

function sendConfirmation() {
  console.log("Order has been placed Successfully");
}

makepayment()
  .then(() => sendConfirmation())
  .catch((err) => console.log(err));
