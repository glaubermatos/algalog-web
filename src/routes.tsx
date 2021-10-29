import { Route, Switch } from "react-router";
import { CreateNewDelivery } from "./view/CreateNewDeliveryView";
import { Customers } from "./view/CustomersView";
import { Dashboard } from "./view/DashboardView";
import { Deliveries } from "./view/DeliveriesView";
import { DeliveryDetails } from "./view/DeliveryDetailsView";
import { RegistrationCustomer } from "./view/RegistrationCustomerView";

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/deliveries" exact component={Deliveries} />
            <Route path="/deliveries/new" exact component={CreateNewDelivery} />
            <Route path="/deliveries/:id" component={DeliveryDetails} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/customers/:id" component={RegistrationCustomer} />
            <Route path="/customers/new" component={RegistrationCustomer} />
        </Switch>
    )
}