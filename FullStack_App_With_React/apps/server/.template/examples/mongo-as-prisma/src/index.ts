try {
    if (process.env.OTEL_ENABLED == 'true') {
        require('@godspeedsystems/tracing').initialize();
    }
} catch (error) {
    console.error("OTEL_ENABLED is set, unable to initialize opentelemetry tracing.");
    console.error(error);
    process.exit(1);
}

import Godspeed from "@godspeedsystems/core";

// create a godspeed
const gsApp = new Godspeed();

// initilize the Godspeed App
// this is responsible to load all kind of entities
gsApp.initialize();
