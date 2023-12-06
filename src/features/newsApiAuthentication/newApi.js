// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  
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