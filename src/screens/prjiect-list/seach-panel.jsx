import {useEffect, useState} from "react";

export const SeachPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  //发生变化的请求接口
  useEffect(() => {
    fetch('').then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  }, [param])

  return <form action="">
    <div>
      {/*setParam(Object.assign({}, param:evt.target.value)) 和下面的语句等价 */}
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })}/>
      <select name="" value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(user => <option value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}