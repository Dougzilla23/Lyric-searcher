// fetch("https://api.github.com/users/dougzilla23")
//     .then(function (response) {
//         console.log(response)
//         if (!response.ok)
//             throw Error(response.statusText)
//         return response.json();
//     })
//     .then(function (data) {
//         //finally made it to our actual data
//         console.log(data);
//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i].name);
//         }
//     })
//     .catch(function (error) {
//         console.log(error)
//     })




// //content send start
// var content = {
//     title: "Whoa",
//     body: "testing",
//     userId: 1
// }
// fetch("https://api.github.com/users/dougzilla23", {
//     //method
//     method: "POST",
//     //set headers
//     headers: {
//         "Content-Type": "application/json"
//     },//set the body
//     body: JSON.stringify(content)
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

var submitButton = document.lyrics.submit

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var songArtist = document.getElementById('songArtist').value;
    var songTitle = document.getElementById("songTitle").value;
    var songURL = "https://api.lyrics.ovh/v1/" + songArtist + "/" + songTitle;
    var lyricArea = document.getElementById("lyricArea");

    fetch(songURL)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.status)
            }
            return response.json();
        })
        .then(function (data) {

            lyricArea.innerHTML = data.lyrics.replace(/\n/g, "<br>")

        });


})


