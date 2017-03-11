$(function() {
    $("form").on("submit", function(e) {
        var search;
        e.preventDefault();
        //prepare the request
        var request = gapi.client.language.translations.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").vall()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:002"
        });
        // execute the request
        request.execute(function(response) {
            var results = response.results;
            $.each(results.items, function(index, item) {
                $.get('tpl/item.html', function(data) {
                    $('#results').append(data)
                });
                //$('#results').append(item.id.videoId+''+item.snippet.title+'<br>');
            });
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyC1J-jvQhvEmPx94Hv-4d1IrQ4VyIp1mfc");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}