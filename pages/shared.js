import axios from 'axios'

export async function init({store, redirect, isClient}){
  if(isClient) return
  try{
    const payload = await axios.get('https://todos-cuvsmolowg.now.sh/todos')
    store.commit('init', payload.data)
  } catch(error){
    redirect('/error')
  }
}
