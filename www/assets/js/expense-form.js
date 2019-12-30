const formatterPound = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
});
const formatterEuro = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});

$(function() {
    var currencyPattern = /^([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?\s*((E|e)(U|u)(R|r))?$/g;
    var replacePattern = /[^0-9\.]/g;

    $("#exp_amt").on("keyup", function(e) {
        var thisValue = $(this).val();
        if (thisValue.match(currencyPattern)) {
            var numbersOnly = parseFloat(thisValue.replace(replacePattern, ""));
            
            numbersOnly += 0.2 * numbersOnly;

            if (thisValue.match(/((E|e)(U|u)(R|r))/g)) {
                $("#exp_amt_inEUR").prop("checked", true);
                var formatedValue = formatterEuro.format(numbersOnly);
            } else {
                $("#exp_amt_inEUR").prop("checked", false);
                var formatedValue = formatterPound.format(numbersOnly);
            }
            $("#exp_amtV").val(formatedValue).removeClass("border-danger");
            $("#exp_amtV_int").val(numbersOnly);
        } else {
            $("#exp_amtV").val("").addClass("border-danger")
        }
    });
})

$("#expense-form").submit(function(e){
    e.preventDefault();
    startLoader(this, "Processing your expense");
})