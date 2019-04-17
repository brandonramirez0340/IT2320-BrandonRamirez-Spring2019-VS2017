$(function () {
    /*
    ../Books - shows list of Books
    ../ Authors - shows list of Authors
    
    ../Books/Search - returns a JSON array of all books written by the given Author
        -This is a GET method
        -Input parameter is a string (Author name)
        -This method returns a JSON
    
    ../Books/DeleteByAuthor - returns a JSON object showing count and status of books deleted 
    - This is a POST method
    - Input parameter is a string (Author name)
    -This method returns a JSON
    */

    $("#search").on("click", function () {

        var searchstring = $("#AuthorSearch").val();
        var url = "/Books/Search";

        $.get(url, { "s": searchstring }, function (data) {

            console.log(data);

            if (data.length == 0) {

                $("#results").text("No results found for the search string")

            }
            else {

                $("#results").text("");

                $.each(data, function (i, item) {

                    var para = $("<p></p>").text(item.Title + " " + item.Year);
                    $("#results").append(para);

                });
            }
        });
    });

    $("#delete").on("click", function () {

        var searchstring = $("#AuthorSearch").val();
        var url = "/Books/DeleteByAuthor";

        $.post(url, { "s": searchstring }, function (data) {

            console.log(data);

        });
    });
});