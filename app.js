const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault() //เมื่อกดปุ่มจะคงค่าในแบบฟอร์มไว้ไม่ล้างแบบฟอร์ม
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    
    if(weight === "" || isNaN(weight)){
        console.log("Please input the correct weight!!")
    }else if(height === ""||isNaN(height)){
        console.log("Please input the correct height!!")
    }else{
        height = height/100 //แปลง cm เป็น m
        let bmi = (weight/(height*height)).toFixed(2) //ทศนิยม 2 ตำแหน่ง

        if(bmi<18.5){
            showResult(bmi,"Underweight","yellow")
        }else if(bmi >= 18.5 && bmi <= 24.9){
            showResult(bmi,"Normal","green")
        }else if(bmi >= 25 && bmi <= 29.9){
            showResult(bmi,"Overweight","red")
        }else{
            showResult(bmi,"Obesity","purple")
        }
    }
})
function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `Result = ${bmi} ${message}`
}