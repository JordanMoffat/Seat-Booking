var jsondata = {
    "who": "RSNO",
        "what": "An American Festival",
        "when": "2013-02-08 19:30",
        "where": "User Hall - Main Auditorium",
        "seats": ["00000000000000000011111111111111000000000000000000", "0000000000000001111111111111111aaa0000000000000000", "00000000000000aa111111111111111aaaaa00000000000000", "00000000000001111111111111111111111111000000000000", "000000000aa00aaaaaaaaaaaaaaaaaaaaaa1100aa000000000", "00000001111001111111111111111111111100111100000000", "00000aaaaaa0011aaaaaaaaa11111111aaa1100aaaaaa00000", "00001111111001111111111111111111111100111111100000", "000aaaaaaa110011111111111111111111110011aaaaaaa000", "00111111111100111111111111111111111001111111111000", "00aaaaa1111110011111111111111111111001111aaaaaaa00", "11111111111100111111111111111111111001111111111110", "0aaaaaaaaaaaa001111111111111111111100aaaaaaaaaaaa0", "01111111111110011111111111111111110011111111111100", "00000000000000001111111111111111110000000000000000", "01111111111111001111111111111111100111111111111100", "01111111111111001111111111111111110011111111111110", "01111111111111001111111111111111100111111111111100", "00a11111111111100111111111111111100111111111111a00", "00111111111111100111111111111111001111111111111000", "00011111111111110011111111111111001111111111111000", "00111111111111100111111111111111001111111111111000", "00011111111111110011111111111111001111111111111000", "00011111111111110011111111111110011111111111110000", "0000000111a111111001111a1111a110011111111110000000", "00000000111111110011111111111110011111111000000000", "00000000001111111001111111111110011111110000000000", "00000000000000111001111111111100111000000000000000"],
        "rows": ["DD", "CC", "BB", "AA", "Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "N", "M", "L", "K", "J", "H", "G", "F", "E", "D", "C", "B", "A"],
        "seatPrice": ["                  00000000000000                  ", "               0000000000000000000                ", "              0000000000000000000000              ", "             0000000000000000000000000            ", "         00  000000000000000000000000  00         ", "       0000  00000000000000000000000  0000        ", "     000000  000000000000000000000000  000000     ", "    0000000  00000000000000000000000  0000000     ", "   000000000  0000000000000000000000  000000000   ", "  0000000000  000000000000000000000  0000000000   ", "  00000000000  00000000000000000000  00000000000  ", "000000000000  000000000000000000000  000000000000 ", " 000000000000  00000000000000000000  000000000000 ", " 000000000000  0000000000000000000  000000000000  ", "                000000000000000000                ", " 0000000000000  00000000000000000  0000000000000  ", " 0000000000000  000000000000000000  0000000000000 ", " 0000000000000  00000000000000000  0000000000000  ", "  0000000000000  0000000000000000  0000000000000  ", "  0000000000000  000000000000000  0000000000000   ", "   0000000000000  00000000000000  0000000000000   ", "  0000000000000  000000000000000  0000000000000   ", "   0000000000000  00000000000000  0000000000000   ", "   0000000000000  0011111111100  0000000000000    ", "       0000000000  111111111111  0000000000       ", "        00000000  1111111111111  00000000         ", "          0000000  111111111111  0000000          ", "              000  00000000000  000               "],
    "priceLookup": [10, 20] };

$.getJSON('jsondata' , function(data) {
    var tbl_body = "";
    $.each(jsondata.seats, function() {
        var tbl_row = "";
        $.each(this, function(k , v) {
                tbl_row += "<td>"+v+"</td>";
        });
        tbl_body += "<tr>"+tbl_row+"</tr>";                 
    });
    $("#order").html(tbl_body);
});

$.getJSON('jsondata' , function(data) {
    var tbl_body = "";
    $.each(jsondata.seatPrice, function() {
        var row_row = "";
        $.each(this, function(k , v) {
                row_row += "<td class="+v+"></td>";
        });
        tbl_body += "<tr>"+row_row+"</tr>";                 
    });
    $("#order").appendhtml(tbl_body);
});

$(document).ready(function () {
    var p1=0,
        p2=0;
    $('#cheap').text(p1 + ' Standard seats at £' + (p1*10));
    $('#premium').text(p2 + ' Premium seats at £' + (p2*20));
    $('td').click(function () {
       // alert(($(this).attr("id")));
        if ($(this).parent().hasClass('x')) {
            alert("Seat " + ($(this).parent().attr("id")) + " is taken");
        } else if ($(this).parent().hasClass('selected')){
            $(this).attr('src', 'images/a.gif');
            $(this).parent().removeClass('selected');
            var z = $(this).parent().attr('id');
            if ($(this).parent().hasClass('n')){
                p1--;                
            } else if ($(this).parent().hasClass('p')){
                p2--;
            }
            $('#'+z+'1').remove();
        } else {
            if ($(this).parent().hasClass('n')){
                p1++;                
            } else if ($(this).parent().hasClass('p')){
                p2++;
            }
            $(this).attr('src', 'images/c.gif');
            $(this).parent().addClass('selected');
           // alert($(this).parent().attr("class"));
           var z1 = $(this).parent().attr('id');
			$('<li>').attr('id', z1+'1' ).text(z1).appendTo('#order');
                      
        }
        $('#cheap').text(p1 + ' Standard seats at £' + (p1*10));
        $('#premium').text(p2 + ' Premium seats at £' + (p2*20));
		$('#total').text('Total = £' + ((p1*10)+(p2*20)));
        return false;
    });
});

//$(data.seats).each(function (index, element) {
//$('#plan').append('<tr><td> ' + element[0] + ' </td></tr>');
//})
