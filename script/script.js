const graphic = document.querySelector('.graphic')
const price = document.querySelector('.price')
console.log(price.textContent)

const requestData = async () => {
    try {
        const response = await fetch('../data.json')
        if(response.ok){
            console.log('Success')
            const jsonResponse = await response.json()
            console.log(jsonResponse)
            for(let i = 0; i < jsonResponse.length; i++){
            graphic.innerHTML +=  `<div class="column-container">
                                   <span>${jsonResponse[i].day}</span>
                                   <div style= "height: ${jsonResponse[i].amount}px" class="column"></div>
                                   </div>`
            }
        }
    } catch(error) {
        console.log(error)
    }
}

requestData()

// const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// const setColumnWidth = () => {
//     let value = parseFloat(price.textContent.replace('$', ''))
//     let pricePerDay = value / 7
//     let random = Math.random() * (value - pricePerDay) + pricePerDay
//     let percentage = ((random * 100) / value).toFixed(2)
//     return`${percentage.toString()}px`
// }

// let days = 0
// while(days < 7) {
//     graphic.innerHTML += `
//                           <div class="column-container">
//                           <span>${week[days]}</span>
//                           <div style= "height: ${setColumnWidth()}" class="column"></div>
//                           </div>`
//     days++
// }


    
 
