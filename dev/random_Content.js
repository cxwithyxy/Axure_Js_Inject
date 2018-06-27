random_Content = function (_type, _poor, _time, _split_Sign, _ele_Fix_Callback)
{
    var random_Maker = function (){}
    var init_Time = _time;
    if(!_ele_Fix_Callback){
        _ele_Fix_Callback = function (v){return v;}
    }
    switch(_type){
        case 0:
            var temp_1 = _poor.split(":");
            var num_1 = Number(temp_1[0]);
            var num_2 = Number(temp_1[1]);
            random_Maker = function ()
            {
                return num_1 + Math.random() * (num_2 - num_1);
            }
            break;
        case 1:
            var r_Array = [];
            random_Maker = function ()
            {
                var result;
                result = r_Array.pop();
                if(typeof result == "undefined"){
                    r_Array = _poor.concat([]);
                    r_Array.sort(function ()
                    {
                        return Math.random()-0.5
                    });
                    result = r_Array.pop();
                }
                return result
            }
            break;
    }
    return function ()
    {
        var result = [];
        var count_Time = init_Time;
        while(count_Time--){
            result.push(_ele_Fix_Callback(random_Maker()));
        }
        return result.join(_split_Sign);
    }
}