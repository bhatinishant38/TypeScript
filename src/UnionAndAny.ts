// union

let subs :string | number = '1M'


let apiRequestStatus : 'pending' | 'success' | 'failed' = "pending"
apiRequestStatus ='failed'

let airLineSeat : 'aisle' | 'window' | 'middle' = 'window'
airLineSeat = 'middle'

// any

const orders = ['10','20','30','40','50']

let cuurentorder : string | undefined

for (const order of orders) {
    if(order ==='40'){
        cuurentorder = order
        break
    }
    cuurentorder = '11'
    
    
}
console.log(cuurentorder)