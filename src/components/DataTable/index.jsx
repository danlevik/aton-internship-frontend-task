import styles from "./DataTable.module.css";

export const DataTable = ({ data }) => {
  // data.map((obj, index) => console.log(obj));
  // console.log(data);

  return (
    <div className={styles.tableFixHead}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>year</th>
            <th>color</th>
            <th>pantone_value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
              <td>{obj.name}</td>
              <td>{obj.year}</td>
              <td>{obj.color}</td>
              <td>{obj.pantone_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
