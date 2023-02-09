# MPAC Year-End Tax File (YETF) Parser

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/mpac-yetf)](https://www.npmjs.com/package/@cityssm/mpac-yetf)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6a7f9947b1dc418b872a33b765a097dc)](https://www.codacy.com/gh/cityssm/node-mpac-yetf/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cityssm/node-mpac-yetf&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/2af62c1f31db66de70c8/maintainability)](https://codeclimate.com/github/cityssm/node-mpac-yetf/maintainability)
[![codecov](https://codecov.io/gh/cityssm/lot-occupancy-system/branch/main/graph/badge.svg?token=1M38ZVCLKE)](https://codecov.io/gh/cityssm/lot-occupancy-system)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/node-mpac-yetf/coverage.yml)](https://github.com/cityssm/node-mpac-yetf/actions/workflows/coverage.yml)

_This project is not endorsed with MPAC._

This project takes an MPAC YETF and parses it into a usable object.

## Installation

    npm install @cityssm/mpac-yetf

## Usage

```javascript
import { parseYetf } from '@cityssm/mpac-yetf'

await parseYetf('yetf2022.txt', {
  addFormattedFields: true,
  callbacks: {
    all: (record) => {
      console.log(record)
    },
    AA: (record) => {
      // Save Property Creation record to database
    }
  }
})
```
