import React from 'react';
const App = () => {
  const [users, setUsers] = React.useState([])

  const handlePost=(e)=>{
      e.preventDefault()
      const newUsers=users.slice()
      newUsers.push({
        name:e.target.name.value,
        age: e.target.age.value
      })
      setUsers(newUsers)

      // サーバーにリクエストを送る
      fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: e.target.name.value,
          age: e.target.age.value
        })
      }).then(res=>res.json())
      .then(res=>{
        console.log(res.msg)
      }).catch(err=>console.error(err))

  }
  // データベースのデータを反映する処理
  const handleGet=()=>{
      //データベースからデータを持ってくる
      fetch("/api/users")
      .then(res=>res.json())
      .then(res=>{
        //持ってきたデータを反映させる(setUsers)
        setUsers(res.data)
      })
     

  }

  return (
    <>
      <form onSubmit={(e)=>{handlePost(e)}}>
        <input type="text" name="name"/>
        <input type="text" name="age" />
        <button>追加</button>
      </form>
      <button onClick={handleGet}>データベースのデータを反映</button>
      { users.map((user)=>{
        return(
          <li>
            <p>名前 {user.name}</p>
            <p>年齢 {user.age}</p>
          </li>
        )
      }) }
    </>
  )
}
export default App