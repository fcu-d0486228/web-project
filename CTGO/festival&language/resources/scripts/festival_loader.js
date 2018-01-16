$(document).ready(function() {
    $.ajax({
        url: "../common/resources/data/abo_data_map.json",
        type: "GET",
        dataType: "json",
        success: function(aboDataMapJson) {
            $.each(aboDataMapJson, function(dataIndex, dataEelement) {
                $('.abos').append('<div class="abo-item"><img class="totem" src="' + dataEelement.totem + '"><span>' + dataEelement.chinese + '</span></div>');
            });
        }, 
        error: function() {}
    });
});