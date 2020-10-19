export const getSetting = (key) => {
    const value = process.env[key] || null;
    if (value === null) console.error("Missing config key", key);
    return value || "";
};

export const appSettings = {
    azureScopeId: getSetting("REACT_APP_AZURE_SCOPE_ID"),
    azureClientId: getSetting("REACT_APP_AZURE_CLIENT_ID"),
    azureTenantId: getSetting("REACT_APP_AZURE_TENANT_ID"),
    hostApi: getSetting("REACT_APP_HOST_API")
};
