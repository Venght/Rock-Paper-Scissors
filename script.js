
function getComputerChoice(rstance, pstance, sstance) {
    let x = Math.floor(Math.random()* 3) + 1;
    //console.log(x);
    if (x===1) {
        console.log(rstance);
    }

    else if (x===2) {
        console.log(pstance);
    } 
    
    else if (x===3) {
        console.log(sstance);
    }
    return;
}

getComputerChoice("Rock", "Paper", "Scissors")
