function button(){
    const btn = document.getElementsByClassName('btn')
    if (btn){
        addEventListener('click',()=>{
            alert("Button CLicked, You are directing to the next page")
        })
    }
}

button()