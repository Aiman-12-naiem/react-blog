const Sidebar = () => {
    return ( 
        <div className="card mt-5">
            <div className="card-header">
                Categories
            </div>
            <div className="card-body">
                <ul class="list-group">
                    <li class="list-group-item active">React</li>
                    <li class="list-group-item">Vuejs</li>
                    <li class="list-group-item disabled">Backbonejs</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;