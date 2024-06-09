document.body.addEventListener('click',(e)=>{
    if(e.target.tagName === 'TD'){
        document.querySelector('.current-day').classList.remove('current-day')//删掉原本的
        e.target.classList.add('current-day')
    }
})