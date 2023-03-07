import React from "react";

const Salary = (props) => {
  return (
    <div className="table">
      <h2>Подсчет зарплаты</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Рабочие дни</th>
            <th>Ставка за день</th>
            <th>Итоговая сумма зарплаты</th>
          </tr>
        </thead>
        <tbody>
          {props.salary.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.days}</td>
              <td>{item.salaryPerDay}</td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
