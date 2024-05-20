export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '016b7ba00fmshef131593a0f48aep148dd1jsn2fac535cf7d5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetch_data = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}