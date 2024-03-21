## Sample LOS service

Check out [Setup.md](./Setup.md) for setting up the project on your machine.

##### First, some useful links
[Documentation](http://godspeed.systems/docs) of the meta-framework 
Godspeed Plugins Project for study and documentation of plugins ([Github](https://github.com/godspeedsystems/gs-node-service/))
Godspeed Node Meta-framework Project ([Github](https://github.com/godspeedsystems/gs-plugins))
[Youtube Channel](https://www.youtube.com/@godspeed.systems/videos) (For how to create plugins, how to setup etc)

### About the service

This service carries sample template for a bank's loan origination system like service.

Hereby we show some sample workflows like making loan offer or loan application journey, where you may talk to a policy framework or rule engine. You will also need to integrate bank API, an LMS etc. You will also need dual writes and syncing between data. So there is a sample event driven syncing between Salesforce and Kafka (and its consumers).

The service is listening on four different kind of event sources/protocols - http/rest, graphql, salesfoce and Kafka. It is also exchanging data with four kinds of datasources - database, REST API, Kafka and Salesforce. Yes, Kafka and Salesforce are both eventsources and datasources (think about it how?) 

You should go through the src folder including eventsources, event, datasources and functions carefully to see what all can be configured and what needs to be coded.

### Eventsources and events
This service listens on four kinds of events: HTTP, Graphql, Salesforce and Kafka
- The instances of eventsources are configured in `src/eventsources` folder as yaml or prisma files
- The types of eventsources used need to be defined in the `src/eventsources/types` folder
  - These can be Godspeed standard plugins or you can modify a plugin or create your own eventsource type by putting in the `types` folder. You will find existing eventsource and datasource plugin implementations in `godspeedsystems/gs-plugins` repository. Just need to follow the same style in creating your own custom eventsource or datasource definitions.
- Please see how all the events schema is in standard event format, irrespective of the eventsources. For ex. Graphql and HTTP events or Salesforce events.
```
(graphql or http or salesforce).get./lending_service_db/loanproduct/{id}:
  summary: Fetch LoanProduct
  description: Fetch LoanProduct from database
  fn: lending_service_db_crud.loanproduct.ts.one
  authn: false
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object

```
- Input and output data validation happens automatically based on event schema definitions (swagger based)
- Authentication and Authorization policies can be set at both eventsource and event level
- Graphql schema has been automatically generated from the standard events schema where the eventsource is `graphql`, using the command `gen-graphql-schema`

### Datasources
- We have used different datasources like aws, kafka, salesforce, prisma (for postgres access) and an API datasource (bank's api)
- Each type is included in the project from `datasources/types` folder

- The yaml file of the datasource is used to configure an instance of the given type. You can have multiple instances of the same datasource type.

- Only the datastore instance is based on a `.prisma` file which is used by Prisma datastore plugin. You can also use Mongoose plugin which reads mongoose models. You can as well create your own plugin.

- Notice how the authentication, authorization, token refresh etc for API datasource is handled through configuration and developer's code is independent of any boilerplate.

You can also consume a swagger API and generate client for that API. That part is not included in this demo.

### Functions

- ALl the event handlers and other functions are in functions folder

- In functions you will see CRUD has been implemented in both typescript and YAML. Developers can choose the language depending on their need.

- Note how 

### Secrets and config
- The secrets are in .env file and you will need to set them
- Check the config folder for the configuration and variables of the service

## Running this
- How to create docker image or run locally without docker is in setup.md file