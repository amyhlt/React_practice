export default function ShowSheet(props){
  return (
      <div>
          <label>{props.name}</label>
          <label>{props.age}</label>
          <label>{props.salary}</label>
          <label>{props.hobby}</label>
      </div>
  );
}