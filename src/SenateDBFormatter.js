// Function used to grab an array of all senators
const organize_by_senator = (data) => {
        const senatorKey = []; 
        for (var i in data) {
            senatorKey.push(data[i].senator);
        }
        const senatorArr = senatorKey.filter((item, i, ar) => ar.indexOf(item) === i);
        console.log(senatorArr);
    return (senatorArr);
}
 
export default organize_by_senator;