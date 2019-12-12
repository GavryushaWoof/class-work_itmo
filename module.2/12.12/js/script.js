// class Sample {
//     constructor() {
//         this.value;
//     }
//     increment() {
//         this.value++;
//         return this;
//     }
//     add(num) {
//         this.value += num;
//         return this;
//     }
//     outAlert() {
//         alert(this.value)
//         return this;
//     }
//     getValue() {
//         return this.value;
//     }
// }


// let obj = new Sample();
// let temp = obj.increment()
//     .add(10)
//     .increment()
//     .outAlert()
//     .getValue();
// console.log(temp);

// $(document).on("contextmenu", function(e) {
//     e.preventDefault();
//     //return false;
// });

// $('tr').filter(":odd")
//     .find('td')
//     .filter(':odd')
//     .css("backgroundColor", "#eee")
//     .end().end().end()
//     .filter(":even")
//     .find('td')
//     .filter(":even")
//     .css("backgroundColor", "#eee");

// $('#3').click(function() {
//     window.print();
//     return false;
// });

// $('button').one('click', function() {
//     $(this).text('Меня нажали');
//     console.log('!!!');
// });

// // $('#inputText').on('input', function(e) {
// //     let len = $(this).val().length;
// //     $('#label').text(`Осталось ${15-len} символ(ов)`)
// // });
// $('#inputText').on('change', function(e) {
//     let len = $(this).val().length;
//     $('#label').text(`Осталось ${15-len} символ(ов)`)
// });

// $('p').each(function() {
//     let arr = $(this).text().split(' ');
//     arr[0] = '<strong>' + arr[0] + '</strong>';
//     $(this).html(arr.join(" "));
// });

// let $divElem = $('<div/>', {
//     id: "test",
//     css: {
//         "background-color": "#eee"
//     }
// }).text('Какой-то текст');

// $('body').append($divElem);

$('#1').click(function() {
    $("html").scrollTop(20);
    // $("body").scrollTop(0);
    return false;
});
$('#2').click(function() {
    $("html").animate({ "scrollTop": 0 }, 5000);

    //scrollTop(20);
    //$("body").scrollTop(20);
    return false;
});

// function blink() {
//     $('.123').fadeOut(500)
//         .fadeIn(500);
// }
// setInterval(blink, 1000);
function blink() {
    $('.123').slideDown(500)
        .slideUp(500);
}
setInterval(blink, 1000);

$('.box_').on('click', function() {
    if ($(this).parent().attr("id") === "box1") {
        $(this).detach().appendTo('#box2');
    } else {
        $(this).detach().appendTo('#box1');
    }

});