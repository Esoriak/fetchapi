import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="ofemployee"  />
            <ul>
                <li>Citation : {employee.quote}</li>
                <li>
                    Name : {employee.character} 
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;