const Courses = ({course, bg,img}) => {
  
   return (
  <div>
   <h1 style={{backgroundColor:bg}}>{course}</h1>
   <img src={img}></img>
  </div>
    
)}

export default Courses;