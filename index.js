var url ='http://api.covid19api.com/summary';
function getApiData(url){
fetch(url)
 .then(response =>{return response.json()})
 .then(data => displayData(data));
}
function displayData(api_data){
  console.log(api_data);

for(let i of api_data.Countries)

{
if(i.Country == 'India'){

   let Name=i.Country;
  let date =i.Date;
  let TotalConfirmed=i.TotalConfirmed;
  let TotalDeathst=i.TotalDeaths;
document.getElementById('coutryname').innerHTML=Name;
  document.getElementById('date').innerHTML=date.toString();
  document.getElementById('TotalConfirmed').innerHTML=TotalConfirmed;
  document.getElementById('TotalDeaths').innerHTML=TotalDeathst;



//     let tr = document.createElement('tr');
//
//     let td1 = document.createElement('td');
//       let td2 = document.createElement('td');
//         let td3 = document.createElement('td');
//           let td4 = document.createElement('td');
//
//           td1.innerText=`${i.Country}`;
//           td2.innerText=`${i.Date}`;
//           td3.innerText=`${i.TotalConfirmed}`;
//           td4.innerText=`${i.TotalDeaths}`;
//
//               tr.appendChild(td1);
//               tr.appendChild(td2);
//               tr.appendChild(td3);
//               tr.appendChild(td4);
//
//
// document.getElementById('myTable').appendChild(tr);


}
}}



getApiData(url);
