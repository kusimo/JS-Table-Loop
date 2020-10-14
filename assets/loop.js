(function () {
    var table = document.getElementsByTagName("table")[0];
    if (!table) return;

    var days = [];
    var subjects = [];
    var times = [];
    var myTimetable = {};
    var b = 0;


    for (var i = 0, row; row = table.rows[i]; i++) {
        b + i;
        //iterate through rows.
        // Rows would be accessed using the "row" variable assigned in the for loop.

        if (0 === i) {
            // Get the times.
            // I know the first row[0] contains the times, your case might be different.

            for (let j = 0, col; col = row.cells[j]; j++) {
                // Iterate through columns.
                // Column would be accessed using the "cols" variable in the for loop.
                if ("" !== col.textContent)
                    times.push(col.textContent)
            }
        }

        if (i > 0) {
            // Get the subjects.
            // I don't want to include the times in my data again, so I skipped the first row.
            for (let j = 0, col; col = row.cells[j]; j++) {
                // I also don't want to include the days column, so check for it and skipped.
                if (!col.textContent.includes("DAY")) {
                    subjects.push(col.textContent)
                }

            }
        }
        // Get the days.
        if ("" !== row.cells[b].textContent)
            days.push(row.cells[b].textContent)

    }

    myTimetable.times = times;
    myTimetable.days = days;
    myTimetable.subjects = subjects;
    console.log(myTimetable)
    // Convert array of object into string json.
    var jsonString = JSON.stringify(myTimetable);
    // Save for later use.
    localStorage.setItem('myTimetable', jsonString);
    // Get your saved data from local storage.
    document.getElementsByTagName("code")[0].innerHTML = localStorage.getItem('myTimetable');

}())