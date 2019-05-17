function getData(path, success_cb, error_cb) {
    console.log("-- 1. getData");
    var rnd = Math.random() > 0.2

    setTimeout(() => {
        rnd ? success_cb(rnd) : error_cb(rnd)
    }, 1000);
}

getData(
    '/students',
    (result) => {
        console.log("-- 2. success_cb");
        console.log(`result: ${result}`);
    },
    (error) => {
        console.log("-- 2. error_cb");
        console.log(`error: ${error}`);
    }
)