const Log = (message) => {

    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");
    const milli = today.getMilliseconds();


  console.log(`${hours}:${minutes}:${seconds}.${milli} ${message}`);
}

export default Log;