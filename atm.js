function atmOperation(){
let balance = 35000;
while (balance == 35000) {
  alert("Welcome to Bolam Trust Bank PLC \n Please insert your card");

  let defaultPin = 3245;
  let pin = parseInt(prompt("Enter Pin"));
  if (pin == defaultPin) {
    let transactionOpt = parseInt(
      prompt(`Select transaction type:
      1. Bank Payment     2. Withdrawal
      3. Change Pin       4. Transfer
      5. Balance          6. Airtime`)
    );

    // If TransactionOpt is 2 it means Withdrawal

    if (transactionOpt === 2) {
      parseInt(prompt("Enter Amount"));
      alert("Transaction processing. Please wait");
      let receipt = parseInt(
        prompt(`Transaction Successful. Do you want a receipt for this transaction?
              1. Yes
              2. No`)
      );
      if (receipt === 1) {
        alert("Printing receipt. Please wait.");
        alert("Thank you Please take your card and receipt.");
      } else if (receipt === 2) {
        alert("Thanks for Banking with us. Please Remove Your card.");
      }
      // If TransactionOpt is 4 it means Transfer
    } else if (transactionOpt === 4) {
      let BeneficiaryBank = parseInt(
        prompt(`Select Beneficiary's Bank:
      1. Access bank      3. UBA
      2. First Bank       3. GTB
      5. Fidelity         6. Jaiz Bank`)
      );
      if (BeneficiaryBank === 1 || 2 || 3 || 4 || 5 || 6) {
        let accNum = parseInt(prompt("Enter account number"));
        let transferAmt = +prompt(`Select amount to deposit :
          1. #1000
          2. #5,000
          3. #10,000
          4. #20,000
          5. Others`);
        if (transferAmt <= 4) {
          alert("Processing...");
          alert("Congratulations! Transaction Successful");
        } else if (transferAmt == 5) {
          parseInt(prompt("Enter Amount:"));
          alert("Transaction Processing...");
          alert(
            `Congratulations! Transaction Successful
            Thanks for banking with Us`
          );
        }
      } else {
        alert("Please select a valid option");
      }

      // If TransactionOpt is 5 it means Balance
    } else if (transactionOpt === 5) {
       balance = "#" + 35000;

      alert(`Your New Account Balance is ${balance}`);
    }

    //  If TransactionOpt is 6 it means Airtime
    else if (transactionOpt === 6) {
      airtime = prompt(`Kindly select an option:
          1. Self 
          2. Others`);

      if (airtime == "1") {
        airtimeAmt = +prompt(`Enter Amount:`);
        let network = parseInt(
          prompt(`Please select Network
                          1. MTN
                          2. Airtel
                          3. Glo
                          4. 9Mobile`)
        );
        alert(
          `You are about to Purchased airtime of ${airtimeAmt} for self`
        );

        let pin = parseInt(prompt("Enter Your Pin:"));

        alert(
          `You have successfully Purchased an airtime of ${airtimeAmt}`
        );
      } else if (airtime == "2") {
        let network = parseInt(
          prompt(`Please select Network
                          1. MTN
                          2. Airtel
                          3. Glo
                          4. 9Mobile`)
        );
        phoneNum = parseInt(prompt("Enter Phone Number:"));
        airtimeAmt = parseInt(prompt(`Enter Amount:`));
        alert(
          `You are about to Purchase an airtime of ${airtimeAmt} for ${phoneNum}`
        );

        prompt(`Press OK to proceed`);
        pin = parseInt(prompt(`Enter Pin:`));
        alert(
          `You have successfully purchased an airtime of ${airtimeAmt} for ${phoneNum} .`
        );
      }
    } else {
      alert("Please select the right option");
    }
  } else {
    alert("Incorrect Pin");
  }
}
}