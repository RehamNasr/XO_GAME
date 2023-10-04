
let mode="X"
let span=document.querySelector(".title")
let arr=[]
function end(num1,num2,num3){
    document.getElementById("item"+(num1+1)).style.backgroundColor="#324742";
    document.getElementById("item"+(num2+1)).style.backgroundColor="#324742";
    document.getElementById("item"+(num3+1)).style.backgroundColor="#324742";
    span.innerHTML=arr[num1]+" Winner"
    clear()
}
function winner(){
      for (let i=1;i<=9;i++){
       arr[i-1]= document.getElementById("item"+i).innerHTML;
      }

      if(arr[0]==arr[1]&&arr[1]==arr[2]&&arr[0]!=''){
        end(0,1,2)
      }else if(arr[3]==arr[4]&&arr[4]==arr[5]&&arr[3]!=''){
        end(3,4,5)

      }else if(arr[6]==arr[7]&&arr[7]==arr[8]&&arr[7]!=''){
        end(6,7,8)

      }else if(arr[0]==arr[4]&&arr[4]==arr[8]&&arr[4]!=''){
        end(0,4,8)

      }else if(arr[2]==arr[4]&&arr[4]==arr[6]&&arr[4]!=''){
        end(2,4,6)

      }else if(arr[0]==arr[3]&&arr[3]==arr[6]&&arr[6]!=''){
        end(0,3,6)

      }else if(arr[1]==arr[4]&&arr[4]==arr[7]&&arr[4]!=''){
        end(1,4,7)

      }else if(arr[2]==arr[5]&&arr[5]==arr[8]&&arr[5]!=''){
        end(2,5,8)

      }else{
        let count=0;
        for(let i=0;i<9;i++){
            if(arr[i]==''){
                count++;
                break;
            }
        }
        if(count==0){
            location.reload()
        }
      }

}
function clear(){
    setInterval(function(){
        span.innerHTML+="."
        },1000)
        setTimeout(() => {
        location.reload()
        }, 4000);
}

function enter(id){
    box=document.getElementById(id)
    if(mode=="X" && box.innerHTML==''){
        box.innerHTML="O";
        mode="O"
        span.innerHTML="X";
        winner()
    }else if(mode=="O" && box.innerHTML==''){
        box.innerHTML="X";
        mode="X"
        span.innerHTML="O"
        winner()

    }

}