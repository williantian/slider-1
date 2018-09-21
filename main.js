var n = 1
初始化(n)
setInterval(function(){
    makeLeave(getImage(n))
    .one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n = n + 1
 },3000)


function x(n) {
    if(n>3){
        n = n%3
        if (n === 0){
            n = 3
        }
    }
    return n 
}
function 初始化(n){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
     .siblings().addClass('enter')
}
function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`) 
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
    return $node
}
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
    return $node
}