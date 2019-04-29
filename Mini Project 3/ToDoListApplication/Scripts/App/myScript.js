$(function () {
    /* There are 4 functions in the TasksController that you have to bind using jQuery ajax
     *
     * Name="ExpiredTasks"
     * URL="/Tasks/ExpiredTasks"
     * Type = "GET"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will return tasks that are in the past => earlier than today's date
     * To do: Call this method when the "ExpiredTasks" button is clicked.
     * Display expired tasks in the div with id="results"*/
     
     /* Name="DeleteExpiredTasks"
     * URL="/Tasks/DeleteExpiredTasks"
     * Type= "POST"
     * Input parameter = None
     * Returns JSON
     * Goal: This method will delete tasks older than today
     * To do: Call this method when the "DeleteExpiredTasks" button is clicked.
     * Display "count" and "status" in the div with id="results"*/
     
     
     /* Name="UrgentTasks"
     * URL="/Tasks/UrgentTasks"
     * Type = "GET"
     * Input parameter called as "nbr" will be an integer that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "UrgentTasks" button is clicked.
     * Display urgent tasks in the div with id="results2"*/
     
     /* Name="SearchByCategory"
     * URL="/Tasks/SearchByCategory"
     * Type = "GET"
     * Input parameter called as "searchstring" will be a string that indicates number of days
     * Returns JSON
     * Goal: This method will return tasks that are due in the next "nbr" days from today
     * To do: Call this method when the "SearchByCategory" button is clicked.
     * Display tasks that match the category in the div with id="results3"*/

    $("#ExpiredTasks").on("click", function () {

        var url = "/Tasks/ExpiredTasks";

        $.get(url, function (data) {

            console.log(data);

            if (data.length == 0) {

                $("#results").text("No results found");

            }
            else {

                $("#results").text("");

                $.each(data, function (i, item) {

                    var para = $("<p></p>").text(item.Id + " " + item.Title);
                    $("#results").append(para);

                });
            }
        });
    });

    $("#DeleteExpiredTasks").on("click", function () {

        var url = "/Tasks/DeleteExpiredTasks";

        $.post(url, function (data) {

            console.log(data);

            $("#results").text("");

            var para = $("<p></p>").text("Count: " + data.count + " Status: " + data.status);
            $("#results").append(para);

        });
    });

    $("#UrgentTasks").on("click", function () {

        var nbr = $("#NbrOfDays").val();
        var url = "/Tasks/UrgentTasks";

        $.get(url, { "nbr": nbr }, function (data) {

            console.log(data);

            if (data.length == 0) {

                $("#results2").text("No results found");

            }
            else {

                $("#results2").text("");

                $.each(data, function (i, item) {

                    var para = $("<p></p>").text(item.Id + " " + item.Title);
                    $("#results2").append(para);

                });
            }
        });
    });

    $("#SearchByCategory").on("click", function () {

        var searchstring = $("#Search").val();
        var url = "/Tasks/SearchByCategory";

        $.get(url, { "searchstring": searchstring }, function (data) {

            console.log(data);

            if (data.length == 0) {

                $("#results3").text("No results found");

            }
            else {

                $("#results3").text("");

                $.each(data, function (i, item) {

                    var para = $("<p></p>").text(item.Id + " " + item.Title);
                    $("#results3").append(para);

                });
            }
        });
    });
});     