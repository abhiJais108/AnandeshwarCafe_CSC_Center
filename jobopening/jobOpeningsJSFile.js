
function addJobS(jobsArray, lastDateOfJobs,noOfVacancy,id){
  var sNO = 1;
  jobsArray.forEach((data,index) => {
    console.log(`body-of-table${id}`);
  /*   console.log(element,index);
    console.log(lastDateOfJobs[index]==new Date().toLocaleDateString()); */
    if (lastDateOfJobs[index]>=new Date().toLocaleDateString()) {
    var innerHTMLOfTable= document.getElementById(`body-of-table${id}`);
    innerHTMLOfTable.innerHTML+=(`<tr>
              <td scope="row">${sNO}</td>
              <td class="job-name-column">${jobsArray[index]}</td>
              <td class="last-date-column">${lastDateOfJobs[index]}</td>
              <td class="no-ofvacancy-column">${noOfVacancy[index]}</td>
            </tr>`);
    sNO++;
    }
    index++;
});
}
var currentjobOpenings=['Railway Group D Notification','Up Anganwadi Online Form','MP Excise Constable Jobs',
  'Railway Teacher Notification','Indian Army Group C Form',"Rajasthan 4th Grade Vacancy",'Rajasthan HC Stenographer Vacancy'];
var lastDateOfCurrJobs=['2/22/2025','1/31/2025','3/01/2025','2/05/2025','1/17/2025','4/19/2025','2/23/2025'];
var noOfVacanciesOfCurrJobs=['32438','1572','-','753','625','604','52453','144'];
var id1='1'
addJobS(currentjobOpenings,lastDateOfCurrJobs,noOfVacanciesOfCurrJobs,id1)

var upcomingJobOpenings=['MGNREGA Thane Bharti','India Post Supervisor Job','SBI PO Online Form','Up Forest Guard Bharti','Delhi Police Constable Bharti',
  'Up Police Constable Vacancy','Rajasthan Police Constable Bharti','CRPF Constable Recruitment'
];
var lastDateOfUpcomingJobs=['Coming soon','Coming soon','Coming soon','Coming soon','Coming soon','Coming soon','Coming soon','Coming soon'];
var noOfVacanciesOfUpcomingJobs=['100','2500','2000','709','7547','52699','3578','129929'];
var id2=2;
addJobS(upcomingJobOpenings,lastDateOfUpcomingJobs,noOfVacanciesOfUpcomingJobs,id2);