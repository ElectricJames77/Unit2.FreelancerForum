const freelancers = [
    {name: 'Alice',     occupation: 'Writer',       priceStart: 30},
    {name: 'Bob',       occupation: 'Teacher',      priceStart: 50},
    {name: 'Carol',     occupation: 'Programmer',   priceStart: 70},
    {name: 'Gerald',    occupation: 'Technician',   priceStart: 40}
];

const average = document.getElementById('averagePrice')
function getAvgPriceStart(){
    // take freelancerStartPrice from document and calculate their average
    const allPrices = document.querySelectorAll('.price')
    let sum = 0
    for(let price of allPrices){
        sum += +price.textContent
    }
    console.log(sum)
    console.log(allPrices.length)
    document.getElementById('averagePrice').textContent = Math.round(sum/allPrices.length)
}
function pushFreelancer(freelancers){
    // push a new freelancer into the document
    if(!freelancers.length){
    clearInterval(freelancerInterval)
    return
    }
    const freelancerList = document.getElementById('freelancerTable')
    const nextFreelancer = freelancers.pop()
    const newTableRow = document.createElement('tr')
    newTableRow.innerHTML = `<td>${nextFreelancer.name}</td><td>${nextFreelancer.occupation}</td><span>$</span><td class = "price">${nextFreelancer.priceStart}</td>`
    freelancerList.appendChild(newTableRow)
    getAvgPriceStart()
}

const freelancerInterval = setInterval(()=> pushFreelancer(freelancers),3000)


