import { count, increment} from "./counter";

document.getElementById("voteBtn").addEventListener("click", upVote);

function upVote(){
    increment();
    console.log(count);
    document.getElementById("voteValue").innerText=count;
}


