$.getJSON("/js/data.json", start);

function start(lunchData) {
    let lang = "sv";

    let svTranslations = {
        "Whole-week": "Hela veckan",
        "Monday": "Måndagar",
        "Tuesday": "Tisdagar",
        "Wednesday": "Onsdagar",
        "Thursday": "Torsdagar",
        "Friday": "Fredagar"
    };


    function creat() {
        let ul = $('<ul class="weekDays"/>');
        for (let day in lunchData) {
            let li = $('<li class="dayMenu"/>');
            let dayData;
            if (lang === "sv") {
                li.append('<h2 class="weekDays">' + svTranslations[day] + '</h2>');
                dayData = lunchData[day];
            } else {
                (lang === "en")
                li.append('<h2 class="weekDays">' + day + '</h2>');
                dayData = lunchData[day];
            }

            for (let dish of dayData[lang]) {
                li.append('<h3 class="dishName">' + dish.name + '</h3>');
                li.append('<p class="dishDesc">' + dish.desc + '</p>');
            }

            ul.append(li);
        }
        $("#start").html(ul);

    }
    creat();


    $("#en").click(function() {
        lang = "en";
        creat();
    });

    $("#sv").click(function() {
        lang = "sv";
        creat();
    });
}