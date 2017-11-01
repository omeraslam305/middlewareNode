function calculateTax(){
    var amount = parseInt($("#amt").val());
    var percent = parseInt($("#percent").val());
    var currency = $("#currency option:selected").val();
    var symbol = "";
    if (currency == "Dollar") {
        symbol = "$";
    }
    else if (currency == "Euro") {
        symbol = "€";
    }
    var result = (percent/100)*amount;
    result = amount + result;
    $("#result").text(symbol + " " + result);
}

function resultResult(){
    $("#result").text("");
}