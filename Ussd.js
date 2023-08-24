    function ussdOperation(){
    let bankName = alert("Welcome to Bolam's bank Easy banking!");
      let defaultussdCode = "*345#";
      let ussdCode = prompt("Dial *345# to begin");
      if (ussdCode !== defaultussdCode) {
        alert("Incorrect USSD Code");
      }

      let option;
      do {
        option = +prompt(`Select what you would like to do:
            1. Transfers
            2. Airtime
            3. Check Balance
            4. Bills Payment
            5. Data`);
      } while (
        option !== 1 &&
        option !== 2 &&
        option !== 3 &&
        option !== 4 &&
        option !== 5
      );

      switch (option) {
        //   case 1 is Transfer
        case 1:
          prompt(`
               1. Send to Account Number
                 2. Pay with PhoneNumber
                 3. Send to Merchant ID`);

          let transferAmount = +prompt("Enter Amount:");
          let accountNum = +prompt(`Enter Acc. No`);
          prompt(`Select recipient's bank 
                1. FBN
                2. Access
                3. UBA
                4. Fidelity
                5. Enter 3 letters of bank name`);

          let name = "Aisha";
          alert(`You're about to transfer ${transferAmount} to ${name}`);

          prompt(`Press OK to proceed`);

          let pin = parseInt(prompt("Enter Your pin"));

          alert(
            `You have successfully transferred ${transferAmount} to ${name}`
          );

          prompt(`Add ${name} as Beneficiary`);

          confirm = prompt(`
            1. Yes
            2. No`);

          if (confirm == "1") {
            alert(" Beneficiary added");
          } else {
            alert("Thanks for banking with us");
          }
          break;

        //   case 2 is for Airtime
        case 2:
          let airtime = prompt(`Kindly select an option:
                1. Self 
                2. Others`);

          if (airtime == "1") {
            let airtimeAmt = parseInt(prompt("Enter Amount:"));
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
            +prompt("Enter Your Pin:");

            alert(
              `You have successfully Purchased an airtime of ${airtimeAmt}`
            )
          } else if (airtime == "2") {
            phoneNum = parseInt(prompt(`Enter Phone Number:`));
            airtimeAmt = parseInt(prompt(`Enter Amount:`));
            alert(
              `You are about to Purchase an airtime of ${airtimeAmt} for ${phoneNum}`
            );

            prompt(`Press OK to proceed`);
            parseInt(prompt(`Enter Pin:`));
            alert(
              `You have successfully purchased an airtime of ${airtimeAmt} for ${phoneNum}.`
            );
          }
          break;

        //   case 3 is for account balance
        case 3:
          accountNum = parseInt(prompt("Enter Account Number:"));
          pin = prompt("Enter Your Pin:");
          alert("Retrieving Balance You will receive an SMS shortly");
          alert("Thanks for Banking with Us.");
          break;

        default:
          alert("Sorry, You have entered a wrong code. \n Try again later");
      }
    }
