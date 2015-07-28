var jsondata = {
    "who": "RSNO",
        "what": "An American Festival",
        "when": "2013-02-08 19:30",
        "where": "User Hall - Main Auditorium",
        "seats": ["00000000000000000011111111111111000000000000000000", "0000000000000001111111111111111aaa0000000000000000", "00000000000000aa111111111111111aaaaa00000000000000", "00000000000001111111111111111111111111000000000000", "000000000aa00aaaaaaaaaaaaaaaaaaaaaa1100aa000000000", "00000001111001111111111111111111111100111100000000", "00000aaaaaa0011aaaaaaaaa11111111aaa1100aaaaaa00000", "00001111111001111111111111111111111100111111100000", "000aaaaaaa110011111111111111111111110011aaaaaaa000", "00111111111100111111111111111111111001111111111000", "00aaaaa1111110011111111111111111111001111aaaaaaa00", "11111111111100111111111111111111111001111111111110", "0aaaaaaaaaaaa001111111111111111111100aaaaaaaaaaaa0", "01111111111110011111111111111111110011111111111100", "00000000000000001111111111111111110000000000000000", "01111111111111001111111111111111100111111111111100", "01111111111111001111111111111111110011111111111110", "01111111111111001111111111111111100111111111111100", "00a11111111111100111111111111111100111111111111a00", "00111111111111100111111111111111001111111111111000", "00011111111111110011111111111111001111111111111000", "00111111111111100111111111111111001111111111111000", "00011111111111110011111111111111001111111111111000", "00011111111111110011111111111110011111111111110000", "0000000111a111111001111a1111a110011111111110000000", "00000000111111110011111111111110011111111000000000", "00000000001111111001111111111110011111110000000000", "00000000000000111001111111111100111000000000000000"],
        "rows": ["DD", "CC", "BB", "AA", "Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "xx", "P", "N", "M", "L", "K", "J", "H", "G", "F", "E", "D", "C", "B", "A"],
        "seatPrice": ["                  00000000000000                  ", "               0000000000000000000                ", "              0000000000000000000000              ", "             0000000000000000000000000            ", "         00  000000000000000000000000  00         ", "       0000  00000000000000000000000  0000        ", "     000000  000000000000000000000000  000000     ", "    0000000  00000000000000000000000  0000000     ", "   000000000  0000000000000000000000  000000000   ", "  0000000000  000000000000000000000  0000000000   ", "  00000000000  00000000000000000000  00000000000  ", "000000000000  000000000000000000000  000000000000 ", " 000000000000  00000000000000000000  000000000000 ", " 000000000000  0000000000000000000  000000000000  ", "                000000000000000000                ", " 0000000000000  00000000000000000  0000000000000  ", " 0000000000000  000000000000000000  0000000000000 ", " 0000000000000  00000000000000000  0000000000000  ", "  0000000000000  0000000000000000  0000000000000  ", "  0000000000000  000000000000000  0000000000000   ", "   0000000000000  00000000000000  0000000000000   ", "  0000000000000  000000000000000  0000000000000   ", "   0000000000000  00000000000000  0000000000000   ", "   0000000000000  0011111111100  0000000000000    ", "       0000000000  111111111111  0000000000       ", "        00000000  1111111111111  00000000         ", "          0000000  111111111111  0000000          ", "              000  00000000000  000               "],
        "priceLookup": [10, 20]
};

var counter = 0;
var counter2=900;
var tbl_body = "";
var print = "";
$(document).ready(function(){
$.each(jsondata.seats, function (j, d) {
    var tbl_row = "";
    $.each(this, function (k, v) {
        var seatPrice = jsondata.seatPrice[j][k];            
            if (v == "1" || v == "a") {
                counter++;
            } else {
                counter2++;
            }
            var seatPriceClass = '';
            if (seatPrice == "0") {
                seatPriceClass = "n";
            } else if (seatPrice == "1") {
                seatPriceClass = "p";
            } else {
                seatPriceClass = "none";
            }
            if (v == "a") {
                seatPriceClass = "x";
            }    
        if (v==1){
            tbl_row += "<td class=" + seatPriceClass + " id=" + jsondata.rows[j] + counter + ">" + "<img src=images/a.gif >"+"</td>";
        } else if (v=="a"){
             tbl_row += "<td class=" + seatPriceClass + " id=" + jsondata.rows[j] + counter + ">" + "<img src=images/c.gif >" + "</td>";
        } else if (v==0){
            tbl_row += "<td class=" + seatPriceClass + " id=" + jsondata.rows[j] + counter2 + ">" + " " + "</td>";
        } else if (seatPriceClass == "p"){
             tbl_row += "<td class=" + seatPriceClass + " id=" + jsondata.rows[j] + counter + ">" + "<img src=images/e.gif</img>" + "</td>";
        }
            });
    
        tbl_body += "<tr>" + tbl_row + "</tr>";
        counter = 0;
        counter2=100;
    
    });
    $("#plan").html(tbl_body);
});

$(document).ready(function(){
if ($(this).parent().hasClass('n')) {
                $(this).attr('src', 'images/e.gif');
				}
});

    $(document).ready(function () {
        var p1 = 0,
            p2 = 0;
        $('#cheap').text(p1 + ' Standard seats at £' + (p1 * 10));
        $('#premium').text(p2 + ' Premium seats at £' + (p2 * 20));
        $('td img').click(function () {
        //   alert(($(this).parent().attr("id")));
            if ($(this).parent().hasClass('x')) {
                alert("Seat " + ($(this).parent().attr("id")) + " is taken");
            } else if ($(this).parent().hasClass('selected')) {
                $(this).attr('src', 'images/a.gif');
                $(this).parent().removeClass('selected');
                var z = $(this).parent().attr('id');
                if ($(this).parent().hasClass('n')) {
                    p1--;
                } else if ($(this).parent().hasClass('p')) {
                    p2--;
                }
                $('#' + z + 'a').remove();
            } else {
                if ($(this).parent().hasClass('n')) {
                    p1++;
                } else if ($(this).parent().hasClass('p')) {
                    p2++;
                }
                $(this).attr('src', 'images/c.gif');
                $(this).parent().addClass('selected');
                // alert($(this).parent().attr("class"));
                var z1 = $(this).parent().attr('id');
                $('<li>').attr('id', z1 + 'a').text(z1).appendTo('#order');

            }
            $('#cheap').text(p1 + ' Standard seats at £' + (p1 * 10));
            $('#premium').text(p2 + ' Premium seats at £' + (p2 * 20));
            $('#total').text('Total = £' + ((p1 * 10) + (p2 * 20)));
            return false;
        });
    });
	
	var performance = {what:'RSNO - An American Festival',
                   when:'Friday 08 February 2013 19:30',
                   where:'User Hall - Main Auditorium'}
				   
$(document).ready(function(){
  $('#what').text("Event: "+performance.what);
  $(this).show()
});

$(document).ready(function(){
	$('#where').text("Location: "+performance.where);
	$(this).show()
});

$(document).ready(function(){
	$('#when').text("When: "+performance.when);
	$(this).show()
});

$(document).ready(function(){
	$('#button1').click(function(){
	alert('test');
	window.location.href = 'http://www.paypal.com';
    return false;
	});
	});

$(document).ready(function(){
		$('#link').click(function(){
		//alert("Total cost is £" + ((p1*10)+(p2*20)));
		window.location.href = 'http://www.paypal.com';
    return false;
	});
	});