let intelligence = [
    "Super Smart",
    "Smart",
    "Multi Talented",
    "Einstein",
    "Awesome",
    "Briliant",
    "Genius",
    "Superb",
    "Average",
    "Over Confident",
    "Google",
    "Dumb"
]

// function check() {
//     let name = document.querySelector("input").value;
//     let level;
//     if (name == false) {
//             alert("Please Enter Name");
//     } else {
//         if(name.charAt(0).toLowerCase() == "a"){
//             level = intelligence[3];
//             alert(level);
//         } else if (name.charAt(0).toLowerCase() == "b"){
//             level = intelligence[7];
//             alert(level);        
//         } else if (name.charAt(0).toLowerCase() == "c"){
//             level = intelligence[6];
//             alert(level);        
//         } else if (name.charAt(0).toLowerCase() == "d"){
//             level = intelligence[5];
//             alert(level);        
//         } else if (name.charAt(0).toLowerCase() == "e"){
//             level = intelligence[4];
//             alert(level);        
//         } else if (name.charAt(0).toLowerCase() == "f"){
//             level = intelligence[2];
//             alert(level);        
//         } else if (name.charAt(0).toLowerCase() == "g"){
//             level = intelligence[1];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "h"){
//             level = intelligence[11];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "i"){
//             level = intelligence[10];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "j"){
//             level = intelligence[9];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "k"){
//             level = intelligence[8];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "l"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "m"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "n"){
//             level = intelligence[5];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "o"){
//             level = intelligence[6];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "p"){
//             level = intelligence[7];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "q"){
//             level = intelligence[8];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "r"){
//             level = intelligence[9];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "s"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "t"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "u"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "v"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "w"){
//             level = intelligence[3];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "x"){
//             level = intelligence[4];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "y"){
//             level = intelligence[2];
//             alert(level);        
//         }else if (name.charAt(0).toLowerCase() == "z"){
//             level = intelligence[1];
//             alert(level);        
//         }
//     }
// }


function check() {
    let name = document.querySelector("input").value;
    let randomIndex = parseInt(Math.random() * intelligence.length);
    if (name == false) {
        alert("Please Enter Your Name");
    } else {
       alert(intelligence[randomIndex]);
    }
}