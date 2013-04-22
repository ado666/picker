
$(function(){
    var openPicker   = function(e){
        var mainWindow  = $('#pick-window');

        if (mainWindow.css('display') == 'none'){
            mainWindow.show();
        }else if (mainWindow.css('display') == 'block'){
            mainWindow.hide();
        };

        setTimeout(function(){
            $('#pick-loader').hide();
        }, 5000)
    };


    var pickButton  = $('#pick-button');

    pickButton.click(openPicker);
})
