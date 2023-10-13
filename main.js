const fs = require("node:fs"); //Отримуємо бібліотеку fs

fs.readFile("data.json", function(err, data) //Читаємо наш json
{
    if(err !== null)
        console.log("Can`t read data.json"); //Якщо виникнуть проблеми, ми отримаємо повідомлення

    const objs = JSON.parse(data.toString()); //Отримуємо масив із об'єктів нашого json
    var savedValue = null; //Робимо буферну змінну для зберігання найменшого значення
    for(var index = 0; index < objs.length; index++) //Перебираємо всі об'єкти
        if(savedValue === null || objs[index].value < savedValue.value) //Перевіряємо умову, щоб зберегти об'єкт
            savedValue = objs[index];
    fs.writeFile("output.txt", `${savedValue.txt}: ${savedValue.value}`, function(err) //Тепер записуємо результат у output.txt
    {
        if(err !== null)
            console.log("Can`t write output.txt"); //Якщо виникнуть проблеми, ми отримаємо повідомлення
    });
});