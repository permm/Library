const getFavoriteBook= async (userId)=>{
  try {
    const res = await fetch(`http://nawat.myvnc.com:5000/favorites?_expand=book&userId=${userId}`)
      if (res.ok) {
        return await res.json();
      }
      else throw new Error('Error, cannot get book data')
    }
    catch (err) {
      console.log(err)
    }
  }
  const getFavoriteBookByUserId= async (userId)=>{
    try {
      const res = await fetch(`http://nawat.myvnc.com:5000/favorites?userId=${userId}`)
        if (res.ok) {
          return await res.json();
        }
        else throw new Error('Error, cannot get book data')
      }
      catch (err) {
        console.log(err)
      }
    }



    const addFavoriteBookById = async (newFavoriteBook) => {
      const getFav= await getFavoriteBookByUserId(newFavoriteBook.userId)
     const isFav = getFav.find((fav)=>fav.bookId===newFavoriteBook.bookId)
      if(isFav!==undefined){
      return 400
    }else{
    try {
      const res = await fetch('http://nawat.myvnc.com:5000/favorites', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newFavoriteBook)
      })
      if ( res.status === 201) {
        return res.status

      } else return res.status
    } catch (err) {
      console.log(err)
    }
  }
}
const deleteFavoriteBook= async(deleteId)=>{
try {
  const res = await fetch(`http://nawat.myvnc.com:5000/favorites/${deleteId}`, {
      method: 'DELETE'
  })
  return res.status
}
catch (err) {
  console.log(err) 
}
}

export {getFavoriteBook,addFavoriteBookById,deleteFavoriteBook,getFavoriteBookByUserId}