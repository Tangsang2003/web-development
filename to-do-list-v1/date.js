module.exports = {getDate};

function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const kindOfDay = today.toLocaleDateString("en-EN", options);
    return kindOfDay;
}