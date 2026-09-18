// union
let subs = '1M';
let apiRequestStatus = "pending";
apiRequestStatus = 'failed';
let airLineSeat = 'window';
airLineSeat = 'middle';
// any
const orders = ['10', '20', '30', '40', '50'];
let cuurentorder;
for (const order of orders) {
    if (order === '40') {
        cuurentorder = order;
        break;
    }
    cuurentorder = '11';
}
console.log(cuurentorder);
export {};
//# sourceMappingURL=UnionAndAny.js.map