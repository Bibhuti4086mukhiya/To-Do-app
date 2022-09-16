console.log("conneted file")
showNotes();


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');
    let titleTxt = document.getElementById('titleTxt');

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        hello = [];
    }
    else {
        hello = JSON.parse(notes);
    }
    hello.push([addTxt.value,titleTxt.value]);
    localStorage.setItem("notes", JSON.stringify(hello));
    addTxt.value = "";
    titleTxt.value = "";

    console.log(hello);
    showNotes();
});




function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        hello = [];
    }
    else {
        hello = JSON.parse(notes);
    }
    let html = "";
    hello.forEach(function (notetitle,element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${notetitle}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">delete</button>
        </div>
    </div>
        `
    });

    let noteElm = document.getElementById('notes');
    if (hello.length != 0) {
        noteElm.innerHTML = html;
    }
    else {
        noteElm.innerHTML = `nothing add somethings`;
    }
}

function deleteNote(index) {
    console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        hello = [];
    }
    else {
        hello = JSON.parse(notes);
    }
    hello.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(hello));
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log("input is fire", inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // if (cardTxt.includes(inputVal)) {
        //     element.style.dispaly = "block";
        // }
        // else {
        //     element.style.dispaly = "none";
        // }
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})
