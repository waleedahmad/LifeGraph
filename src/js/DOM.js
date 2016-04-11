class DOM{

    getWeekDOM(){
        return (`<li class="week"></li>`).repeat(52);
    }

    getWeeksDOM(){
        var $DOM = '';
        for(var i = 0; i <=4; i++){
            $DOM += `<ul class="weeks">${this.getWeekDOM()}</ul>`;
        }
        return $DOM;
    }

    genGroupDOM(){
        var years = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
            _this = this;

        years.forEach(function(year){
            var $groupDOM = `<div class="group">
                                <div class="year-marking">
                                    ${year}
                                </div>

                                <div class="years">
                                    ${_this.getWeeksDOM()}
                                </div>
                            </div>`;
            _this.mountToDOM($groupDOM);
        });
    }

    mountToDOM($groupDOM){
        $("#app .boxes").append($groupDOM);
    }

    constructor(){
        var _this = this;
        $(window).load(function(){
            _this.genGroupDOM();
            console.log("Groups : " + $(".group").length);
            console.log("Weeks : " + $(".week").length);
        });
    }
}

var AppDOM = new DOM();
