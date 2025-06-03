# Monitoring Project

This project provides monitoring capabilities for applications and services.

## Features

- Service status checks
- Email Alerts


## Getting Started

To get started with the monitoring project, follow these steps:

1.  Install dependencies: `pnpm i`
2.  Configure the project: Update the `config/custom-environment-variables.yaml`and `.env` file with your settings.
3.  Run the project: `godspeed serve`

## Configuration

The project can be configured using the `config/custom-environment-variables.yaml` and `.env` file. The following settings are available:

- `service urls`: A list of URLs to monitor.
- `alerting email`: The email address to send alerts to.
- `sender email`: Sender email and password.

