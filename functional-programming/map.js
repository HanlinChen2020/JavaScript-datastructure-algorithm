const daysOfWeek = [
    {name: 'Monday', value: 1},
    {name: 'Tuesday', value: 2},
    {name: 'Wednesday', value: 7}
]

//命令式编程
let daysOfWeekValues_ = [];
for (let i = 0; i < daysOfWeek.length; i++) {
    daysOfWeekValues_.push(daysOfWeek[i].value);
}

//函数式编程ES2015
const daysOfWeekValues = daysOfWeek.map(day => day.value);
console.log(daysOfWeekValues);