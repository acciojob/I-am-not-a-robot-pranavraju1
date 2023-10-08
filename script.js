//your code here
let c = 0;
let A;
let B;
function check(e){
    c=c+1;
    const main = document.getElementsByTagName('main');
    if(c==1){
        e.style.border = "5px solid lightblue"
        A = e.className;
        const reset = document.createElement("button");
        reset.innerText = "Reset";
        reset.id = "reset";
        reset.addEventListener("click",random);
        main[0].appendChild(reset);
    }else if(c==2){
        e.style.border = "5px solid lightblue"
        B = e.className;

        const verify = document.createElement("button");
        verify.innerText = "Verify";
        verify.className = "verify"
        verify.addEventListener("click",checking);
        main[0].appendChild(verify);
        
    }else if(c==3){
        const verify = document.getElementsByClassName("verify")[0];
        const reset = document.getElementById("reset");
        reset.remove();
        verify.remove();
    }
}

function random(){
    uncheck();
    const container = document.getElementById('container');
        for (var i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.floor(Math.random()*i)]);
        }
        // appendchild can move one element from one parent to another
    let same = document.getElementById("same");
    same.className="img"+(Math.floor(Math.random()*(5-1+1))+1);
}


function uncheck(){
    c=0;
    const container = document.querySelectorAll("div>img");
    for (let i = 0; i< container.length ; i++) {
        container[i].style.border = "5px solid #555"
    }

    const verify = document.getElementsByClassName("verify");
    if(verify.length!=0){
        verify[0].remove();
    }

    const para  = document.getElementById("para");
    if(para != null)para.remove();

    const reset = document.getElementById("reset");
    if(reset!=null)reset.remove();
}


function checking(){
    const verify = document.getElementsByClassName("verify")[0];
    verify.remove();
    
    const main = document.getElementsByTagName('main')[0];
    if(A==B){
        console.log(true);
        const right = document.createElement("p");
        right.innerText = "You are a human. Congratulations!"
        right.id = "para";
        main.appendChild(right);

    }else{
        console.log(false); 
        const wrong = document.createElement("p");
        wrong.innerText = "We can't verify you as a human. You selected the non-identical tiles."
        wrong.id = "para";
        main.appendChild(wrong); 
    }
}