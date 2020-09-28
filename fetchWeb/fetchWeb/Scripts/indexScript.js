//server URL
const personApiUrl = "https://randomuser.me/api/?results=3";

//Create new element by element name
function createNode(element) {
    return document.createElement(element);
}

// Append the element(el) into the parent
function append(parent, el) {
    return parent.appendChild(el);
}

async function getPersons() {

    try {
        //Get request by fetch
        let response = await fetch(personApiUrl);
        if (response.ok) {
            //Converting the response to Json
            const data = await response.json();
            //Get table element
            const table = document.getElementById("PersonTable");
            //Mapping all persons into the table
            data.results.map(function (auther) {
                //Create new element to insert into the table
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    emailRow = createNode('td'),
                    ages = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img');
                //Insert the data into the element
                fullNameRow.innerHTML = `${auther.name.title}. ${auther.name.last} ${auther.name.first}`;
                emailRow.innerHTML = auther.email;
                ages.innerHTML = auther.dob.age;
                PicEl.src = auther.picture.medium;

                //Insert the elements into the table
                append(tr, fullNameRow);
                append(tr, emailRow);
                append(tr, ages);
                append(PicRow, PicEl);
                append(tr, PicRow);

                append(table, tr);

            })
        }
    }
    catch (e) {
        console.log(e);
    }

}
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
});

