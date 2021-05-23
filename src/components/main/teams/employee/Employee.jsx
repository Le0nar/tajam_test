const Employee = ({img, name, profession}) => {
  return (
    <div className="teams__main__employee col-md-3">
        <img src={img} alt="employee" />
        <div className="teams__main__employee__bottom">
          <span className="teams__main__employee__bottom__name">{name}</span>
          <span className="teams__main__employee__bottom__prof">{profession}</span>
        </div>
    </div>
  )
}

export default Employee;