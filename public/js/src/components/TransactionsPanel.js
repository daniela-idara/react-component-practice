function TransactionsPanel(props){

    let transactionsDiv = [];
    let {orders} = props;

    transactionsDiv = orders.map(function(orders){
        return <TransactionRow id={orders.id} orderDate={orders.orderDate} orderTime={orders.orderTime} amount={orders.amount}/>
    })

    return( <div className="panel panel-default">
    <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
    </div>
    <div className="panel-body">
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Order Date</th>
                        <th>Order Time</th>
                        <th>Amount (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {/*   <TransactionRow>   */}
                   {transactionsDiv}
                    {/*   </TransactionRow>   */}
                </tbody>
            </table>
        </div>
        <div className="text-right">
            <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
        </div>
    </div>
</div>)
}