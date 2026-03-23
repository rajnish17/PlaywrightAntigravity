
function rajnish_doing_work(worker, callback)
{

    console.log("Started the calss pw")
    let work = worker;

    console.log("Finished the class PW")

    callback()
}

function callWife()
{
    console.log("Call wife when done")
}

rajnish_doing_work("PW class", callWife)