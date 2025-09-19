# MPAC Year-End Tax File (YETF) Parser

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/mpac-yetf)](https://www.npmjs.com/package/@cityssm/mpac-yetf)
[![codecov](https://codecov.io/gh/cityssm/node-mpac-yetf/branch/main/graph/badge.svg?token=046EJCVI4E)](https://codecov.io/gh/cityssm/node-mpac-yetf)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/node-mpac-yetf/coverage.yml)](https://github.com/cityssm/node-mpac-yetf/actions/workflows/coverage.yml)

_This project is not endorsed by the [Municipal Property Assessment Corporation (MPAC)](https://www.mpac.ca)._

This project takes an MPAC YETF and parses it into usable objects.

## Features

- Fully typed results with TypeScript.
- Returns all of the data as strings, but can optionally parse the data into numbers.
- Optionally defines the codes used. (i.e. Structure Code '760' corresponds to 'Police Station')
- Makes all of the parsers, lookups, and helper functions available for reuse.

## Installation

    npm install @cityssm/mpac-yetf

## Usage

```javascript
import { parseYetf } from '@cityssm/mpac-yetf'

await parseYetf('yetf2022.txt', {
  addFormattedFields: true,
  callbacks: {
    all: (record, lineNumber) => {
      console.log(record)
    },
    AA: (record) => {
      // Save Property Creation record to database
    }
  }
})
```

## I Just Want the Data in a Format I Can Use

The City of Sault Ste. Marie uses this package in another project
that converts the YETF into a SQLite database, compatible with reporting tools like Microsoft Excel,
Microsoft Power BI, and [Metabase](https://github.com/metabase/metabase).

**See the [mpac-yetf-to-sqlite project](https://github.com/cityssm/mpac-yetf-to-sqlite).**

## I Prefer to Use Java

The City of Sault Ste. Marie also offers a similar Java application to parse the MPAC YETF.

**See the [mpacParser project](https://github.com/cityssm/mpacParser).**
