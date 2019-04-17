$(function () {
    /*
    ../Books - shows list of Books
    ../ Authors - shows list of Authors
    
    ../Books/Search - returns a JSON array of all books written by the given Author
        -This is a GET method
        -Input parameter is a string (Author name)
        -This method returns a JSON
    
    ../Books/DeleteByAuthor - returns a JSOn object showing count and status of books deleted 
    - This is a POST method
    - Input parameter is a string (Author name)
    -This method returns a JSON

    */

    $("#search").on("click", function () {

        var searchstring = $("#AuthorSearch").val();

        var url = "/Books/Search";

        //url, data to be sent, function that is used to parse return data from backend method

        $.get(url, { "s": searchstring }, function (data) {
            console.log(data);

            $.each(data, function (i, item) {

                var para = $("<p></p>").text(item.Id + " " + item.Title + " " + item.Year);
                $("#results").append(para);

            });

        });
    });
    $("#delete").on("click", function () {

        var searchstring = $("#AuthorSearch").val();

        var url = "/Books/DeleteByAuthor";

        $.post(url, { "s": searchstring }, function (data) {
            console.log(data);

            var para = $("<p></p>").text(data.count + " " + data.status);
            $("#results").append(para);
        });
    });

});
