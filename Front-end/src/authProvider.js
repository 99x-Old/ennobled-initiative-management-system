import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { appSettings } from "./appSettings";

// Msal Configurations
const config = {
    auth: {
        authority: `https://login.microsoftonline.com/${appSettings.azureTenantId}`,
        clientId: `${appSettings.azureClientId}`,
        redirectUri: window.location.origin,
        navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

// Authentication Parameters
const authenticationParameters = {
    scopes: [
        // `${appSettings.azureScopeId}`, "user.read"
        "api://8a5b0d16-d1f7-4eb1-89f9-78f9f04503c8/admin-and-user-access", "user.read"
    ]
}

// Options
const options = {
    loginType: LoginType.Redirect,
    tokenRefreshUri: window.location.origin
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)