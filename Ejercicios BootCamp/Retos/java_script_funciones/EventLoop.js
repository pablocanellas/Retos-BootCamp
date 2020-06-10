//Reto1


// setTimeout(function() {
//     console.log(" after 1 second"),
//         setImmediate(function() {
//             console.log("last process after finish the loop");
//             process.nextTick(function() { console.log("initial loop event"); });
//         });
// }, 1000);

// Reto 2
var fecha = Date.now();

setInterval(function() {
    console.log("cada 5 segundos");

    console.log(Date.now() - fecha);
    fecha = Date.now()
}, 5000);