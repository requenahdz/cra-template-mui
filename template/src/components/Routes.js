import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/";
import { Switch, Route, Link } from "react-router-dom";

import {
    DashboardContainer,
} from "../modules/dashboard/containers";

import {
    CategoriesListContainer,
    CategoriesCreateContainer,
    CategoriesEditContainer
} from "../modules/categories/containers";

import {
    CompaniesListContainer,
    CompaniesCreateContainer,
    CompaniesEditContainer
} from "../modules/companies/containers";

import {
    OffersListContainer,
    OffersCreateContainer,
    OffersEditContainer,
    OffersShowContainer
} from "../modules/offers/containers";

import {
    PublicOffersListContainer,
    PublicOffersCreateContainer,
} from "../modules/publicOffers/containers";

import {
    CitiesListContainer,
    CitiesCreateContainer,
    CitiesEditContainer
} from "../modules/cities/containers";

import {
    StatesListContainer,
    StatesCreateContainer,
    StatesEditContainer
} from "../modules/states/containers";

import {
    UsersListContainer,
    UsersCreateContainer,
    UsersEditContainer
} from "../modules/users/containers";

import {
    PushNotificationsListContainer,
    PushNotificationsCreateContainer
} from "../modules/pushNotifications/containers";

import {
    CustomersListContainer,
    CustomersShowContainer
} from "../modules/customers/containers";

import {
    RecruitersListContainer,
    RecruitersCreateContainer,
    RecruitersEditContainer
} from "../modules/recruiters/containers";

import {
    ReferencesListContainer,
    ReferencesCreateContainer,
    ReferencesEditContainer
} from "../modules/references/containers";

import {
    AdvertisementsListContainer,
    AdvertisementsCreateContainer,
    AdvertisementsEditContainer
} from "../modules/advertisements/containers";

import {
    ReportReasonsListContainer,
    ReportReasonsCreateContainer,
    ReportReasonsEditContainer
} from "../modules/reportReasons/containers";

import {
    ReportsListContainer,
    ReportsInfoContainer,
} from "../modules/reports/containers";

const Routes = props => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={DashboardContainer}
                />
                <Route
                    exact
                    path="/categories"
                    component={CategoriesListContainer}
                />
                <Route
                    exact
                    path="/categories/create"
                    component={CategoriesCreateContainer}
                />
                <Route
                    exact
                    path="/categories/:id/edit"
                    component={CategoriesEditContainer}
                />

                <Route
                    exact
                    path="/companies"
                    component={CompaniesListContainer}
                />
                <Route
                    exact
                    path="/companies/create"
                    component={CompaniesCreateContainer}
                />
                <Route
                    exact
                    path="/companies/:id/edit"
                    component={CompaniesEditContainer}
                />

                <Route exact path="/offers" component={OffersListContainer} />
                <Route
                    exact
                    path="/offers/create"
                    component={OffersCreateContainer}
                />
                <Route
                    exact
                    path="/offers/:id/edit"
                    component={OffersEditContainer}
                />
                <Route
                    exact
                    path="/offers/:id/show"
                    component={OffersShowContainer}
                />

                <Route exact path="/cities" component={CitiesListContainer} />
                <Route
                    exact
                    path="/cities/create"
                    component={CitiesCreateContainer}
                />
                <Route
                    exact
                    path="/cities/:id/edit"
                    component={CitiesEditContainer}
                />

                <Route exact path="/states" component={StatesListContainer} />
                <Route
                    exact
                    path="/states/create"
                    component={StatesCreateContainer}
                />
                <Route
                    exact
                    path="/states/:id/edit"
                    component={StatesEditContainer}
                />

                <Route exact path="/users" component={UsersListContainer} />
                <Route
                    exact
                    path="/users/create"
                    component={UsersCreateContainer}
                />
                <Route
                    exact
                    path="/users/:id/edit"
                    component={UsersEditContainer}
                />

                <Route
                    exact
                    path="/push_notifications"
                    component={PushNotificationsListContainer}
                />
                <Route
                    exact
                    path="/push_notifications/create"
                    component={PushNotificationsCreateContainer}
                />

                <Route
                    exact
                    path="/customers"
                    component={CustomersListContainer}
                />
                <Route
                    exact
                    path="/customers/:id/show"
                    component={CustomersShowContainer}
                />

                <Route
                    exact
                    path="/recruiters"
                    component={RecruitersListContainer}
                />

                <Route
                    exact
                    path="/recruiters/create"
                    component={RecruitersCreateContainer}
                />

                <Route
                    exact
                    path="/recruiters/:id/edit"
                    component={RecruitersEditContainer}
                />

                <Route
                    exact
                    path="/references"
                    component={ReferencesListContainer}
                />

                <Route
                    exact
                    path="/references/create"
                    component={ReferencesCreateContainer}
                />

                <Route
                    exact
                    path="/references/:id/edit"
                    component={ReferencesEditContainer}
                />

                <Route
                    exact
                    path="/advertisements"
                    component={AdvertisementsListContainer}
                />

                <Route
                    exact
                    path="/advertisements/create"
                    component={AdvertisementsCreateContainer}
                />

                <Route
                    exact
                    path="/advertisements/:id/edit"
                    component={AdvertisementsEditContainer}
                />

                <Route
                    exact
                    path="/reportReasons"
                    component={ReportReasonsListContainer}
                />

                <Route
                    exact
                    path="/reportReasons/create"
                    component={ReportReasonsCreateContainer}
                />

                <Route
                    exact
                    path="/reportReasons/:id/edit"
                    component={ReportReasonsEditContainer}
                />

                <Route
                    exact
                    path="/reports"
                    component={ReportsListContainer}
                />

                <Route
                    exact
                    path="/reports/:id/info"
                    component={ReportsInfoContainer}
                />

                <Route exact path="/public_offers" component={PublicOffersListContainer} />
                <Route
                    exact
                    path="/public_offers/:id/create"
                    component={PublicOffersCreateContainer}
                />

            </Switch>
        </div>
    );
};
export default Routes;
