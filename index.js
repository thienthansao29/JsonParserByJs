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

        obj = $.parseJSON(textContent);
        var output = '';
        function decode(obj) {
            console.log(obj);
            for (var property in obj) {
                output += "{" + property+ ':';
                if(typeof obj[property] === "object"){
                    output +=  '[';
                    decode(obj[property]);
                    output +=  ']';
                }else{
                    output += obj[property]+'}; ';
                }
            }
        }

        decode(obj);
        alert(output);
    });
});