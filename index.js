/**
 * Created by TG on 6/29/16.
 */
$(document).ready(function(){
    var textArea = $("#jsonText");
    var parseArea = $("#jsonParse");
    var parseContent = null;
    var textContent = null;
    $("button").click(function () {
        textContent = $.trim(textArea.val());

        var obj = $.parseJSON(textContent);
        function decode() {
            console.log(obj);
        }
        decode();
    });
});