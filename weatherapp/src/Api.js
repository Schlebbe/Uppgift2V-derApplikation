export default async function getData(longitude, latitude) 
{
    let url = `http://api.apixu.com/v1/current.json?key=c65a919263204e86907130138192303&q=${longitude},${latitude}`;
    let promise = await fetch(url);
    let result = await promise.json();

    return result;
}