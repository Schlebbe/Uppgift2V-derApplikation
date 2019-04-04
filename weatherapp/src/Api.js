export default async function getData(location) 
{
    let key = "26279ee23c9148fd9d291542190404";
    let url = `http://api.apixu.com/v1/current.json?key=${key}&q=${location}`;
    let promise = await fetch(url);
    let result = await promise.json();

    return result;
}