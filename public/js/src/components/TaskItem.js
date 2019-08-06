function TaskItem(props){
    return(<a href="#" className="list-group-item">
    <span className="badge">{tasks.time}</span>
    <i className="fa fa-fw fa-calendar"></i> Calendar updated {tasks.date}
</a>)
}