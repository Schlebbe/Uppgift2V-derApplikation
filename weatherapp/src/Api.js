export default async function getData(location) {
    let key = "26279ee23c9148fd9d291542190404";
    let url = `http://api.apixu.com/v1/forecast.json?key=${key}&q=${location}&days=5`;
    let promise = await fetch(url);
    let result = await promise.json();

    return result;
}
export async function getDataCoords(lat, long) {
    let key = "26279ee23c9148fd9d291542190404";
    let url = `http://api.apixu.com/v1/forecast.json?key=${key}&q=${lat}, ${long}&days=5`;
    let promise = await fetch(url);
    let result = await promise.json();

    return result;
}