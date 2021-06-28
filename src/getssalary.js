import react from 'react'

class List extends react .component{
    constructor(props){
        super(props);
        this.state={
            Employees:[]
        };
    }



    render(){
        return<div>
            <h2>List of table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
            </table>
        </div>
    }
}
 
export default List;