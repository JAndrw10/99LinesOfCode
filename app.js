const friendsArray = ["Camille", "Barcley", "Ben", "Morgan", "Nick"];
const singButton = document.getElementById("sing-btn");

singButton.addEventListener("click", function () {
    for (let i = 0; i < friendsArray.length; i++) {
        const div = document.createElement("div");
        div.className = "friend";


        const h3 = document.createElement("h3");
        h3.textContent = friendsArray[i];
        
        div.appendChild(h3);
        document.body.appendChild(div);


    
        for(let j = 99; j >= 1; j--){
            const p = document.createElement("p");

            if (j == 2){
               p.textContent  = "2 lines of code on the file, 2 lines of code; " + friendsArray[i] + " strikes one out, clears it all out, 1 line of code in the file";
            } else if (j== 1){
                p.textContent  ="1 line of code in the file, 1 line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file";
            } else {
                p.textContent  = j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file";
            }
            div.appendChild(p);
        }
    }
})






// // when the button is clicked do something
// button.addEventListener("click", function() {

// let button = document.createElement('button')
// let btnText = document.createTextNode('Sing')
// button.appendChild(btnText);
// document.body.appendChild(button);

// })


// // for every one of your friends, create a div with class friend
// let friendsDiv = document.createElement('div');
// friendsDiv.className = ('friends');

// ///put an h3 containing your friends in the div
// let h3 = document.createElement('h3');
// friendsDiv.appendChild(h3);

//instead of console.log to put the song lyrics in the console, create paragraph for each song lyric line and paragraph in friends div
// let paragraph = document.createElement('p');
// let pText = document.createTextNode(' Lyrics of the song in the first 99 lines of code');
// friendsDiv.appendChild(paragraph);



//let friendsArray = ["Camille", "Barcley", "Ben", "Morgan", "Nick"];

// //Goes through each name in the array friends and console.log a song inputting each name in the song
// for (let i = 0; i < friendsArray.length; i++) {
//     console.log(friendsArray[i] + ":")

//     for(let j = 99; j >= 1; j--){
//         if (j == 2){
//             console.log("2 lines of code on the file, 2 lines of code; " + friendsArray[i] + " strikes one out, clears it all out, 1 line of code in the file");
//         } else if (j== 1){
//             console.log("1 line of code in the file, 1 line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
//         } else {
//             console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
//         }
//     }
// }


//two for loops, outter loop and nested inside of that outeer is an inner loop, outter loop deals with friends