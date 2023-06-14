# Technical Requirements Document (TRD) for a data visualization web application

## Introduction

The purpose of this document is to provide requirements for a data visualization app meant to display differences between antelope species.

Users of the app will be able to display the differences between species in a table and in charts. The data will be displayed in a single page application (SPA) that will be hosted on a web server. The table will contain all data and the charts will display the data in a visual manner.

Scope of the project: the app will be a proof of concept (POC) and will be developed in a 4 hour span. The app will be developed using Vue.js and will (hopefully) be hosted statically on a web server.

## Functional Requirements

### User requirements

Users will mainly be kudus but we may allow the app to eventually be used by other antelope species.

They wil be using it on a desktop browser. The app may be made responsive to adapt to mobile devices.

### Data requirements

The main data source is a json file fetched from wikipedia.

Note: for the purpose of the POC, the data will be stored in a local file to avoid CORS errors. In a real app, the data would be fetched from a remote server.

### Visualization requirements

The app will display the data in a table and in charts.

Charts will include the following data:

- continent
- weight
- height
- type of horns

Depending on the type of data, pie charts, bar charts, scatter charts or line charts will be used.

### Interactivity requirements

Users will be able to select the antelope species defined as primary. At first, it will be the greater kudu.

Filters for each relevant column could be added, applied to all charts and the table.

Users could also select specific species to compare to the primary species, by using checkboxes in the table.

## Technical Requirements

For the POC, the app is based on Vue.js and uses vue-charts, itself based on [Apache echarts](https://echarts.apache.org/).

There is no backend, as the data is stored in a local/remote json file.

## Conclusion

The POC is very limited because of the lack of time. More time must be spent on selecting proper and more relevant charts, adding interactivity features and making the app responsive.
