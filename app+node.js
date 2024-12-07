const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname));
app.get("/bmiCalculator",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.post('/bmiCalculator',(req,res)=>{
    const w = req.body.weight
    const h = req.body.height
    if (isNaN(w) || isNaN(h) || h === 0) { //h ห้ามเป็น 0 เพราะ h เป็นส่วนและส่วนห้ามเป็น 0
        return res.send("กรุณากรอกข้อมูลให้ถูกต้อง");
    } else {
        const BMI = (w / (h * h)).toFixed(2); //การ get ค่าจาก body จะได้ค่าเป็น String จึงต้องแปลงเป็น Number ก่อน
        let description;
        if (BMI < 18.5) description = "ผอมเกินไป"
        else if (BMI >= 18.5 && BMI <= 22.9) description = "น้ำหนักปกติ เหมาะสม"
        else if (BMI >= 23 && BMI <= 24.9) description = "น้ำหนักเกิน"
        else if (BMI >= 25 && BMI <= 29.9) description = "อ้วน"
        else description = "อ้วนมาก"
        res.send("คุณมีค่า BMI = " + BMI + " , คุณอยู่ในเกณฑ์ = " + description) //send สำหรับส่งค่า String เท่านั้น
    }
})
//Middleware 404
app.use((req, res, next) => {
    res.status(404).send({
        error: 'Not Found',
        message: 'The requested resource could not be found',
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});