let checking = document.getElementById("user-check")

function display(num){
    checking.value +=num
}

function calculate(){
    try{
        checking.value = eval(checking.value)
    }
    catch (err){
        alert("this is wrong")
    } }

    function Clean (){
        checking.value = "";
    }

    function del(){
        checking.value =checking.value.slice(0,-1)
    }
