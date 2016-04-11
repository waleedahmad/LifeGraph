class App{

    clearMarked(){
        $(".week").removeClass('marked');
    }

    getWeeks(d) {
        return Math.floor(d/7);
    }

    getDiffInDays(input){
        var date1 = new Date(input);
        var date2 = new Date();
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }

    validateDate(input){
        var today = new Date();
        var input = new Date(input);
        return (today >= input);
    }

    constructor(){
        var _this = this;
        $("#birthdate").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function (dateText) {

                _this.clearMarked();

                if(_this.validateDate(dateText)){
                    var days = _this.getDiffInDays(dateText),
                        weeks = _this.getWeeks(days);
                    console.log('Days : ' + days);
                    console.log('Weeks : ' + _this.getWeeks(days));

                    if(weeks > 0){
                        $(".week").slice(0,weeks).addClass('marked');
                    }
                }else{
                    alert('Invalid Date Selected');
                }
            }
        });
    }
}

var app = new App();