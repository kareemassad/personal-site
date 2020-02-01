// THIS IS KEYSTROKE.JS IMPORTED IN

const codeConstant = ["l","o","v","e"]; //array of N elements where N = 4 elements, 0->3

n =  codeConstant.length; 

document.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    let buffer = [];

    document.addEventListener("keydown", event => {
        //if we only want letters and numbers
        // const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();
        
        // Only interested in letters not Space or Enter
        // if(charList.indexOf(key)=== -1) return;
        
        //4 is the maximum length it could be 
        if(buffer.length == 4){
            // if (codeConstant == buffer) {   
            //     checker = true;
            // }
            // if (checker == true) {
            //     alert("Yee have matched the sequence!");
            //     window.location.replace("redirectPage.html");
            // } 
            if (JSON.stringify(codeConstant) === JSON.stringify(buffer)) {
                console.log('They are equal!');
                window.location.href = "/pages/redirectPage.html";
            }
            buffer = []; 
        }
        buffer.push(key);

        console.log(buffer);
       
    });
    
    
});

// END OF KEYSTROKE.JS 

// SITE JS START