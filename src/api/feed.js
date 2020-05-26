const lerFotos = async(callback) => {
  try {
    const fotosHTTP = await fetch("http://10.0.2.2:3030/feed")
    const fotosJson = await fotosHTTP.json()
    callback(fotosJson)
  }catch(err){
    console.warn('api nao encontrada');
  }
}

export default lerFotos