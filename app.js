const form=document.querySelector('.form');
const result=document.querySelector('.result');
const select=document.querySelector('.bmi-info')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('.height-input').value);
    const weight=parseInt(document.querySelector('.weight-input').value);
    if(height<0||isNaN(height)||height===''){
        result.innerHTML=`please enter a valid Height ${height}`
    }else if(weight<0||isNaN(weight)||weight===''){
        result.innerHTML=`please enter a valid weight ${weight}`
    }else{
        const value=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your BMI Is-->${value}`;
        setTimeout(function(){
            if(value<18.6){
                alert("go workout weakling!");
            }else if(value>18.6&&value<24.9){
                alert('nice kiddo,get better');
            }else if(value>24.9){
                alert("get a job man,touch some grass.");
            }
        },1000)
        
    }
    
    

})