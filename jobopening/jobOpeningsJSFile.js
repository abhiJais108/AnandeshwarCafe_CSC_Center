console.log("asdsdasdasd")
var jobOpeningsArray=['Railway Group D Notification','Up Anganwadi Online Form','MP Excise Constable Jobs',
    'Railway Teacher Notification','Indian Army Group C Form'];
var lastDateOfJobs=['2/22/2025','1/31/2025','3/01/2025','2/05/2025','1/17/2025'];
var noOfVacancies=['32438','1572','-','753','625','604'];
var sNO = 1;
jobOpeningsArray.forEach((element,index) => {
  /*   console.log(element,index);
    console.log(lastDateOfJobs[index]==new Date().toLocaleDateString()); */
    if (lastDateOfJobs[index]>=new Date().toLocaleDateString()) {
    var innerHTMLOfTable= document.getElementById("body-of-table");
    innerHTMLOfTable.innerHTML+=(`<tr>
              <th scope="row">${sNO}</th>
              <td>${jobOpeningsArray[index]}</td>
              <td>${lastDateOfJobs[index]}</td>
              <td>${noOfVacancies[index]}</td>
            </tr>`);
    sNO++;
    }
    index++;
            
    
});

