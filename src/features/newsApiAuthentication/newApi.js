
// functions handles request to fetch top headline in Country=INDIA 
export function fetchNews(){
  return new Promise(async(resolve)=>{
const response = await fetch('https://newsapi.org/v2/top-headlines?country=in',{
      method:'GET',
      headers:{Authorization: 'c944710be76346eb90aa6399c12c7b7f'}
    })
    const data = await response.json()
    resolve({data})
  })
}