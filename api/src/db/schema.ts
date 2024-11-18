//! this was done to use multiplse schema files in drizzle 
// ? see drizzle.config.ts file, it needed a schema, so we are going this way

import * as productSchema from "./productSchema.js"

export default{...productSchema}