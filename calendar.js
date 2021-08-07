// global variables
const months = {
     Jan: 31, Feb: 28, Mar: 31, April: 30, May: 31, Jun: 30, Jul: 31, Aug: 31,
    Sep: 30, Oct: 31, Nov: 30, Dec: 31
};
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = Date();
const start = 1;

// check if leap it is a Leap Year
if (parseInt(today.slice(12, 16), 10) % 4 === 0) {
    months["februray"] = 29;
}

// select js objects
const calendarsContainer = document.querySelector('#calendarContainer');

// make calendar js objects

//make table
const calendarTable = document.createElement('table');

// make table body
const tableBody = document.createElement('tbody');

// make table rows and columns
for (var i = 0; i < 6; i++) {
    const calendarRow = document.createElement('tr');
    
    for (var i = 0; i < 7; i++) {
        const calendarCol = document.createElement('td');
        
        calendarRow.appendChild(calendarCol);

        
        const cellText = document.createTextNode("heyyyy");
        calendarCol.appendChild(cellText);
    }
    tableBody.appendChild(calendarRow)
}

calendarTable.appendChild(tableBody);
calendarsContainer.appendChild(calendarTable);



// // functions
// // make the rows for the calendar
// function makeRows(index) {
//     if (index = 0) {
//         const tableHead = document.createElement('th');
//         table.appendChild(tableHead);

//         for (var i = 0; i <= 6; i++) {
//             const tableData = document.createElement('td');
//             tableData.innerHTML = daysOfWeek[i];
//             tableHead.appendChild(tableData);
//         }

//     } else {
//         const calendarRow = document.createElement('tr');
//     }
// }

// // make the columns for each row
// function makeColumns(counter, startInd, lastDay) {
//     for (var day = 1; day <= 7; day++) {
//         if (counter >= startInd && counter <= lastDay) {
//             const tableData = document.createElement('td');
//             tableData.innerHTML = counter;
//         } else {
//             const tableData = document.createElement('td');
//         }
//     }

// }

// // main