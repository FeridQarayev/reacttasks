import { useState } from "react"
import { useEffect } from "react"
import { Table } from 'antd';
import axios from 'axios';


function App() {
  const [dataa, setData] = useState([])


  useEffect(() => {axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setData(res.data)
      })
    return () => {
      console.log('salam')
    }
  }, [])


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    sortDirections: ['descend'],
  },
  {
    title: 'Name',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
console.log(dataa)

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

  return (
    <>
    <Table columns={columns} dataSource={dataa} onChange={onChange} />;
    </>
  );
}

export default App;
