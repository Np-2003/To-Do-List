const input=document.getElementById("input")
const list=document.getElementById("list")
const clicksound=document.getElementById("clicksound")
const deletesound=document.getElementById("deletesound")

function add(){
    if(input.value === ''){
        alert('Type Something To Add !')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=input.value;
        clicksound.play();
        list.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    input.value=''
}

list.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('cheked')
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        deletesound.play();
    }
})