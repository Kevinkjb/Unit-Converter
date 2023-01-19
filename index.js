const inputDisplay = document.getElementById("input-el")
const convBtn = document.getElementById("convert-btn")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convBtn.addEventListener("click", function(){
   let lengthMeter = inputDisplay.value * 3.281
   let lengthFeet = inputDisplay.value / 3.281
   let volumeGal = inputDisplay.value * 0.264
   let volumeLiters = inputDisplay.value / 0.264
   let massPounds = inputDisplay.value * 2.204
   let massKilos = inputDisplay.value / 2.204
   
   lengthResult.textContent = `${inputDisplay.value} meters = ${lengthMeter.toFixed(3)} feet | ${inputDisplay.value} feet = ${lengthFeet.toFixed(3)} meters`
   volumeResult.textContent = `${inputDisplay.value} liters = ${volumeGal.toFixed(3)} gallons | ${inputDisplay.value} gallon = ${volumeLiters.toFixed(3)} liters`
   massResult.textContent =  `${inputDisplay.value} kilos = ${massPounds.toFixed(3)} pounds | ${inputDisplay.value} pounds = ${massKilos.toFixed(3)} kilos`
   inputDisplay.value = ""
})