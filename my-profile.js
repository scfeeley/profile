window.onload = () => {
    //Create a title
    let body = document.body;
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "title");
    h1.setAttribute("class", "name");

    h1.innerText = "Shay Feeley";
    body.appendChild(h1);

    //Create ul of facts 
    let about = document.createElement("h2");
    about.innerText = "About Me";

    let facts = ["Aspiring Software Engineer", "Registered Nurse University of Utah 2021-Present", "BSN 2021 Simmons University", "B.S. Mathematics Minor in Computer Science 2017 from WPI"];
    let ul = createUL(facts, ["detail"]);
    ul.setAttribute("class", "my-details");

    body.appendChild(about);
    body.appendChild(ul);

    //add image and skills section
    let div = document.createElement("div");
    div.setAttribute("id", "wrapper");

    let skillList = ["JS, HTML, CSS", "Python", "Software Development Lifecycle", "SQL", "Agile Methodology", "Object Oriented Programming", "Data Structures", "GitHub", "Algorithms"];
    let linkList = ["https://scfeeley.github.io/etch_a-sketch/", "https://www.coursera.org/account/accomplishments/specialization/certificate/RXKPK3DEG5LQ", "https://www.coursera.org/account/accomplishments/certificate/7HRXR68CS4ZV", "https://www.coursera.org/account/accomplishments/certificate/3CK89SCTC6GJ", "https://www.coursera.org/account/accomplishments/certificate/3CK89SCTC6GJ", "https://github.com/scfeeley/adventure-game", "https://www.coursera.org/account/accomplishments/certificate/5276DV9GHXCX", "https://github.com/scfeeley", "https://www.freecodecamp.org/certification/fccf35fda9d-86c1-4be4-a371-9c66a6da3749/javascript-algorithms-and-data-structures"  ]
    let skills = createULLinks(skillList, linkList,["skill"]);
    skills.setAttribute("class", "table");
    skills.setAttribute("id", "skills");


    let img = document.createElement("img");
    img.setAttribute("id", "profile-pic");
    img.setAttribute("class", "table");
    img.setAttribute("src", "alpinelake.jpg");
    img.setAttribute("width", "300px");
    
    let text = document.createElement("h2");
    text.innerText = "Skills";

    div.appendChild(img);
    div.appendChild(skills);
    body.appendChild(text);
    body.appendChild(div);

    //create clock
    function getTime(){
        let now = new Date();
        let hrs = now.getHours();
        let mins = now.getMinutes();
        if (mins < 10){
            mins = "0" + mins;
        }
        let time = hrs + ":" + mins;
        console.log(time);
        return time;
    }
    
    let clock = document.createElement("div");
    clock.setAttribute("id", "clock");
    clock.innerText = getTime() + " in Salt Lake City, Utah";
    body.appendChild(clock);
    setInterval(() => {
        clock.innerText = getTime() + " in Salt Lake City, Utah";
    }, 30000);

}

function createULLinks(textList, links, classes){
    let unlist = document.createElement("ul");
    for (let i = 0; i < textList.length; i++) {
        let a = document.createElement("a");
        a.setAttribute("href", links[i]);
        a.setAttribute("target", "_blank");
        let li = document.createElement("li");
        li.innerText = textList[i];
        if (classes) {
            if (classes.length === 1) {
                li.setAttribute("class", classes[0]);
            } else {
                li.setAttribute("class", classes[i]);
            }
        }
        a.appendChild(li);
        unlist.appendChild(a);
    }
    return unlist;
}

//createUL: returns an unorderd list with li from inputted array of strings
function createUL(listItems, listClasses) {
    let unlist = document.createElement("ul");
    for (let i = 0; i < listItems.length; i++) {
        let li = document.createElement("li");
        li.innerText = listItems[i];
        if (listClasses) {
            if (listClasses.length === 1) {
                li.setAttribute("class", listClasses[0]);
            } else {
                li.setAttribute("class", listClasses[i]);
            }
        }
        unlist.appendChild(li);
    }
    return unlist;
}