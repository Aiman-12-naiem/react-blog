const home = () => {
  const handlebtn = (name) =>{
    console.log(name);
  }
  // const handleShare = (name) => {
  //   console.log('Hey' + name);
  // }
  const anotherShare = (name) => {
    console.log('Hello from the other side ' + name);
  }
    return (
        <div className="card mt-5">
          <div className="card-header bg-dark">
            <h3 className="text-light">Welcome to React!</h3>
          </div>
          <div className="card-body">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
              voluptas esse vel minus cupiditate earum culpa quam inventore
              accusantium rem impedit cumque quos et, tenetur eum quaerat
              obcaecati consequuntur tempora.
            </p>
            <button className="btn btn-outline-dark" onClick={ handlebtn }>Share </button> 
            {/* <button className="btn btn-outline-danger" onClick={ handleShare('Aiman') }>Share again</button>  */}
            <button className="btn btn-outline-danger ml-2" onClick={ () => {
              anotherShare('Aiman')
            } }>Share again</button> 
            
          </div>
          <div className="card-footer">
            <p className="float-left">
              Reposted <b>12</b>
            </p>
            <p className="float-right">
              Replies <b>16</b>
            </p>
          </div>
        </div>
 
      );
}

export default home;