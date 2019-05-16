auto_Count = function (flag, start)
{
    if(typeof auto_Counter == "undefined"){
        auto_Counter = {};
    }
    if(typeof auto_Counter[flag] == "undefined"){
        auto_Counter[flag] = start ? 0 : start;
    }

    return ++auto_Counter[flag];

}