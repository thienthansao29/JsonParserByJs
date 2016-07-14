/**
 * Created by TG on 6/29/16.
 */
$(document).ready(function(){
    var textArea = $("#jsonText");
    var parseArea = $("#jsonParse");

    $("button").click(function () {
        textContent = $.trim(textArea.val());
        obj = "";
        obj = $.parseJSON(textContent);

        var printObject = function( o, maxLevel, level ) {
            if ( typeof level == "undefined" ) {
                level = 0;
            }
            if ( typeof level == "undefined" ) {
                maxLevel = 0;
            }

            var str = '';

            // the close pre tag on the bottom as well
            if ( level == 0 ) {
                str = '<ul>';
            }

            if ( maxLevel != 0 && level >= maxLevel ) {
                str += levelStr + '...</br>';
                return str;
            }

            for ( var p in o ) {
                if ( typeof o[p] == 'string' ) {
                    str += '<li class="dropdown"><span class="property">' +　p + '</span>: ' + o[p] + ' </li>';
                } else {
                    str += '<li class="dropdown"><span class="property cursor">' +
                        p + '</span>: <span class="toggle">{ <ul>' + printObject( o[p], maxLevel, level + 1 ) + '</ul><span class="toggle">}</span></li>';
                }
            }

            // the open pre tag on the top as well
            if ( level == 0 ) {
                str += '</ul>';
            }
            return str;
        };

        parseArea.empty();//clear parse textarea
        parseArea.append(printObject(obj));//print json text into parse textarea

        $('span.property').click(function() {
		   $(this).parent().find('ul').toggle();
		   if($(this).parent().find('ul').is(':visible')){
		    	$(this).parent().find('span.toggle').removeClass('toggleColor');
		   }else{
		   		$(this).parent().find('span.toggle').addClass('toggleColor');
		   }
		});
    });
});