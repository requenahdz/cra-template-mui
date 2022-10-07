import React from "react";
import {
    Breadcrumbs as MaterialBreadcrumbs,
    Typography
} from "@material-ui/core";
import { Route, Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const breadcrumbNameMap = {
    "/dashboard": "Dashboard",
    "/companies": "Empresas",
    "/companies/create": "Crear",
    "/companies/edit": "Editar",
    "/offers": "Ofertas",
    "/offers/create": "Crear",
    "/offers/edit": "Editar",
    "/public_offers": "Ofertas públicas ",
    "/public_offers/create": "Crear ",
    "/users": "Usuarios",
    "/users/create": "Crear",
    "/users/edit": "Editar",
    "/customers": "Clientes",
    "/cities": "Ciudades",
    "/cities/create": "Crear",
    "/cities/edit": "Editar",
    "/notifications": "Notificaciones",
    "/notifications/create": "Crear",
    "/push_notifications": "Notificaciones",
    "/push_notifications/create": "Crear",
    "/recruiters": "Reclutadores",
    "/recruiters/create": "Crear",
    "/recruiters/edit": "Editar",
    "/references": "Catálogo de referencias",
    "/references/create": "Crear",
    "/references/edit": "Editar",
    "/advertisements": "Anuncios",
    "/advertisements/create": "Crear",
    "/advertisements/edit": "Editar",
    "/reportReasons": "Motivos de reporte",
    "/reportReasons/create": "Crear",
    "/reportReasons/edit": "Editar",
    "/reports": "Reportes de ofertas",
    "/reports/info": "Información del reporte",
};

const useStyles = makeStyles(theme => ({
    container: {
        margin: `${theme.spacing(2)}px 0`
    }
}));

const Breadcrumbs = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Route>
                {({ location }) => {
                    const pathnames = location.pathname
                        .split("/")
                        .filter(x => x);
                    return (
                        <MaterialBreadcrumbs aria-label="Breadcrumb">
                            {/* <RouterLink color="inherit" to="/">
                                Inicio
                            </RouterLink> */}
                            {pathnames.map((value, index) => {
                                const last = index === pathnames.length - 1;
                                const to = `/${pathnames
                                    .slice(0, index + 1)
                                    .join("/")}`.replace(/[0-9]+\//, "");

                                return last ? (
                                    <Typography color="textPrimary" key={to}>
                                        {breadcrumbNameMap[to] || value}
                                    </Typography>
                                ) : (
                                    <RouterLink
                                        color="inherit"
                                        to={to}
                                        key={to}
                                    >
                                        {breadcrumbNameMap[to] || value}
                                    </RouterLink>
                                );
                            })}
                        </MaterialBreadcrumbs>
                    );
                }}
            </Route>
        </div>
    );
};

export default Breadcrumbs;
